<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main id="post-section">
	{#if data.post}
		<article class="post">
			<h1>{data.post.title}</h1>
			{#if data.post.date}<time>{data.post.date}</time>{/if}
			<div class="content">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html data.post.html}
			</div>
		</article>
	{:else}
		<p class="not-found">Post not found.</p>
	{/if}
</main>

<style>
	@import './+page.css';
</style>
