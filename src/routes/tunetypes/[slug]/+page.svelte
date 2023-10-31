<script>
	export let data;
	import { SetPreview } from '@flyingcatband/tunebook';

	import LiteYouTube from 'svelte-lite-youtube-embed';
</script>

<svelte:head>
	<title>{data.section.name} | Intro to Balfolk by Flying Cat</title>
</svelte:head>

<h1>{data.section.name}</h1>
<p class="prose mx-auto my-8">{data.section.notes}</p>
<div class="mx-auto w-96 max-w-full grid gap-8 my-8">
	{#each data.section.videos as v}
		<LiteYouTube videoId={v} noCookie={true} posterLoading="eager" />
	{/each}
</div>

<div class="set-list">
	{#each data.section.content as set}
		<SetPreview {set} tuneFont="IBM Plex Mono" basePath="../" />
	{/each}
</div>

<style lang="postcss">
	.set-list {
		@apply flex flex-wrap gap-6 justify-center m-4 mb-8;
	}
</style>
