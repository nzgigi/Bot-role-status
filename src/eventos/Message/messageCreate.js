const Discord = require('discord.js')

/**
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 */
module.exports = async (client, message) => {

    const prefix = "!";

    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.alias && cmd.alias.includes(command));

    if(!cmd) return;

    try {
        await cmd.execute(client, message, args);
    } catch (error) {
        console.error(error);
        message.reply('Hubo un error al ejecutar el comando.');
    }

}