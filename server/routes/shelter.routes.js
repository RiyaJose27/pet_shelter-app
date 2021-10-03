const ShelterController = require("../controllers/shelter.controller");
const Shelter = require("../models/shelter.model");

module.exports = app => {
    app.get("/api/shelters/all", ShelterController.findAllShelters);
    app.post("/api/shelters/create", ShelterController.createShelter);
    app.get("/api/shelters/:_id", ShelterController.findSingleShelter);
    app.delete("/api/shelters/:_id/delete", ShelterController.deleteSingleShelter);
    app.patch("/api/shelters/:_id/update", ShelterController.updateSingleShelter);
    
}