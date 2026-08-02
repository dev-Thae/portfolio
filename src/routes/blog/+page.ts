import type { PageLoad } from './$types';
import { getAllPosts } from '$lib/blog';

export const load = (async () => {
	return { posts: getAllPosts() };
}) satisfies PageLoad;
