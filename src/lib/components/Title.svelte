<script lang="ts">
	let { title } = $props();
</script>

<svelte:head>
	<title>Industry Tycoon {title ? '| ' + title : ''}</title>
</svelte:head>
