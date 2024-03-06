import SettingsBlock from '$lib/data-structures/Settings/SettingsBlock';

export const buildQuranSettingsBlock = () =>
	new SettingsBlock({
		name: 'Quran',
		key: 'quran',
		items: [
			{
				name: 'Show Arabic Text',
				key: 'arabic-text',
				type: 'toggle'
			},
			{
				name: 'Show Transliteration',
				key: 'transliteration',
				type: 'toggle'
			}
		]
	});

export const buildNamesOfAllahSettingsBlock = () =>
	new SettingsBlock({
		name: 'Names of Allah',
		key: 'names-of-allah',
		items: [
			{
				name: 'Show Arabic Text',
				key: 'arabic-text',
				type: 'toggle'
			}
		]
	});

export const buildDhikrSettingsBlock = () =>
	new SettingsBlock({
		name: 'Dhikr',
		key: 'dhikr',
		items: [
			{
				name: 'Show Arabic Text',
				key: 'arabic-text',
				type: 'toggle'
			},
			{
				name: 'Show Transliteration',
				key: 'transliteration',
				type: 'toggle'
			},
			{
				name: 'Show Benefits',
				key: 'benefits',
				type: 'toggle'
			}
		]
	});

export const buildDuaSettingsBlock = () =>
	new SettingsBlock({
		name: 'Dua',
		key: 'dua',
		items: [
			{
				name: 'Show Arabic Text',
				key: 'arabic-text',
				type: 'toggle'
			},
			{
				name: 'Show Transliteration',
				key: 'transliteration',
				type: 'toggle'
			},
			{
				name: 'Show Benefits',
				key: 'benefits',
				type: 'toggle'
			}
		]
	});

export const buildSettings = () => [
	buildQuranSettingsBlock(),
	buildNamesOfAllahSettingsBlock(),
	buildDhikrSettingsBlock(),
	buildDuaSettingsBlock()
];
