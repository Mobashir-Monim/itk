import { goto } from '$app/navigation';
import type { NavItemConstructorType, NavItemType } from '$lib/types/nav';

class NavItem implements NavItemType {
	name: string;
	type: 'function' | 'route' | 'placeholder';
    placement: 'list' | 'footer';
	display: () => Promise<boolean>;
	subItems: NavItemType[];
	expanded: boolean;
	route?: string | undefined;
	params?: Record<string, string> | undefined;
	call?: (() => any) | undefined;

	constructor({
		name,
		type,
        placement = 'list',
		display = () =>
			new Promise((resolve, _) => {
				resolve(true);
			}),
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
        this.placement = placement;

		if (type === 'route' && (!route || !params)) {
			throw new Error('Route and params must be passed for route type');
		} else {
			this.route = route;
			this.params = params;
		}

		if (type === 'function' && !call) {
			throw new Error('Call must be passed for route type');
		} else {
			this.call = call;
		}
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

	async executeClick() {
		if (this.type === 'route') {
			goto(this.getRoute());
		} else if (this.call && this.type === 'function') {
			return await this.call();
		} else {
			this.toggleExpansion();
		}
	}
}

export default NavItem;
