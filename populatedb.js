#! /usr/bin/env node

console.log('This script populates some data to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/?retryWrites=true&w=majority');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Animal = require('./models/animal')
var Family = require('./models/family')
var Feature = require('./models/feature')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var animals = []
var families = []
var features = []

function animalCreate(name, cb) {
  animaldetail = { name: name }

  
  var animal = new Animal(animaldetail);
       
  animal.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New animal: ' + animal);
    animals.push(animal)
    cb(null, animal)
  }  );
}

function familyCreate(name, level, cb) {
  var family = new Family({ name: name, level: level });
       
  family.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Family: ' + family);
    families.push(family)
    cb(null, family);
  }   );
}

function featureCreate(name, cb) {
  featuredetail = { name: name }
    
  var feature = new Feature(featuredetail);    
  feature.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New feature: ' + feature);
    features.push(feature)
    cb(null, feature)
  }  );
}



function createFamiliesAndFeatures(cb) {
    async.series([
        function(callback) {
          familyCreate('Animals', 'Kingdom', callback);
        },
        function(callback) {
            familyCreate('Vertebrate', 'Subphylum', callback);
          },
          function(callback) {
            familyCreate('Mammal', 'Class', callback);
          },
          function(callback) {
            familyCreate('Ursidae', 'Family', callback);
          },
          function(callback) {
            familyCreate('Carnivora', 'Order', callback);
          },

        function(callback) {
          featureCreate("Claws", callback);
        },
        ],
        // optional callback
        cb);
}


function createAnimals(cb) {
    async.parallel([
        function(callback) {
          animalCreate("Bear", families, [features[0],], callback);
        },
        function(callback) {
            animalCreate("Dog", [families[0]], [features[0],], callback);
          },
          function(callback) {
            animalCreate("Giraffe", families, [], callback);
          },
        ],
        // optional callback
        cb);
}



async.series([
    createFamiliesAndFeatures,
    createAnimals
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Animals: '+animals);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});



