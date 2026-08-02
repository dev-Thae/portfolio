<script>
	import { ResumeLink, Root } from '$lib';
	import { page } from '$app/state';
	import { onNavigate } from '$app/navigation';

	const nav = [
		{ title: 'Home', path: '/', class: 'fa fa-home' },
		{ title: 'About', path: '/about', class: 'fa fa-book' },
		{ title: 'Projects', path: '/projects', class: 'fas fa-project-diagram' },
		{ title: 'Blog', path: '/blog', class: 'fa fa-pen-nib' },
		{ title: 'Contact', path: '/contact', class: 'fa fa-address-book' },
		{ title: 'Bookmarks', path: '/bookmarks', class: 'fa fa-bookmark' }
		//{ title: 'Resume', path: ResumeLink, class: 'fa fa-file-lines' }
	];

	let isMenuOpen = false;
	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	// close on any link click — same-page navigations are canceled in +layout.svelte,
	// so onNavigate alone would leave the mobile menu covering the page
	const closeMenu = () => {
		isMenuOpen = false;
	};

	onNavigate(() => {
		if (isMenuOpen) closeMenu();
	});
</script>

<nav>
	<button
		type="button"
		class="menu-icon"
		aria-label="Toggle menu"
		aria-expanded={isMenuOpen}
		on:click={toggleMenu}
	>
		<div class="bar"></div>
		<div class="bar"></div>
		<div class="bar"></div>
	</button>

	<ul class:open={isMenuOpen}>
		{#each nav as link}
			<li>
				<a
					class:activePage={link.path == page.route.id}
					href={Root + link.path.slice(1)}
					on:click={closeMenu}><i class={link.class}></i> {link.title}</a
				>
			</li>
		{/each}
		<li>
			<a href={ResumeLink} target="_blank" rel="noopener noreferrer" on:click={closeMenu}
				><i class="fa fa-file-lines"></i> Resume</a
			>
		</li>
		<!--
		<li><a href="{base}/"><i class="fa fa-home" aria-hidden="true" /> Home</a></li>
		<li><a href="{base}/about"><i class="fa fa-book" /> About</a></li>
		<li><a href="{base}/projects"><i class="fas fa-project-diagram" /> Projects</a></li>
		<li><a href="{base}/contact"><i class="fa fa-address-book" /> Contact</a></li>
		<li><a href="{base}/bookmarks"><i class="fa fa-bookmark" /> Bookmarks</a></li>
		<li><a href={ResumeLink} target="_blank"><i class="fa fa-file-lines" /> Resume</a></li>
		-->
	</ul>
</nav>

<style>
	@import './Navbar.css';
</style>
