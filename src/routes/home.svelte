<script lang="ts">
    import Tailwindcss from '../Tailwindcss.svelte';
    import FeaturedCard from '../components/FeaturedCard.svelte';
</script>
<Tailwindcss/>
<div class="bg-white dark:bg-[#303849]">
    <div class="container py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">How was this helpful tool <span class="underline decoration-slate-500">created</span>?</h1>
        
        <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Through a dedicated team of developers and designers, we were able to create a tool that is both easy to use and provides accurate information.
        </p>
        <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            These 4 developers include:
            <a href="grahamzemel.com">Graham Zemel</a>, <a href="https://darrenweng.com/">Darren Weng</a>, <a href="https://gabeweng.com">Gabriel Weng</a>, and <a href="https://github.com/BestLocation">Surya Rao</a>.
        </p>
        
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <FeaturedCard title="Development" desc="To build our backend, which is a Python web service API, we used Cohere’s NLP capabilities of generating text and recognizing intent to create a chatbot and multiple API calls. In our backend, we also used Twilio to allow users to text the chatbot at (940) 217-2964, and created an environment to implement possible tools such as texting authorities or emergency service providers. We used Svelte, Tailwind, and TypeScript to create the frontend, giving the user news, medication information, and access to the bot at all times through a widget (bottom right)." link="/"/>
            <FeaturedCard title="Purpose" desc="Our purpose is to make online medical information more accessible to those who are less tech savvy and anyone who cannot easily find important health information online. It provides links to other websites, plus the ability to text the bot and use the widget throughout the site." link="/"/>
            <FeaturedCard title="Impact" desc="We believe our bot can have a real impact by broadening access to medical information and providing free healthcare services to everyone. By catching signs of self-harm or serious injuries, we can truly make a difference in the mental health and well-being of others." link="/"/>
            <FeaturedCard title="Future" desc="If this bot became a full product, we could add more features such as checking the average cost of a procedure across different nearby hospitals. We could also turn the bot into a web app that could be used on mobile phones. We would also further develop our website, adding more health news and features such as an embedded map on the site that directs our user to the nearest hospital." link="/"/>
        </div>
    </div>
</div>
<svelte:head>
  <title>Aesculapius | Bot</title>
</svelte:head>