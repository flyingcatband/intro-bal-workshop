<script>
	import { goto } from '$app/navigation';
	import { ViewSet } from '@flyingcatband/tunebook';
	export let data;
</script>

<svelte:head>
	<title>{data.set.title} | Intro to Balfolk by Flying Cat</title>
</svelte:head>

<button class="z-10 fixed left-2" on:click={() => goto('..')}>Back</button>
<ViewSet set={data.set} fontFamily="IBM Plex Mono" />
