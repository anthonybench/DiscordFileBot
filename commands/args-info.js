const Discord = require('discord.js');

module.exports = {
    name: 'args-info',
    description: 'diagnostic; shows arguments entered thereafter',
    execute(message, args) {
        if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
		else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
	
		message.channel.send(`First argument: ${args[0]}`);
		message.channel.send(`Arguments: ${args}`);
		message.channel.send(`Total Input length: ${args.join.length}`);
    }
};