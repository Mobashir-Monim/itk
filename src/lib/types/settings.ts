import type SettingsItem from '$lib/data-structures/Settings/SettingsItem';

export type SettingsItemCategoryType = 'toggle' | 'radio' | 'checkbox' | 'dropdown';

export interface SettingsItemType {
	name: string;
	key: string;
	type: SettingsItemCategoryType;
	options: Record<string, string>;
	setValue: (value?: string) => void;
	unsetValue: (value: string) => void;
	getValue: () => Promise<string[] | string | boolean>;

	// Private properties
	// value: string[] | string | boolean;
	// getStoredValue: () => Promise<string[] | string | boolean>;
	// setStoredValue: () => void;
}

export interface SettingsItemConstructorType {
	name: string;
	key: string;
	type: SettingsItemCategoryType;
	options?: Record<string, string>;
}

export interface SettingsBlockType {
	name: string;
	key: string;
	items: SettingsItem[];
}

export interface SettingsBlockConstructorType {
	name: string;
	key: string;
	items: SettingsItemConstructorType[];
}
