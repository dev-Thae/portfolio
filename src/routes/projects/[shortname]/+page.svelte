<script lang="ts">
	import type { PageData } from './$types';
	import { Database, technologyIcons } from '$lib';
	import SlideShow from '$lib/components/SlideShow/SlideShow.svelte';
	import Back from '$lib/components/Buttons/Back/Back.svelte';

	export let data: PageData;
</script>

<main id="project-section">
	<section>
		<div id="project-info">
			<h1>{data.project?.name}</h1>
			<article>{data.project?.description}</article>
		</div>
		<div id="technologies">
			<h2>Technologies</h2>
			<ul>
				{#if data.project?.technologies}
					{#each data.project?.technologies as technology, i (technology)}
						<li>
							<a><i class={technologyIcons[technology]} /></a><span>{technology}</span>
						</li>
					{/each}
				{/if}
			</ul>
		</div>
	</section>
	<h2>Gallery</h2>
	<section>
		<SlideShow base={Database + '/img/'} images={data.project?.images} duration={2000} />
	</section>
	<Back />
</main>

<style>
	@import './+page.css';
</style>
