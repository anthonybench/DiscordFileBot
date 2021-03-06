const Discord = require('discord.js');
const fs = require('fs');

let fileRootName = 'test'; // Enter subdirectory name here
let pathBase = './files/' + fileRootName + '/';

module.exports = {
    name: 'test',
    description: 'This is a demonstrational stub for your implementation',
    execute(message, args) {

        if (args.length) {
            if (args[0].charAt(0) != '-' || args[0].toLowerCase().includes('v')) {
                message.reply("Usage: `!test -1`");
                return;
            } else {
                let ver = args[0].substring(1);
                const resultFiles = fs.readdirSync(pathBase).filter(file => file.includes(ver));
                if (resultFiles.length) {
                    const attachment = new Discord.MessageAttachment(`${pathBase}${fileRootName}-v${ver}.txt`);
                    message.channel.send(attachment);
                } else {
                    message.reply("Sorry, `" + fileRootName + "/`" +  "does not have a version `" + ver + "` in this filesystem.");
                }
            }
        } else {
            const resultFiles = fs.readdirSync(pathBase);
            let m = 0;
            resultFiles.forEach(file => {
                let ver = parseInt(file.charAt(file.indexOf('.') - 1))
                if (ver > m) {
                    m = ver;
                }
            });
            const attachment = new Discord.MessageAttachment(`${pathBase}${fileRootName}-v${m}.txt`);
		    message.channel.send(attachment);
        }

    }
};