<script lang="ts">
	import './app.css';
	import fPassIcon from '$lib/assets/fpas-logo white.png';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={fPassIcon} /></svelte:head>
{@render children()}
