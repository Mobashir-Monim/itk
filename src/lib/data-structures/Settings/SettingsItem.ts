import { browser } from '$app/environment';
import type {
	SettingsItemCategoryType,
	SettingsItemConstructorType,
	SettingsItemType
} from '$lib/types/settings';
import { Preferences } from '@capacitor/preferences';

class SettingsItem implements SettingsItemType {
	name: string;
	key: string;
	private value: string | boolean | string[] = '';
	type: SettingsItemCategoryType;
	options: Record<string, string>;

	constructor({ name, key, type, options }: SettingsItemConstructorType) {
		this.name = name;
		this.key = key;
		this.type = type;

		if (type !== 'toggle' && !options) {
			throw new Error(
				'Options for settings item must be passed when type is radio/checkbox/dropdown'
			);
		}

		this.options = type === 'toggle' ? {} : (options as Record<string, string>);
		this.getStoredValue().then((value) => {
			this.value = value;
		});
	}

	async setValue(value?: string) {
		if (this.type === 'toggle') {
			this.value = !this.value;
		} else if (value) {
			if (this.type === 'checkbox') {
				if (Array.isArray(this.value)) this.value.push(value);
			} else {
				this.value = value;
			}
		} else {
			throw new Error('A value must be passed when setting value of radio/checkbox/dropdown');
		}

		await this.setStoredValue();
	}

	async unsetValue(value: string) {
		if (this.type !== 'checkbox') throw new Error('Cannot unset value if type is not checkbox');

		if (Array.isArray(this.value)) {
			this.value.splice(this.value.indexOf(value), 1);
		}

		await this.setStoredValue();
	}

	async getValue() {
		if (this.value === '') {
			this.value = await this.getStoredValue();
		}

		return this.value;
	}

	private async getStoredValue() {
		let { value } = await Preferences.get({ key: this.key });

		if (value === null) {
			if (this.type === 'toggle') {
				value = JSON.stringify(true);
			} else if (this.type === 'checkbox') {
				value = JSON.stringify([]);
			} else {
				value = '';
			}

			await Preferences.set({
				key: this.key,
				value
			});
		}

		return JSON.parse(value) as boolean | string | string[];
	}

	private async setStoredValue() {
		if (browser) {
			Preferences.set({
				key: this.key,
				value: typeof this.value === 'string' ? this.value : JSON.stringify(this.value)
			});
		}
	}
}

export default SettingsItem;
