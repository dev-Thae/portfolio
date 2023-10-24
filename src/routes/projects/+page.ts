import type { PageLoad } from './$types';
import projects from "$lib/database/projects.json";

export const load = (async () => {
    return { projects };
}) satisfies PageLoad;