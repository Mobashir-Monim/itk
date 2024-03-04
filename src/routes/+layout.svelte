<script lang="ts">
	import '../app.css';
	import { fly } from 'svelte/transition';
	import TopNav from '$lib/components/Nav/TopNav.svelte';
	import NunitoFont from '$lib/assets/fonts/Nunito-VariableFont_wght.ttf';

	export let data;
	export const prerender = true;
</script>

<svelte:head>
	<link rel="preload" href={NunitoFont} as="font" type="font/ttf" crossorigin="anonymous" />
</svelte:head>

<main class="w-full transit relative">
	<TopNav />
	<div class="h-[60px]"></div>
	{#key data.url}
		<div
			class="w-full h-[calc(100vh-60px)] p-5 overflow-y-auto nsb"
			out:fly={{ x: 200, duration: 300 }}
			in:fly={{ x: -200, duration: 300, delay: 300 }}
		>
			<slot />
		</div>
	{/key}
</main>
