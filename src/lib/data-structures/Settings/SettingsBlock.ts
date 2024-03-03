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
}

export default SettingsBlock;
