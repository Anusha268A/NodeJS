const EventEmitter = require('events');

const emitter = new EventEmitter();

function message() {
    console.log("Event Called");
}

emitter.on('test', message);

emitter.emit('test');

emitter.removeListener('test', message);//removed

emitter.emit('test');