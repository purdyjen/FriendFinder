var users = require('../data/friends.js')

var scoresArray = [];

// var users = [
//     {
//       name: "John",
//       picture: "www.google.com",
//       answers: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
//     },
//     {
//       name: "Jane",
//       picture: "www.google.com",
//       answers: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
//     }
//   ];

//   var currentUser = {
//       name: "Jenna",
//       picture: "www.google.com",
//       answers: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
//   }


// findFriend();
function apiRoutes(app) {
app.get('/api/friends', function (req, res) {
    res.json(users);
});


app.post('/api/friends', function (req, res) {
    var currentUser = req.body;
    function findFriend() {
      var totalDifference = [];
    for (var i = 0; i < users.length; i++) {
      for (var j = 0; j < users[i].answers.length; j++) {
        var difference = 0;
        difference = Math.abs(
          parseInt(users[i].answers[j]) - parseInt(currentUser.answers[j])
        );
        totalDifference.push(difference);
      }
      var sum = totalDifference.reduce(function(a, b) {
          return a + b;
        }, 0);
      //   console.log(sum);
      scoresArray.push(sum);
      totalDifference = [];
      // console.log(scoresArray);
    }
    var lowestDiff = Math.min(...scoresArray)
    console.log(lowestDiff);
    var bestie = scoresArray.indexOf(lowestDiff);
    console.log(users[bestie]);
  }
    users.push(currentUser);
    res.json(users[bestie]);
});
};

module.exports = apiRoutes;