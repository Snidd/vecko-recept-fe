import type { Actions } from './$types';
import { DINOIMG_URL } from '$env/static/private';
import { VECKO_MENY_API_URL } from '$env/static/private';
import axios from 'axios';

export const actions = {
	uploadpicture: async (event) => {
		// TODO log the user in
		console.log('uploadpicture action called');
		//console.log(await event.request.formData());

		const formData = await event.request.formData();

		console.log('FormData received:', formData);

		const recipe_id = formData.get('recipe_id')?.toString();

		const upload_url = `${DINOIMG_URL}/upload`;

		// Use axios to upload the image, since node fetch does not add the CRLF at the end of the file
		const result = await axios.post(upload_url, formData);

		//If the response is conflict, it means the image already exists and we need to get that image URL and use it.
		if (result.status !== 200) {
			console.error({ result });
			console.error('Failed to upload image:', result.statusText);
			return { success: false, message: result.statusText };
		}
		const response = result.data as ImageApiResult;
		console.log('Image API response:', response);

		const image_url = response.image_url;

		fetch(`${VECKO_MENY_API_URL}/api/recipe/${recipe_id}`, {
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

type ImageApiResult = {
	image_url: string;
	// TODO add more fields as needed
};

/*
struct ResultOK {
    success: bool,
    message: String,
}
*/
