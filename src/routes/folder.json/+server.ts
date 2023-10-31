import { generateFolderFromLatex } from '@flyingcatband/tunebook/server';
import { json } from '@sveltejs/kit';

export const prerender = true;

// This is where the site turns your abc and optionally tex files into a format it can work with
export async function GET(): Promise<Response> {
	const danceNotes = [
		{
			name: 'Schottische',
			notes:
				'We like to play schottisches with a light bounce. Here is an video of what this dance can look like.',
			videos: ['s37NJhmU1eQ']
		},
		{
			name: 'Bourrée',
			notes:
				"Rhythm wise, the emphasis in a bourrée should be like a heartbeat, on the first and last quavers of the bar (regardless of how many quavers in between). This should help it not sound and feel like a polka or waltz, and make the dancers bounce in the right places. Here's one to watch.",
			videos: ['rzA-ddNBb98']
		},
		{
			name: 'Mazurka',
			notes:
				'The first video shows Mazurka à Clément, and the kind of slinky feeling we like to try and put into mazurkas. The second video shows what the dance feels like.',
			videos: ['8akn5rbECCM', 'k7kSRLuk-XI']
		},
		{
			name: 'Waltz',
			notes:
				"Bal waltzes go a bit faster than you might be expecting if you've played ceilidh or contra music before. There's also a lot of waltzes that have more than 3 beats, commonly 5, 8 or even 11 or 13. This video shows some people dancing to Robin's waltz. ",
			videos: ['hHUco3NDnv4']
		},
		{
			name: 'Jig',
			notes:
				"Tunes that look like English/Irish jigs are used for a variety of dances, including circassian circle, chappelloise and rondo. They are usually quite fast, light and bouncy. Here's a video of people dancing Cercle to Zelda.",
			videos: ['ctKZeXN9zyA']
		},
		{
			name: 'Polka',
			notes:
				"Polkas go REALLY FAST. Finding polkas that don't have a crazy amount of notes in is a bit tricky. Here's a video of this tune played for a polka",
			videos: ['qGtty2kWCNc']
		},
		{
			name: "Gavotte de l'Aven",
			notes:
				'The defining feature of this kind of tune is a little hole where the dance step pauses. Watch Naragonia make the most of this feature here',
			videos: ['qFbyOqFIzKk']
		}
	];
	const folder = await generateFolderFromLatex('Intro to balfolk', './data/folder.tex');
	folder.content.map((value, index) => {
		return Object.assign(value, danceNotes[index]);
	});

	return json(folder);
}
