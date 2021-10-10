const { SlashCommand } = require('slash-create');

module.exports = class extends SlashCommand {
    constructor(creator) {
        super(creator, {
            name: 'ping',
            description: 'Get bot latency',
        });
    }

    async run() {
        return `Pong ${client.ws.ping}ms 🏓`
    }
};