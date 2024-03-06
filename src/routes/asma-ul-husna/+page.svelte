<script lang="ts">
	import NameOfAllah from '$lib/components/NameOfAllah/NameOfAllah.svelte';
	import SearchableList from '$lib/components/SearchableList/SearchableList.svelte';
	import { namesOfAllahAzzaWaJal, type AllahsNameType } from '$lib/data/constants/asma-ul-husna';
	import { modalStore } from '$lib/store';

	const searchFunction = (search: string, name: AllahsNameType): boolean =>
		name.meanings.map((m) => m.toLowerCase()).filter((m) => m.includes(search.toLowerCase()))
			.length > 0 || name.name.toLowerCase().includes(search.toLowerCase());

	const displayFunction = (name: AllahsNameType): string => `${name.name}`;

	const onClickFunction = (name: AllahsNameType): void => {
		modalStore.set({
			component: NameOfAllah,
			params: {
				name
			}
		});
	};
</script>

<SearchableList
	items={namesOfAllahAzzaWaJal}
	{searchFunction}
	{displayFunction}
	{onClickFunction}
/>
