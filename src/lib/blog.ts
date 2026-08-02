import { marked } from 'marked';

export interface BlogPost {
	slug: string;
	title: string;
	date: string;
	description: string;
	html: string;
}

interface RawPost {
	slug: string;
	frontmatter: Record<string, string>;
	body: string;
}

const files = import.meta.glob('./blogs/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<
	string,
	string
>;

function parseFile(path: string, raw: string): RawPost {
	const slug = path.replace('./blogs/', '').replace(/\.md$/, '');
	const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

	const frontmatter: Record<string, string> = {};
	let body = raw;

	if (match) {
		for (const line of match[1].split('\n')) {
			const separatorIndex = line.indexOf(':');
			if (separatorIndex === -1) continue;
			const key = line.slice(0, separatorIndex).trim();
			const value = line.slice(separatorIndex + 1).trim();
			frontmatter[key] = value;
		}
		body = match[2];
	}

	return { slug, frontmatter, body };
}

const posts: BlogPost[] = Object.entries(files)
	.map(([path, raw]) => parseFile(path, raw))
	.map(({ slug, frontmatter, body }) => ({
		slug,
		title: frontmatter.title ?? slug,
		date: frontmatter.date ?? '',
		description: frontmatter.description ?? '',
		html: marked.parse(body, { async: false })
	}))
	.sort((a, b) => b.date.localeCompare(a.date));

export function getAllPosts(): BlogPost[] {
	return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
	return posts.find((post) => post.slug === slug);
}
