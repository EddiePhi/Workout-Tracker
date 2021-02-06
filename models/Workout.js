// Referencing Week 17 Act 14, Gardening-App project, Lanchi Pham (lpham2525) & JoelDore on Github
  // https://github.com/EddiePhi/Gardening-App 
  // https://github.com/lpham2525/workout_tracker
  // https://github.com/JoelDore
// Assitance from https://github.com/DustinErwin and class Intructor Jim Dhima

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now()
    },
    exercises: [{
      type: {
        type: String,
      },
      name: {
        type: String,
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      }
    }]
  }, 
  {
    toJSON: {
      virtuals: true
    }
  }
);

// .reduce() reduces array to a single value, applying the function provided: 
  // https://www.w3schools.com/jsref/jsref_reduce.asp
WorkoutSchema.virtual('totalDuration').get(function () {
  return this.exercises.reduce((total, exercise) => {return total + exercise.duration}, 0)
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
