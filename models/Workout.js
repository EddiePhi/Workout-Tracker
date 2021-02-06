// Referencing Week 17 Act 14, Gardening-App project, and Lanchi Pham (lpham2525) on Github
  // https://github.com/EddiePhi/Gardening-App 
  // https://github.com/lpham2525/workout_tracker

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
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
}, {
  // timestamps: true,
  // Virtuals display information but on frontend only. They do not send info to the back end.
    // https://mongoosejs.com/docs/2.7.x/docs/virtuals.html
  // toObject: {
  //   virtuals: true
  // },
  toJSON: {
    virtuals: true
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

// var theSituation = new Workout({
//     name: { first: 'Michael', last: 'Sorrentino' }
// });



// .reduce() reduces array to a single value, applying the function provided: 
  // https://www.w3schools.com/jsref/jsref_reduce.asp
workoutSchema.virtual('totalDuration').get(function () {
  return this.exercises.reduce((total, exercise) => {return total + exercise.duration}, 0)
})

// workoutSchema.virtual('totalWeight').get(function () {
//   return this.exercises.reduce((weight, exercise) => weight + exercise.duration, 0)
// })

// workoutSchema.virtual('totalDistance').get(function () {
//   return this.exercises.reduce((distance, exercise) => distance + exercise.duration, 0)
// })



module.exports = Workout;
