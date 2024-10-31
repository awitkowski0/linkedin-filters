// src/routes/+page.server.js
import { error } from '@sveltejs/kit';

export async function load({ fetch, url }) {
  const params = new URLSearchParams(url.searchParams);

  // Include default parameters if needed
  params.set('results_per_page', '50');

  const response = await fetch(`/api/jobs?${params.toString()}`);

  if (response.ok) {
    const jobsData = await response.json();
    return { jobs: jobsData };
  } else {
    throw error(response.status, 'Failed to load jobs');
  }
}