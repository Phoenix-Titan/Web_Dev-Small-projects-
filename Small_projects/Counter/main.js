//This is the counter number
	  
let count = 0;

//These are the buttons

document.getElementById("Increase").onclick = function(){
    count += 1;
    document.getElementById("counter").innerHTML = count;
}

document.getElementById("Reset").onclick = function(){
    document.getElementById("counter").innerHTML = 0;
}

document.getElementById("Decrease").onclick = function (){
    count -= 1;
    document.getElementById("counter").innerHTML = count;
}

