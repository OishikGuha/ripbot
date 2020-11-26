const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!!';

const fs = require('fs');

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
})

client.login(process.env.TOKEN);

