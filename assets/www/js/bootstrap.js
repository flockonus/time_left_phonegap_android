/*
 * All bootstrap should be called in here
 */


// Initialize stuff, in order!
function bootstrap() {
	window.timeModel = new modules.Model('timeLeft')
	window.timeLeft = new modules.TimeLeft();
	window.timersList = new modules.TimersList();
	window.inputs = new modules.Inputs();
}