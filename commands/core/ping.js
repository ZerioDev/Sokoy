module.exports = {
    name: 'ping',
    description: 'Get bot latency',

    run: (interaction) => {
        interaction.reply({ content: `Pong ${client.ws.ping}ms 🏓` });
    }
};