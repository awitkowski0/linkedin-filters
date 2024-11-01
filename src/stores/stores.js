// src/stores/stores.js
import { writable } from 'svelte/store';

export const filters = writable([]);
export const antiFilters = writable([]);
export const searchParams = writable({
  what: '',
  where: '',
});
