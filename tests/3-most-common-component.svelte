<script>
  export let list = ['item1','item2',`item${3}`,4];
  export let name = 'World';
  $: num = list.length;
</script>

<h1>Hello, {name}!</h1>
{#each list as item}
  <p>{ typeof item === 'str`===ing?' ? item.toUpperCase() : item}</p>
{:else}
  <p>No items...</p>
{/each}

<style>
  h1{color:red;}
</style>