<script lang="ts">
	import TopNavItem from '$lib/components/Nav/TopNavItem.svelte';
	import type NavItem from '$lib/data-structures/Nav/NavItem';
	import { onMount } from 'svelte';

	export let navItem: NavItem;
	export let toggleExpansion: () => void;
	export let depth: number = 0;
	export let isExpanded: boolean;

	let shouldShow: boolean = true;

	const clickNavItem = async () => {
		if (navItem.type !== 'placeholder') {
			toggleExpansion();
		}

		await navItem.executeClick();
		navItem = navItem;
	};

	onMount(async () => {
		shouldShow = await navItem.display();
	});
</script>

{#if shouldShow}
	<div class="flex flex-col gap-1">
		<button class="text-left" on:click={clickNavItem}>{navItem.name}</button>
		{#if navItem.subItems.length}
			<div
				class="flex flex-col transit ml-7 !duration-300 {navItem.expanded && isExpanded
					? 'max-h-[400px] text-[1rem] text-white'
					: 'max-h-[0px] text-[0rem] text-transparent '}"
			>
				{#each navItem.subItems as subItem}
					<TopNavItem navItem={subItem} depth={depth + 1} {isExpanded} {toggleExpansion} />
				{/each}
			</div>
		{/if}
	</div>
{/if}
