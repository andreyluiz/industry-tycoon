<script lang="ts">
	import { getRandomLands } from '$lib/chance';
	import Button from '$lib/components/Button.svelte';
	import LandCard from '$lib/components/LandCard.svelte';
	import { wallet } from '$lib/stores/wallet';
	import { type Land } from '$lib/types';
	import { onMount } from 'svelte';

	let lands: Land[] = [];

	onMount(() => {
		lands = getRandomLands(6);
	});
</script>

{#snippet footer(land: Land)}
	<Button
		variant="primary"
		label={$wallet.balance < land.price ? 'Insufficient balance' : 'Buy'}
		disabled={$wallet.balance < land.price}
	/>
{/snippet}

<div class="mx-auto my-20 flex max-w-6xl flex-col gap-4 px-4">
	<p class="text-zinc-400">Balance: ${$wallet.balance.toLocaleString()}</p>
	<h1 class="text-2xl font-bold">Welcome to the Exploitation Age.</h1>
	<p class="text-zinc-400">
		You are a young entrepreneur who wants to make a fortune by exploiting whatever is thrown at
		you.
	</p>
	<p class="text-zinc-400">
		Before anything else, you need to buy some land. Check below some options:
	</p>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#if lands.length === 0}
			<div class="text-zinc-400">Loading lands...</div>
		{:else}
			{#each lands as land (land.title + '-' + land.size + '-' + land.price)}
				<LandCard {land} {footer} />
			{/each}
		{/if}
	</div>
</div>
