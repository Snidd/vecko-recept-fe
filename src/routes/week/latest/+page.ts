//import { getExampleRecipes } from '$lib/exampleRecipes';
import type { Week } from '$lib/types/Week';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/week/latest');
	if (!response.ok) {
		throw new Error('Failed to fetch the latest week data');
	}
	const data = (await response.json()) as Week;

	return {
		recipes: data.recipes
	};
};
