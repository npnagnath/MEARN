// get the reference of EventEmitter class of events module
var events = require("events");

//create an object of EventEmitter class by using above reference
var em = new events.EventEmitter();

//Subscribe for myEve
em.on("myEve", function (data) {
  console.log("First subscriber: " + data);
});

// Raising myEve
em.emit("myEve", "some data goes here...");
