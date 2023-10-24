<script lang="ts">
	import type { PageData } from './$types';
	import { base } from '$app/paths';

	export let data: PageData;
</script>

<main id="projects">
	<h1>Projects</h1>
	<div class="projects">
		{#each data.projects as project (project.id)}
			<div class="project">
				<div>
					<div class="zoom">
						<img src="{base}/assets/database/img/{project.thumb}" alt="project" />
					</div>
					<div class="item-text">
						<h3>-{project.name}-</h3>
						<p>{project.short_description}</p>
						<a href="{base}/projects/{project.shortname}">More</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</main>

<style>
	@import './+page.css';
</style>
