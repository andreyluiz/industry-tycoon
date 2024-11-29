<script lang="ts">
	import classNames from 'classnames';

	export let label = 'Buy';
	export let variant: 'primary' | 'secondary' = 'primary';
	export let disabled = false;
</script>

<button
	class={classNames(
		'cursor-pointer rounded px-4 py-2 text-zinc-200 transition-colors disabled:cursor-not-allowed disabled:opacity-50',
		variant === 'primary' &&
			'bg-green-700 hover:bg-green-600 active:bg-green-700 disabled:hover:bg-green-700 disabled:active:bg-green-700',
		variant === 'secondary' &&
			'bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-600 disabled:hover:bg-zinc-600 disabled:active:bg-zinc-600'
	)}
	{disabled}
	on:click
>
	{label}
</button>
