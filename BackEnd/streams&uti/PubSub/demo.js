const eventBus = require('./eventBus');

let firstSayHelloUnsubscribe= eventBus.subscribe('say-hello', (name,secondName) => console.log('event say hello executed! -' + name + ' ' + secondName));
let SecondSayHelloUnsubscribe=eventBus.subscribe('say-hello', (name,secondName) => console.log('event say hello executed second time! - ' + name + ' ' + secondName));
eventBus.subscribe('bye', (name) => console.log('event say bye executed! - ' + name ));


eventBus.publish('say-Hello', 'Pesho','Ivan');
firstSayHelloUnsubscribe();
SecondSayHelloUnsubscribe();
eventBus.publish('say-hello', 'Gosho');
eventBus.publish('bye', 'Pesho');