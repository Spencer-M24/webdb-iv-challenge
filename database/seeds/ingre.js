exports.seed = function(knex, Promise) {
   // Remove
   
    return knex("ingredients")
        
    .truncate()
        
        .then(function() {
            //Adding
           
            return knex("ingredients").insert([
           
                { name: "ingre1" },
           
                { name: "ingre2" },
           
                { name: "ingre3" },
           
                { name: "ingre4" },
           
                { name: "ingre5" },
           
                { name: "ingre6" },
           
                { name: "ingr7" }
           
            ]);
        });
};
