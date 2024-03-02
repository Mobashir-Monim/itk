import { goto } from '$app/navigation';
import type { NavItemConstructorType, NavItemType } from '$lib/types/nav';

class NavItem implements NavItemType {
	name: string;
	type: 'function' | 'route' | 'placeholder';
	display: () => boolean;
	subItems: NavItemType[];
	expanded: boolean;
	route?: string | undefined;
	params?: Record<string, string> | undefined;
	call?: (() => any) | undefined;

	constructor({
		name,
		type,
		display = () => true,
		subItems = [],
		call,
		route,
		params
	}: NavItemConstructorType) {
		this.name = name;
		this.type = type;
		this.subItems = subItems;
		this.expanded = false;
		this.display = display;

		if (type === 'route' && (!route || !params))
			throw new Error('Route and params must be passed for route type');

		if (type === 'function' && !call) throw new Error('Call must be passed for route type');
	}

	toggleExpansion() {
		this.expanded = !this.expanded;
	}

	getRoute() {
		if (this.route && this.params) {
			let route = this.route;

			for (const p in this.params) {
				route.replace(p, this.params[p]);
			}

			return route;
		}

		return '';
	}

	executeClick() {
		if (this.type === 'route') {
			goto(this.getRoute());
		} else if (this.call && this.type === 'function') {
			return this.call();
		} else {
			this.toggleExpansion();
		}
	}
}

export default NavItem;
