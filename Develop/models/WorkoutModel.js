const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter exercise type"
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter exercise name"
      },
      duration: {
        type: Number,
        required: "Please enter how many minutes"
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
      },
    },
  ],
},
{
  toObject: {
    virtuals: true    
  },
  toJSON: {
    virtuals: true
  }
});

workoutSchema
.virtual('totalDuration').get(function() {
  return this.exercises
  .reduce((prev, curr) =>{return prev + curr.duration}, 0)
})

const WorkoutModel = mongoose.model("WorkoutModel", workoutSchema);

module.exports = WorkoutModel;