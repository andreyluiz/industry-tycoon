<script lang="ts">
	import { wallet } from '$lib/stores/wallet';
	import Icon from '@iconify/svelte';
</script>

<div class="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 p-4 shadow-sm">
	<p class="flex items-center gap-2 text-zinc-400">
		<Icon icon="mdi:wallet" class="text-2xl" /> ${$wallet.balance.toLocaleString()}
	</p>

	<div class="flex items-center gap-4">
		<a href="/" class="flex items-center gap-2 text-zinc-400 hover:text-zinc-100">
			<Icon icon="game-icons:house" class="text-2xl" />
			Home
		</a>
		<a href="/my/lands" class="flex items-center gap-2 text-zinc-400 hover:text-zinc-100">
			<Icon icon="game-icons:hill-conquest" class="text-2xl" />
			My Lands
		</a>
	</div>
</div>
