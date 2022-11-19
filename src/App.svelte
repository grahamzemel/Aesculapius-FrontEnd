<script lang="ts">
	import Tailwindcss from './Tailwindcss.svelte';
	import Users from './Users.svelte';
	import Header from './Header.svelte';
	import Intro from './Intro.svelte';
</script>
<Tailwindcss />
<Header />
<main class="p-4 mx-auto text-center max-w-xl">
	<h1 class="uppercase text-6xl leading-normal font-thin text-title">Hello human!</h1>
	<p class="text-primary mt-[3rem]">
		Welcome to the <strong class="rounded">Aesculapius</strong> bot!
	</p>
	<!-- <Users/> -->
</main>
<Intro />
