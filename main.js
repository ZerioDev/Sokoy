const path = require('path');
const { Client, Intents } = require('discord.js');
const { SlashCreator, GatewayServer } = require('slash-create');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.config = require('./config');

require('./src/listenEvents');

const creator = new SlashCreator({
    token: client.config.dsc.token,
    applicationID: client.config.dsc.id
});

creator
    .withServer(new GatewayServer((handler) => client.ws.on('INTERACTION_CREATE', handler)))
    .registerCommandsIn(path.join(__dirname, 'commands'))
    .syncCommands();

client.login(client.config.dsc.token);