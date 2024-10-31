
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
  const appId = process.env.ADZUNA_ID;
  const appKey = process.env.ADZUNA_KEY;

  if (!appId || !appKey) {
    console.error('Missing Adzuna API credentials');
    return json({ error: 'Server configuration error' }, { status: 500 });
  }

  const apiUrl = new URL(`https://api.adzuna.com/v1/api/jobs/us/search/1`);
  apiUrl.searchParams.append('app_id', appId);
  apiUrl.searchParams.append('app_key', appKey);

  // Pass query parameters from the client to the API
  url.searchParams.forEach((value, key) => {
    apiUrl.searchParams.append(key, value);
  });

  try {
    const response = await fetch(apiUrl.toString());
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Adzuna API error:', errorData);
      return json({ error: `API error: ${response.status} ${response.statusText}` }, { status: response.status });
    }
    const data = await response.json();
    return json(data.results);
  } catch (error) {
    console.error('Error fetching jobs from Adzuna:', error);
    return json({ error: 'Error fetching jobs' }, { status: 500 });
  }
}