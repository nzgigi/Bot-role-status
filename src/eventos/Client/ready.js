const Discord = require('discord.js')
const config = require("../../data/config.json")

/**
 * @param {Discord.Client} client 
 */
module.exports = async (client) => {

    console.log(`Conectado: ${client.user.tag}`)

    if(config.options.executeWithCommand === true) return;

    const guild = client.guilds.cache.get(config.data.guild)

    if(!guild) throw new Error("No se pudo encontrar el servidor indicado en la configuración, revisar el archivo config.json")

    const logChannel = guild.channels.cache.get(config.data.logChannel)
    
    config.data.roles.forEach((data) => {
        const rol = guild.roles.cache.get(data.rol)

        if(!rol) throw new Error(`No se pudo encontrar el rol ${data.rol} en el servidor ${guild.name}, verifica que la ID del rol sea correcta`)

        guild.members.cache.forEach(async member => {

            if(config.options.ignoreBots === true && member.user.bot) return;

            if(config.options.mustBeStrictlyTheSame === true){

                const memberPresence = member.presence?.activities[0]?.state;

                if(memberPresence === data.presence){
                    await member.roles.add(data.rol).catch((e) => {
                        throw e;
                    })
                }

            } else {

                const memberPresence = member.presence?.activities[0]?.state;

                if(memberPresence?.includes(data.presence)){

                    console.log(member.user.tag)

                    await member.roles.add(data.rol).catch((e) => {
                        throw e;
                    })
                }

            }
            
        })
    })

}