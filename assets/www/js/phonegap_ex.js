Trigs = {}

    // Wait for PhoneGap to load
//
//document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
//
function onDeviceReady() {
    // Empty
    //Trigs.ini1 = setInterval( vibrate, 10*1000 )
    //Trigs.ini2 = setInterval( playBeep, 10*1000 )
}

// Show a custom alert
//
function showAlert() {
    navigator.notification.alert(
        'You are the winner!',  // message
        'Game Over',            // title
        'Done'                  // buttonName
    );
}

// Beep three times
//
function playBeep() {
	try{
    navigator.notification.beep(2);
  } catch(e){}
}

// Vibrate for 2 seconds
//
function vibrate() {
	try{
    navigator.notification.vibrate(2000);
	} catch(e){}
}

// Tells the phone to shush!
function stopAnnoying(){
	clearInterval(Trigs.ini1)
	clearInterval(Trigs.ini2)
}