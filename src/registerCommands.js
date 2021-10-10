const { Collection } = require('discord.js');
const { readdirSync } = require('fs');

const commands = [];

function searchFiles() {
    readdirSync('./commands/').map(dirs => {
        const files = readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

        files.map(cmd => commands.push(require(`../commands/${dirs}/${cmd}`)));
    });
}

client.commands = new Collection();

function buildCommands() {
    console.log('Loading commands');

    commands.map(file => {
        console.log(`Loaded command ${file.name.toLowerCase()}`);
        client.commands.set(file.name.toLowerCase(), file);
    });
}

searchFiles();
buildCommands();