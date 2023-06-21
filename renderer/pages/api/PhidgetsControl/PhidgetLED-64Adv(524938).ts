import { setTimeout } from "timers/promises";

const phidget22 = require('phidget22');

var runBoards = async(mode: string) =>{
console.log('runBoards mode :', mode);
    // Create a new ledBoard channel
    const ch = new phidget22.DigitalOutput()
    
    if(mode === "opened"){
        ch.deviceSerialNumber = 524938;
        ch.channel = 0;

        // Assign the handler that will be called when the event occurs
        ch.onAttach = function() {
            console.log('Phidget Attached!')
        }
        await ch.open(5000);
        
        await ch.setDutyCycle(0.5);
        //console.log("dutyCycle: " + dutyCycle);
        
        //await ch.setLEDCurrentLimit(0.02);
        //const LEDCurrentLimit = ch.data.LEDCurrentLimit["0.02"];
        //console.log("LEDCurrentLimit: " + LEDCurrentLimit);
        var VOLTS_5_0 = Number;
        await ch.setLEDForwardVoltage(VOLTS_5_0);

        //const LEDForwardVoltage = ch.setLEDForwardVoltage(phidget22.LEDForwardVoltage.VOLTS_5_0);
        //console.log("LEDForwardVoltage: " + LEDForwardVoltage);
    }
    if(mode === "closed"){
        console.log('closed mode :', mode);
        //console.log('ch :', ch);
        //await ch.close(2000);
        //process.exit(1);
    }
}
export default runBoards;