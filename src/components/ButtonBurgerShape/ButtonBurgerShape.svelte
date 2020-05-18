<script>
    export let text
    export let onClick
    export let className = ''

    const onActionClick = e => {
        if (onClick) {
            onClick()
        } else {
            e.preventDefault()
        }
    }
</script>

<style>
    button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        height: 50px;
        width: 50px;
        border-radius: 50px 50px 10px 10px;
        background: linear-gradient(0deg,
        #EBA789 15%,
        #50C92C 27%,
        #EE6663 47%,
        #F6FA19 45%,
        #50C92C 60%,
        #EBA789 79%);
        cursor: pointer;
    }
    button:focus {
        outline: none;
    }
    span {
        background-color: rgba(255, 255, 255, 0.7);
        padding: 5px;
        margin-bottom: 5px;
        font-size: 0.875rem;
    }
    .with-marge {
        margin-right: 10px;
    }
</style>

<button class={className} on:click={onActionClick}>
    <span>{text}</span>
</button>
