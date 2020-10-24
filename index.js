const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	// Array of input words
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	// First input word, lowercase
	const command = args.shift().toLowerCase();

	// Command Logic
	if (message.content.startsWith(`${prefix}ping`)) {
		message.channel.send('Pong.');
	} else if (message.content.startsWith(`${prefix}beep`)) {
		message.channel.send('Boop.');
	} else if (message.content === `${prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name} \nTotal members: ${message.guild.memberCount} \nRegion: ${message.guild.region} \nCreated: ${message.guild.createdTimestamp}`);
	} else if (command === 'args-info') {

		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
		else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
	
		message.channel.send(`First argument: ${args[0]}`);
		message.channel.send(`Arguments: ${args}`);
		message.channel.send(`Total Input length: ${args.join.length}`);

	} else if (command === 'kick') {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}
		const taggedUser = message.mentions.users.first();
		message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	} else if (command === 'avatar') {
		if (!message.mentions.users.size)
			return message.reply(message.author.displayAvatarURL());
		
		message.mentions.users.map(user => {
			message.channel.send(user.displayAvatarURL());
		});
	} else if (command === 'prune') {
		const amount = parseInt(args[0]) + 1;
	
		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 99.');
		}
	
		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.reply('Error: tried to delete messages older than 2 weeks. (no-no)');
		});
	} else if (command === 'holo') {
		const attachment = new Discord.MessageAttachment('https://i.imgur.com/oTopiyf.jpg');
		message.channel.send(attachment);
	}

});

client.login(token);

