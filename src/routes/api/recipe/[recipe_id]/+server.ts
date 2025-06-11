import type { RequestHandler } from '@sveltejs/kit';

export const PUT: RequestHandler = async ({ params, request, fetch }) => {
	const recipeId = params.recipe_id;
	if (!recipeId) {
		return new Response('Recipe ID is required', { status: 400 });
	}

	const formData = await request.formData();
	const result = await fetch(`http://localhost:8080/api/recipe/${recipeId}`, {
		method: 'PUT',
		body: formData
	});

	if (!result.ok) {
		return new Response('Failed to update recipe', { status: result.status });
	}

	const response = (await result.json()) as { success: boolean; message?: string };
	return new Response(JSON.stringify(response), {
		headers: { 'Content-Type': 'application/json' }
	});
};
