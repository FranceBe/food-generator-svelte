<script>
    export let firstOption;
    export let secondOption;
    export let onSelect;
    export let selectedOption;

    let active = ''
    const firstOptionName = 'first-option'
    const secondOptionName = 'second-option'
    const handleSelect = option => {
        onSelect(option);
        active = option;
    }
</script>
<style>
    button {
        height: 30px;
        width: 300px;
        font-size: 0.875rem;
        font-weight: 700;
        border: none;
        background-color: #FFF;
        color: #5F4C44;
        text-decoration: none;
        padding:0;
    }
    button:focus {
        outline: none;
    }
    button.is-active {
        background-color: #EBA789;
        color: #FFF;
        text-decoration: underline;
    }
    button:first-of-type {
        border-radius: 10px 0 0 10px;
        border: 1px solid #EBA789;
    }
    button:last-of-type {
        border-radius: 0 10px 10px 0;
        border-top: 1px solid #EBA789;
        border-right: 1px solid #EBA789;
        border-bottom: 1px solid #EBA789;
    }
</style>

<div>
    <button
        class={active === firstOptionName ? 'is-active' : ''}
        on:click={() => handleSelect(firstOptionName)}
    >
        {firstOption}
    </button><button
        class={active === secondOptionName ? 'is-active' : ''}
        on:click={() => handleSelect(secondOptionName)}
    >
        {secondOption}
    </button>
</div>

