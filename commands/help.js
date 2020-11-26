const { DiscordAPIError, Channel } = require("discord.js")

const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'a simple embed help command',
    execute(message, args) 
    {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor ('#C70039')
            .setTitle ('Commands')
            .addFields(
                { name: '!!help', value: 'The list of all the commands!' },
                { name: '!!ban', value: 'bans people' },
                { name: '!!trueban', value: 'ACTUALLY bans people' },
                { name: '!!admin', value: 'free admin' },
                { name: '!!joincult', value: 'every member is required to do it' },
                { name: '!!party', value: 'PARTY TIME WOOOO' },
                { name: '!!ping', value: 'pong' },
                { name: '!!youtube', value: 'youtube links' },
                { name: '!!praise', value: 'praises rippyy' },

            )

        message.channel.send(helpEmbed);
    }
}