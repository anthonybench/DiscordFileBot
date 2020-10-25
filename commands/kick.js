const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'kicks first-mentioned user',
    execute(message, args) {
        if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}
		const taggedUser = message.mentions.users.first();
		message.channel.send(`You wanted to kick: ${taggedUser.username}`);
    }
};