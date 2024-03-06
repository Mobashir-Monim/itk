export interface NavItemType {
	name: string;
	type: 'route' | 'function' | 'placeholder';
    placement: 'list' | 'footer';
	display: () => Promise<boolean>;
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
	placement?: 'list' | 'footer';
	display?: () => Promise<boolean>;
	subItems: NavItemType[];
	route?: string;
	params?: Record<string, string>;
	call?: () => any | void;
}
