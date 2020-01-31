<script>
  import Element from './Element.svelte'
  export let rowData
</script>

<tr>
  {#each rowData as elementData}
    <Element {elementData} />
  {/each}
</tr>