import type { NavFunctionItemType, NavFunctionConstructorItemType } from '$lib/types/nav';
import NavItem from './NavItem';

class NavFunctionItem extends NavItem implements NavFunctionItemType {
	call: () => any | void;

	constructor({ name, display, subItems = [], call }: NavFunctionConstructorItemType) {
		super({ name, type: 'route', display, subItems });
		this.call = call;
	}
}

export default NavFunctionItem;
