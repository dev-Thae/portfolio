<script lang="ts">
	import type { PageData } from './$types';
	import { Database, technologyIcons } from '$lib';
	import SlideShow from '$lib/components/SlideShow/SlideShow.svelte';

	export let data: PageData;
</script>

<main id="project-section">
	{#if data.project}
		<article class="project">
			<h1>{data.project.name}</h1>
			<ul class="technologies">
				{#each data.project.technologies as technology (technology)}
					<li><i class={technologyIcons[technology]}></i><span>{technology}</span></li>
				{/each}
			</ul>
			<p class="description">{data.project.description}</p>
		</article>

		<section class="gallery">
			<h2>Gallery</h2>
			<SlideShow base={Database + '/img/'} images={data.project.images} duration={2000} />
		</section>
	{:else}
		<p class="not-found">Project not found.</p>
	{/if}
</main>

<style>
	@import './+page.css';
</style>
