const Discord = require('discord.js');

module.exports = {
    name: 'test',
    description: 'this is a proof of concept',
    execute(message, args) {
        
        const attachment = new Discord.MessageAttachment('./files/test.txt');
		message.channel.send(attachment);

    }
};