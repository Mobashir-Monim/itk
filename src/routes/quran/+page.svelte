<script lang="ts">
	import { surahNames } from '$lib/data/constants/quran/surahs';
	import autoAnimate from '@formkit/auto-animate';
	import { onMount } from 'svelte';

	let search: string = '';
	let showSearch: boolean = false;

	$: filteredNames =
		search === ''
			? surahNames
			: surahNames.filter(
					(surah) =>
						surah.meaning.toLowerCase().includes(search.toLowerCase()) ||
						surah.name.toLowerCase().includes(search.toLowerCase())
				);

	onMount(() => {
		setTimeout(() => {
			showSearch = true;
		}, 1000);
	});
</script>

<div
	class="mb-5 fixed transit left-0 bg-gradient-to-b from-slate-700 via-slate-700 to-slate-700/70 w-full p-5 z-10 {showSearch
		? 'top-[59px] opacity-100'
		: 'top-[0px] opacity-0'}"
>
	<input
		type="text"
		class="w-full rounded-2xl px-3 py-2 bg-gray-600/80"
		placeholder="Search"
		bind:value={search}
	/>
</div>

<div class="flex flex-col mt-16" use:autoAnimate>
	{#each filteredNames as surah}
		<a
			href="/quran/{surah.entry}"
			class="text-center p-3 rounded-2xl bg-gradient-to-tr from-blue-500/30 to-teal-500/30 my-2.5 max-w-[400px]"
		>
			{surah.name} - {surah.meaning}
		</a>
	{/each}
</div>
