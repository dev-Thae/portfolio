<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import themes from './ThemeSwitcher';

	let currentThemeIndex = 0;

	onMount(() => {
		const savedThemeIndex = localStorage.getItem('currentThemeIndex');
		if (savedThemeIndex !== null) {
			currentThemeIndex = parseInt(savedThemeIndex, 10);
			applyTheme();
		}
	});

	function applyTheme() {
		const theme = themes[currentThemeIndex];
		const root = document.documentElement;

		Object.entries(theme).forEach(([key, value]) => {
			if (key !== 'name') {
				root.style.setProperty(`--theme-${key}`, value);
			}
		});
	}

	function switchTheme(increment: number) {
		currentThemeIndex = (currentThemeIndex + increment + themes.length) % themes.length;
		applyTheme();
		localStorage.setItem('currentThemeIndex', currentThemeIndex.toString());
	}

	const nextTheme = () => switchTheme(1);
	const prevTheme = () => switchTheme(-1);

	onDestroy(() => {});
</script>

<div class="theme-switcher">
	<button on:click={prevTheme}>Previous</button>
	<button on:click={nextTheme}>Next</button>
</div>

<style>
	@import './ThemeSwitcher.css';
</style>
