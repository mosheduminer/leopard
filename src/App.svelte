<script>
	import Table from './table/Table.svelte'
	import Search from './Search.svelte'
	export let data, labels
	let searchTerm = ""
	$: searchKey = RegExp(searchTerm, "gi")
</script>

<main>
	<Search bind:searchTerm={searchTerm} />
	<Table table={data} {labels} {searchKey} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>