const { Client, Intents } = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.config = require('./config');

require('./src/registerCommands');

client.login(client.config.dsc.token);

client.on('ready', () => console.log('Ready !'));