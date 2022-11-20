<script>
    export let drugLink;
    export let drugName;
</script>
<a href={drugLink}>
    <span class="bg-[#f8f8f8] text-gray-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
        <path d="M20 6L9 17l-5-5"></path>
      </svg>
    </span>{drugName}
  </a>