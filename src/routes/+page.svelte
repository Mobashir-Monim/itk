<script lang="ts">
	import autoAnimate from '@formkit/auto-animate';
	import { onMount } from 'svelte';
	import { Preferences } from '@capacitor/preferences';
	import { continueReadingFromKey } from '$lib/constants';

	let showContinueReadingQuran: boolean = false;

	onMount(async () => {
		const { value } = await Preferences.get({
			key: continueReadingFromKey
		});

		showContinueReadingQuran = value !== null;
	});
</script>

<div class="flex flex-col gap-5 w-full h-full justify-center" use:autoAnimate>
	<div class="flex flex-col gap-5 bg-blue-500/30 p-5 rounded-2xl w-full max-w-[500px]">
		<h1 class="text-[2rem] text-center mb-14">Islamic ToolKit</h1>
		<button class="text-[1.2rem] btn !bg-teal-400/50">Quran</button>
		{#if showContinueReadingQuran}
			<button class="text-[1.2rem] btn !bg-teal-400/50">Continue reading Quran</button>
		{/if}
		<button class="text-[1.2rem] btn !bg-teal-400/50">Names of Allah</button>
		<button class="text-[1.2rem] btn !bg-teal-400/50">Settings</button>

		<a href="/credits" class="text-center mt-10">Credits</a>
	</div>
</div>
