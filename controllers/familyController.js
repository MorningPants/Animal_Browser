const Family = require("../models/family");
const Animal = require("../models/animal");

const async = require("async");

// Display list of all Families.
exports.family_list = (req, res, next) => {
    Family.find()
    .sort({name: 1})
    .exec(function (err, list_families) {
        if (err) {
          return next(err);
        }
        //Successful, so render
        res.render("family_list", {
          title: "Family List",
          family_list: list_families,
        });
      });
};

// Display detail page for a specific Family.
exports.family_detail = (req, res, next) => {
    async.parallel(
      {
        family(callback) {
          Family.findById(req.params.id)
            .populate("animal")
            .exec(callback);
        },
      },
      (err, results) => {
        if (err) {
          return next(err);
        }
        if (results.family == null) {
          // No results.
          const err = new Error("Family not found");
          err.status = 404;
          return next(err);
        }
        // Successful, so render.
        res.render("family_detail", {
          title: results.family.name,
          family: results.family,
        });
      }
    );
  };

// Display Family create form on GET.
exports.family_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Family create GET");
};

// Handle Family create on POST.
exports.family_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Family create POST");
};

// Display Family delete form on GET.
exports.family_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Family delete GET");
};

// Handle Family delete on POST.
exports.family_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Family delete POST");
};

// Display Family update form on GET.
exports.family_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Family update GET");
};

// Handle Family update on POST.
exports.family_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Family update POST");
};