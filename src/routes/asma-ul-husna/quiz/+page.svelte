<script lang="ts">
	import { namesOfAllahAzzaWaJal, type AllahsNameType } from '$lib/data/constants/asma-ul-husna';
	import { modalStore } from '$lib/store/index';
	import NamesOfAllahQuizResult from '$lib/components/NamesOfAllahQuiz/NamesOfAllahQuizResult.svelte';

	const selectRandFromArray = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
	let selctedName: AllahsNameType = selectRandFromArray(namesOfAllahAzzaWaJal);
	let selectedOption: number | undefined = undefined;
	let options: string[] = [];
	const allMeanings: string[] = namesOfAllahAzzaWaJal.map((n) => n.meanings).flat();

	const shuffle = (array: string[]) => {
		let currentIndex: number = array.length;
		let randomIndex: number;

		while (currentIndex > 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	};

	const generateQuestion = () => {
		let name: AllahsNameType = selectRandFromArray(namesOfAllahAzzaWaJal);
		if (selctedName)
			while (name.name === selctedName.name) name = selectRandFromArray(namesOfAllahAzzaWaJal);

		let meanings: string[] = [selectRandFromArray(name.meanings)];

		while (meanings.length < 5) {
			let meaning: string = selectRandFromArray(allMeanings);
			while (meanings.includes(meaning) || name.meanings.includes(meaning))
				meaning = selectRandFromArray(allMeanings);

			meanings.push(meaning);
		}

		selctedName = name;
		options = shuffle(meanings);
		selectedOption = undefined;
	};

	const confirmChoice = () => {
		if (selectedOption !== undefined) {
			modalStore.set({
				component: NamesOfAllahQuizResult,
				params: {
					name: selctedName,
					isCorrect: () => selctedName.meanings.includes(options[selectedOption as number])
				}
			});
		}
	};

	modalStore.subscribe((m) => {
		if (m === undefined) {
			generateQuestion();
		}
	});
</script>

<div class="flex flex-col gap-10 h-full justify-center">
	<div class="p-5 bg-slate-800 rounded-2xl flex flex-col gap-5">
		<p class="text-center">Select the meaning of the following name of Allah:</p>
		<p class="text-center text-[2rem]">{selctedName.name}</p>
	</div>
	<div class="flex flex-col gap-3">
		{#each options as option, index}
			<button
				class="border-[3px] border-slate-900 p-2 rounded-xl h-[80px] flex flex-row gap-5 text-[0.8rem] transit {selectedOption ===
				index
					? 'bg-blue-600/50'
					: 'bg-slate-600'}"
				on:click={() => (selectedOption = index)}
			>
				<span
					class="w-[40px] h-[40px] flex flex-col justify-center my-auto text-center shrink-0 rounded-md text-[1.2rem] transit {selectedOption ===
					index
						? 'bg-teal-600'
						: 'bg-slate-800'}"
				>
					{String.fromCharCode(65 + index)}
				</span>
				<span class="my-auto text-left line-clamp-3">
					{option[0].toUpperCase()}{option.slice(1)}
				</span>
			</button>
		{/each}
	</div>

	<button on:click={confirmChoice} class="btn !bg-teal-600 mx-auto min-w-[50%] max-w-[500px]"
		>Confirm</button
	>
</div>
