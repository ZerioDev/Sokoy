module.exports = {
    name: 'ping',
    description: 'A very cool command',

    run: (interaction) => {
        interaction.reply({ content: 'Pong !' });
    }
};