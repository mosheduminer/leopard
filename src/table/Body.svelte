<script>
  import Row from './Row.svelte'
  export let tableData
</script>

<tbody>
  {#each tableData as rowData}
    <Row {rowData} />
  {/each}
</tbody>
