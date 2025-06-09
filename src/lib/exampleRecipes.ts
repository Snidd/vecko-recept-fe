import type { Recipe } from './types/Recipe';

export function getExampleRecipes(): Recipe[] {
	return [
		{
			id: 1,
			image_url: '/images/spaghetti.jpg',
			name: 'Spaghetti Bolognese',
			ingredients: [
				{ quantity: 200, unit: 'g', name: 'spaghetti', ingredient_type: 'Carbohydrate' },
				{ quantity: 100, unit: 'g', name: 'ground beef', ingredient_type: 'Protein' },
				{ quantity: 50, unit: 'g', name: 'onion', ingredient_type: 'Other' }
			],
			other_ingredients: [{ ingredient_row: 'Salt and pepper to taste', id: 1 }],
			instructions:
				'Cook spaghetti according to package instructions. In a separate pan, cook ground beef and onion until browned. Combine with spaghetti and season with salt and pepper.'
		},
		{
			id: 2,
			image_url: '/images/chicken_salad.jpg',
			name: 'Chicken Salad',
			ingredients: [
				{ quantity: 150, unit: 'g', name: 'chicken breast', ingredient_type: 'Protein' },
				{ quantity: 100, unit: 'g', name: 'mixed greens', ingredient_type: 'Other' },
				{ quantity: 50, unit: 'g', name: 'cherry tomatoes', ingredient_type: 'Other' }
			],
			other_ingredients: [{ ingredient_row: 'Olive oil and vinegar dressing', id: 2 }],
			instructions:
				'Grill chicken breast until cooked through. Slice and serve over mixed greens and cherry tomatoes, drizzled with olive oil and vinegar dressing.'
		},
		{
			id: 3,
			image_url: '',
			name: 'Vegetable Stir Fry',
			ingredients: [
				{ quantity: 200, unit: 'g', name: 'mixed vegetables', ingredient_type: 'Other' },
				{ quantity: 100, unit: 'g', name: 'tofu', ingredient_type: 'Protein' },
				{ quantity: 50, unit: 'ml', name: 'soy sauce', ingredient_type: 'Other' }
			],
			other_ingredients: [{ ingredient_row: 'Sesame seeds for garnish', id: 3 }],
			instructions:
				'Stir fry mixed vegetables and tofu in a pan. Add soy sauce and cook until heated through. Garnish with sesame seeds.'
		},
		{
			id: 4,
			image_url: 'https://example.com/recipe4.jpg',
			name: 'Beef Tacos',
			ingredients: [
				{ quantity: 200, unit: 'g', name: 'ground beef', ingredient_type: 'Protein' },
				{ quantity: 4, unit: 'pieces', name: 'taco shells', ingredient_type: 'Carbohydrate' },
				{ quantity: 50, unit: 'g', name: 'cheese', ingredient_type: 'Other' }
			],
			other_ingredients: [{ ingredient_row: 'Lettuce and salsa for topping', id: 4 }],
			instructions:
				'Cook ground beef in a pan until browned. Fill taco shells with beef, cheese, lettuce, and salsa.'
		},
		{
			id: 5,
			image_url: 'https://example.com/recipe5.jpg',
			name: 'Fruit Smoothie',
			ingredients: [
				{ quantity: 1, unit: 'cup', name: 'mixed berries', ingredient_type: 'Other' },
				{ quantity: 1, unit: 'banana', name: 'banana', ingredient_type: 'Other' },
				{ quantity: 200, unit: 'ml', name: 'yogurt', ingredient_type: 'Other' }
			],
			other_ingredients: [{ ingredient_row: 'Honey to taste', id: 5 }],
			instructions: 'Blend mixed berries, banana, and yogurt until smooth. Add honey if desired.'
		}
	];
}
