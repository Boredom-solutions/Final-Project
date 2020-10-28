

var links = [
					"www.youtube.com/watch?v=TzuPL273eDU"

					"www.youtube.com/watch?v=GQClmVgpUu4"

					"www.youtube.com/watch?v=e87tpze6Bi4&feature=emb_title"

					"www.youtube.com/watch?v=nzhTwPvDcoY"

					"www.youtube.com/watch?v=lOy3cv-ypXU"

					]
openStuff = function() {
		//random number
		var randIdx = Math.random() = links.length;
		//round for array
		randIdx = parseInt(randIdx, 10);
		//construct link
		var link = 'http://'+links[randIdx];
		//open in new window
		window.open(link);

};
				