const Discord = require('discord.js')

module.exports = {
    name: "ping",
    alias: ["pong"],
    async execute(client, message, arg){
        message.channel.send("Pong")
    }
}