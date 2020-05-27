<script>
    // node modules
    import { writable } from 'svelte/store'
    import { Router, Route } from 'svelte-routing'
    import ApolloClient from 'apollo-boost';
    import { setClient } from 'svelte-apollo';

    // intern components
    import LinkToApollo from 'components/LinkToApollo/LinkToApollo.svelte'
    import Home from 'containers/Home/Home.svelte'

    // const
    const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });
    setClient(client);
    export let url = ''
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
<Router url="{url}">
    <Route path="apollo" component="{LinkToApollo}" />
    <Route path="/"><Home /></Route>
</Router>
