const Discord = require('discord.js');

module.exports = {
    name: 'beep',
    descriptions: 'Beep!',
    execute(message, args) {
        message.channel.send('Boop.');
    }
};