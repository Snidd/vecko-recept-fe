import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ fetch }) => {
	const image = await fetch(`http://localhost:8080/api/week/latest`);

	return new Response(image.body, {
		headers: {
			'content-type': 'application/json'
		}
	});
};
