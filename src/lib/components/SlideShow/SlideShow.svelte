<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let base = 'base';
	export let images = ['', ''];
	export let duration = 5000;
	let currentIndex = 0;
	let interval: ReturnType<typeof setInterval>;
	let isAutoPlayEnabled = true;

	function startAutoPlay() {
		clearInterval(interval);
		interval = setInterval(nextImage, duration);
	}

	function toggleAutoPlay() {
		isAutoPlayEnabled = !isAutoPlayEnabled;

		if (isAutoPlayEnabled) {
			startAutoPlay();
		} else {
			clearInterval(interval);
		}
	}

	function nextImage() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function prevImage() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}

	// manual steps restart the timer so the next auto-advance doesn't fire right after
	function showNext() {
		nextImage();
		if (isAutoPlayEnabled) startAutoPlay();
	}

	function showPrev() {
		prevImage();
		if (isAutoPlayEnabled) startAutoPlay();
	}

	onMount(() => {
		startAutoPlay();
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="slideshow">
	<button type="button" class="nav" aria-label="Previous image" on:click={showPrev}>
		&#10094;
	</button>
	<div
		id="gallery"
		role="button"
		tabindex="0"
		title="Click to pause or resume the slideshow"
		on:click={toggleAutoPlay}
		on:keydown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') toggleAutoPlay();
		}}
	>
		{#each images as img, i (img)}
			<img
				id={i === currentIndex ? 'current' : ''}
				class:auto={!isAutoPlayEnabled}
				src={base + img}
				alt={'Slide ' + (i + 1)}
			/>
		{/each}
	</div>
	<button type="button" class="nav" aria-label="Next image" on:click={showNext}>&#10095;</button>
</div>

<style>
	@import './SlideShow.css';
</style>
