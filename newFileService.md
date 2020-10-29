# How to Add a New Command


If you want to add `new file service` to this bot, make a new subdirectory in `files/` named after the file it maintains versions of, say for instance *dontStarve*, followed by "-v" and the version number. <br />

```
files/dontStarve/dontStarve-v1.txt
```

You can keep versions this way for archival. Then, add a new command such as `commands/dontStarve.js` and paste the following code with your subdirectory name placed int it:

```Javascript
const Discord = require('discord.js');
const fs = require('fs');

let fileRootName = 'dontStarve'; // Enter subdirectory name here.
let pathBase = './files/' + fileRootName + '/';

module.exports = {
    name: 'test',
    description: 'This serves the file for which this file is named after',
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
```