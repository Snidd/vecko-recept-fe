import { getExampleRecipes } from '$lib/exampleRecipes';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {

    const recipes = getExampleRecipes();

    return {
        recipes: recipes
    };
};