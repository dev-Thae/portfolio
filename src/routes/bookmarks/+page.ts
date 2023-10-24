import type { PageLoad } from './$types';
import bookmarks from '$lib/database/bookmarks.json';

export const load = (async () => {
    return { bookmarks };
}) satisfies PageLoad;