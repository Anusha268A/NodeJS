

const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('user', (name, age) => {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
});

emitter.emit('user', 'Anusha', 20);