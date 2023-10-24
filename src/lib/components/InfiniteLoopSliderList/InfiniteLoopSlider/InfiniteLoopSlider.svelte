<script>
    import Tag from "./Tag/Tag.svelte";

    export let duration = 11000;
    export let reverse = false;
    export let tags = ["tag1", "tag2", "tag3", "tag4"];
</script>

<div
    class="loop-slider"
    style="--duration: {duration}ms; --direction: {reverse
        ? 'reverse'
        : 'normal'}"
>
    <div class="inner">
        {#each tags as tag (tag)}
            <Tag {tag} />
        {/each}
        {#each tags as tag (tag)}
            <Tag {tag} />
        {/each}
    </div>
</div>

<style>
    @import "./InfiniteLoopSlider.css";
</style>
