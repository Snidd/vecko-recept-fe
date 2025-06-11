import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params, fetch }) => {
	const image = await fetch(`http://localhost:8080/api/image/${params.image_id}`);

	return new Response(image.body, {
		headers: {
			'content-type': 'image/jpeg',
			'cache-control': 'public, max-age=31536000, immutable'
		}
	});
};
