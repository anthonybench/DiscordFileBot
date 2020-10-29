const Discord = require('discord.js');

module.exports = {
    name: 'prune',
    description: 'delete previous X messages',
    execute(message, args) {
		const amount = parseInt(args[0]) + 1;
	
		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 99.');
		} else if (message.author.id != message.guild.ownerID) {
			return message.reply("Sorry, only admin can prune channels in this server!")
		}
	
		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.reply('Error: tried to delete messages older than 2 weeks. (no-no)');
		});
    }
};