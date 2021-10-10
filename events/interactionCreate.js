module.exports = async (client, interaction) => {
    const command = client.commands.get(interaction.commandName);

    if (command) {
        try {
            command.run(interaction, client);
        } catch (error) {
            console.log(error);
            interaction.reply({ content: 'An error occured please try again later ❌' });
        }
    }
};