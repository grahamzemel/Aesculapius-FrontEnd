<script lang="ts">
    export let title;
    export let desc;
    export let link;
</script>
<div class="p-8 space-y-3 border-2 border-slate-400 dark:border-slate-300 rounded-xl">
    <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{title}</h1>

    <p class="text-gray-500 dark:text-gray-300">
        {desc}
    </p>

    <a href="{link}" class="inline-flex p-2 text-slate-500 capitalize transition-colors duration-200 transform bg-slate-100 rounded-full dark:bg-slate-500 dark:text-white hover:underline hover:text-slate-600 dark:hover:text-slate-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </a>
</div>
