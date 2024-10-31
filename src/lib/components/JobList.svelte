<script>
  import JobCard from './JobCard.svelte';
  import { filters, antiFilters } from '../../stores.js';

  // Sample job data
  let jobs = [
    {
      id: 1,
      title: 'Junior Developer',
      company: 'CloudRx Pharmacy Hub',
      location: 'Dallas, TX (On-site)',
      companyLogo: 'path/to/cloudrx-logo.png',
      description: 'Job description here...',
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Web Solutions',
      location: 'San Francisco',
      companyLogo: 'path/to/websolutions-logo.png',
      description: 'Job description here...',
    },
    // Add more job objects
  ];

  // Reactive statement to filter jobs based on filters and anti-filters
  $: filteredJobs = jobs.filter((job) => {
    const activeFilters = $filters.filter((f) => f.enabled).map((f) => f.text.toLowerCase());
    const activeAntiFilters = $antiFilters.filter((f) => f.enabled).map((f) => f.text.toLowerCase());

    const jobText = `${job.title} ${job.company} ${job.location}`.toLowerCase();

    // Check if job matches at least one filter (if filters are set)
    const matchesFilter =
      activeFilters.length === 0 || activeFilters.some((filter) => jobText.includes(filter));

    // Check if job matches any anti-filter
    const matchesAntiFilter = activeAntiFilters.some((antiFilter) => jobText.includes(antiFilter));

    return matchesFilter && !matchesAntiFilter;
  });

  // Update selectedJob when filteredJobs change
  $: {
    if (!filteredJobs.includes(selectedJob)) {
      selectedJob = filteredJobs[0] || null;
    }
  }

  let selectedJob = filteredJobs[0] || null;

  function handleSelectJob(event) {
    selectedJob = event.detail;
  }
</script>

<section class="board-section">
  <header class="board-header">
    <!-- Header Content -->
    <h2>Job List</h2>
  </header>
  <div class="board-content">
    <!-- Left Side: Job List -->
    <div class="left-side">
      <ul class="job-list">
        {#each filteredJobs as job}
          <li>
            <JobCard
              {job}
              isActive={job.id === selectedJob?.id}
              on:selectJob={handleSelectJob}
            />
          </li>
        {/each}
        {#if filteredJobs.length === 0}
          <p class="no-results">No jobs match your filters.</p>
        {/if}
      </ul>
    </div>

    <!-- Right Side: Job Details -->
    <div class="right-side">
      {#if selectedJob}
        <!-- Job details content remains the same -->
      {:else}
        <p>Select a job to view details</p>
      {/if}
    </div>
  </div>
</section>

<style>
  /* Styles remain the same */
  .no-results {
    padding: 20px;
    text-align: center;
    color: #666;
    font-family: Inter, sans-serif;
  }

  .job-list {
    width: 384.75px;
    /* Ensure the job list takes the full available height */
    flex-grow: 1;
  }

  .job-card {
    width: 100%;
    height: 125px;
    border: 1px solid #e8e8e8;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
  }

  .job-card h4 {
    margin: 0 0 10px 0;
  }

  .job-card p {
    margin: 5px 0;
  }
</style>
