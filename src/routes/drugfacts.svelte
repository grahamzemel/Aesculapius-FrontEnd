<script lang="ts">
    import Tailwindcss from '../Tailwindcss.svelte';
    import DrugPoint from '../components/DrugPoint.svelte';
</script>
<Tailwindcss/>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Medications!</h1>
      <p class="text-[#b7babe] leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Here are a few medications you might find helpful in specific areas of health and well-being.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">PAIN RELIEF</h2>
        <div class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <DrugPoint drugLink="https://www.webmd.com/drugs/2/drug-362/acetaminophen+oral/details" drugName="Tylenol"/>
          <DrugPoint drugLink="https://www.webmd.com/drugs/mono-9368-IBUPROFEN+-+ORAL.aspx?drugid=5166&drugname=ibuprofen+oral" drugName="Ibuprofen"/>
          <DrugPoint drugLink="https://www.webmd.com/drugs/2/drug-17549/lidoderm-topical/details" drugName="Litoderm"/>
          <DrugPoint drugLink="https://www.webmd.com/drugs/2/drug-7420-553/codeine-sulfate/details" drugName="Codeine"/>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">VACCINES</h2>
        <div class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
            <DrugPoint drugLink="https://www.cdc.gov/vaccines/parents/diseases/flu.html" drugName="Influenza (Flu)"/>
            <DrugPoint drugLink="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/stay-up-to-date.html" drugName="Covid-19"/>
            <DrugPoint drugLink="https://www.cdc.gov/vaccines/parents/diseases/hpv.html" drugName="HPV"/>
            <DrugPoint drugLink="https://www.cdc.gov/vaccines/parents/diseases/tetanus.html" drugName="Tetanus"/>

        </div>
      </div>
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">ALLERGEN MEDICATIONS</h2>
        <div class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
            <DrugPoint drugLink="https://www.allegra.com/en-us/products/allergy-relief/24-hour-allergy-relief" drugName="Allegra"/>
            <DrugPoint drugLink="https://www.benadryl.com/" drugName="Benadryl"/>
            <DrugPoint drugLink="https://www.zyrtec.com/" drugName="Zyrtec"/>
            <DrugPoint drugLink="https://www.claritin.com/products/claritin" drugName="Claritin"/>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">FURTHER RESOURCES</h2>
        <div class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
            <DrugPoint drugLink="https://www.webmd.com/drugs/2/index" drugName="WebMD"/>
            <DrugPoint drugLink="https://www.fda.gov/drugs/information-consumers-and-patients-drugs/find-information-about-drug" drugName="FDA"/>
            <DrugPoint drugLink="https://patient.info/medicine" drugName="Patient.info"/>
            <DrugPoint drugLink="https://www.drugs.com/drug_information.html" drugName="Drugs.com"/>
            <DrugPoint drugLink="https://kidshealth.org/en/kids/kidmedic.html" drugName="KidsHealth"/>
            <DrugPoint drugLink="https://www.who.int/" drugName="WHO"/>

        </div>
      </div>
    </div>
    <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
  </div>
</section>
<svelte:head>
  <title>Aesculapius | Bot</title>
</svelte:head>