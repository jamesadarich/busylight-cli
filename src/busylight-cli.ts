#! /usr/bin/env node
const busylight = require("busylight");
const light = busylight.get();

const command = process.argv[2];

if (command === "police") {
    light.blink(["red", "blue"], 150);
}
else if (!command) {    
    light.blink(["red", "orange", "green", "blue", "purple"], 150);
}
else {
    let color = command;

    if (command === "busy") {
        color = "red";
    }
    else if (command === "free") {
        color = "green";
    }

    if (process.argv.indexOf("--pulse") > -1) {
        light.pulse(color, 500);
    }    
    else if (process.argv.indexOf("--blink") > -1) {
        light.blink(color, 500);
    }
    else {
        light.light(color);
    }
}
