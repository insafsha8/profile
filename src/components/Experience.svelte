<script>
    export let position;
    export let company;
    export let duration;
    export let responsibilities;
  </script>
  
  <div class="bg-white shadow-glass p-6 rounded-lg transition duration-300 transform hover:scale-105 mb-4">
    <h3 class="text-xl font-semibold text-primary">{company}</h3>
    <p class="text-gray-500 italic">{position} — {duration}</p>
    <ul class="list-disc pl-6 mt-2 space-y-1 text-gray-700">
      {#each responsibilities as responsibility}
        <li>{responsibility}</li>
      {/each}
    </ul>
  </div>
  