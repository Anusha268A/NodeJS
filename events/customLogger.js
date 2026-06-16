const EventEmitter = require('events');
const fs = require('fs');

class Logger extends EventEmitter {

    log(message) {

        fs.appendFileSync(
            'log.txt',
            `\n${message}`
        );

        this.emit('messageLogged');
    }
}

const logger = new Logger();

logger.on('messageLogged', () => {
    console.log("Log Saved Successfully");
});

logger.log("Server Started");