export class Food {
    title!:string;
    tags!:string[];
    imageUrl!:string;
    cookTime!:string;
    serves!:string;
    ingredientsArray: { ingredientTitle: string, ingredients: string[] }[] = [];
    steps!:string[];
}