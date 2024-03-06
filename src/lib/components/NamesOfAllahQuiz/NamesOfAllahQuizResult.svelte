<script lang="ts">
	import type { AllahsNameType } from '$lib/data/constants/asma-ul-husna';
	import NameOfAllah from '../NameOfAllah/NameOfAllah.svelte';

	export let isCorrect: () => boolean;
	export let name: AllahsNameType;
</script>

<div class="flex flex-col gap-10 {isCorrect() ? 'text-teal-400' : 'text-rose-400'}">
	<p class="text-center text-[1.2rem] {isCorrect() ? 'text-teal-400' : 'text-rose-400'}">
		{isCorrect() ? 'You are correct!!!' : 'Almost there!'}
	</p>
	<NameOfAllah {name} />
</div>
