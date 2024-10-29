<script lang="ts">
import JobSearchHeader from './JobSearchHeader.svelte';
import FilterColumn from './FilterColumn.svelte';
import JobBoard from './JobBoard.svelte';

</script>

<main class="flex overflow-hidden flex-col bg-stone-100">
  <JobSearchHeader />
  <div class="self-center w-full max-w-[1074px] max-md:max-w-full">
    <div class="flex gap-5 max-md:flex-col">
      <FilterColumn />
      <JobBoard />
    </div>
  </div>
</main>