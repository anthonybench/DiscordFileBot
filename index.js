/*=====================================
	Discord File Bot
	By Isaac Yep
=====================================*/

// Node file management system
const fs = require('fs');

// Instantiate Bot
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

// Load commands
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// Signal to console when bot logs in
client.once('ready', () => {
	console.log('Ready!');
});

// MESSAGE LOGIC
client.on('message', message => {

	// Parse command and arguments
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	// Display usage on mention
	if (message.mentions.users.size) {
		if (message.mentions.users.first().bot && args.length != 0 && args[0] === 'howto') {
			message.channel.send("~ Beep Boop, I'm FileBot. Here are my commands: ~");
			message.channel.send("-------------------------------------------------------------");
			message.channel.send("!prune `n`    =>    `n` is the number of previous messages to delete");
			message.channel.send("!server    =>    show server information");
			message.channel.send("!avatar `n` `m` ...    =>    show avatars of users `n`, `m`, whoever else");
			message.channel.send("-------------------------------------------------------------");

			return;
		}
	}
	
	// Ignore general chat
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	// Command handler
	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);