<script>
    export let src
    export let title
    export let ingredients
    export let href
</script>
<style>
    .card-container {
        background-color: #FFF;
        border: 1px solid #5F4C44;
        display: flex;
        flex-direction: column;
        width: 80%;
    }

    .title {
        font-weight: 700;
        text-decoration: underline;
        align-self: center;
        padding: 5px;
    }

    .image-container, .place-holder {
        min-width: 200px;
        min-height: 200px;
    }

    .place-holder {
        background-color: #FEFEF1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px;
    }

    .link-and-ingredients {
        display: flex;
        flex-direction: column;
        padding: 10px;
    }
</style>

<div class="card-container">
    <div class="title">{title}</div>
    <div class="content">
      {#if src}
          <img {src} class="image-container" alt={`${title}`}>
      {:else}
          <div class="place-holder">Pas d&apos;image disponible :(</div>
      {/if}
        <div class="link-and-ingredients">
          {ingredients}
            <a {href}> Lien vers la recette </a>
        </div>
    </div>
</div>
