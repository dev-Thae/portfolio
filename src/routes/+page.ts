import type { PageLoad } from './$types';
import interests from '$lib/database/interests.json';
import tags from "$lib/database/tags.json";

export const load = (async () => {
    return { interests, tags };
}) satisfies PageLoad;