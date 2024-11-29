<script lang="ts">
	let { title } = $props();
</script>

<svelte:head>
	<title>Age of Exploitation {title ? '| ' + title : ''}</title>
</svelte:head>
