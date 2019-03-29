exports.seed = function(knex, Promise) {
    
    
    //Remove
    
    return knex("recipes")
    
    .truncate()
    
    .then(function() {


Seeds

            return knex("recipes").insert([
                { name: "Step1", dishId: 1 },
    
                { name: "Step2", dishId: 2 },
    
                { name: "Step 3", dishId: 3 },
    
                { name: "Step 4", dishId: 4 },
    
                { name: "Step 5", dishId: 5 },
    
                { name: "Step 6", dishId: 6 }
            ]);
        });
};
