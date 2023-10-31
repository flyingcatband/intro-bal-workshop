<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Introduction to playing for balfolk - Flying Cat</title>
</svelte:head>

<section class="prose max-w-[80ch] my-8 mx-auto">
	<h1>Introduction to playing for balfolk</h1>
	<p>
		Here's a selection of tunes we like to play for Bal dancing. We've picked tunes that we hope are
		fairly simple to pick up and not too difficult to play, but have a lot of scope for
		experimenting with harmonies, interesting chords and generally messing around. We've written
		chord suggestions for most of the tunes, but these are just suggestions. Neither of us really
		speaks French or Dutch, so apologies in advance for some interesting attempts at pronouncing
		tune names.
	</p>
	<p>
		Tunes in this style tend to be in more interesting keys than English/Irish tunes. We've included
		the tunes in original keys, but don't hesitiate to ask us to play them in different keys if
		these don't work for your instrument. This website makes transposing to any key really easy.
	</p>
	<p>
		We'll aim to play the tunes at a speed suitable for dancing, but on the slower end of that
		range, to give you a bit more time to get your fingers round the tunes and find spaces to
		experiment. If there's keys or tunes that your instrument can't do, please let us know when you
		join the session so we can accomodate.
	</p>
	<p>
		We've made some recordings of some of the tunes, available in <a
			href="https://drive.google.com/drive/u/1/folders/1y7lppt3fLdRtwwM9GCGsHtalFamOFobm"
			>this Google Drive folder</a
		>. The code behind this website, including abc notation for the tunes is
		<a href="https://github.com/flyingcatband/intro/bal-workshop">on GitHub</a>. If you have any
		feedback or questions, have found a typo or generally just want to chat with us, email
		<a href="mailto:band@flyingcat.dance">band@flyingcat.dance</a>.
	</p>
	<h2>The tune types</h2>
	<ul class="prose-lg">
		{#each data.folder.content as section}
			<li><a href={`/tunetypes/${section.name}`}>{section.name}</a></li>
		{/each}
	</ul>

	<p class="my-12 prose-sm">
		This site is powered by <a href="https://www.npmjs.com/package/@flyingcatband/tunebook"
			>our tunebook javascript library</a
		>, if you'd like something like this for your band,
		<a href="mailto:band@flyingcat.dance">get in touch</a>!
	</p>
</section>
