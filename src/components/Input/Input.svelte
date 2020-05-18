<script>
    import H2 from 'components/H2/H2.svelte'

    export let label
    export let onChange
</script>
<style>
    input {
        margin-left: 10px;
        height: 30px;
        width: 50%;
    }

    input:focus {
        outline: #EBA789 auto 5px;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 70%;
        width: 100%;
        justify-content: center;
    }
</style>


<div>
    <H2 title={label}/>
    <input on:change={onChange}/>
</div>
