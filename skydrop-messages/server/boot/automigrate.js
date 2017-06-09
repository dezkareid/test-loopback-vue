module.exports = function (server) {
  var ds = server.dataSources.postgresDB
  ds.automigrate(null, function (err) {
    if (err) throw err;
  })
}