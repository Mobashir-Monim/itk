import type { NavFunctionItemType } from '$lib/types/nav';
import NavItem from './NavItem';

class NavFunctionItem extends NavItem implements NavFunctionItemType {
	call: () => any | void;

	constructor({ name, display, subItems = [], call }: NavFunctionItemType) {
		super({ name, type: 'route', display, subItems, expanded: false });
		this.call = call;
	}
}

export default NavFunctionItem;
