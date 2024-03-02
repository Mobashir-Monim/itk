import NavItem from '$lib/data-structures/Nav/NavItem';

const namesOfAllahList: NavItem = new NavItem({
	name: 'List',
	type: 'route',
	route: '/asma-ul-husna',
	params: [],
	subItems: []
});

const namesOfAllahQuiz: NavItem = new NavItem({
	name: 'Quiz',
	type: 'route',
	route: '/asma-ul-husna/quiz',
	params: [],
	subItems: []
});

const namesOfAllahBookmarks: NavItem = new NavItem({
	name: 'Bookmarks',
	type: 'route',
	route: '/asma-ul-husna/bookmarks',
	params: [],
	subItems: []
});

export const namesOfAllahNavItem: NavItem = new NavItem({
	name: 'Names of Allah',
	type: 'placeholder',
	subItems: [namesOfAllahList, namesOfAllahQuiz, namesOfAllahBookmarks]
});
