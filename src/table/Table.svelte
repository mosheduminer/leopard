<script>
  import Body from './Body.svelte'
  import Head from './Head.svelte'
  export let labels, table, searchKey

  $: data = table.filter((row) => {
    return row.reduce((accum, curr) => {
      if (searchKey.test(curr) || accum) {
        return true
      }
    }, false)
  })
</script>

<table>
  <Head {labels} />
  <Body tableData={data} />
</table>