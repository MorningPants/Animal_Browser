const Feature = require("../models/feature");

// Display list of all Features.
exports.feature_list = function (req, res, next) {
    Feature.find()
      .sort({ name: 1 })
      .exec(function (err, list_features) {
        if (err) {
          return next(err);
        }
        res.render("feature_list", { title: "Feature List", feature_list: list_features });
      });
  };

// Display detail page for a specific Feature.
exports.feature_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Feature detail: ${req.params.id}`);
};

// Display Feature create form on GET.
exports.feature_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Feature create GET");
};

// Handle Feature create on POST.
exports.feature_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Feature create POST");
};

// Display Feature delete form on GET.
exports.feature_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Feature delete GET");
};

// Handle Feature delete on POST.
exports.feature_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Feature delete POST");
};

// Display Feature update form on GET.
exports.feature_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Feature update GET");
};

// Handle Feature update on POST.
exports.feature_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Feature update POST");
};