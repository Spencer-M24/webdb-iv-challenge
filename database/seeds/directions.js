exports.seed = function(knex, Promise) {
// Remove   


return knex("directions")
        
    .del()
    
    .then(function() {
        
            // Inserts
        
            return knex("directions").insert([
                { step: 1, recipeId: 1, stepDescription: "Step 1" },
                {
                    step: 2,
                    recipeId: 2,
                    stepDescription: "Step 2"
                },
                {
                    step: 3,
                    recipeId: 3,
                    stepDescription: "Step 3"
                },
                {
                    step: 4,
                    recipeId: 4,
                    stepDescription: "Step 4"
                },
                {
                    step: 5,
                    recipeId: 5,
                    stepDescription: "Step 5"
                },
                { step: 6, recipeId: 6, stepDescription: "Step 6" }
            ]);
        });
};
