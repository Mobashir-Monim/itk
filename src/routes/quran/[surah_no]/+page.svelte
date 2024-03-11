<script lang="ts">
	import { surahs, sajdhas, type SurahType } from '$lib/data/constants/quran/surahs';
	import SettingsBlock from '$lib/data-structures/Settings/SettingsBlock';
	import { buildQuranSettingsBlock } from '$lib/data/settings';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import autoAnimate from '@formkit/auto-animate';
	import { Preferences } from '@capacitor/preferences';
	import { continueReadingFromKey } from '$lib/constants';
	import ChevronIcon from '$lib/assets/icons/ChevronIcon.svelte';

	const getSurahNo = () => {
		let surahNo: number = parseInt($page.params.surah_no);

		return isNaN(surahNo) || surahNo < 1 ? 0 : surahNo > 114 ? 113 : surahNo - 1;
	};

	const getVerseNo = () => {
		let verse: number = parseInt($page.url.searchParams.get('verse') || '');

		return isNaN(verse) ? 0 : verse < 0 || verse >= surah.verses.length ? 0 : verse;
	};

	let surah: SurahType = surahs[getSurahNo()];
	let quranBlockSettings: SettingsBlock;
	let arabic: boolean;
	let transliteration: boolean;
	let showVerse: boolean = true;
	$: verse = getVerseNo();
	$: hasSajdah = sajdhas.find(
		(sajdha) => sajdha.entry === surah.name.entry && sajdha.verse === verse
	);

	onMount(async () => {
		setTimeout(async () => {
			quranBlockSettings = buildQuranSettingsBlock();
			arabic = (await quranBlockSettings.getValue('arabic-text')) as boolean;
			transliteration = (await quranBlockSettings.getValue('transliteration')) as boolean;
			setVerse(verse);
		}, 2000);
	});

	const prevAction = () => {
		if (verse === 0) {
			if (surah.name.entry === 1) {
				goto('/quran/114');
			} else {
				goto(`/quran/${surah.name.entry - 1}`);
			}
		} else {
			setVerse(verse - 1);
		}
	};

	const nextAction = () => {
		if (verse === surah.verses.length - 1) {
			if (surah.name.entry === 114) {
				goto('/quran/1');
			} else {
				goto(`/quran/${surah.name.entry + 1}`);
			}
		} else {
			setVerse(verse + 1);
		}
	};

	const gotoVerse = (event: Event) => {
		const target: HTMLInputElement = event.target as HTMLInputElement;

		if (target) {
			let page: number = parseInt(target.value) - 1;
			page = page >= 0 && page < surah.verses.length ? page : verse;
			setVerse(page, () => {
				target.value = `${page + 1}`;
			});
		}
	};

	const setVerse = async (v: number, callback?: () => void) => {
		await Preferences.set({
			key: continueReadingFromKey,
			value: JSON.stringify({
				surah: surah.name.entry,
				verse
			})
		});
		showVerse = false;
		setTimeout(() => {
			verse = v;
			showVerse = true;
			if (callback) callback();
		}, 300);
	};
</script>

<div class="flex flex-col h-full" use:autoAnimate>
	{#if quranBlockSettings !== undefined}
		<div class="h-[40px] relative w-full flex flex-row justify-between shrink-0">
			<div
				class="flex flex-row justify-between absolute top-[-0.75rem] left-[-1.25rem] w-[calc(100%+2.5rem)] bg-black/20 h-[50px] px-2.5"
			>
				<div class="my-auto">Surah {surah.name.entry}</div>
				<div class="my-auto">{surah.name.name}</div>
				<div class="my-auto flex flex-row">
					<input
						type="number"
						min="1"
						max="286"
						size="1"
						step="1"
						value={verse + 1}
						class="bg-slate-600 rounded-lg inline w-[40px] px-1 text-center"
						on:change={gotoVerse}
					/>
					<span class="my-auto">&nbsp;/ {surah.verses.length}</span>
				</div>
			</div>
		</div>
	{/if}
	<div
		class="min-h-[calc(100%-140px)] flex flex-col gap-5 overflow-y-auto nsb p-5 {quranBlockSettings ===
		undefined
			? 'justify-center'
			: 'justify-start'} "
		use:autoAnimate
	>
		{#if quranBlockSettings === undefined}
			<div class="flex flex-col bg-blue-400/20 rounded-2xl p-5">
				<div class="mb-10">
					<h3 class="text-[1.8rem] text-center border-b-2">{surah.name.name}</h3>
					<h4 class="text-[1.5rem] text-center mt-3">{surah.name.meaning}</h4>
				</div>
				<div class="p-5 bg-teal-400/20 rounded-2xl">
					<p class="text-center">Surah no. {surah.name.entry}</p>
					<p class="text-center">{surah.verses.length} verses</p>
				</div>
			</div>
		{:else if showVerse}
			{#if hasSajdah}
				<div
					class="bg-gradient-to-tr from-amber-600 to-rose-500 px-5 rounded-full text-center mx-auto flex flex-row gap-5"
				>
					<span class="text-[30px]">۩</span>
					<span class="my-auto">Sajdah</span>
					<span class="text-[30px]">۩</span>
				</div>
			{/if}
			{#if arabic}
				<div>
					<p
						class="min-h-[20vh] p-3 bg-blue-500/30 rounded-2xl text-justify shadow-[5px_5px_10px_2.5px_rgba(0,0,0,0.3)]"
						style="direction: rtl; font-size: 22px"
					>
						{surah.verses[verse].arabic}
					</p>
				</div>
			{/if}
			{#if transliteration}
				<div class="">
					<p class="text-[0.8rem] ml-2">Transliteration</p>
					<p
						class="min-h-[20vh] p-3 bg-gradient-to-tr from-blue-500/30 to-teal-500/30 rounded-2xl shadow-[5px_5px_10px_2.5px_rgba(0,0,0,0.3)] text-justify tracking-normal"
					>
						{surah.verses[verse].transliteration}
					</p>
				</div>
			{/if}
			<div class="">
				<p class="text-[0.8rem] ml-2">Translation</p>
				<p
					class="min-h-[20vh] p-3 bg-teal-500/30 rounded-2xl shadow-[5px_5px_10px_2.5px_rgba(0,0,0,0.3)] text-justify tracking-normal"
				>
					{surah.verses[verse].translation}
				</p>
			</div>
		{/if}
	</div>
	{#if quranBlockSettings !== undefined}
		<div class="h-[60px] relative w-full flex flex-row justify-between mt-auto shrink-0">
			<div
				class="absolute left-[-1.25rem] w-[calc(100%+2.5rem)] px-5 h-[60px] bg-black/20 flex flex-row justify-between font-mono text-[0.8rem]"
			>
				<div class="my-auto w-[33%] flex flex-row justify-start">
					<button on:click={prevAction} class="btn btn-primary flex flex-row gap-0 !py-1 !pl-0">
						<ChevronIcon direction="left" classes="my-auto fill-white stroke-2" size={30} />
						<span class="my-auto">Prev</span>
					</button>
				</div>
				<!-- <div class="my-auto w-[33%] flex flex-row justify-center">
					<button class="btn btn-primary mx-auto">Bookmark</button>
				</div> -->
				<div class="my-auto w-[33%] flex flex-row justify-end">
					<button on:click={nextAction} class="btn btn-primary flex flex-row gap-0 !py-1 !pr-0">
						<span class="my-auto">Next</span>
						<ChevronIcon direction="right" classes="my-auto fill-white stroke-2" size={30} />
					</button>
				</div>
			</div>
		</div>
	{/if}
</div>
