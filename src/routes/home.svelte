<script lang="ts">
    import Tailwindcss from '../Tailwindcss.svelte';
    import FeaturedCard from '../components/FeaturedCard.svelte';
</script>
<Tailwindcss/>
<div class="bg-white dark:bg-gray-900">
    <div class="container py-10 mx-auto">
        <h1>BOT GOES HERE</h1>
        <br>

        <h1>How was this helpful tool <span class="underline decoration-slate-500">created</span>?</h1>
        
        <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>
        
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <FeaturedCard title="Development" desc="To build our backend, which is a Python web service API, we used Cohere’s NLP capabilities of generating text and recognizing intent to create a chatbot and multiple API calls. In our backend, we also used Twilio to allow users to text the chatbot and for tools such as texting authorities or emergency service providers. We used Sverte and Tailwind to create the frontend." link="/"/>
            <FeaturedCard title="Purpose" desc="Our purpose is to make online medical information more accessible to those who are less tech savvy and anyone who cannot easily find important health information online." link="/"/>
            <FeaturedCard title="Impact" desc="We believe our bot can have a real impact by broadening access to medical information and providing free healthcare services to everyone. We believe that by catching signs of self-harm or serious injuries, we can save lives." link="/"/>
            <FeaturedCard title="Future" desc="If this bot became a full product, we could add more features such as checking the average cost of a procedure across different nearby hospitals. We could also turn the bot into a webapp that could be used on mobile phones. We would also further develop our website, adding more health news and features such as an embedded map on the site that directs our user to the nearest hospital." link="/"/>
        </div>
    </div>
</div>
<svelte:head>
  <title>Aesculapius | Bot</title>
</svelte:head>