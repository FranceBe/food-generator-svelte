<script>
	import { writable } from 'svelte/store';
	import H1 from 'components/H1/H1.svelte';
	import SelectionButton from 'components/SelectionButton/SelectionButton.svelte';
	export let name;

	const GET_RANDOM_RECIPES = 'Donnez moi des idées!'
	const GET_RECIPES_FROM_FOOD_NAME = 'J\'ai une envie de...'

	const selectedOption = writable('')
	const selectOption = option => {
		selectedOption.set(option)
	}
</script>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
</style>
<div>
<H1>Hello {name}!</H1>
	<SelectionButton
		selectedOption={selectedOption}
		onSelect={selectOption}
		firstOption={GET_RANDOM_RECIPES}
		secondOption={GET_RECIPES_FROM_FOOD_NAME}
	/>
</div>
