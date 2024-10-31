<script>
  import JobCard from './JobCard.svelte';

  // Sample job data
  let jobs = [
    {
      id: 1,
      title: 'Junior Developer',
      company: 'CloudRx Pharmacy Hub',
      location: 'Dallas, TX (On-site)',
      companyLogo: 'path/to/cloudrx-logo.png',
      description: 'Job description here...',
      // Add more job details as needed
    },
    // Add more job objects
  ];

  let selectedJob = jobs[0]; // Default selected job

  function handleSelectJob(event) {
    selectedJob = event.detail;
  }
</script>

<section class="board-section">
  <header class="board-header">
    <h2>Job List</h2>
  </header>
  <div class="board-content">
    <!-- Left Side: Job List -->
    <div class="left-side">
      {#each jobs as job}
        <JobCard
          {job}
          isActive={job.id === selectedJob.id}
          on:selectJob={handleSelectJob}
        />
      {/each}
    </div>

    <!-- Right Side: Job Details -->
    <div class="right-side">
      {#if selectedJob}
        <div class="job-details">
          <h1>{selectedJob.title}</h1>
          <h2>{selectedJob.company}</h2>
          <p>{selectedJob.location}</p>
          <!-- Additional job details -->
          <div class="job-description">
            <p>{selectedJob.description}</p>
          </div>
          <!-- Actions -->
          <div class="job-actions">
            <button class="apply-button">Apply</button>
            <button class="save-button">Save</button>
          </div>
        </div>
      {:else}
        <p>Select a job to view details</p>
      {/if}
    </div>
  </div>
</section>

<style>
  .board-section {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    width: 81%;
    border: 1px solid #e8e8e8;
    overflow: hidden;
  }

  .board-header {
    background-color: #0b66c2;
    width: 100%;
    height: 59px;
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    padding-left: 20px;
    color: #fff;
  }

  .board-content {
    display: flex;
    flex-grow: 1;
    overflow: hidden;
  }

  .left-side {
    width: 384.75px;
    overflow-y: auto;
    border-right: 1px solid #e8e8e8;
    background-color: #f4f4f4;
  }

  .right-side {
    flex-grow: 1;
    overflow-y: auto;
    padding: 20px;
  }

  .job-details h1 {
    margin-top: 0;
    font-size: 24px;
    color: #0b66c2;
  }

  .job-details h2 {
    font-size: 20px;
    color: #333;
  }

  .job-details p {
    font-size: 16px;
    color: #666;
  }

  .job-description {
    margin-top: 20px;
  }

  .job-actions {
    margin-top: 20px;
    display: flex;
    gap: 10px;
  }

  .apply-button,
  .save-button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }

  .apply-button {
    background-color: #0b66c2;
    color: #fff;
    border: none;
    border-radius: 4px;
  }

  .save-button {
    background-color: #fff;
    color: #0b66c2;
    border: 1px solid #0b66c2;
    border-radius: 4px;
  }

  @media (max-width: 991px) {
    .board-section {
      width: 100%;
    }
    .board-content {
      flex-direction: column;
    }
    .left-side {
      width: 100%;
      border-right: none;
      border-bottom: 1px solid #e8e8e8;
    }
  }
</style>
