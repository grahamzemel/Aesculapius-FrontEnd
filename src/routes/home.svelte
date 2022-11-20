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
            We used NLP by CoHere and multiple API calls to create our chatbot. We used Sverte to create the webpage.
        </p>
        
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <FeaturedCard title="Purpose" desc="Our Purpose is to make online medical information more accessible to the less Tech Savy and anyone who cant find important health information online" link="/"/>
            <FeaturedCard title="Importance" desc="We belive our Bot can have a real impact by broading access to medical information" link="/"/>
            <FeaturedCard title="Future" desc="If this bot became a full product, we could add more features such as checking the avrage cost of a procedure across different nearbye hospitals. We could also turn the bot into a webapp that could be used on mobile phones" link="/"/>
            
         
        </div>
    </div>
</section>
<Footer/>
<svelte:head>
  <title>Aesculapius | Bot</title>
</svelte:head>
