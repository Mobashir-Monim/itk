import type { NavRouteItemType } from '$lib/types/nav';
import NavItem from './NavItem';

class NavRouteItem extends NavItem implements NavRouteItemType {
	route: string;
	params: string[];

	constructor({ name, display, subItems = [], route, params }: NavRouteItemType) {
		super({ name, type: 'route', display, subItems, expanded: false });
		this.route = route;
		this.params = params;
	}
}

export default NavRouteItem;
