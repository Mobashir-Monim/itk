<script lang="ts">
	import { credits } from '$lib/data/content-credits';
	import ContentCredit from '$lib/components/ContentCredit/ContentCredit.svelte';
</script>

<div class="w-full flex flex-col gap-10 justify-center my-auto">
	<p class="text-center text-[2rem]">Thanks to</p>
	{#each credits as credit}
		<ContentCredit {credit} />
	{/each}
</div>
