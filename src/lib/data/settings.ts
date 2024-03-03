import SettingsBlock from '$lib/data-structures/Settings/SettingsBlock';

export const buildSettings = () => {
	let quranSettingsBlock = new SettingsBlock({
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
			},
			{
				name: 'Show Translation',
				key: 'translation',
				type: 'toggle'
			}
		]
	});

	let namesOfAllahSettingsBlock = new SettingsBlock({
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

	let dhikrSettingsBlock = new SettingsBlock({
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
				name: 'Show Translation',
				key: 'translation',
				type: 'toggle'
			},
			{
				name: 'Show Benefits',
				key: 'benefits',
				type: 'toggle'
			}
		]
	});

	return [quranSettingsBlock, namesOfAllahSettingsBlock, dhikrSettingsBlock];
};
