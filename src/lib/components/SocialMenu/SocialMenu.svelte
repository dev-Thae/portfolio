<script>
	import { SocialMenu } from '$lib';
</script>

<div class="social-menu">
	<h2>Social Media</h2>
	<ul>
		<li><a href={SocialMenu.github} aria-label="GitHub"><i class="fab fa-github"></i></a></li>
		<li>
			<a href={SocialMenu.linkedin} aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
		</li>
		<li><a href={SocialMenu.twitter} aria-label="Twitter"><i class="fab fa-twitter"></i></a></li>
		<li>
			<a href={SocialMenu.instagram} aria-label="Instagram"><i class="fab fa-instagram"></i></a>
		</li>
		<li><a href={SocialMenu.youtube} aria-label="YouTube"><i class="fab fa-youtube"></i></a></li>
		<li><a href={SocialMenu.spotify} aria-label="Spotify"><i class="fab fa-spotify"></i></a></li>
		<li>
			<a href={SocialMenu.hackerrank} aria-label="HackerRank"><i class="fab fa-hackerrank"></i></a>
		</li>
		<li>
			<a href={SocialMenu.facebook} aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
		</li>
		<li><a href={SocialMenu.gmail} aria-label="Email"><i class="fab fa-google fill"></i></a></li>
		<li><a href={SocialMenu.twitter} aria-label="X"><i class="fab fa-x-twitter fill"></i></a></li>
	</ul>
</div>

<style>
	@import './SocialMenu.css';
</style>
