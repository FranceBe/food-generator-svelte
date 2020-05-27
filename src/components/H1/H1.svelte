<script>
    export let title
</script>
<style>
    div {
        display: flex;
        align-items: center;
    }
    h1 {
        font-size: 1.875rem;
        text-align: center;
        text-shadow: 1px 1px #EBA789;
    }
 </style>

<div><h1>{title}</h1><slot></slot></div>
