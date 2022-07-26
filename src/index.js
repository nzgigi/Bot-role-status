const Discord = require('discord.js')
require('dotenv').config()
const fs = require('fs')

const client = new Discord.Client({ intents: 32767 })

client.commands = new Discord.Collection()

fs.readdirSync('./src/comandos').forEach(folder => {
    fs.readdirSync(`./src/comandos/${folder}`).forEach(file => {
        const command = require(`./comandos/${folder}/${file}`)
        client.commands.set(command.name, command)
    })
})

fs.readdirSync('./src/eventos').forEach(folder => {
    fs.readdirSync(`./src/eventos/${folder}`).forEach(file => {
        const event = require(`./eventos/${folder}/${file}`)
        client.on(file.split(".")[0], event.bind(null, client))
    })
})

client.login(process.env.TOKEN)