<script lang="ts">
	import { onMount } from 'svelte';
	import { technologyIcons } from '$lib';
	export let skills = [
		{ id: 0, name: 'HTML' },
		{ id: 1, name: 'CSS' },
		{ id: 2, name: 'JavaScript' }
	];

	const handleMouseMove = (e: MouseEvent) => {
		const cards = document.getElementsByClassName('card');
		Array.from(cards).forEach((element) => {
			const card = element as HTMLElement;
			const rect = card.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			card.style.setProperty('--mouse-x', `${x}px`);
			card.style.setProperty('--mouse-y', `${y}px`);
		});
	};

	onMount(() => {
		const cards = document.getElementById('cards');
		cards?.addEventListener('mousemove', handleMouseMove);

		return () => {
			cards?.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<div id="cards">
	{#each skills as skill (skill.id)}
		<div class="card">
			<div class="card-content">
				<i class={technologyIcons[skill.name]}></i>
				<br />
				<h3>{skill.name}</h3>
			</div>
		</div>
	{/each}
</div>

<style>
	@import './CardsCatalog.css';
	@import '../Card/Card.css';
</style>
