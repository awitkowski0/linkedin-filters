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

  const params = new URLSearchParams();
  Object.entries(get(searchParams)).forEach(([key, value]) => {
    if (value) {
      params.append(key, value);
    }
  });

  try {
    const response = await fetch(`/api/jobs?${params.toString()}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `API error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    jobs.set(data);
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
