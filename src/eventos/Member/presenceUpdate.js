const { ActivityType } = require("discord.js")
const Discord = require("discord.js")
const config = require("../../data/config.json")

/**
 * @typedef {Discord.ActivityType} ActivityType
 * @param {Discord.CLient} client 
 * @param {Discord.Presence} oldPresence 
 * @param {Discord.Presence} newPresence 
 */
module.exports = async (client, oldPresence, newPresence) => {

    const guild = client.guilds.cache.get(config.data.guild)

    if(!guild) throw new Error("No se pudo encontrar el servidor indicado en la configuración, revisar el archivo config.json")

    const logChannel = guild.channels.cache.get(config.data.logChannel)

    config.data.roles.forEach(async (data) => {
        const rol = guild.roles.cache.get(data.rol)

        if(!rol) throw new Error(`No se pudo encontrar el rol ${data.rol} en el servidor ${guild.name}, verifica que la ID del rol sea correcta`)

        if(newPresence.status === "invisible" && config.options.removeIfUserHasOffline === true && (oldPresence.activities[0]?.state === data.presence || oldPresence.activities[0]?.state.includes(data.presence))){

            if(newPresence.member.roles.cache.has(data.rol)){
                await newPresence.member.roles.remove(data.rol).catch((e) => {
                    throw e;
                })
            }

        }

        if(config.options.mustBeStrictlyTheSame === true){
            const status = newPresence.activities[0]?.state;

            if(status === data.presence){
                
                if(!newPresence.member.roles.cache.has(data.rol)){
                    await newPresence.member.roles.add(data.rol).catch((e) => {
                        throw e;
                    })
                }

            } else {

                if(newPresence.member.roles.cache.has(data.rol)){
                    await newPresence.member.roles.remove(data.rol).catch((e) => {
                        throw e;
                    })
                }

            }
        } else {

            const status = newPresence.activities[0]?.state;

            if(status?.includes(data.presence)){

                if(!newPresence.member.roles.cache.has(data.rol)){
                    await newPresence.member.roles.add(data.rol).catch((e) => {
                        throw e;
                    })
                }

            } else {

                if(newPresence.member.roles.cache.has(data.rol)){
                    await newPresence.member.roles.remove(data.rol).catch((e) => {
                        throw e;
                    })
                }

            }


        }
        
    })

}