import type { LayoutLoad } from './$types';
import '@fortawesome/fontawesome-free/css/all.css';
import '$lib/styles/global.css';

export const prerender = true;
export const ssr = true;

export const load = (async () => {
    return {};
}) satisfies LayoutLoad;