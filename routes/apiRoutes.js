// Referencing Week 17 Act 14, Gardening-App project, and Lanchi Pham (lpham2525) on Github
  // https://github.com/EddiePhi/Gardening-App 
  // https://github.com/lpham2525/workout_tracker

require("dotenv").config();
const router = require("express").Router();
const path = require("path");
var db = require("../models/Workout.js");

// GET most recent workout
router.get('/api/workouts', (req, res) => {
    db.find({}, function (err, data) {
        console.log(data);
        res.send(data);
    })
    .catch((err) => {
        console.error(err);
    });
});

// GET workouts within a range
router.get('/api/workouts/range', (req, res) => {
    db.find()
    .then(workouts => {
        console.log(workouts);
        res.json(workouts);
})
    .catch((err) => {
        console.error(err);
    });
});



// // GET one workout
// app.get('/api/workouts/:id', (req, res) => {
//     // console.log("fetching workout by id");
//     db.findById(req.params.id)
//     .then(function (workout) {
//         console.log(workout);
//         res.json(workout);
//     })
//     .catch((err) => {
//         console.error(err);
//     });
// });

// CREATE one workout
router.post('/api/workouts', (req, res) => {
    db.create({}, function (err, data) {
        console.log(data);
        res.send(data);
    })
    .catch((err) => {
        console.error(err);
    });
});

// UPDATE one workout
router.put('/api/workouts/:id', (req, res) => {
    db.findByIdAndUpdate(req.params.id, { 
        $push: { 
            exercises: req.body 
        }
    })
    .then((info) => {
        res.json(info);
    })
    .catch((err) => {
        console.error(err);
    })
});

module.exports = router;