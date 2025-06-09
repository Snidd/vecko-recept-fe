export type Recipe = {
    id: number;
    image_url?: string;
    name: string;
    ingredients: RecipeIngredient[];
    other_ingredients: OtherIngredient[];
    instructions?: string;
}

export type RecipeIngredient = {
    quantity: number;
    unit: string;
    name: string;
    ingredient_type: "Protein" | "Carbohydrate" | "Other";
}

export type OtherIngredient = {
    ingredient_row: string;
    id: number;
}