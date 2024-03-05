import NavItem from '$lib/data-structures/Nav/NavItem';
import { Preferences } from '@capacitor/preferences';
import { continueReadingFromKey } from '$lib/constants';
import { goto } from '$app/navigation';

const continueReadingQuran: NavItem = new NavItem({
	name: 'Continue Reading',
	type: 'function',
	call: async () => {
		const { value } = await Preferences.get({
			key: continueReadingFromKey
		});

		if (value) {
			const { surah, verse } = JSON.parse(value);
			goto(`/quran/${surah}?verse=${verse}`);
		}
	},
	display: async () => {
		const { value } = await Preferences.get({
			key: continueReadingFromKey
		});

		return value !== null;
	},
	subItems: []
});

const viewQuranChapters: NavItem = new NavItem({
	name: 'Chapters/Surah list',
	type: 'route',
	route: '/quran',
	params: {},
	subItems: []
});

const quranBookmarks: NavItem = new NavItem({
	name: 'Bookmarks',
	type: 'route',
	route: '/quran/bookmarks',
	params: {},
	subItems: []
});

export const quranNavItem: NavItem = new NavItem({
	name: 'The Quran',
	type: 'placeholder',
	subItems: [continueReadingQuran, viewQuranChapters, quranBookmarks]
});
