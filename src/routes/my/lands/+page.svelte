<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import LandCard from '$lib/components/LandCard.svelte';
	import Title from '$lib/components/Title.svelte';
	import { wallet } from '$lib/stores/wallet';
	import { type Land } from '$lib/types';
	import { onMount } from 'svelte';

	let lands: Land[] = $state([]);
	let loading = $state(true);

	onMount(async () => {
		lands = await fetch('/api/my/lands').then((res) => res.json());
		loading = false;
	});
</script>

<Title title="My lands" />

{#snippet footer(land: Land)}
	<Button
		variant="primary"
		label={$wallet.balance < land.price ? 'Insufficient balance' : 'Buy'}
		disabled={$wallet.balance < land.price}
	/>
{/snippet}

<div class="mx-auto my-20 flex max-w-6xl flex-col gap-4 px-4">
	<h1 class="text-2xl font-bold">Your lands</h1>

	{#if loading}
		<div class="text-zinc-400">Loading lands...</div>
	{:else if lands.length === 0}
		<div class="text-zinc-400">You don't have any lands yet.</div>
		<Button variant="primary" label="Buy a land" on:click={() => goto('/lands')} />
	{:else}
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each lands as land (land.title + '-' + land.size + '-' + land.price)}
				<LandCard {land} {footer} />
			{/each}
		</div>
	{/if}
</div>
