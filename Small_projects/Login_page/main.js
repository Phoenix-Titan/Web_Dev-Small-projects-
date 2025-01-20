//varaibles
let username = document.getElementById("username");
let password = document.getElementById("password");
let submit_btn = document.getElementById("submit_btn");


print_name = function(){
    submit_btn.onclick = ()=>{
	let user = username.value;
	let pass= password.value;
	
	if(user == "" || pass == ""){
	    alert("Please fill up form.");
	}
	else if (user.length <= 5){
	    alert("Your username has to be more than 5 characters");
	}
	else if(pass.length <= 3){
	    alert("Password has to be more than three characters");
        }
	else{
	    alert(`Your Username : ${user}\nYour Password: ${pass}`);
	    alert('Uncle Samuel\nWelcomes you to Phoenest');
	   
	    username.value = "";
	    password.value = "";
	}

     }
}

print_name();
