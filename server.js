// Referencing Week 17 Act 14, Gardening-App project, Lanchi Pham (lpham2525) & JoelDore on Github
  // https://github.com/EddiePhi/Gardening-App 
  // https://github.com/lpham2525/workout_tracker
  // https://github.com/JoelDore
// Assitance from https://github.com/DustinErwin and class Intructor Jim Dhima

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout", 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
app.use(require("./routes/apiRoutes.js"));
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

