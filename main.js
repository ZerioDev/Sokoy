const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
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

client.on('ready', () => {
    console.log('Started refreshing application (/) commands');

    const rest = new REST({ version: '9' }).setToken(client.config.dsc.token);

    client.guilds.cache.map(async guild => {
        await rest.put(
            Routes.applicationGuildCommands(client.user.id, guild.id),
            { body: client.commands.map(x => x) }
        );
    });

    console.log('Successfully reloaded application (/) commands');
});