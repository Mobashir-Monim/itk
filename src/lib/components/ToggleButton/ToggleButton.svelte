<script lang="ts">
	export let isActive: boolean;
	export let callback: (isActive: boolean) => void;

	const toggle = () => {
		callback(!isActive);
	};
</script>

<button
	type="button"
	on:click={toggle}
	class="w-[40px] h-[20px] flex flex-row rounded-full transit !duration-150 {isActive
		? 'bg-blue-400/50'
		: 'bg-slate-400/50'}"
>
	<span
		class="w-[20px] h-[20px] rounded-full transit !duration-150 {isActive
			? 'bg-teal-400 ml-[20px]'
			: 'bg-slate-400 ml-[0px]'}"
	/>
</button>
