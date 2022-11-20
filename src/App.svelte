<script>
	import { Router, Route, Link } from "svelte-routing";
	import HomePage from "./routes/home.svelte";
	import Index from "./routes/index.svelte";
	export let url = "";
	import ModeSwitcher from "./ModeSwitcher.svelte";
	var menu = document.getElementById("menu");
	function toggleMenu() {
		console.log("toggleMenu");
		menu.toggleAttribute("hidden");
		menu.toggleAttribute("w-full");
		menu.toggleAttribute("h-screen");
	}
</script>

<Router {url}>
	<div class="w-full h-16 bg-[#505560] drop-shadow-lg">
		<div
			class="container px-4 md:px-0 h-full mx-auto flex justify-between items-center"
		>
			<Link class="text-slate-400 text-xl font-bold italic" to="/"
				>Aesculapius <span class="text-slate-200">Healthcare</span></Link
			>

			<ul
				id="menu"
				class="hidden fixed top-0 right-0 px-10 py-16 bg-gray-700 z-50
            md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6"
			>
				<li>
					<Link
						class="text-white opacity-70 hover:opacity-100 duration-300"
						to="home">Aesculapius</Link
					>
				</li>
				<li>
					<Link
						class="text-white opacity-70 hover:opacity-100 duration-300"
						to="/">Potential Diagnosis</Link
					>
				</li>
				<li>
					<Link
						class="text-white opacity-70 hover:opacity-100 duration-300"
						to="/">Drug Facts</Link
					>
				</li>
				<li>
					<Link
						class="text-white opacity-70 hover:opacity-100 duration-300"
						to="/">Recent News</Link
					>
				</li>
				<li>
					<Link
						class="text-white opacity-70 hover:opacity-100 duration-300"
						to="/">Contact</Link
					>
				</li>

				<ModeSwitcher />
			</ul>
		</div>
	</div>
	<div>
		<Route path="/"><Index /></Route>
		<Route path="home"><HomePage /></Route>
	</div>
</Router>