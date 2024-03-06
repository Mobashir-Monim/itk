import { quranNavItem } from './quran';
import { namesOfAllahNavItem } from './asma-ul-husna';
import { dhikrNavItem } from './dhikr';
import type { NavItemType } from '$lib/types/nav';
import NavItem from '$lib/data-structures/Nav/NavItem';

const homeNavItem: NavItem = new NavItem({
	name: 'Home',
	type: 'route',
	route: '/',
	params: {},
	subItems: []
});

const settingsNavItem: NavItem = new NavItem({
	name: 'Settings',
	type: 'route',
	route: '/settings',
	params: {},
	subItems: []
});

const creditsNavItem: NavItem = new NavItem({
	name: 'Credits',
	type: 'route',
	placement: 'footer',
	route: '/credits',
	params: {},
	subItems: []
});

export const navItems: NavItemType[] = [
	homeNavItem,
	quranNavItem,
	namesOfAllahNavItem,
	dhikrNavItem,
	settingsNavItem,
	creditsNavItem
];
