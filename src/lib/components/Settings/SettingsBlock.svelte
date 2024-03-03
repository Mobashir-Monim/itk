<script lang="ts">
	import SettingsItem from "./SettingsItem.svelte";


    export let blockName: string;
    export let toggleOptions: string[];
</script>

<div class="flex flex-col mb-10">
    <h4 class="text-[1.5rem] text-center w-full border-b mb-5">{blockName}</h4>
    {#each toggleOptions as optionName}
        <SettingsItem {blockName} {optionName} />
    {/each}
</div>