<script lang="ts">
	import type { PageData } from './$types';

	import Card from '$lib/components/Card/Card.svelte';
	import InfiniteLoopSliderList from '$lib/components/InfiniteLoopSliderList/InfiniteLoopSliderList.svelte';
	import TypeWriter from '$lib/components/TypeWriter/TypeWriter.svelte';

	import { CardImage, Name } from '$lib';

	export let data: PageData;
</script>

<main id="home">
	<div class="content">
		<h2>
			Hi There, 👋🏽<br />
			I'm <span>{Name}</span>
		</h2>
		<span>I Am Into&nbsp;</span><TypeWriter wordList={data.interests} /><span>|</span>
	</div>
	<Card width={'400px'} url={CardImage} />
	<InfiniteLoopSliderList duration={30000} tags_per_row={15} width={'100%'} tags={data.tags} />
</main>

<style>
	@import './+page.css';
</style>
