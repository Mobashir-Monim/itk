import NavItem from '$lib/data-structures/Nav/NavItem';

const continueReadingQuran: NavItem = new NavItem({
	name: 'Continue Reading',
	type: 'function',
	call: () => ({}),
	subItems: []
});

const viewQuranChapters: NavItem = new NavItem({
	name: 'Chapters/Surah list',
	type: 'route',
	route: '/quran/surahs',
	params: [],
	subItems: []
});

const quranBookmarks: NavItem = new NavItem({
	name: 'Bookmarks',
	type: 'route',
	route: '/quran/bookmarks',
	params: [],
	subItems: []
});

export const quranNavItem: NavItem = new NavItem({
	name: 'The Quran',
	type: 'placeholder',
	subItems: [continueReadingQuran, viewQuranChapters, quranBookmarks]
});
