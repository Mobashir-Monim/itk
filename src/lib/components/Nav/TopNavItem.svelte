<script lang="ts">
	import TopNavItem from '$lib/components/Nav/TopNavItem.svelte';
	import type NavItem from '$lib/data-structures/Nav/NavItem';

	export let navItem: NavItem;
	export let toggleExpansion: () => void;
	export let depth: number = 0;
	export let isExpanded: boolean;

	const clickNavItem = () => {
		navItem.executeClick();

		if (navItem.type !== 'placeholder') {
			toggleExpansion();
		}

		navItem = navItem;
	};
</script>

<div class="flex flex-col gap-1">
	<button class="text-left" on:click={clickNavItem}>{navItem.name}</button>
	{#if navItem.subItems.length}
		<div
			class="flex flex-col transit ml-7 duration-200 {navItem.expanded && isExpanded
				? 'max-h-[400px] !text-[1rem]'
				: 'max-h-[0px] !text-[0rem]'}"
		>
			{#each navItem.subItems as subItem}
				<TopNavItem navItem={subItem} depth={depth + 1} {isExpanded} {toggleExpansion} />
			{/each}
		</div>
	{/if}
</div>
