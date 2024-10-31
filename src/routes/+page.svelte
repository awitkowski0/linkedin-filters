<!-- src/routes/+page.svelte -->
<script>
  import FilterSection from '../lib/components/FilterSection.svelte';
  import BoardSection from '../lib/components/BoardSection.svelte';
</script>

<main class="job-search">
  <div class="content-wrapper">
    <aside class="sidebar">
      <FilterSection />
    </aside>
    <BoardSection />
  </div>
</main>

<style>
  .job-search {
    background-color: #f4f2ee;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: calc(100vh - 65px); /* Adjust for header height */
  }

  .content-wrapper {
    display: flex;
    flex-grow: 1;
    overflow: hidden;
  }

  .sidebar {
    width: 19%;
    overflow-y: auto;
  }

  @media (max-width: 991px) {
    .content-wrapper {
      flex-direction: column;
    }

    .sidebar {
      width: 100%;
      height: auto;
    }
  }
</style>
