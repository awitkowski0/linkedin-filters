// src/stores/jobsStore.js
import { writable, get } from 'svelte/store';
import { searchParams } from './stores.js';

export const jobs = writable([]);
export const loadingJobs = writable(false);
export const jobsError = writable(null);

let previousParams = {};

export async function fetchJobs() {
  loadingJobs.set(true);
  jobsError.set(null);

  const appId = process.env.ADZUNA_ID;
  const appKey = process.env.ADZUNA_KEY;

  const url = new URL(`https://api.adzuna.com/v1/api/jobs/us/search/1`);
  url.searchParams.append('app_id', appId);
  url.searchParams.append('app_key', appKey);
  url.searchParams.append('results_per_page', '50');
  url.searchParams.append('content-type', 'application/json');

  // Get the current search parameters
  const params = get(searchParams);

  // Add parameters to the URL
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.searchParams.append(key, value);
    }
  });

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    jobs.set(data.results);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    jobsError.set(error);
  } finally {
    loadingJobs.set(false);
  }
}

// Reactive statement to refetch jobs when searchParams change
$: if (JSON.stringify(get(searchParams)) !== JSON.stringify(previousParams)) {
  previousParams = { ...get(searchParams) };
  fetchJobs();
}
