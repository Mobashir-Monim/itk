<script lang="ts">
	import type SettingsBlock from '$lib/data-structures/Settings/SettingsBlock';
	import type { AllahsNameType } from '$lib/data/constants/asma-ul-husna';
	import { buildNamesOfAllahSettingsBlock } from '$lib/data/settings';
	import { onMount } from 'svelte';

	export let name: AllahsNameType;
	let namesOfAllahBlockSetting: SettingsBlock;
	let arabic: boolean;

	onMount(async () => {
		namesOfAllahBlockSetting = buildNamesOfAllahSettingsBlock();
		arabic = (await namesOfAllahBlockSetting.getValue('arabic-text')) as boolean;
	});
</script>

<div class="flex flex-col gap-10">
	<div class="flex flex-col gap-5 border-b">
		{#if arabic}
			<p class="text-center text-[2.5rem]" style="direction: rtl;">{name.arabic}</p>
		{/if}
		<p class="text-center text-[2rem]">{name.name}</p>
	</div>
	<div class="flex flex-col gap-5 max-h-[300px] overflow-y-auto nsb">
		{#each name.meanings as meaning}
			<p class="text-center">{meaning}</p>
		{/each}
	</div>
</div>
