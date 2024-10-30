<script>
import FilterSection from './FilterSection.svelte';
import BoardSection from './BoardSection.svelte';
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
  margin-bottom: 200px;
}

.content-wrapper {
  align-self: center;
  width: 100%;
  max-width: 1074px;
  display: flex;
  gap: 20px;
}

.sidebar {
  width: 19%;
}

@media (max-width: 991px) {
  .content-wrapper {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    max-width: 100%;
  }

  .sidebar {
    width: 100%;
  }
}
</style>