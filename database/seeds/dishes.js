

exports.seed = function(knex, Promise) {
    // Remove
   
    return knex('dishes').truncate()
   
    .then(function () {

        // Add

        return knex('dishes').insert([
   
            {name: 'Pizza'},
   
            {name: 'Tacos'},
   
            {name: 'Test'}
   
        ]);
      });
  };