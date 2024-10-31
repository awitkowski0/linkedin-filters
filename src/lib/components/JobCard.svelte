<script>
  export let job;
  export let isActive = false;

  function handleClick() {
    // Dispatch an event to notify parent component of the selected job
    const event = new CustomEvent('selectJob', {
      detail: job,
    });
    dispatchEvent(event);
  }
</script>

<button class="job-card {isActive ? 'active' : ''}" on:click={handleClick}>
  <div class="job-card__logo">
    <img src={job.companyLogo} alt="{job.company} logo" />
  </div>
  <div class="job-card__info">
    <h3>{job.title}</h3>
    <p>{job.company}</p>
    <p>{job.location}</p>
  </div>
</button>

<style>
  .job-card {
    width: 384.75px;
    height: 125px;
    border: 1px solid #e8e8e8;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
    text-align: left;
    cursor: pointer;
    display: flex;
    border-left: 4px solid transparent;
    font-family: Inter, sans-serif; /* Added font family */
  }

  .job-card.active {
    border-left-color: #0b66c2;
    background-color: #eef3f8;
  }

  .job-card__logo img {
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 4px;
  }

  .job-card__info {
    margin-left: 10px;
    flex-grow: 1;
  }

  .job-card__info h3 {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }

  .job-card__info p {
    margin: 5px 0;
    color: #666;
    font-size: 14px;
  }
</style>
