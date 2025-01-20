//Author : Samuel H. Barker
//Date: Jan 2, 2025

let date = new Date();

//This is used to get the weekday word.
function check_WeekDay(){
    let Weekday = date.getDay();
    
    switch(Weekday){
	case 0:
	    return "Sunday";
	    break;
	case 1:
	    return "Monday";
	    break;
	case 2:
	    return "Tuesday";
	    break;
	case 3:
	    return "Wednesday";
	    break;
	case 4:
	    return "Thursday";
	    break;
	case 5:
	    return "Firday";
	    break;
	case 6:
	    return "Saturday";
	    break;
	default:
	    return `This number ${Weekday} isn't here`;
	    break;
	    
    }
}

//This is used to get the Month Word.
function check_Month(){
    let month = date.getMonth();
    
    switch(month){
	case 0:
	    return "January";
	    break;
	case 1:
	    return "Febuary";
	    break;
	case 2:
	    return "March";
	    break;
	case 3:
	    return "April";
	    break;
	case 4:
	    return "May";
	    break;
	case 5:
	    return "June";
	    break;
	case 6:
	    return "July";
	    break;
	case 7:
	    return "August";
	    break;
	case 8:
	    return "September";
	    break;
	case 9:
	    return "October";
	    break;
	case 10:
	    return "November";
	    break;
	case 11:
	    return "December";
	    break;
	default:
	    return `This number ${Weekday} isn't here`;
	    break;
    }
}

//This gets the date and displays it to the screen fromatted.
function Current_Date(){
    document.getElementById("Week_day").textContent = `${check_WeekDay()},`;
    document.getElementById("Month").textContent = check_Month();
    document.getElementById("Day").textContent =` ${date.getDate()},`;
    document.getElementById("Year").textContent = date.getFullYear();
    
}

//This gets the current time and dispalys it to the screen formatted.
function current_Time(){
    let Time = new Date()
    document.getElementById("hours").textContent = Time.getHours().toString().padStart(2,'0');
    document.getElementById("Minutes").textContent = Time.getMinutes().toString().padStart(2,'0');
    document.getElementById("Seconds").textContent = Time.getSeconds().toString().padStart(2,'0');
}

setInterval(current_Time,1000);
Current_Date();
