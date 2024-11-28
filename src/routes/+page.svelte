<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import { wallet } from '$lib/stores/wallet';
</script>

<div class="mx-auto my-20 flex max-w-6xl flex-col gap-4 px-4">
	<p class="text-zinc-400">Balance: ${$wallet.balance.toLocaleString()}</p>
	<h1 class="text-2xl font-bold">Welcome to the Exploitation Age.</h1>
	<p class="text-zinc-400">
		You are a young entrepreneur who wants to make a fortune by exploiting whatever is thrown at
		you.
	</p>
	<p class="text-zinc-400">Before anything else, you need to buy some land.</p>

	<Button label="Buy land" on:click={() => goto('/lands')} />
</div>
