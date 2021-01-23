const Discord = require('discord.js');
require('dotenv').config();

const handlers = ['command_handler', 'event_handler'];
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

handlers.forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login(process.env.DISCORD_TOKEN)