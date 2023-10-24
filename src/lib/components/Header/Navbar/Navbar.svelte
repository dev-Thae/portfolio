<script>
	import { ResumeLink } from '$lib';
	import { base } from '$app/paths';

	let isMenuOpen = false;

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};
</script>

<nav>
	<div class="menu-icon" on:click={toggleMenu}>
		<div class="bar" />
		<div class="bar" />
		<div class="bar" />
	</div>
	
	<ul class:open={isMenuOpen}>
		<li><a href="{base}/"><i class="fa fa-home" aria-hidden="true" /> Home</a></li>
		<li><a href="{base}/about"><i class="fa fa-book" /> About</a></li>
		<li><a href="{base}/projects"><i class="fas fa-project-diagram" /> Projects</a></li>
		<li><a href="{base}/contact"><i class="fa fa-address-book" /> Contact</a></li>
		<li><a href="{base}/bookmarks"><i class="fa fa-bookmark" /> Bookmarks</a></li>
		<li><a href="{ResumeLink}" target="_blank"><i class="fa fa-file-lines" /> Resume</a></li>
	</ul>
</nav>

<style>
	@import './Navbar.css';
</style>
