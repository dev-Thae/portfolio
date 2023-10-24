<script>
	import { onMount, onDestroy } from 'svelte';

	export let base = 'base';
	export let images = ['', ''];
	export let duration = 5000;
	let currentIndex = 0;
	let interval = 0;
	let isAutoPlayEnabled = true;

	function toggleAutoPlay() {
		isAutoPlayEnabled = !isAutoPlayEnabled;

		if (isAutoPlayEnabled) {
			interval = setInterval(changeImage, duration);
		} else {
			clearInterval(interval);
		}
	}

	function changeImage() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	onMount(() => {
		interval = setInterval(changeImage, duration);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div id="gallery" on:click={toggleAutoPlay}>
	{#each images as img, i (img)}
		<img
			id={i === currentIndex ? 'current' : ''}
			class:auto={!isAutoPlayEnabled}
			src={base + img}
			alt={i.toString()}
		/>
	{/each}
</div>

<style>
	@import './SlideShow.css';
</style>
