//Update the name of the controller below and rename the file.
const workout = require("../controllers/workout.js")
module.exports = function(app){

  app.get('/', workout.index);

}
