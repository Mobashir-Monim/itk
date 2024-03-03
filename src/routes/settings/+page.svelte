<script lang="ts">
	import SettingsBlock from '$lib/components/Settings/SettingsBlock.svelte';

	const blocks: Record<string, string[]> = {
		Quran: ['Show Arabic Text', 'Show Transliteration', 'Show Translation'],
		'Names of Allah': ['Show Arabic Text', 'Show Transliteration', 'Show Translation'],
		Dhikr: ['Show Arabic Text', 'Show Transliteration', 'Show Translation', 'Show Benefits']
	};
</script>

<div class="flex flex-col mt-10">
	{#each Object.keys(blocks) as block, index (index)}
		<SettingsBlock blockName={block} toggleOptions={blocks[block]} />
	{/each}
</div>
