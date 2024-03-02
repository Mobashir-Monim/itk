export interface NavItemType {
	name: string;
	type: 'route' | 'function' | 'placeholder';
	display: () => boolean;
	expanded: boolean;
	toggleExpansion: () => void;
	subItems: NavItemType[];
	route?: string;
	params?: Record<string, string>;
	call?: () => any | void;
	getRoute: () => string;
	executeClick: () => any | void;
}

export interface NavItemConstructorType {
	name: string;
	type: 'route' | 'function' | 'placeholder';
	display?: () => boolean;
	subItems: NavItemType[];
	route?: string;
	params?: string[];
	call?: () => any | void;
}
