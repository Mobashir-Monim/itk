<script lang="ts">
	import SettingsItem from '$lib/data-structures/Settings/SettingsItem';
	import SettingsItemComponent from './SettingsItemComponent.svelte';

	export let blockName: string;
	export let items: SettingsItem[];
</script>

<div class="flex flex-col mb-10">
	<h4 class="text-[1.5rem] text-center w-full border-b mb-5">{blockName}</h4>
	{#each items as item}
		<SettingsItemComponent {item} />
	{/each}
</div>
