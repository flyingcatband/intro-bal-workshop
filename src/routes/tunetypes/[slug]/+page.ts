import type { PageLoadEvent } from './$types.js';
import { error } from '@sveltejs/kit';

// this is where the site loads the data for a specific set
export async function load({
	parent,
	params: { slug }
}: PageLoadEvent): Promise<{ section: object }> {
	const data = await parent();
	const section = data.folder.content.find((set) => set.name.toLowerCase() === slug.toLowerCase());
	if (section) {
		return { section };
	} else {
		throw error(404, 'Not found');
	}
}
