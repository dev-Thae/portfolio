<script>
    import { onMount, onDestroy } from 'svelte';
  
    let scrollPercentage = 0;
  
    onMount(async () => {
      const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;
        scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      };
  
      window.addEventListener('scroll', handleScroll);
  
      onDestroy(() => {
        window.removeEventListener('scroll', handleScroll);
      });
    });
  </script>
  
  <style>
    @import "./ProgressBar.css";
  </style>
  
  <div class={"progressBar"}>
    <div class={"progressBarFill"} style="width: {scrollPercentage}%"></div>
  </div>