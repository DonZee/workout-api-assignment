
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workout').del()
    .then(function () {
      // Inserts seed entries
      return knex('workout').insert([
        {date: '1973-09-30', name: 'Arnold', description: 'bench 10X3 315lbs', rating: '8'},
        {date: '1973-6-17', name: 'Lou', description: 'cardio 45min.', rating: '5'},
        {date: '1973-05-2', name: 'Franco', description: 'deadlift 3X10 600lbs', rating: '7'}
      ]);
    });
};
