<script lang="ts">
	import CardsCatalog from '$lib/components/CardsCatalog/CardsCatalog.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="about">
	<h1>About</h1>
	<CardsCatalog skills={data.skills} />
</main>

<style>
	@import './+page.css';
</style>
