class user {
	constructor(name, passcode, wins, losses, rating) {
		var self = this
		var self.name = name;
		var self.passcode = passcode
		temp = 0 || wins
		var self.wins = temp;
		temp = 0 || losses;
		var self.losses = temp;
		temp = 1200 || rating
		var self.rating = temp;
		del temp;
		self.updateData()
}

	eval_game(win, opp_rating) {

		if win === true {
			increase = 1.8 ** (opp_rating / self.rating) * 7 + 10;
			this.rating += increase;
			del increase;
			this.wins += 1
}

		else {
			decrease = 1.8 ** (opp_rating / self.rating) * 6 + 8;
			this.rating -= decrease;
			del decrease;
			this.losses += 1;

}



}

	updateData() {
		
		//return name + ' ' + str(wins) + ' ' + lo
		
		
}
}




class Game () {
	function constructor (username) {
		var self = this;
		self.LEADERLENGTH = 20;
		self.name = username;
		self.user = -1;
		updateUsers();
		if self.user == -1 {
			for (user in self.users) {
				if user.name = self.name {
					self.user = user;
				}
				
				
			}
			
			if user === -1 {
				alert('user not found');
			}
		}
		
				
			
			
		
	
	function updateUsers()	{
		self.users = readFile();

	}	
			
	function getLeaderboard () {
		updateUsers();
		leaderboard = [];
		for (user in self.users) {
			if user.rating > leaderboard[leaderboard.length-1] {
				del leaderboard[leaderboard.length-1];
				
				for (index=1, index < leaderboard.length, index ++) {
					if user.rating < leaderboard[index].rating {
						leaderboard.splice(index + 1, 0, user) //insert after
						break;
					}
					
				}
			}
		}
		
		
	}
    
    
    }
		
		
		
		
		
	}
	
	
	
	
}



function readFile(evt) {
	  
	  
    //Retrieve the first (and only!) File from the FileList object
    var f = evt.target.files[0]; 
    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
	      var contents = e.target.result;
        alert( "Got the file\n" 
              +"name: " + f.name + "\n"
              +"type: " + f.type + "\n"
              +"size: " + f.size + " bytes\n"
              + "starts with: " + contents.substr(0, contents.indexOf("\n"))
        );
	      alert(contents);
	      var users = [];
	      var rows = contents.split('csv line seperating char');
	      del rows[0];
	      for (var row in rows) {
		      //need to get user class in here
		      //username password wins losses rating
		      var user = new User(row[0], row[1], row[2], row[3], row[4]);
		      users.push(user)
		      }
	      del rows
	      del user
	      return users
		      
	      }
	      }
		
      }
      r.readAsText(f);
    } else { 
      alert("Failed to load file");
    }
  }
  document.getElementById('fileinput').addEventListener('change', readFile, false);
