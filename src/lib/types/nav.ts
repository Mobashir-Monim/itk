export interface NavItemType {
	name: string;
	type: 'route' | 'function' | 'placeholder';
	display?: () => boolean;
	expanded: boolean;
	subItems: (NavItemType | NavRouteItemType | NavFunctionItemType)[];
}

export interface NavRouteItemType extends NavItemType {
	route: string;
	params: string[];
}

export interface NavFunctionItemType extends NavItemType {
	call: () => any | void;
}
