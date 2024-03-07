<script lang="ts">
	import autoAnimate from '@formkit/auto-animate';
	import { onMount } from 'svelte';
	import { Preferences } from '@capacitor/preferences';
	import { continueReadingFromKey } from '$lib/constants';
	import { goto } from '$app/navigation';
	import ITKLogo from '$lib/assets/splash.png';

	let showContinueReadingQuran: boolean = false;

	onMount(async () => {
		const { value } = await Preferences.get({
			key: continueReadingFromKey
		});

		showContinueReadingQuran = value !== null;
	});

	const continueReading = async () => {
		const { value } = await Preferences.get({
			key: continueReadingFromKey
		});

		if (value) {
			const { surah, verse } = JSON.parse(value);
			goto(`/quran/${surah}?verse=${verse}`);
		}
	};
</script>

<div class="flex flex-col gap-5 w-full h-full justify-center" use:autoAnimate>
	<div class="flex flex-col gap-5 bg-slate-800 p-5 rounded-2xl w-full max-w-[500px] mx-auto">
		<div class="my-5 flex flex-col gap-10">
			<img
				src={ITKLogo}
				class="w-[30%] mx-auto drop-shadow-[0px_0px_15px_rgba(255,255,255,1)]"
				alt="ITK logo"
			/>
			<h1 class="text-[2rem] text-center">Islamic ToolKit</h1>
		</div>

		<a href="/quran" class="text-[1.2rem] btn !bg-teal-500/50">Quran</a>
		{#if showContinueReadingQuran}
			<button on:click={continueReading} class="text-[1.2rem] btn !bg-teal-500/50">
				Continue reading Quran
			</button>
		{/if}
		<a href="/asma-ul-husna" class="text-[1.2rem] btn !bg-teal-500/50">Names of Allah</a>
		<a href="/settings" class="text-[1.2rem] btn !bg-teal-500/50">Settings</a>

		<a href="/credits" class="text-center mt-10">Credits</a>
	</div>
</div>
