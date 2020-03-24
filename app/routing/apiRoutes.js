const friends = require('../data/friends.js');

module.exports = app => {
  app.get('/api/friends', (req, res)=> {
    res.json(friends);
  });

  app.post('/api/friends', (req, res)=> {
    const user = req.body

    const answersArr = user.scores.map( e => parseInt(e))
    let matchIndex = 0
    let matchedName = ""
    let matchedImg = ""
    let maxDiff = 40;

    for(let i = 0; i < friends.length; i++) {
      let diff = 0;
      for(let j = 0; j < friends[i].scores.length; j++) {
        diff += Math.abs(user.scores[j] - friends[i].scores[j]);
      }


      if(diff < maxDiff) {
        matchIndex = i;
        maxDiff = diff;
      }
    }

    console.log(user)
    friends.push(user)
    res.json(friends[matchIndex])
  })
};