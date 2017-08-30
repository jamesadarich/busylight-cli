#! /usr/bin/env node
const busylight = require("busylight");
const light = busylight.get();

const commands = process.argv.splice(2);

if (commands.indexOf("police") > -1) {
    light.blink(["red", "blue"], 150);
}
else if (commands.length === 0) {    
    light.blink(["red", "orange", "green", "blue", "purple"], 150);
}
else {
    let colors = commands.filter(command => !/^--/.test(command));

    if (commands.indexOf("busy") > -1) {
        colors = [ "red" ];
    }
    else if (commands.indexOf("free") > -1) {
        colors = [ "green" ];
    }

    if (commands.indexOf("--pulse") > -1) {
        light.pulse(colors, 500);
    }    
    else if (commands.indexOf("--blink") > -1) {
        light.blink(colors, 500);
    }
    else if (colors.length > 1) {
        process.stdout.write("cannot set light to multiple colors\n");
    }
    else {
        light.light(colors[0]);
    }
}
