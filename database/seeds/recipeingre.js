exports.seed = function(knex, Promise) {




    return knex("recipeIngredientsMap")
        
    .del()
    
    .then(function() {
            return knex("recipeIngredientsMap").insert([
    

                
                { recipeId: 1, ingredientId: 1, quantity: 1 },
            
                { recipeId: 2, ingredientId: 1, quantity: 1 },
                
                { recipeId: 3, ingredientId: 2, quantity: 1 },
                
                { recipeId: 4, ingredientId: 2, quantity: 1 },
                
            
                { recipeId: 5, ingredientId: 3, quantity: 1 },
            
                { recipeId: 6, ingredientId: 4, quantity: 1 },
                
                { recipeId: 7  , ingredientId: 6, quantity: 1 }
            ]);

        });
};
