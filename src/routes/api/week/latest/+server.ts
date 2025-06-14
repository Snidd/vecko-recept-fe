import type { RequestHandler } from '@sveltejs/kit';
import { VECKO_MENY_API_URL } from '$env/static/private';

export const GET: RequestHandler = async ({ fetch }) => {
	const image = await fetch(`${VECKO_MENY_API_URL}/api/week/latest`);

	return new Response(image.body, {
		headers: {
			'content-type': 'application/json'
		}
	});
};
