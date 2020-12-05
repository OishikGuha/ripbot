const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!!';

const fs = require('fs');

const YouTube = require("discord-youtube-api");

const youtube = new YouTube("google api key");

async function testAll() {
    const video1 = await youtube.getVideo("https://www.youtube.com/watch?v=5NPBIwQyPWE");
    const video2 = await youtube.getVideoByID("5NPBIwQyPWE");
    const video3 = await youtube.searchVideos("big poppa biggie smalls");
    const videoArray1 = await youtube.getPlaylist("https://www.youtube.com/playlist?list=PLxyf3paml4dNMlJURcEOND0StDN1Q4yWz");
    const videoArray2 = await youtube.getPlaylistByID("PLxyf3paml4dNMlJURcEOND0StDN1Q4yWz");

    console.log(video1, video2, video3, videoArray1, videoArray2);
}

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.once('ready', () => { console.log('RipBot is online!') })

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'help') {
        client.commands.get('help').execute(message, args);
    }
    else if (command === 'admin') {
        client.commands.get('admin').execute(message, args);
    }
    else if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
    else if (command === 'joincult')
    {
        client.commands.get('joincult').execute(message, args);
    }
    else if (command === 'ban')
    {
        client.commands.get('ban').execute(message, args);
    }
    else if (command === 'trueban')
    {
        client.commands.get('trueban').execute(message, args);
    }
    else if (command === 'youtube')
    {
        client.commands.get('youtube').execute(message, args);
    }
    else if (command === 'party')
    {
        client.commands.get('party').execute(message, args);
    }
    else if (command === 'praise')
    {
        client.commands.get('praise').execute(message, args);
    }
    else if (command === 'youtubesearch')
    {
      client.commands.get('youtubesearch').execute(message, args);
    }
    else if (command === 'rules')
    {
        client.commands.get('rules').execute(message, args);
    }
})

client.login(process.env.TOKEN);
