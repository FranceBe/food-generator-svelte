<script>
    // node modules
    import ApolloClient, { gql } from 'apollo-boost'
    import { getClient, query } from 'svelte-apollo'

    // intern components
    import H1 from 'components/H1/H1.svelte'

    // methods and consts
    const GET_BOOKS = gql`
        query {
            books {
                title
            }
        }
    `
    const client = getClient()
    const books = query(client, { query: GET_BOOKS })

    let hasClicked = false
    const clicked = () => {
        hasClicked = !hasClicked
    }
</script>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
    }
</style>

<div>
    <H1 title="Essayons svelte-apollo"/>
    <button on:click={clicked}> Try me</button>
  {#if hasClicked}
      <ul>
        {#await $books}
            <li>Loading...</li>
        {:then result}
          {#each result.data.books as book (book.id)}
              <li>{book.title}</li>
          {/each}
        {:catch error}
            <li>ERROR: {error}</li>
        {/await}
      </ul>
  {/if}
</div>
