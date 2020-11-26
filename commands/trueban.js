const { GuildMember } = require("discord.js");

module.exports = {
    name: 'trueban',
    description: 'this one is a serious ban lmao',
    execute(message, args) {
        if (message.member.roles.cache.some(/*'779072823389323294' && '778288294483722251'*/ r => r.name === "Special Role")) {
            message.channel.send('<:nou:721676981866856558>');
        }
        else if (message.member.roles.cache.some(/*'779072823389323294' && '778288294483722251'*/ r => r.name === "Admins")) {
            message.channel.send('<:nou:721676981866856558>');
        }
        else if (message.member.roles.cache.some(/*'779072823389323294' && '778288294483722251'*/ r => r.name === "Mods")) {
            message.channel.send('<:nou:721676981866856558>');
        }
        else if (message.member.roles.cache.some(/*'779072823389323294' && '778288294483722251'*/ r => r.name === "Head Admins")) {
            message.channel.send('<:nou:721676981866856558>');
        }
        else {
            message.channel.send('lmao u dont have permissions lol <:omegalol:755012196819271760>');
        }
    }
}