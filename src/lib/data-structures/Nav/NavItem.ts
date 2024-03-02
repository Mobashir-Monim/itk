import type { NavItemConstructorType, NavItemType } from '$lib/types/nav';

class NavItem implements NavItemType {
	name: string;
	type: 'function' | 'route' | 'placeholder';
	display?: (() => boolean) | undefined;
	subItems: NavItemType[];
	expanded: boolean = false;

	constructor({ name, type, display, subItems = [] }: NavItemConstructorType) {
		this.name = name;
		this.type = type;
		this.subItems = subItems;

		if (display) this.display = display;
	}

	toggleExpansion() {
		this.expanded = !this.expanded;
	}
}

export default NavItem;
