const Animal = require("../models/animal");

exports.index = (req, res) => {
    res.send("NOT IMPLEMENTED: Site Home Page");
  };

// Display list of all Animals.
exports.animal_list = (req, res) => {
  res.send("NOT IMPLEMENTED: Animal list");
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