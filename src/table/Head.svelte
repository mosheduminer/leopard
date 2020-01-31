<script>
  export let labels
</script>

<thead>
  <tr>
    {#each labels as label}
      <th>{label}</th>
    {/each}
  </tr>
</thead>