
function game() {
//    determine which input was used then set value and call convertTemp


	let element = (document.getElementsByTagName("main"))[0];
    for(let k =1; k<=5; k++) {
			element.innerHTML+='<p id="'+k+'"></p>';
	}
  
  	let el = document.getElementById("1");
	let tmp = 'q2(document.getElementById("in1").value)';

	el.innerHTML = "Hi there, stranger, what's your name?  "
	el.innerHTML += '<input id="in1" type="text">';
	el.innerHTML += '<button type="button" onclick='+tmp+'>Submit</button>';
 
}


function q2(name) {
	
	let el = document.getElementById("2");
	let tmp = 'q3(Number(document.getElementById("in2").value))';
	
    el.innerHTML = "Nice to meet you, "+name+". What year would you like to go to? (YYYY) ";
    el.innerHTML += '<input id="in2" type="number">';
    el.innerHTML += '<button type="button" onclick='+tmp+'>Submit</button>';

}


function q3(year) {
	
	let el = document.getElementById("3");
	
	if (year >= 2015) {
		
		let tmp = 'q8(document.getElementById("in7").value)';

		el.innerHTML = "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (Biff/Griff)  ";
		el.innerHTML += '<input id="in7" type="text">';
		el.innerHTML += '<button type="button" onclick='+tmp+'>Submit</button>';
			
	}
	if (year >=1985 && year <= 2014) {
		
		let tmp = 'q4(document.getElementById("in3").value)';

		el.innerHTML = "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?  ";
		el.innerHTML += '<input id="in3" type="text">';
		el.innerHTML += '<button type="button" onclick='+tmp+'>Submit</button>';
 		
	}
	if (year >=1955 && year<= 1984) {

		let tmp = 'q5(document.getElementById("in4").value)';

		el.innerHTML = "I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? Say yes, say no or set her up with George. (YES/NO/SET) ";
		el.innerHTML += '<input id="in4" type="text">';
		el.innerHTML += '<button type="button" onclick='+tmp+'>Submit</button>';

	}
	if (year < 1955) {
	
		let tmp = 'q6(document.getElementById("in5").value)';

		el.innerHTML = "I see you're a fan of Back to the Future 3. You've run out of nitroglycerin to get back to your own time. How do you power the Time Machine? Via Horses, Moonshine or Train (H/M/T) ";
		el.innerHTML += '<input id="in5" type="text">';
		el.innerHTML += '<button type="button" onclick='+tmp+'>Submit</button>';
	
	}
	
}

function q4(name) {
	let el = document.getElementById("4");
    el.innerHTML = "Welcome to the future, "+name+".";
}

function q5(response) {
	let el = document.getElementById("4");
	
	switch(response.toUpperCase()) {
    case "YES":
        el.innerHTML = "Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.";
        break;
    case "NO":
        el.innerHTML = "Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.";
        break;
    case "SET":
        el.innerHTML = "Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.";
        break;
    default:
        el.innerHTML = "??? Unclear response and so your unwillingness to make a decision causes you to miss the dance. This means that your future Dad will never meet your Mom, and therefore you cannot exist.";

     } 
}

function q6(response) {
	let el = document.getElementById("4");
	
	switch(response.toUpperCase()) {
    case "H":
        el.innerHTML = "Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.";
        break;
    case "M":
        el.innerHTML = "You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.";
        break;
    case "T":
        
        let tmp = 'q7(document.getElementById("in6").value)';

		el.innerHTML = "Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (Take/Leave) ";
		el.innerHTML += '<input id="in6" type="text">';
		el.innerHTML += '<button type="button" onclick='+tmp+'>Submit</button>';
        break;
    default:
        el.innerHTML = "??? I do not know what that is, but I doubt it will work.";

     } 
}


function q7(response) {

	let el = document.getElementById("5");

	switch(response.toUpperCase()) {
    case "TAKE":
        el.innerHTML = "Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.";
        break;
    case "LEAVE":
        el.innerHTML = "Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.";
        break;
    default:
        el.innerHTML = "??? Your undecipherable response delays Doc so he can't grab Clara and get back to the car in time. He ends up staying in 1855 with her. ";
    }

	
}


function q8(response) {

	let el = document.getElementById("4");
	let tmp = '';

	switch(response.toUpperCase()) {
    case "BIFF":
        tmp = 'q9(document.getElementById("in9").value)';
        el.innerHTML = "Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (Stand/Run)";
		el.innerHTML += '<input id="in9" type="text">';
		el.innerHTML += '<button type="button" onclick='+tmp+'>Submit</button>';
        break;
    case "GRIFF":
        tmp = 'q10(document.getElementById("in10").value)';
        el.innerHTML = "Griff is asking you if you are in, or out. What do you say? (In/Out) ";
		el.innerHTML += '<input id="in10" type="text">';
		el.innerHTML += '<button type="button" onclick='+tmp+'>Submit</button>';
        break;
    default:
        tmp = 'q9(document.getElementById("in9").value)';
        el.innerHTML = "??? I don't know that guy, why don't you go with Biff. ";
        el.innerHTML += "Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (Stand/Run)";
		el.innerHTML += '<input id="in9" type="text">';
		el.innerHTML += '<button type="button" onclick='+tmp+'>Submit</button>';
    }
	
}


function q9(response) {

	let el = document.getElementById("5");

	switch(response.toUpperCase()) {
    case "STAND":
        el.innerHTML = "Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.";
        break;
    case "RUN":
        el.innerHTML = "You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.";
        break;
    default:
        el.innerHTML = "??? Fumbling to make a decision gives him the chance to sucker punch you in the solar plexus.";
    }
	
}


function q10(response) {

	let el = document.getElementById("5");

	switch(response.toUpperCase()) {
    case "IN":
        el.innerHTML = "Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.";
        break;
    case "OUT":
        el.innerHTML = "Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.";
        break;
    default:
        el.innerHTML = "??? Fumbling to make a decision gives him the chance to sucker punch you in the solar plexus.";
    }
	
}



game();









