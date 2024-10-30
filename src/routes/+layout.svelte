<script>
  import Header from '$lib/components/Header.svelte';
</script>

<Header />

<slot /> <!-- This is where your page content will be rendered -->

<style>
  :global(body) {
    background-color: #F4F2EE;
    margin: 0;
  }
</style>
