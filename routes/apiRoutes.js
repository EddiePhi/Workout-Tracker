// Referencing Week 17 Act 14, Gardening-App project, Lanchi Pham (lpham2525) & JoelDore on Github
  // https://github.com/EddiePhi/Gardening-App 
  // https://github.com/lpham2525/workout_tracker
  // https://github.com/JoelDore
// Assitance from https://github.com/DustinErwin and class Intructor Jim Dhima

// require("dotenv").config();
const router = require("express").Router();
const Workout = require("../models/Workout.js");

// Aggregate function reference from JoelDore. Not used.
// const setTotalDurations = () => {
//     return db.Workout.aggregate([
//         {
//             $set: {
//                 totalDuration: { $sum: "$exercises.duration" }
//             }
//         },
//         { $out: "workouts" }
//     ])
// }

// GET most recent workout
router.get('/api/workouts', (req, res) => {
    Workout.find({}).then(workouts => {
        console.log(workouts)
        res.json(workouts)
    })
    .catch(err => {
        res.json(err)
    })
});

// CREATE one workout
router.post('/api/workouts', (req, res) => {
    Workout.create(req.body).then(info => {
        console.log(info);
        res.json(info);
    })
    .catch(err => {
        res.json(err)
    })
});

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
    Workout.update(
    { 
        _id: req.params.id
    }, 
    { 
        $push: { 
            exercises: req.body 
        }
    })
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err)
    })
});


module.exports = router;