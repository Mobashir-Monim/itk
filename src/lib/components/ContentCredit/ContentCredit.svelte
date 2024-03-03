<script lang="ts">
	import type { ContentCreditType } from '$lib/types/content-credits';

	export let credit: ContentCreditType;
</script>

<div class="w-full flex flex-col gap-2 p-5 bg-blue-400/20 rounded-xl">
	<div class="">
		<h3 class="text-[2rem] w-full text-center">{credit.name}</h3>
		{#if credit.url}
			<a href={credit.url} target="_blank" class="w-full text-center line-clamp-1 text-[0.8rem]">
				{credit.url}
			</a>
		{/if}
	</div>
	<div
		class="w-full max-w-[450px] mx-auto text-[0.8rem] flex flex-col gap-2.5 p-2.5 bg-teal-400/20 rounded-xl"
	>
		<p class="text-center">Source for:</p>
		<ul style="!list-disc">
			{#each credit.for as item}
				<li class="text-center w-full">{item}</li>
			{/each}
		</ul>
	</div>
</div>
