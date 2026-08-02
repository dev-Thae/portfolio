<script lang="ts">
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';

	import { beforeNavigate, onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { Name } from '$lib';

	// one title for every page, keyed by route id — no per-page <svelte:head> needed
	const titles: Record<string, string> = {
		'/about': 'About',
		'/projects': 'Projects',
		'/contact': 'Contacts',
		'/bookmarks': 'Bookmarks',
		'/blog': 'Blog'
	};

	const title = () => {
		const project = (page.data as { project?: { name: string } }).project;
		const post = (page.data as { post?: { title: string } }).post;
		const pageTitle = project?.name ?? post?.title ?? titles[page.route.id ?? ''];
		return pageTitle ? `${pageTitle} | ${Name}` : Name;
	};

	beforeNavigate((navigation) => {
		if (navigation.type === 'link' && navigation.to?.url.href === navigation.from?.url.href) {
			navigation.cancel();
		}
	});

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head><title>{title()}</title></svelte:head>

<Header />

<slot />

<Footer />
