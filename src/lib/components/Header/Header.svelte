<script>
	import { BrandText } from "$lib";
    import ProgressBar from "../ProgressBar/ProgressBar.svelte";
    import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.svelte";
    import Navbar from "./Navbar/Navbar.svelte";
</script>

<header>
    <ProgressBar/>
    <h1>{BrandText}</h1>
    <Navbar/>
    <ThemeSwitcher/>
</header>

<style>
    @import './Header.css';
</style>