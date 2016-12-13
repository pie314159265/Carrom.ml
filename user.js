class user {
	constructor(name, passcode, wins, losses, rating) {
		var this.name = name;
		var this.passcode = passcode
		temp = 0 || wins
		var this.wins = temp;
		temp = 0 || losses;
		var this.losses = temp;
		temp = 1200 || rating
		var this.rating = temp;
		del temp;
		this.updateData()
}

	eval_game(win, opp_rating) {

		if win === true {
			increase = 1.8 ** (opp_rating / this.rating) * 7 + 10;
			this.rating += increase;
			del increase;
			this.wins += 1
}

		else {
			decrease = 1.8 ** (opp_rating / this.rating) * 6 + 8;
			this.rating -= decrease;
			del decrease;
			this.losses += 1;

}



}

	updateData() {
		return name + ' ' + str(wins) + ' ' + lo
		
		
}
}