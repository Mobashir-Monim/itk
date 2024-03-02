import type { NavItemType } from '$lib/types/nav';

class NavItem implements NavItemType {
	name: string;
	type: 'function' | 'route' | 'placeholder';
	display?: (() => boolean) | undefined;
	subItems: NavItemType[];
	expanded: boolean;

	constructor({ name, type, display, subItems = [], expanded = false }: NavItemType) {
		this.name = name;
		this.type = type;
		this.subItems = subItems;
		this.expanded = expanded;

		if (display) this.display = display;
	}

	toggleExpansion() {
		this.expanded = !this.expanded;
	}
}

export default NavItem;
