const EventEmiter = require('events');

const eventEmiter = new EventEmiter();

eventEmiter.on('sing', (songTitle) => {
    console.log(`${songTitle} - Llalallla`);
});

eventEmiter.emit('sing','Nothing else matters.');