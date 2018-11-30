//Update the name of the controller below and rename the file.
const trainingLog = require("../controllers/training-log.js")
module.exports = function(app){

  app.get('/workout', trainingLog.index);
  app.get('/workout/:id', trainingLog.getOne);

  app.post('/workout', trainingLog.create);

  app.put('/workout/:id', trainingLog.update);

  app.delete('/workout/:id', trainingLog.delete);
}
