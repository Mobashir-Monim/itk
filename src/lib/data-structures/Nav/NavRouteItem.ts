import type { NavRouteItemType,NavRouteConstructorItemType } from '$lib/types/nav';
import NavItem from './NavItem';

class NavRouteItem extends NavItem implements NavRouteItemType {
	route: string;
	params: string[];

	constructor({ name, display, subItems = [], route, params }: NavRouteConstructorItemType) {
		super({ name, type: 'route', display, subItems });
		this.route = route;
		this.params = params;
	}
}

export default NavRouteItem;
