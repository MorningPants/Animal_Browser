const express = require("express");
const router = express.Router();

// Require controller modules.
const animal_controller = require("../controllers/animalController");
const family_controller = require("../controllers/familyController");
const feature_controller = require("../controllers/featureController");

/// ANIMAL ROUTES ///

// GET catalog home page.
router.get("/", animal_controller.index);

// GET request for creating a Animal. NOTE This must come before routes that display Animal (uses id).
router.get("/animal/create", animal_controller.animal_create_get);

// POST request for creating Animal.
router.post("/animal/create", animal_controller.animal_create_post);

// GET request to delete Animal.
router.get("/animal/:id/delete", animal_controller.animal_delete_get);

// POST request to delete Animal.
router.post("/animal/:id/delete", animal_controller.animal_delete_post);

// GET request to update Animal.
router.get("/animal/:id/update", animal_controller.animal_update_get);

// POST request to update Animal.
router.post("/animal/:id/update", animal_controller.animal_update_post);

// GET request for one Animal.
router.get("/animal/:id", animal_controller.animal_detail);

// GET request for list of all Animal items.
router.get("/animals", animal_controller.animal_list);

/// FAMILY ROUTES ///

// GET request for creating Family. NOTE This must come before route for id (i.e. display family).
router.get("/family/create", family_controller.family_create_get);

// POST request for creating Family.
router.post("/family/create", family_controller.family_create_post);

// GET request to delete Family.
router.get("/family/:id/delete", family_controller.family_delete_get);

// POST request to delete Family.
router.post("/family/:id/delete", family_controller.family_delete_post);

// GET request to update Family.
router.get("/family/:id/update", family_controller.family_update_get);

// POST request to update Family.
router.post("/family/:id/update", family_controller.family_update_post);

// GET request for one Family.
router.get("/family/:id", family_controller.family_detail);

// GET request for list of all Familys.
router.get("/familys", family_controller.family_list);

/// FEATURE ROUTES ///

// GET request for creating a Feature. NOTE This must come before route that displays Feature (uses id).
router.get("/feature/create", feature_controller.feature_create_get);

//POST request for creating Feature.
router.post("/feature/create", feature_controller.feature_create_post);

// GET request to delete Feature.
router.get("/feature/:id/delete", feature_controller.feature_delete_get);

// POST request to delete Feature.
router.post("/feature/:id/delete", feature_controller.feature_delete_post);

// GET request to update Feature.
router.get("/feature/:id/update", feature_controller.feature_update_get);

// POST request to update Feature.
router.post("/feature/:id/update", feature_controller.feature_update_post);

// GET request for one Feature.
router.get("/feature/:id", feature_controller.feature_detail);

// GET request for list of all Feature.
router.get("/features", feature_controller.feature_list);


module.exports = router;
