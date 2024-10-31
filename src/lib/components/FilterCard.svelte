<script>
  let filters = [];
  let antiFilters = [];
  let filterInput = '';
  let antiFilterInput = '';

  function addFilter() {
    if (filterInput.trim()) {
      filters = [...filters, { text: filterInput.trim(), enabled: true }];
      filterInput = '';
    }
  }

  function addAntiFilter() {
    if (antiFilterInput.trim()) {
      antiFilters = [...antiFilters, { text: antiFilterInput.trim(), enabled: true }];
      antiFilterInput = '';
    }
  }

  function toggleFilter(index) {
    filters[index].enabled = !filters[index].enabled;
  }

  function removeFilter(index) {
    filters = filters.filter((_, i) => i !== index);
  }

  function toggleAntiFilter(index) {
    antiFilters[index].enabled = !antiFilters[index].enabled;
  }

  function removeAntiFilter(index) {
    antiFilters = antiFilters.filter((_, i) => i !== index);
  }
</script>

<section class="filter-section">
  <div class="filter-group">
    <h3>Filters</h3>
    <div class="input-group">
      <input
        type="text"
        placeholder="Add filter..."
        bind:value={filterInput}
        on:keydown={(e) => e.key === 'Enter' && addFilter()}
      />
      <button on:click={addFilter}>Add</button>
    </div>
    <div class="tags">
      {#each filters as filter, index}
        <div class="tag {filter.enabled ? 'enabled' : 'disabled'}">
          <span on:click={() => toggleFilter(index)}>{filter.text}</span>
          <button on:click={() => removeFilter(index)}>×</button>
        </div>
      {/each}
    </div>
  </div>

  <div class="filter-group">
    <h3>Anti-Filters</h3>
    <div class="input-group">
      <input
        type="text"
        placeholder="Add anti-filter..."
        bind:value={antiFilterInput}
        on:keydown={(e) => e.key === 'Enter' && addAntiFilter()}
      />
      <button on:click={addAntiFilter}>Add</button>
    </div>
    <div class="tags">
      {#each antiFilters as filter, index}
        <div class="tag {filter.enabled ? 'enabled' : 'disabled'}">
          <span on:click={() => toggleAntiFilter(index)}>{filter.text}</span>
          <button on:click={() => removeAntiFilter(index)}>×</button>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .filter-section {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    color: #171818;
    font-family: Inter, sans-serif; /* Added font family */
    font-size: 16px;
    border: 1px solid #e8e8e8;
    padding: 20px;
    overflow-y: auto;
  }

  .filter-group {
    margin-bottom: 20px;
  }

  .input-group {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }

  .input-group input {
    flex-grow: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: Inter, sans-serif; /* Ensure input uses the font */
    font-size: 14px;
  }

  .input-group button {
    padding: 8px 12px;
    background-color: #0b66c2;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: Inter, sans-serif; /* Ensure button uses the font */
    font-size: 14px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .tag {
    display: flex;
    align-items: center;
    background-color: #e1ecf4;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-family: Inter, sans-serif; /* Ensure tag uses the font */
    font-size: 14px;
  }

  .tag.disabled {
    background-color: #f0f0f0;
    color: #888;
  }

  .tag span {
    margin-right: 5px;
  }

  .tag button {
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    font-family: Inter, sans-serif; /* Ensure button uses the font */
  }

  .filter-group h3 {
    font-size: 18px;
    margin-bottom: 10px;
    font-family: Inter, sans-serif; /* Ensure heading uses the font */
  }

  @media (max-width: 991px) {
    .filter-section {
      padding-bottom: 100px;
    }
  }
</style>
