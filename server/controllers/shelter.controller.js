const Shelter = require("../models/shelter.model");

module.exports.findAllShelters = (req,res) => {
    console.log("hey it's me, the find all function!");

    Shelter.find({})
        .then(allShelters => res.json({results: allShelters}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.createShelter = (req,res) => {
    Shelter.create(req.body)
        .then(newShelter => res.json({results: newShelter}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.findSingleShelter = (req,res) => {
    Shelter.findOne({_id: req.params._id})
        .then(singleShelter => res.json({results: singleShelter}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.deleteSingleShelter = (req,res) => {
    Shelter.deleteOne({_id: req.params._id})
        .then(results => res.json({results: results}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.updateSingleShelter = (req,res) => {
    Shelter.updateOne({_id:req.params._id},
        req.body,
        {runValidators: true})
        .then(singleShelter => res.json({results: singleShelter}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}


