<script lang="ts">
    async function getUsers() {
    const res = await fetch('https://api.github.com/users');
    const users = await res.json();

    console.log('the users', users);

    if (res.ok) {
      return users;
    } else {
      throw new Error(users);
    }
  }

  getUsers();
</script>