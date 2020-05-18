<script>
  import { writable } from 'svelte/store'
  import H2 from 'components/H2/H2.svelte'
  import ButtonBurgerShape from 'components/ButtonBurgerShape/ButtonBurgerShape.svelte'
  import RecipeCard from 'components/RecipeCard/RecipeCard.svelte'
  import { getRandomInt, getRandomNItems } from 'services/random.service'
  import ReceipeCard from '../../components/RecipeCard/RecipeCard.svelte'

  let recipes = []

  const listOfTotalRecipes = writable([])
  export const getRandomRecipes = n => {
    const randomPage = getRandomInt(50)
    fetch(`api/puppy/?p=${randomPage}`)
      .then(res => res.json())
      .then(data => {
          const listOfRecipes = getRandomNItems(data.results, n)
          listOfTotalRecipes.set(listOfRecipes)
      })
            .catch(err => {
                throw Error(err)
      })
  }
  listOfTotalRecipes.subscribe(value => {
    recipes = value
  })
</script>

<style>
  div {
      display: flex;
      flex-direction: row;
  }
  .global-container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin: 20px 0;
  }
</style>

<H2 title="Combien voulez vous de propositions ?"/>
<div>
  <ButtonBurgerShape className="with-marge" onClick={() => getRandomRecipes(1)} text="1"/>
  <ButtonBurgerShape className="with-marge" onClick={() => getRandomRecipes(5)} text="5"/>
  <ButtonBurgerShape onClick={() => getRandomRecipes(10)} text="10"/>
</div>
{#if recipes.length > 0}
<div class="global-container">
  {#each recipes as recipe}
    <ReceipeCard title={recipe.title} href={recipe.href} ingredients={recipe.ingredients} src={recipe.thumbnail}/>
  {/each}
</div>
{/if}
