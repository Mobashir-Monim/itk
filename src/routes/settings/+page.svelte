<script lang="ts">
	import { buildSettings } from '$lib/data/settings';
	import { onMount } from 'svelte';
	import SettingsBlockComponent from '$lib/components/Settings/SettingsBlockComponent.svelte';
	import type SettingsBlock from '$lib/data-structures/Settings/SettingsBlock';

	const blocks: Record<string, string[]> = {
		Quran: ['Show Arabic Text', 'Show Transliteration', 'Show Translation'],
		'Names of Allah': ['Show Arabic Text', 'Show Transliteration', 'Show Translation'],
		Dhikr: ['Show Arabic Text', 'Show Transliteration', 'Show Translation', 'Show Benefits']
	};

	let settings: SettingsBlock[] = [];

	onMount(() => {
		settings = buildSettings();
	});
</script>

<div class="flex flex-col mt-10">
	{#each settings as block, index (index)}
		<SettingsBlockComponent blockName={block.name} items={block.items} />
	{/each}
</div>
