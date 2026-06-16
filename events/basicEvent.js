const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('greet', () => {//listen to event
    console.log("Hello Event Triggered");
});

emitter.emit('greet');//trigger event