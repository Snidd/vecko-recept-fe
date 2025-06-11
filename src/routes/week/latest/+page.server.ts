import type { Actions } from './$types';

export const actions = {
	uploadpicture: async (event) => {
		// TODO log the user in
		console.log('uploadpicture action called');
		//console.log(await event.request.formData());

		const formData = await event.request.formData();
		const recipe_id = formData.get('recipe_id')?.toString();
		if (!recipe_id) {
			return { success: false, message: 'Recipe ID is required' };
		}
		const result = await fetch('http://localhost:8080/api/image', {
			method: 'POST',
			body: formData
		});
		if (!result.ok) {
			console.error('Failed to upload image:', result.statusText);
			return { success: false, message: result.statusText };
		}
		const response = (await result.json()) as ImageApiResult;
		console.log('Image API response:', response);

		const image_url = `/img/${response.image_id}`;
		fetch(`http://localhost:8080/api/recipe/${recipe_id}`, {
			method: 'PUT',
			body: JSON.stringify({ image_url: image_url }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		console.log(`Set Image URL for recipe ${recipe_id} to ${image_url}`);
		return { success: true, image_url };
	}
} satisfies Actions;

export type ImageApiResult = {
	image_id: number;
	// TODO add more fields as needed
};

/*
struct ResultOK {
    success: bool,
    message: String,
}
*/
