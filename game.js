class Game () {
	function constructor (username) {
		var self = this
		self.username = username
		users = readFile()
		for (user in users) {
    
    
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
