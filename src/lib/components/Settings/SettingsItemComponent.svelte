<script lang="ts">
	import type SettingsItem from '$lib/data-structures/Settings/SettingsItem';
	import { onMount } from 'svelte';
	import ToggleButton from '../ToggleButton/ToggleButton.svelte';

	export let item: SettingsItem;
	let isActive: boolean;

	const toggle = (val: boolean) => {
		isActive = val;
		item.setValue();
	};

	onMount(async () => {
		isActive = (await item.getValue()) as boolean;
	});
</script>

{#if item.type === 'toggle'}
	<div class="flex flex-row justify-between my-2">
		<div class="w-[70%] my-auto">{item.name}</div>
		<ToggleButton {isActive} callback={toggle} />
	</div>
{/if}
