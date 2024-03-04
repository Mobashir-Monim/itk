import type { SettingsBlockConstructorType, SettingsBlockType } from '$lib/types/settings';
import SettingsItem from './SettingsItem';

class SettingsBlock implements SettingsBlockType {
	name: string;
	key: string;
	items: SettingsItem[];

	constructor({ name, key, items }: SettingsBlockConstructorType) {
		this.name = name;
		this.key = key;
		this.items = [];

		for (const item of items)
			this.items.push(new SettingsItem({ ...item, key: `${key}-${item.key}` }));
	}

	async getValue(key: string) {
		const item: SettingsItem | undefined = this.items.find(
			(item) => item.key === `${this.key}-${key}`
		);

		if (item) return await item.getValue();

		return null;
	}
}

export default SettingsBlock;
