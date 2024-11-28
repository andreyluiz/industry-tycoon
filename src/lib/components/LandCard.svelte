<script lang="ts">
	import { ResourceLocation, type Land, type Resource } from '$lib/types';
	import Icon from '@iconify/svelte';
	import { onMount, type Snippet } from 'svelte';

	interface Props {
		footer: Snippet<[Land]>;
		land: Land;
	}

	let { footer, land }: Props = $props();

	let hoveredResource: Resource | null = $state(null);
	let hoveredResourcePosition: { x: number; y: number } | null = $state(null);
	let hoveredResourceElement: HTMLSpanElement | null = null;

	const recalculateHoveredResourcePosition = () => {
		const rect = hoveredResourceElement?.getBoundingClientRect();
		hoveredResourcePosition = rect ? { x: rect.left, y: rect.top } : null;
	};

	$effect(() => {
		if (hoveredResourceElement) {
			recalculateHoveredResourcePosition();
		}
	});

	onMount(() => {
		window.addEventListener('resize', recalculateHoveredResourcePosition);

		return () => {
			window.removeEventListener('resize', recalculateHoveredResourcePosition);
		};
	});
</script>

{#if hoveredResource}
	<div
		class="absolute inset-0 z-50 h-[86px] w-[268px] border border-zinc-800 bg-zinc-700 p-4 shadow-2xl"
		style="top: calc({hoveredResourcePosition?.y}px - 86px); left: {hoveredResourcePosition?.x}px"
	>
		<div class="flex items-center gap-2">
			<img src={hoveredResource.image} alt={hoveredResource.title} class="size-10 rounded" />
			<div>
				<h3 class="flex items-center gap-1 font-medium text-zinc-100">
					{#if hoveredResource.location === ResourceLocation.Surface}
						<Icon icon="game-icons:up-card" />
					{:else}
						<Icon icon="game-icons:underground-cave" />
					{/if}
					{hoveredResource.location}
					{hoveredResource.title}
				</h3>
				<div class="flex items-center gap-1">
					<span class="text-sm font-medium text-zinc-400">Amount:</span>
					<span class="text-zinc-200">{hoveredResource.amount}</span>
				</div>
			</div>
		</div>
	</div>
{/if}

<div
	class="cursor-default rounded-lg bg-zinc-700 p-4 shadow-sm"
	data-title={land.title}
	class:opacity-30={hoveredResource}
>
	<div class="mb-4 flex items-center gap-2 border-b border-zinc-800 pb-2">
		<h3 class="m-0 font-medium text-zinc-100">{land.title}</h3>
		<button class="cursor-pointer text-zinc-400 hover:text-zinc-200" title={land.description}>
			<Icon icon="game-icons:info" />
		</button>
	</div>

	<img
		src={land.image}
		alt={land.title}
		class="mb-4 aspect-square w-full rounded object-cover"
		onerror={(e) => console.error(`Image failed to load for ${land.title}:`, e)}
	/>

	<div class="flex flex-col gap-3">
		<div class="flex gap-8">
			<div class="flex flex-col gap-1">
				<span class="text-sm font-medium text-zinc-400">Size:</span>
				<span class="text-zinc-200">{land.size.toLocaleString()} acres</span>
			</div>

			<div class="flex flex-col gap-1">
				<span class="text-sm font-medium text-zinc-400">Type:</span>
				<span class="text-zinc-200">{land.type}</span>
			</div>
		</div>

		<div class="flex flex-col gap-1">
			<span class="text-sm font-medium text-zinc-400">Resources:</span>
			<div class="flex flex-wrap gap-2" bind:this={hoveredResourceElement}>
				{#each land.resources as resource}
					<span
						class="flex items-center gap-1 rounded bg-zinc-600 px-2 py-1 text-sm text-zinc-200"
						onmouseenter={() => (hoveredResource = resource)}
						onmouseleave={() => (hoveredResource = null)}
						role="button"
						tabindex={0}
					>
						{#if resource.location === ResourceLocation.Surface}
							<Icon icon="game-icons:up-card" />
						{:else}
							<Icon icon="game-icons:underground-cave" />
						{/if}
						{resource.title}: {resource.amount}
					</span>
				{/each}
			</div>
		</div>

		<div class="flex flex-col gap-1">
			<span class="text-sm font-medium text-zinc-400">Price:</span>
			<span class="text-zinc-200">${land.price.toLocaleString()}</span>
		</div>
	</div>

	{#if footer}
		<div class="mt-4 flex justify-end gap-2 border-t border-zinc-800 pt-4">
			{@render footer(land)}
		</div>
	{/if}
</div>
