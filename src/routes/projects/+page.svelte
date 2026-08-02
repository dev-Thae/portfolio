<script lang="ts">
	import type { PageData } from './$types';
	import { resolve } from '$app/paths';
	import { Database, technologyIcons } from '$lib';

	export let data: PageData;
</script>

<main id="projects">
	<h1>Projects</h1>
	<div class="projects">
		{#each data.projects as project (project.id)}
			<a
				class="project-card"
				href={resolve('/projects/[shortname]', { shortname: project.shortname })}
			>
				<img src="{Database}/img/{project.thumb}" alt={project.name} />
				<div class="project-body">
					<h2>{project.name}</h2>
					<p>{project.short_description}</p>
					<ul class="tech-list">
						{#each project.technologies as technology (technology)}
							<li title={technology}><i class={technologyIcons[technology]}></i></li>
						{/each}
					</ul>
				</div>
			</a>
		{/each}
	</div>
</main>

<style>
	@import './+page.css';
</style>
