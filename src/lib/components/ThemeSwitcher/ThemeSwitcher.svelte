<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import themes from './ThemeSwitcher';

	// 1 = "Dark", matching the :root defaults in global.css
	let currentThemeIndex = 1;

	onMount(() => {
		try {
			const savedThemeIndex = localStorage.getItem('currentThemeIndex');
			if (savedThemeIndex !== null) {
				const index = parseInt(savedThemeIndex, 10);
				if (index >= 0 && index < themes.length) {
					currentThemeIndex = index;
					applyTheme();
				}
			}
		} catch {
			// localStorage can throw in sandboxed/privacy contexts; keep the CSS defaults
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
		try {
			localStorage.setItem('currentThemeIndex', currentThemeIndex.toString());
		} catch {
			// ignore — theme still applies for this visit
		}
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
