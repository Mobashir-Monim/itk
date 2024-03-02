export interface NavItemType {
	name: string;
	type: 'route' | 'function' | 'placeholder';
	display?: () => boolean;
	expanded: boolean;
	toggleExpansion: () => void;
	subItems: (NavItemType | NavRouteItemType | NavFunctionItemType)[];
}

export interface NavRouteItemType extends NavItemType {
	route: string;
	params: string[];
}

export interface NavFunctionItemType extends NavItemType {
	call: () => any | void;
}

export interface NavItemConstructorType {
	name: string;
	type: 'route' | 'function' | 'placeholder';
	display?: () => boolean;
	subItems: (NavItemType | NavRouteItemType | NavFunctionItemType)[];
}

export interface NavRouteConstructorItemType extends NavItemConstructorType {
	route: string;
	params: string[];
}

export interface NavFunctionConstructorItemType extends NavItemConstructorType {
	call: () => any | void;
}