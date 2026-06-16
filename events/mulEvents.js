const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('login', () => {
    console.log("Save login history");
});

emitter.on('login', () => {
    console.log("Send welcome mail");
});

emitter.on('login', () => {
    console.log("Generate token");
});

emitter.emit('login');