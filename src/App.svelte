<script>
    import { writable } from 'svelte/store'
    import H1 from 'components/H1/H1.svelte'
    import ButtonSelection from 'components/ButtonSelection/ButtonSelection.svelte'
    import RandomRecipes from 'containers/RandomRecipes/RandomRecipes.svelte'
    import RandomRecipesWithIngredient from 'containers/RandomRecipesWithIngredient/RandomRecipesWithIngredient.svelte'

    const GET_RANDOM_RECIPES = 'Donnez moi des idées!'
    const GET_RECIPES_FROM_FOOD_NAME = 'J\'ai une envie de...'

    const selectedOption = writable('')
    const selectOption = option => {
        selectedOption.set(option)
    }

    let chosenContent = ''
    selectedOption.subscribe(value => {
        chosenContent = value
    })
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
    <H1 title={'Qu\'est-ce qu\'on mange ce soir ?'}/>
    <ButtonSelection
            selectedOption={selectedOption}
            onSelect={selectOption}
            firstOption={GET_RANDOM_RECIPES}
            secondOption={GET_RECIPES_FROM_FOOD_NAME}
    />
  {#if chosenContent === 'first-option'}
      <RandomRecipes/>
  {/if}
  {#if chosenContent === 'second-option'}
      <RandomRecipesWithIngredient/>
  {/if}
</div>
