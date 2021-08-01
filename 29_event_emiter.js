var events = require("events");
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log(" open...!");
};

//Assign the event handler to an event:
eventEmitter.on("open", myEventHandler);

//Fire the ‘open’ event:
eventEmitter.emit("open");
