<script lang="ts">
	import ToggleButton from '../ToggleButton/ToggleButton.svelte';

	export let blockName: string;
	export let optionName: string;
	let isActive: boolean = true;

	const toggle = (val: boolean) => {
		isActive = val;
	};
</script>

<div class="flex flex-row justify-between my-2">
	<div class="w-[70%] my-auto">{optionName}</div>
	<ToggleButton {isActive} callback={toggle} />
</div>
