<script>
  import { filters, antiFilters, searchParams } from '../../stores/stores.js';

  // Inputs for filters
  let filterInput = '';
  let antiFilterInput = '';

  let salaryMin = '';
  let salaryMax = '';
  let experienceLevel = '';
  let company = '';
  let remoteOnly = false;

  // Update the `searchParams` store when inputs change
  $: searchParams.update((params) => ({
    ...params,
    salary_min: salaryMin,
    salary_max: salaryMax,
    category: experienceLevel,
    company,
    what: remoteOnly ? `${params.what || ''} remote` : params.what || '',
  }));

  // Functions to manage filters
  function addFilter() {
    if (filterInput.trim()) {
      filters.update((fs) => [...fs, { text: filterInput.trim(), enabled: true }]);
      filterInput = '';
    }
  }

  function removeFilter(index) {
    filters.update((fs) => fs.filter((_, i) => i !== index));
  }

  function toggleFilter(index) {
    filters.update((fs) => {
      fs[index].enabled = !fs[index].enabled;
      return fs;
    });
  }

  function addAntiFilter() {
    if (antiFilterInput.trim()) {
      antiFilters.update((afs) => [...afs, { text: antiFilterInput.trim(), enabled: true }]);
      antiFilterInput = '';
    }
  }

  function removeAntiFilter(index) {
    antiFilters.update((afs) => afs.filter((_, i) => i !== index));
  }

  function toggleAntiFilter(index) {
    antiFilters.update((afs) => {
      afs[index].enabled = !afs[index].enabled;
      return afs;
    });
  }

  // Function to clear filters
  function clearFilters() {
    salaryMin = '';
    salaryMax = '';
    experienceLevel = '';
    company = '';
    remoteOnly = false;

    // Clear filters and anti-filters
    filters.set([]);
    antiFilters.set([]);

    // Preserve `what` and `where` from the header in `searchParams`
    searchParams.update((params) => ({
      what: params.what,
      where: params.where,
    }));
  }
</script>
<section class="filter-section">
  <!-- Filters Section -->
  <div class="filter-group">
    <h3>Filters</h3>
    <div class="input-group">
      <div class="search-input-wrapper">
        <div class="input-icon">
          <!-- Search Icon SVG -->
          <!-- Include your SVG icon here -->
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

  <!-- Anti-Filters Section -->
  <div class="filter-group">
    <h3>Anti-Filters</h3>
    <div class="input-group">
      <div class="search-input-wrapper">
        <div class="input-icon">
          <!-- Search Icon SVG -->
          <!-- Include your SVG icon here -->
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

  <!-- Existing Filters (Salary, Experience Level, etc.) -->
  <!-- Salary Range -->
  <div class="filter-group">
    <h3>Salary Range ($)</h3>
    <div class="input-group salary-range">
      <input
        type="number"
        placeholder="Min"
        bind:value={salaryMin}
        class="salary-input"
      />
      <span> - </span>
      <input
        type="number"
        placeholder="Max"
        bind:value={salaryMax}
        class="salary-input"
      />
    </div>
  </div>

  <!-- Experience Level -->
  <div class="filter-group">
    <h3>Experience Level</h3>
    <select bind:value={experienceLevel} class="dropdown">
      <option value="">Any</option>
      <option value="graduate">Entry level</option>
      <option value="junior">Associate</option>
      <option value="senior">Mid-Senior level</option>
      <option value="manager">Manager</option>
      <option value="director">Director</option>
      <option value="executive">Executive</option>
    </select>
  </div>

  <!-- Company -->
  <div class="filter-group">
    <h3>Company</h3>
    <div class="input-group">
      <input
        type="text"
        placeholder="Company name..."
        bind:value={company}
        class="search-input"
      />
    </div>
  </div>

  <!-- Remote Option -->
  <div class="filter-group">
    <label>
      <input type="checkbox" bind:checked={remoteOnly} />
      Remote Only
    </label>
  </div>

  <!-- Clear Filters Button -->
  <div class="filter-group">
    <button class="clear-button" on:click={clearFilters}>Clear Filters</button>
  </div>
</section>

<style>

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
