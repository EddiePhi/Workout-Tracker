// Referencing Week 17 Act 14, Gardening-App project, and Lanchi Pham (lpham2525) on Github
  // https://github.com/EddiePhi/Gardening-App 
  // https://github.com/lpham2525/workout_tracker

// require("dotenv").config();
const router = require("express").Router();
const Workout = require("../models/workout.js");

// GET most recent workout
router.get('/api/workouts', (req, res) => {
    Workout.find({}, (err, workouts) => {
        console.log(workouts)
        res.json(workouts)
    })
    .catch(err => {
        res.json(err)
    })
});

// CREATE one workout
router.post('/api/workouts', (req, res) => {
    Workout.create({}, (info) => {
        console.log(info);
        res.json(info);
    })
    .catch(err => {
        res.json(err)
    })
});

// Assitance from https://github.com/DustinErwin and class Intructor Jim Dhima
// GET workouts within a range
router.get('/api/workouts/range', (req, res) => {
    Workout.find({}).then((data) => {
        console.log(data)
        res.json(data ?? [])
    })
    .catch(err => {
        res.json(err)
    })
});




// UPDATE one workout
router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, { 
        $push: { 
            exercises: req.body 
        }
    })
    .then((data) => {
        res.json(data);
    })
    .catch(err => {
        res.json(err)
    })
});

module.exports = router;