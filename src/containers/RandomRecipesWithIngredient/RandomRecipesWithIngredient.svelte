<script>
    import { writable } from 'svelte/store'
    import H2 from 'components/H2/H2.svelte'
    import Input from 'components/Input/Input.svelte'
    import ButtonBurgerShape from 'components/ButtonBurgerShape/ButtonBurgerShape.svelte'
    import RecipeCard from 'components/RecipeCard/RecipeCard.svelte'
    import { getRandomInt, getRandomNItems } from 'services/random.service'

    let recipes = []
    let ingredient = ''
    let noRecipeFound = false
    const listOfTotalRecipes = writable([])
    const inputIngredient = writable('')
    export const getRandomRecipes = n => {
        const randomPage = ingredient ? getRandomInt(10) : getRandomInt(50)
        const url = ingredient ?
                `api/puppy/?q=${ingredient}&p=${randomPage}` :
                `api/puppy/?p=${randomPage}`
        fetch(url)
                .then(res => res.json())
                .then(data => {
                    const listOfRecipes = data && data.results.length > 0 && getRandomNItems(data.results, n)
                    noRecipeFound = !listOfRecipes
                    listOfTotalRecipes.set(listOfRecipes)
                })
                .catch(err => {
                    throw Error(err)
                })
    }
    listOfTotalRecipes.subscribe(value => {
        recipes = value
    })
    const handleChange = event => {
        inputIngredient.set(event.target.value)
    }
    inputIngredient.subscribe(value => {
        ingredient = value
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

    .not-found {
        margin: 10px;
        color: #EE6663;
    }
</style>

<Input label={'Une envie de...'} onChange={handleChange}/>
<H2 title="...Combien voulez vous de propositions ?"/>
<div>
    <ButtonBurgerShape className="with-marge" onClick={() => getRandomRecipes(1)} text="1"/>
    <ButtonBurgerShape className="with-marge" onClick={() => getRandomRecipes(5)} text="5"/>
    <ButtonBurgerShape onClick={() => getRandomRecipes(10)} text="10"/>
</div>
{#if recipes.length > 0}
    <div class="global-container">
      {#each recipes as recipe}
          <RecipeCard title={recipe.title} href={recipe.href} ingredients={recipe.ingredients} src={recipe.thumbnail}/>
      {/each}
    </div>
{/if}
{#if noRecipeFound}
    <div class="not-found">
        Désolé, nous n&apos;avons trouvé aucune recette qui correspond :&apos;(
    </div>
{/if}
