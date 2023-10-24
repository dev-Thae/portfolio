import type { PageLoad } from './$types';
import skills from "$lib/database/skills.json";

export const load = (async () => {
    return { skills };
}) satisfies PageLoad;