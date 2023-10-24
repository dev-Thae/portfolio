<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main id="bookmarks">
	<h1>Bookmarks</h1>
	{#each data.bookmarks as bookmark (bookmark.id)}
		<div class="bookmark">
			<h2>-{bookmark.name}-</h2>
			<hr />
			<article>{bookmark.description}</article>
            <hr>
			<a href={bookmark.link} target="_blank">({bookmark.link})</a>
		</div>
	{/each}
</main>

<style>
	@import './+page.css';
</style>
