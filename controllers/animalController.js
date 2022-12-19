const Animal = require("../models/animal");
const Family = require("../models/family");
const Feature = require("../models/feature");

const async = require("async");

exports.index = (req, res) => {
  async.parallel(
    {
      animal_count(callback) {
        Animal.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
      },
      family_count(callback) {
        Family.countDocuments({}, callback);
      },
      feature_count(callback) {
        Feature.countDocuments({}, callback);
      },
    },
    (err, results) => {
      res.render("index", {
        title: "Animal Browser Home",
        error: err,
        data: results,
      });
    }
  );
};

// Display list of all Animals.
exports.animal_list = function (req, res, next) {
  Animal.find({}, "name")
    .sort({ name: 1 })
    .exec(function (err, list_animals) {
      if (err) {
        return next(err);
      }
      res.render("animal_list", { title: "Animal List", animal_list: list_animals });
    });
};

// Display detail page for a specific Animal.
exports.animal_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Animal detail: ${req.params.id}`);
};

// Display Animal create form on GET.
exports.animal_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Animal create GET");
};

// Handle Animal create on POST.
exports.animal_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Animal create POST");
};

// Display Animal delete form on GET.
exports.animal_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Animal delete GET");
};

// Handle Animal delete on POST.
exports.animal_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Animal delete POST");
};

// Display Animal update form on GET.
exports.animal_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Animal update GET");
};

// Handle Animal update on POST.
exports.animal_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Animal update POST");
};
