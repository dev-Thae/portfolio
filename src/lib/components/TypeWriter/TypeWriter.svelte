<script>
	import { onDestroy } from 'svelte';

	export let className = 'typewriter';
	export let wordList = ['hello', 'Hello', '^_^'];
	export let typingSpeed = 100;
	export let deletingSpeed = typingSpeed / 2;

	let currentWordIndex = 0;
	let currentText = '';
	let isDeleting = false;

	let timer;

	const updateText = () => {
		const currentWord = wordList[currentWordIndex];

		if (isDeleting) {
			currentText = currentWord.substring(0, currentText.length - 1);
		} else {
			currentText = currentWord.substring(0, currentText.length + 1);
		}

		if (currentText === currentWord && !isDeleting) {
			isDeleting = true;
			timer = setTimeout(updateText, 1000);
		} else if (currentText === '' && isDeleting) {
			isDeleting = false;
			currentWordIndex = (currentWordIndex + 1) % wordList.length;
			timer = setTimeout(updateText, typingSpeed);
		} else {
			timer = setTimeout(updateText, isDeleting ? deletingSpeed : typingSpeed);
		}
	};

	updateText();

	onDestroy(() => {
		clearTimeout(timer);
		currentText = '';
	});
</script>

<span class={className}>{currentText}</span>
