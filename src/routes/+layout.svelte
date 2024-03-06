<script lang="ts">
	import '../app.css';
	import { fly } from 'svelte/transition';
	import Nav from '$lib/components/Nav/Nav.svelte';
	import NunitoFont from '$lib/assets/fonts/Nunito-VariableFont_wght.ttf';
	import Modal from '$lib/components/Modal/Modal.svelte';

	export let data;
	export const prerender = true;
</script>

<svelte:head>
	<link rel="preload" href={NunitoFont} as="font" type="font/ttf" crossorigin="anonymous" />
</svelte:head>

<main class="w-full transit relative">
	<Nav />
	<div class="h-[60px]"></div>
	{#key data.url}
		<div
			class="w-full h-[calc(100vh-60px)] px-5 pt-2.5 overflow-y-auto nsb relative max-w-[750px] mx-auto"
			out:fly={{ x: 200, duration: 300 }}
			in:fly={{ x: -200, duration: 300, delay: 300 }}
		>
			<slot />
		</div>
	{/key}
	<Modal />
</main>
