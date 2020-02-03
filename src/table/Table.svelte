<script>
  import Body from './Body.svelte'
  import Head from './Head.svelte'
  export let labels, table, searchKey

  $: data = searchKey.toString() !== "/(?:)/" ? table.filter((row) => {
    return row.some(el => {
      return searchKey.test(el)
    }, false)
  }) : table
</script>

<table>
  <Head {labels} />
  <Body tableData={data} />
</table>