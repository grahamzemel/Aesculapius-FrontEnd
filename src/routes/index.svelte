<script lang="ts">
    import Tailwindcss from '../Tailwindcss.svelte';
    import Header from '../Footer.svelte';
    import Intro from '../Intro.svelte';
    import Footer from '../Footer.svelte';
</script>
<Tailwindcss />
<div class="bg-offwhite dark:bg-[#303849]">
<div class="p-4 mx-auto text-center max-w-xl">
	
	<h1 class="uppercase text-4xl leading-normal font-thin text-title">Welcome!</h1>
	<p class="text-title mt-[3rem]">
		Welcome to the <strong class="rounded">Aesculapius</strong> bot!
	</p>	
	<!-- <Users/> -->
</div>
</div>
<hr>
<Intro />
<Footer />
<svelte:head>
  <title>Aesculapius | Home</title>
</svelte:head>