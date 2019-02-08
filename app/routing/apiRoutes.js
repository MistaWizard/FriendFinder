const friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function(req, res) {
        let userData = req.body;
        let userScore = userData.scores;
        let totalDifference = 0;
        let mostCompatible = {
            name: "",
            photo: "",
            differenceBetween: 1000,
        };
        for (var i = 0; i < friends.length; i++){
			//console.log the friend name
			console.log(friends[i].name);
			//list variable locally
			totalDifference = 0;
			// for loop to go through for scores of same friend data
			for (var j = 0; j <friends[i].scores[j]; j++){
				totalDifference += Math.abs(parseInt(userScore[j]) - parseInt(friends[i].scores[j]));

				if(totalDifference <= mostCompatible.differenceBetween){
					mostCompatible.name = friends[i].name;
					mostCompatible.photo = friends[i].photo;
					mostCompatible.differenceBetween = totalDifference;
				}
			}

		}
		friends.push(userData);
        res.json(mostCompatible);
    })
}