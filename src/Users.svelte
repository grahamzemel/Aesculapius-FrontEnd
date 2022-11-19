<script lang="ts">
    async function getUsers() {
    const res = await fetch('https://api.github.com/users');
    const users = await res.json();

    if (res.ok) {
      return users;
    } else {
      throw new Error(users);
    }
  }

  $: allUsersPromise = getUsers();
</script>
<section class="w-1/2 m-auto border border-gray-400 p-8 rounded">
    {#await allUsersPromise then users}
      {#each users as user}
        <div class="flex items-center mb-4">
            <img src={user.avatar_url} alt={user.login} class="w-10 h-10 rounded-full" />
        </div>
      {/each}
    {/await}
  </section>