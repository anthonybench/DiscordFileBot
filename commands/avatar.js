const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'display user avatars',
    execute(message, args) {
        if (!message.mentions.users.size)
			return message.reply(message.author.displayAvatarURL());
		
		message.mentions.users.map(user => {
			message.channel.send(user.displayAvatarURL());
		});
    }
};