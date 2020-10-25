# How to Add a New Command


If you want to add `new command` to this bot, make a new file `commands/new_command.js` and populate the following stub-template:
```Javascript
const Discord = require('discord.js');

module.exports = {
    name: 'same_as_file_name',
    description: 'short_description_here',
    execute(message, args) {
        
        // logic...

    }
};
```