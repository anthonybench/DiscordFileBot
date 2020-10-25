const Discord = require('discord.js');

module.exports = {
    name: 'holo',
    description: 'display picture of holo-chan',
    execute(message, args) {
        const attachment = new Discord.MessageAttachment('https://i.imgur.com/oTopiyf.jpg');
		message.channel.send(attachment);
    }
};