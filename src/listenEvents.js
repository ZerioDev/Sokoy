const { readdirSync } = require('fs');

const events = readdirSync('./events/').filter(file => file.endsWith('.js'));

events.map(file => {
    console.log('Loading events');

    const event = require(`../events/${file}`);
    console.log(`Loaded event ${file.split('.')[0]}`);

    client.on(file.split('.')[0], event.bind(null, client));
});