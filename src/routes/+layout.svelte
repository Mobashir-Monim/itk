<script lang="ts">
	import '../app.css';
	import { fly } from 'svelte/transition';

    export let data;
</script>

{#key data.url}
	<main
		out:fly={{ x: 200, duration: 300 }}
		in:fly={{ x: -200, duration: 300, delay: 300 }}
		class="w-full min-h-screen p-5 transit"
	>
		<slot />
	</main>
{/key}
