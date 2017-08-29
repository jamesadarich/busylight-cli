#! /usr/bin/env node
const busylight = require("busylight");
const light = busylight.get();

const command = process.argv[2];

if (command === "busy") {
    light.light("red");
}
else if (command === "free") {
    light.light("green");
}
else if (command === "police") {
    light.blink(["red", "blue"], 150);
}
else {
    light.blink(["red", "orange", "green", "blue", "purple"], 150);
}
