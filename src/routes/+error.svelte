<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head><title>{page.status} | Not Found</title></svelte:head>

<main id="error">
	<h1>{page.status}</h1>
</main>

<style>
	#error {
		min-height: 90vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#error h1 {
		font-size: 20vw;
		line-height: 1;
		margin: 0;
		color: var(--theme-primaryButton);
	}
</style>
