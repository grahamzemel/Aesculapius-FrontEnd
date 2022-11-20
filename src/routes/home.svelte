<script lang="ts">
    import Tailwindcss from '../Tailwindcss.svelte';
    import Footer from '../Footer.svelte';
    import FeaturedCard from '../components/FeaturedCard.svelte';
</script>
<Tailwindcss/>
<section class="bg-white dark:bg-gray-900">
    <div class="container py-10 mx-auto">
        <h1>BOT GOES HERE</h1>
        <br>

        <h1>How was this helpful tool <span class="underline decoration-slate-500">created</span>?</h1>
        
        <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>
        
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <FeaturedCard title="elegance" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet" link="/"/>
            <FeaturedCard title="elegance" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet" link="/"/>
            <FeaturedCard title="elegance" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet" link="/"/>
            <FeaturedCard title="elegance" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet" link="/"/>
        </div>
    </div>
</section>
<Footer/>