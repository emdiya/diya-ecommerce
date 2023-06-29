module.exports = app => {
    const test = require("../controller/test.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", test.create);
  
    // Retrieve all Tutorials
    router.get("/", test.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", test.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", test.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", test.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", test.delete);
  
    // Create a new Tutorial
    router.delete("/", test.deleteAll);
  
    app.use('/api/test', router);
  };