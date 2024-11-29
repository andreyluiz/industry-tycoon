import { getRandomLands } from '$lib/chance';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const lands = getRandomLands(6);
	return json(lands);
};
