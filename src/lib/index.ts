import { resolve } from '$app/paths';

//GLOBAL
export const BrandText = '</>Thæ';
export const Name = 'Thæ';
// site root incl. the base path, with a trailing slash (replaces the deprecated `base`)
export const Root = resolve('/');
export const Database = Root + 'assets/database';
export const ResumeLink = Root + 'assets/database/resume.pdf';

//HOME PAGE
export const CardImage = Root + 'assets/database/img/School_of_Athens_Raffaello.jpg';

//LINKS
export const SocialMenu = {
	github: 'https://github.com/dev-Thae',
	linkedin: 'https://www.linkedin.com/in/thae/',
	twitter: 'https://twitter.com/im_thae',
	instagram: 'https://www.instagram.com/im_thae/',
	youtube: 'https://www.youtube.com/channel/UCajrZBDEYEkr3_RhOKfobgA',
	spotify: 'https://open.spotify.com/user/fbal60edksl187xudjmd5kc67',
	hackerrank: 'https://www.hackerrank.com/dev_thae?hr_r=1',
	facebook: '#',
	gmail: 'mailto:abdullahtahaardogan@gmail.com'
};

export const technologyIcons: Record<string, string> = {
	HTML: 'fab fa-html5',
	CSS: 'fab fa-css3-alt',
	JavaScript: 'fab fa-js',
	React: 'fab fa-react',
	Angular: 'fab fa-angular',
	'Vue.js': 'fab fa-vuejs',
	'Node.js': 'fab fa-node-js',
	Node: 'fab fa-node',
	FontAwesome: 'fab fa-font-awesome',
	FortAwesome: 'fab fa-fort-awesome',
	PHP: 'fab fa-php',
	Python: 'fab fa-python',
	Swift: 'fab fa-swift',
	Java: 'fab fa-java',
	Markdown: 'fab fa-markdown',
	CodePen: 'fab fa-codepen',
	Git: 'fab fa-git-alt',
	GitHub: 'fab fa-github',
	Docker: 'fab fa-docker',
	Windows: 'fab fa-windows',
	Linux: 'fab fa-linux',
	Ubuntu: 'fab fa-ubuntu',
	RaspberryPi: 'fab fa-raspberry-pi',
	StackOverflow: 'fab fa-stack-overflow',

	TypeScript: 'fa fa-gear',
	Svelte: 'fa fa-gear',
	MongoDB: 'fa-solid fa-leaf',

	C: 'fa-solid fa-code',
	'C++': 'fa-solid fa-code',
	'C#': 'fa-solid fa-hashtag',
	'UI/UX': 'fa-solid fa-pen-ruler',
	UIPath: 'fa-solid fa-robot',

	Debian: 'fab fa-debian',
	Fedora: 'fab fa-fedora',
	Arch: 'fab fa-linux',
	Cachy: 'fab fa-linux',
	Pardus: 'fab fa-linux',

	AI: 'fa-solid fa-brain',
	'Machine Learning': 'fa-solid fa-diagram-project',
	'Deep Learning': 'fa-solid fa-network-wired',
	'Federated Learning': 'fa-solid fa-share-nodes',
	'Transfer Learning': 'fa-solid fa-right-left',
	'Representation Learning': 'fa-solid fa-vector-square',
	PyTorch: 'fa-solid fa-fire',
	TensorFlow: 'fa-solid fa-microchip',
	'Scikit-learn': 'fa-solid fa-chart-line',
	'Neural Networks': 'fa-solid fa-circle-nodes',
	RNN: 'fa-solid fa-repeat',
	CNN: 'fa-solid fa-layer-group',
	LSTM: 'fa-solid fa-memory',
	GAN: 'fa-solid fa-scale-balanced',
	Transformer: 'fa-solid fa-bolt',
	AutoEncoder: 'fa-solid fa-compress',
	LLM: 'fa-solid fa-comments',
	XAI: 'fa-solid fa-eye',
	MLOps: 'fa-solid fa-gears',
	'Latent Feature': 'fa-solid fa-shapes',
	'Latent Space': 'fa-solid fa-cube',
	't-SNE': 'fa-solid fa-chart-area',
	UMAP: 'fa-solid fa-map',
	PCA: 'fa-solid fa-compress-alt',
	Weaviate: 'fa-solid fa-database',
	VectorDB: 'fa-solid fa-server',
	ANN: 'fa-solid fa-diagram-project',
	'Similarity Search': 'fa-solid fa-magnifying-glass',
	Embeddings: 'fa-solid fa-dna',
	Benchmarking: 'fa-solid fa-chart-bar',
	'Experiment Tracking': 'fa-solid fa-flask',
	Reproducibility: 'fa-solid fa-rotate',
	'Trustworthy AI': 'fa-solid fa-shield-halved',
	'Responsible AI': 'fa-solid fa-scale-balanced',
	'Agentic AI': 'fa-solid fa-robot'
};
