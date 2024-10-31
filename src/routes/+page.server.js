// src/routes/+page.server.js
export const prerender = false;

import { error } from '@sveltejs/kit';

export async function load({ fetch, url }) {
  try {
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
  } catch (err) {
    console.error('Load function error:', err);
    throw error(500, 'Internal Server Error');
  }
}
