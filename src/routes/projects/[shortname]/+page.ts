import projects from '$lib/database/projects.json';

export function load({ params }: { params: Record<string, string> }) {
	if (params.shortname) {
		const project = projects.find((item) => {
			return item.shortname === params.shortname;
		});

		return { project };
	}
}
