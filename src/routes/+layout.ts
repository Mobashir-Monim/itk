import type { ServerLoadEvent } from '@sveltejs/kit';

export const load = ({ url }: ServerLoadEvent) => ({
	url: url.pathname
});
