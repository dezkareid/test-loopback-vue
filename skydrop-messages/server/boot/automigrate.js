var seed = require("../seed");

module.exports = function (server) {
  var ds = server.dataSources.postgresDB
  ds.automigrate(null, function (err) {
    if (err) throw err;

    for (var modelName in seed) {
      var model = server.models[modelName];
      model.create(seed[modelName], function(err, records) {
        if (err) throw err;
        console.log("Data created");
      });
    }
  })
}