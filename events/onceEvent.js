const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.once('payment', () => {//Runs only once.
    console.log("Payment Success");
});

emitter.emit('payment');//Only first event works.
emitter.emit('payment');
emitter.emit('payment');
