<!-- InfiniteLoopSliderList.svelte -->
<script>
    import { onMount } from "svelte";
    import InfiniteLoopSlider from "./InfiniteLoopSlider/InfiniteLoopSlider.svelte";

    export let tags = ["tag1", "tag2", "tag3", "tag4"];
    export let duration = 11000;
    export let rows = 5;
    export let tags_per_row = 5;
    export let width = "50%";

    let sliders = [];

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

    onMount(() => {
        sliders = Array.from({ length: rows }, (_, i) => ({
            duration: random(duration - 3000, duration + 3000),
            reverse: i % 2 === 0,
            tags: shuffle(tags).slice(0, tags_per_row),
        }));
    });
</script>

<div class="tag-list" style="width: {width};">
    {#each sliders as { duration, reverse, tags }, i (i)}
        <InfiniteLoopSlider {duration} {reverse} {tags} />
    {/each}
    <div class="fade" />
</div>

<style>
    @import "./InfiniteLoopSliderList.css";
</style>
