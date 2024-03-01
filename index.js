const Discord = require('discord.js');
const bot = new Discord.Client();
const musicCommands = require('./musicCommands');
const listCommands = require('./listCommands')
const jokes = require('./jokes');
const token = 'ODIwNDgzNDE3MDUyNTQ1MDM0.YE10ug.7aoYkFDbeE5UnJuTSRF3AgXo9js'

bot.login(token);

bot.once('ready', () => {console.log(`Bot Online: ${bot.user.tag}`)});
bot.once('reconnecting', () => {console.log(`Bot Reconectando: ${bot.user}`)});
bot.once('disconnect', () => {console.log(`Bot Desconectado: ${bot.user.tag}`)});

bot.on('message', async msg => {
    if(msg.author.bot) return;
    if(!msg.content.startsWith('!')) return;

    await musicCommands.controlMusic(msg);
    await listCommands.listCommands(msg);
    await jokes.joke(msg)
});