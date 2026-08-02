import { getPostBySlug } from '$lib/blog';

export function load({ params }: { params: Record<string, string> }) {
	return { post: getPostBySlug(params.slug) };
}
