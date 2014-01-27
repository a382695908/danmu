// Generated by CoffeeScript 1.6.3
(function() {
  var mongo, mongoDb, settings;

  settings = require('../config');

  mongo = require('mongodb');

  mongoDb = new mongo.Db(settings.db, new mongo.Server(settings.host, mongo.Connection.DEFAULT_PORT, {}));

  mongoDb.open(function(err, db) {
    if (err) {
      console.log(err);
      return;
    }
    if (global.db) {
      global.db.close();
      console.log('Database disconnected!');
    }
    global.db = db;
    return console.log('Database connected!');
  });

  module.exports = mongoDb;

}).call(this);
