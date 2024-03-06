<script lang="ts">
	import CloseIcon from '$lib/assets/icons/CloseIcon.svelte';
	import { modalStore } from '$lib/store';
	import type { ModalStoreDataType } from '$lib/types/modal';

	let modalData: ModalStoreDataType | undefined;

	modalStore.subscribe((m) => {
		modalData = m;
	});

	const closeModal = () => {
		modalStore.set(undefined);
	};
</script>

<div
	class="bg-black/20 z-30 w-full flex flex-col justify-center fixed transit !duration-300 overflow-hidden {modalData
		? 'h-full p-2.5 top-[60px]'
		: 'h-[0%] p-0 top-[calc(100vh)]'}"
>
	<div class="bg-slate-800 w-full max-h-[calc(80%-3.5rem)] rounded-2xl p-2.5 flex flex-col">
		<div class="flex flex-row justify-end">
			<button on:click={closeModal} class="rounded-full bg-teal-500">
				<CloseIcon size={30} />
			</button>
		</div>

		<div class="px-5 pb-5">
			<svelte:component this={modalData?.component} {...modalData?.params} />
		</div>
	</div>
</div>
