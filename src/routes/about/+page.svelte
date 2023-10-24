<script lang="ts">
    import type { PageData } from "./$types";
    import CardsCatalog from "$lib/components/CardsCatalog/CardsCatalog.svelte";

    export let data: PageData;
</script>

<svelte:head>
    <title>About</title>
</svelte:head>

<main class="about">
    <h1>About</h1>

    <CardsCatalog skills={data.skills} />
</main>

<style>
    @import "./+page.css";
</style>
