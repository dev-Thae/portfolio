<script>
	import { onMount, onDestroy } from 'svelte';

	export let width = '400px';
	export let url = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1200px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg";

	let card;
	let bounds;

	const rotateToMouse = (e) => {
		const mouseX = e.clientX;
		const mouseY = e.clientY;
		const leftX = mouseX - bounds.x;
		const topY = mouseY - bounds.y;
		const center = {
			x: leftX - bounds.width / 2,
			y: topY - bounds.height / 2
		};
		const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

		card.style.transform = `
        scale3d(1.17, 1.17, 1.17)
        rotate3d(
          ${center.y / 10},
          ${-center.x / 10},
          0,
          ${Math.log(distance) * 2}deg
        )
      `;

		const glow = card.querySelector('.glow');
		glow.style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff22,
          #0000000f
        )
      `;
	};

	const handleMouseEnter = () => {
		bounds = card.getBoundingClientRect();
		document.addEventListener('mousemove', rotateToMouse);
	};

	const handleMouseLeave = () => {
		document.removeEventListener('mousemove', rotateToMouse);
		card.style.transform = '';
	};

	onMount(() => {
		card.addEventListener('mouseenter', handleMouseEnter);
		card.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			card.removeEventListener('mouseenter', handleMouseEnter);
			card.removeEventListener('mouseleave', handleMouseLeave);
		};
	});
</script>

<div bind:this={card} class="card" style="width: {width}; background-image: url({url});">
	<div class="glow" />
</div>

<style>
	@import './Card.css';
</style>
