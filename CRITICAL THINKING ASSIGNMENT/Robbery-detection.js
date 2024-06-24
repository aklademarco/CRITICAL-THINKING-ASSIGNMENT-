/*Robbery Detection Algorithm (using if-else statements)

This algorithm describes the logic for a security system that detects potential robberies using motion and door/window sensors.

Inputs:

motionDetected: Boolean (True if motion is detected, False otherwise)
doorOrWindowOpened: Boolean (True if a door or window is opened, False otherwise)
authorizedEntryTime: Integer (Time allowed in milliseconds for authorized entry after motion detection)
Output:

Console message indicating system status (alarm triggered, monitoring, or authorized entry)
Steps:

Check for Motion:

If motionDetected is True:
Proceed to step 2.
Else (no motion detected):
Print message: "System monitoring for motion." (Informational)
End the algorithm.
Check for Authorized Entry:

If doorOrWindowOpened is True:
Print message: "Authorized entry detected. Resetting system and monitoring..." (Informational)
Set authorizedEntryTime back to its initial value (simulates resetting timer).
End the algorithm.
Else (no door/window opening):
Print message: "Alarm! Unauthorized entry detected." (Alert)
End the algorithm.*/



let motionDetected = true; 
let doorOrWindowOpened = false; 
const authorizedEntryTime = 10 * 1000; // 10 seconds in milliseconds

if (motionDetected) {
  if (!doorOrWindowOpened) {
    console.log("Alarm! Unauthorized entry detected.");
  } else {
    console.log("Authorized entry detected. Resetting system and monitoring...");
    // Simulate resetting the timer
    authorizedEntryTime = 10 * 1000;
  }
} else {
  console.log("System monitoring for motion.");
}