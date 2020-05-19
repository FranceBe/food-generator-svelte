<script xmlns="http://www.w3.org/1999/html">
    import H2 from 'components/H2/H2.svelte'

    export let label
    export let onChange
</script>
<style>
    label {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 70%;
        justify-content: center;
    }
    input {
        margin-left: 10px;
        height: 30px;
        width: 50%;
    }

    input:focus {
        outline: #EBA789 auto 5px;
    }

</style>

    <label>
        <H2 title={label}/>
        <input name="ingredients" on:change={onChange}/>
    </label>
