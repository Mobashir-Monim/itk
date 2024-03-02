<script lang="ts">
	import MenuIcon from '$lib/assets/icons/MenuIcon.svelte';
	import MenuOpenIcon from '$lib/assets/icons/MenuOpenIcon.svelte';
	import autoAnimate from '@formkit/auto-animate';
	import { navItems as nis } from '$lib/data/nav';
	import TopNavItem from './TopNavItem.svelte';
	import type NavItem from '$lib/data-structures/Nav/NavItem';

	let expanded: boolean = false;
	let navItems: NavItem[] = nis;
	const iconSize: number = 32;

	const toggleExpansion = () => {
		expanded = !expanded;
		deflateAllSubNav();
		navItems = navItems;
	};

	const deflateAllSubNav = () => {
		for (const navItem of navItems) deflateNav(navItem);
	};

	const deflateNav = (navItem: NavItem) => {
		navItem.expanded = false;

		for (const i in navItem.subItems) deflateNav(navItem.subItems[i]);
	};
</script>

<div
	class="fixed !z-40 w-full top-0 left-0 overflow-y-hidden {expanded
		? 'h-screen'
		: 'h-[60px] delay-500'}"
	use:autoAnimate
>
	<div
		class="h-[60px] !z-40 flex flex-row px-3 transit {expanded
			? 'bg-slate-800 border-white'
			: 'bg-slate-200/10 border-transparent'}"
	>
		<button
			type="button"
			on:click={toggleExpansion}
			class="border-2 flex flex-row gap-1 justify-between p-0.5 my-auto ml-auto rounded-lg w-[40px] h-[40px] delay-0"
			use:autoAnimate
		>
			<div class="flex {expanded ? 'flex-row' : 'flex-row-reverse'}">
				<MenuIcon size={expanded ? 0 : iconSize} />
				<MenuOpenIcon size={expanded ? iconSize : 0} />
			</div>
		</button>
	</div>

	<div
		class="h-[calc(100vh-60px)] transit relative bg-slate-800/90 max-w-[500px] {expanded
			? 'w-[100vw]'
			: 'w-[0vw]'}"
	>
		<div
			class="flex flex-col gap-5 p-10 overflow-hidden transit !duration-200 {expanded
				? 'text-white text-[1.5rem] delay-200'
				: 'text-transparent text-[0rem]'}"
			use:autoAnimate
		>
			{#each navItems as item}
				<TopNavItem navItem={item} depth={0} {toggleExpansion} isExpanded={expanded} />
			{/each}
		</div>
	</div>
</div>
