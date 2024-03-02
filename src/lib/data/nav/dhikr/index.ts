import NavItem from '$lib/data-structures/Nav/NavItem';

const dhikrList: NavItem = new NavItem({
	name: 'Dhikr List',
	type: 'route',
	route: '/dhikr',
	params: [],
	subItems: []
});

const dhikrBookmarks: NavItem = new NavItem({
	name: 'Bookmarks',
	type: 'route',
	route: '/dhikr/bookmarks',
	params: [],
	subItems: []
});

export const dhikrNavItem: NavItem = new NavItem({
	name: 'Dhikr',
	type: 'placeholder',
	subItems: [dhikrList, dhikrBookmarks]
});
