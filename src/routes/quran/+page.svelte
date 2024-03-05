<script lang="ts">
	import { goto } from '$app/navigation';
	import { surahNames, type SurahNameType } from '$lib/data/constants/quran/surahs';
	import SearchableList from '$lib/components/SearchableList/SearchableList.svelte';

	const searchFunction = (search: string, surah: SurahNameType): boolean =>
		surah.meaning.toLowerCase().includes(search.toLowerCase()) ||
		surah.name.toLowerCase().includes(search.toLowerCase());

	const displayFunction = (surah: SurahNameType): string => `${surah.name} - ${surah.meaning}`;

	const onClickFunction = (surah: SurahNameType): void => {
		goto(`/quran/${surah.entry}`);
	};
</script>

<SearchableList items={surahNames} {searchFunction} {displayFunction} {onClickFunction} />
