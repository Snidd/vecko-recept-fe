import type { Recipe } from './Recipe';

export type Week = {
	id: number;
	description: string;
	recipes: Recipe[]; // Array of recipe objects
};
