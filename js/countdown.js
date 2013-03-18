/*-------------------------------------------*/
/*You can comment the first today and uncoment the second today (save file and refresh browser) to see the "AFTER STATE" */

today = new Date(2013, 8, 10, 13, 41, 40);
//today = new Date(2013, 8, 12, 14, 59, 55);

/*-------------------------------------------*/
eventDay = new Date(2013, 8, 12, 15, 0, 0);
timeLeft = (eventDay-today);
var days, hours, mins, secs;

var countdown = setInterval(function() {
	humanTime(timeLeft);
	if (days == 0 && hours == 0 && mins == 0 && secs == 0) { //If countdown reached zero, stop counting and do some changes
		clearInterval(countdown);
		$("#countdown>div:first").toggleClass("on off");
		$("#countdown>div:last").toggleClass("on off");
		$("#countdown").toggleClass("live");
		$("#fixtureList").fadeIn();
	}
	$(".cdays").html(days+'<span>days</span>');
	$(".chours").html(hours+'<span>hours</span>');
	$(".cmins").html(mins+'<span>mins</span>');
	$(".csecs").html(secs+'<span>secs</span>');
	timeLeft = timeLeft - 1000;
	
},1000);

var visible = setInterval(function() { //This function just adds a little bit fines :)
$("#countdown").addClass("visible");
clearInterval(visible);
}, 1000)


function humanTime (time) {
	uDays = timeLeft/86400000;
	days = Math.floor(uDays);
	uHours = (uDays - days)*24;
	hours = Math.floor(uHours);
	uMins = (uHours - hours)*60;
	mins = Math.floor(uMins);
	uSecs = (uMins - mins)*60;
	secs = Math.round(uSecs);
	if (secs == 60) { secs = 0; mins += 1; } // Hack for the rounding problem
	if (days < 10) { days = "0"+days; }
	if (hours < 10) { hours = "0"+hours; }
	if (mins < 10) { mins = "0"+mins; }
	if (secs < 10) { secs = "0"+secs; }
	
}