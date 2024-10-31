<script>
  import { filters, antiFilters } from '../../stores.js';

  let filterInput = '';
  let antiFilterInput = '';

  function addFilter() {
    if (filterInput.trim()) {
      filters.update((f) => [...f, { text: filterInput.trim(), enabled: true }]);
      filterInput = '';
    }
  }

  function addAntiFilter() {
    if (antiFilterInput.trim()) {
      antiFilters.update((f) => [...f, { text: antiFilterInput.trim(), enabled: true }]);
      antiFilterInput = '';
    }
  }

  function toggleFilter(index) {
    filters.update((f) => {
      f[index].enabled = !f[index].enabled;
      return f;
    });
  }

  function removeFilter(index) {
    filters.update((f) => f.filter((_, i) => i !== index));
  }

  function toggleAntiFilter(index) {
    antiFilters.update((f) => {
      f[index].enabled = !f[index].enabled;
      return f;
    });
  }

  function removeAntiFilter(index) {
    antiFilters.update((f) => f.filter((_, i) => i !== index));
  }
</script>

<section class="filter-section">
  <div class="filter-group">
    <h3>Filters</h3>
    <div class="input-group">
      <div class="search-input-wrapper">
        <div class="input-icon">
          <!-- Search Icon SVG -->
          <svg
            role="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              d="M14.56 13.44l-3.3-3.3a5.5 5.5 0 10-1.06 1.06l3.3 3.3a.75.75 0 101.06-1.06zM2.75 7a4.25 4.25 0 114.25 4.25A4.25 4.25 0 012.75 7z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Add filter..."
          bind:value={filterInput}
          on:keydown={(e) => e.key === 'Enter' && addFilter()}
          class="search-input"
        />
      </div>
      <button class="search-button" on:click={addFilter}>Add</button>
    </div>
    <div class="tags">
      {#each $filters as filter, index}
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
      <div class="search-input-wrapper">
        <div class="input-icon">
          <!-- Search Icon SVG -->
          <svg
            role="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              d="M14.56 13.44l-3.3-3.3a5.5 5.5 0 10-1.06 1.06l3.3 3.3a.75.75 0 101.06-1.06zM2.75 7a4.25 4.25 0 114.25 4.25A4.25 4.25 0 012.75 7z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Add anti-filter..."
          bind:value={antiFilterInput}
          on:keydown={(e) => e.key === 'Enter' && addAntiFilter()}
          class="search-input"
        />
      </div>
      <button class="search-button" on:click={addAntiFilter}>Add</button>
    </div>
    <div class="tags">
      {#each $antiFilters as filter, index}
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
    font-family: Inter, sans-serif;
    font-size: 16px;
    border: 1px solid #e8e8e8;
    padding: 20px;
    overflow-y: auto;
  }

  .filter-group {
    margin-bottom: 20px;
  }

  .filter-group h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .input-group {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  /* Styles similar to the search bar */
  .search-input-wrapper {
    position: relative;
    flex-grow: 1;
  }

  .input-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    fill: #666;
  }

  .search-input {
    width: 100%;
    height: 35px;
    border-radius: 3px;
    background: #EDF3F7;
    border: none;
    padding: 0 10px 0 35px;
    color: #000;
    font-family: Inter, sans-serif;
    font-size: 14px;
  }

  .search-button {
    height: 35px;
    border-radius: 3px;
    background: #fff;
    border: 1px solid #0B66C2;
    color: #0B66C2;
    font-family: Inter, sans-serif;
    font-size: 14px;
    padding: 0 15px;
    cursor: pointer;
  }

  /* Tag styles */
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
    font-family: Inter, sans-serif;
    font-size: 14px;
  }

  .tag.enabled {
    background-color: #e1ecf4;
    color: #0B66C2;
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
    color: #888;
  }

  @media (max-width: 991px) {
    .filter-section {
      padding-bottom: 100px;
    }
  }
</style>
