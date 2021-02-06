// Referencing Week 17 Act 14, Gardening-App project, Lanchi Pham (lpham2525) & JoelDore on Github
  // https://github.com/EddiePhi/Gardening-App 
  // https://github.com/lpham2525/workout_tracker
  // https://github.com/JoelDore
// Assitance from https://github.com/DustinErwin and class Intructor Jim Dhima


const path = require("path");

module.exports = function (app) {
// HTML routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
});

};