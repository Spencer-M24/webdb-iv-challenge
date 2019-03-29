// Moduels
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable("dishes", dishes => {
    
            dishes.increments("id").primary();
    
            dishes
          
            .text("name")
          
            .unique()
          
                .notNullable();
        })
        .createTable("recipes", recipes => {
    
            recipes.increments("id").primary();
          
            recipes.text("name").notNullable();
    
            recipes.integer("dishId").references("dishes.id");
    
        })
        .createTable("ingredients", ingredients => {
            ingredients.increments("id").primary();
    
            ingredients.text("name").notNullable();
        })
        .createTable("recIngreMap", rMap => {
    
            rMap.integer("recipeId").references("recipes.id");
    
            rMap.integer("ingredientId").references("ingredients.id");
    
            rMap.integer("quantity").notNullable();
        })
        .createTable("directionss", directionss => {
        
            Promise.all([
    
                directionss.integer("step"),
             
                directionss.integer("recipeID").references("recipes.id")
    
            ]).then(() => {
    
        
                directionss.primary(["step, recipeID"]);
        
            });
        
            directionss.text("stepDescription");
        });
};

exports.down = function(knex, Promise) {


    return Promise.all([
        
        knex.schema.dropTableIfExists("dishes"),

        
        knex.schema.dropTableIfExists("recipes"),
    
        knex.schema.dropTableIfExists("ingredients"),
    
        knex.schema.dropTableIfExists("recipeIngredientsMap"),

        knex.schema.dropTableIfExists("directions")
    
    ]);
};

