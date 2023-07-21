// Functions to handle custom messages sent via serial.
// In gcode file, M118 can be used to send messages on serial.
// This allows the microcontroller to communicate with hosts.
// Example:
//   M118 [CoolDraw]<your message>
//      will send "CoolDraw:<your message>" over serial, which can be picked up by host
//      to trigger certain actions.
//   M118 [CoolDraw]<function call>
//      will call the function, as long as a handler has been predefined to identify
//      the call.

function process_Custom(response) {
    var freq = 440;  // beep frequency on end of print
    var dur = 100;  // beep duration on end of print
    response = response.replace("[CoolDraw]","");
    if (response.startsWith("eop")) {
        // Example 1
        // Sound to play on end of print
        // Triggered by message on serial terminal
        // [CoolDraw]eop
        beep(dur, freq);
    }
    if (response.startsWith("beep(")) {
        // Example 2
        // Call a function within webUI, in this case beep()
        // Triggered by message on serial terminal
        // [CoolDraw]beep(100, 261)
        eval(response);
    }
}
