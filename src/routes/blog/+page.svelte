<script lang="ts">
	import type { PageData } from './$types';
	import { resolve } from '$app/paths';

	export let data: PageData;
</script>

<main id="blog">
	<h1>Blog</h1>
	<div class="posts">
		{#each data.posts as post (post.slug)}
			<a class="post-card" href={resolve('/blog/[slug]', { slug: post.slug })}>
				<h2>{post.title}</h2>
				{#if post.date}<time>{post.date}</time>{/if}
				{#if post.description}<p>{post.description}</p>{/if}
			</a>
		{:else}
			<p class="empty">No posts yet.</p>
		{/each}
	</div>
</main>

<style>
	@import './+page.css';
</style>
