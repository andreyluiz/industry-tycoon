<script lang="ts">
	import classNames from 'classnames';

	export let label = 'Buy';
	export let variant: 'primary' | 'secondary' = 'primary';
	export let disabled = false;
</script>

<button
	class={classNames(
		'cursor-pointer rounded px-4 py-2 text-zinc-200 disabled:cursor-not-allowed disabled:opacity-50',
		variant === 'primary' &&
			'bg-green-600 hover:bg-green-500 active:bg-green-600 disabled:hover:bg-green-600 disabled:active:bg-green-600',
		variant === 'secondary' &&
			'bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-600 disabled:hover:bg-zinc-600 disabled:active:bg-zinc-600'
	)}
	{disabled}
	on:click
>
	{label}
</button>
