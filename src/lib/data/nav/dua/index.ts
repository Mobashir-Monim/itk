import NavItem from '$lib/data-structures/Nav/NavItem';

const duaList: NavItem = new NavItem({
	name: 'Dua List',
	type: 'route',
	route: '/dua',
	params: {},
	subItems: []
});

const duaBookmarks: NavItem = new NavItem({
	name: 'Bookmarks',
	type: 'route',
	route: '/Dua/bookmarks',
	params: {},
	subItems: []
});

export const duaNavItem: NavItem = new NavItem({
	name: 'Dua',
	type: 'placeholder',
	subItems: [duaList, duaBookmarks]
});
