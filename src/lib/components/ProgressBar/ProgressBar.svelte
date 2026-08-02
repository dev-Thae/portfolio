<script>
	import { onMount } from 'svelte';

	let scrollPercentage = 0;

	const handleScroll = () => {
		const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
		const clientHeight = document.documentElement.clientHeight || window.innerHeight;
		const maxScroll = scrollHeight - clientHeight;
		scrollPercentage = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class={'progressBar'}>
	<div class={'progressBarFill'} style="width: {scrollPercentage}%"></div>
</div>

<style>
	@import './ProgressBar.css';
</style>
