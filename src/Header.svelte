<script lang="ts">
    import ModeSwitcher from "./ModeSwitcher.svelte";
    var menu = document.getElementById('menu');
    function toggleMenu() {
        console.log('toggleMenu');
    menu.toggleAttribute('hidden')
	menu.toggleAttribute('w-full');
	menu.toggleAttribute('h-screen');
    };
    export {};
</script>
<div class="w-full h-16 bg-[#505560] drop-shadow-lg">
    <div class="container px-4 md:px-0 h-full mx-auto flex justify-between items-center">
        <!-- Logo Here -->
        <a class="text-slate-400 text-xl font-bold italic" href="/">Aesculapius<span
                class="text-slate-200">Bot</span></a>

        <!-- Menu links here -->
        <ul id="menu" class="hidden fixed top-0 right-0 px-10 py-16 bg-gray-700 z-50
            md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6">

            <li class="md:hidden z-90 fixed top-4 right-6">
                <a href="/" class="text-right text-white text-4xl"
                    on:click="{toggleMenu}">&times;</a>
            </li>

            <li>
                <a class="text-white opacity-70 hover:opacity-100 duration-300" href="/home">Home</a>
            </li>
            <li>
                <a class="text-white opacity-70 hover:opacity-100 duration-300" href="/">Potential Diagnosis</a>
            </li>
            <li>
                <a class="text-white opacity-70 hover:opacity-100 duration-300" href="/">Drug Facts</a>
            </li>
            <li>
                <a class="text-white opacity-70 hover:opacity-100 duration-300" href="/">Recent News</a>
            </li>
            <li>
                <a class="text-white opacity-70 hover:opacity-100 duration-300" href="/">Contact</a>
            </li>

            <ModeSwitcher />
        </ul>

        <!-- This is used to open the menu on mobile devices -->
        <div class="flex items-center md:hidden">
            <button class="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
                on:click="{toggleMenu}">
                &#9776;
            </button>
        </div>
    </div>

</div>
