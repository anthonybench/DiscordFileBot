module.exports = {
    name: 'server',
    description: 'display server info',
    execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name} \nTotal members: ${message.guild.memberCount} \nRegion: ${message.guild.region} \nCreated: ${message.guild.createdTimestamp}`);
    }
};