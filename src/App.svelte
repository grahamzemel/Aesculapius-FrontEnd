<script lang="ts">
	import Tailwindcss from './Tailwindcss.svelte';
	// import Users from './Users.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Intro from './Intro.svelte';
	//create navigator to navigate between pages
	const navigator = {
		pages: ['home', 'about', 'contact'],
		currentPage: 'home',
		goToPage: function (page) {
			this.currentPage = page;
			history.pushState({}, '', page);
		},
	};
</script>
<Tailwindcss />
<Header />
<div class="bg-offwhite">
<div class="p-4 mx-auto text-center max-w-xl">
	<h1 class="uppercase text-4xl leading-normal font-thin text-title">Welcome!</h1>
	<p class="text-primary mt-[3rem]">
		Welcome to the <strong class="rounded">Aesculapius</strong> bot!
	</p>
	<!-- <Users/> -->
</div>
</div>
<hr>
<Intro />
<Footer />
