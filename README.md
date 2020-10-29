# DiscordFileBot
An in-chat file serving bot for Discord


# **Discord File Bot**
*An in-chat file management application for quick, on-demand file access*

<br />

### Welcome to DiscordFileBot!
<hr>

This repository contains my scaffolding for a Discord chat-bot application named FileBot (@filebot). The bot will manage the text channels detailed in *Get Started* and *Usage*, and use those different channels to act as an on-demand file server, without polluting the server with pinned messages or a scaling demand for file storage on the server. The files served can be tailored by the implementation, and the following document will exhibit mine.

<br />

### Table of Contents 📖
<hr>

  - [Welcome](#welcome-to-discordfilebot)
  - [**Get Started**](#get-started-)
  - [Usage](#usage-)
  - [Technologies](#technologies-)
  - [Contribute](#Contribute-)
  - [Acknowledgements](#acknowledgements-)
  - [License/Stats/Author](#license-stats-author-)

<br />

### Get Started 🚀
<hr>

First thing's first, make sure you have already initialized the working directory as a `Node` applicaiton:
```bash
npm init
```

feel free to run `npm install`, else here are the two dependancies for **FileBot**:
```bash
npm install discord.js
npm install eslint
```

Navigate to `~/eslintrc.json` to enforce your own code styles by the appending the *rules* object:
```json
{
	"extends": "eslint:recommended",
	"env": {
		"node": true,
		"es6": true
	},
	"parserOptions": {
		"ecmaVersion": 2019
	},
	"rules": {

	}
}
```

If you haven't already, create the application and add it as a bot at the [Discord Developer Portal](https://discord.com/developers/applications/) and retrieve your bot token.


Place the token, and whatever in-chat prefix you wish to address the bot with in `~/config.json`
```json
{
    "prefix" : "<prefered_wake_signature_here>",
    "token" : "<bot_token_here"
}
```

Try running your bot and look for "ready!" logged to your runtime console:
```bash
node .
```

Adding new file services is easy, just hop on over to newFileService.md, or take a look at `commands/test.js`.
If you would like to add other new utility commands, see newCommand.md for tailoring this bot to suit your specific application.

<br />

### Usage ⚙
<hr>

Before the file service is covered, there are a few utility commands this bot has that a *server admin* might find useful.

You can display the avatars of any string of *mentioned* server members in one message:
```
!avatar @SleepyBoy @AwakeyGirl
```

Or just the callers avatar:
```
!avatar
```

You can get server details with:
```
!server
```

And you can delete any number of previous messages in the current channel swiftly, provided they are less than two weeks old (server admin only):
```
!prune 4
```

Now onto the file service!
For a given file you want to maintain versions of and have on demand, you simply follow the short list of steps in newFileService.md, and you can request any version of a file simply with:
```
!haikus -2
```
which would have **FileBot** serve you *haikus-v2.txt*, presumably.

If you simply want the latest version, just don't include the version number:
```
!haikus
```
which would return the latest version, say *haikus-v4.txt*. This service works for any file extension.

<br />

### Technologies 🧰
<hr>

  - [Discord.js](https://discord.js.org/#/)
  - [ESLint.js](https://eslint.org/)
  - [Node File System](https://nodejs.org/api/fs.html)

<br />

### Contribute 🤝
<hr>

I am not currently evaluating pull requests for merging, but would gladly accept feedback from any savy Discord Bot developers!

<br />

### Acknowledgements 💙
<hr>

Thanks to my girlfriend Jean, for helping me test this Bot on my testing server across its target channels. Certainly worth mentioning, the Discord.js docs contains a [guide]() that's terrific! I originally wrote bots with a rapid development template that made feature implementation rigid, only to later realize that writing it from the ground up is fun and welll-documented!

<br />

### License, Stats, Author 📜
<hr>

<img align="right" alt="example image tag" src="https://i.imgur.com/jtNwEWu.png" width="200" />

<!-- badge cluster -->

![GitHub](https://img.shields.io/github/license/anthonybench/DiscordFileBot) ![GitHub top language](https://img.shields.io/github/languages/top/anthonybench/DiscordFileBot) ![GitHub repo size](https://img.shields.io/github/repo-size/anthonybench/DiscordFileBot) 

Discord.js ![npm](https://img.shields.io/npm/v/discord.js)

<!-- / -->
See [License](https://opensource.org/licenses/MIT) for the full license text.

This repository was authored by *Isaac Yep*.

[Back to Table of Contents](#table-of-contents-)





<!-- =============================================== -->
<!-- =============================================== -->
<!-- =============================================== -->




<br /><br /><br /><br /><br /><br /><br />
# **CHEAT SHEET**
<br />

*italic*

<hr>

**bold**

<hr>

~~strike through~~

<hr>

> this is a block quote
> it goes like this
>
> if you want space, put arrow head in blank line
> you can also the the html `<blockquote>` tags

<hr>

### task list
- [x] flip
- [ ] flap
- [ ] flop

<hr>

<ul>
    <li>unordered list</li>
</ul>

<hr>

<ol>
    <li>ordered list</li>
</ol>

<hr>

| Col 1  | Col 2 |
| ------------- | ------------- |
| tables  | don't you  |
| are fun  | think so?  |

<hr>

```print("This is code") ```

<hr>

```json
{
    "This is" : "specific code"
}
```

<hr>

emojis are fine 😍
[emoji index](https://unicode.org/emoji/charts/full-emoji-list.html)

<hr>

not supported in *GitHub*:

<span style="background-color: darkslategray; color: cyan"> text and highlight colors supported as inline-styles </span>

supported in *GitHub* (this may not display in other previewers):

```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```

<hr>

basic link [My ToolBox](https://anthonybench.github.io)

<hr>

email <anthonybenchyep@gmail.com>

<hr>

basic image: \
![Holochan!](https://i.imgur.com/oTopiyf.jpg)

tagged image, more control, \
you can stack image tags by adding the `align="left"` attribute: \
<img alt="example image tag" src="https://i.imgur.com/jtNwEWu.png" width="200" />

<br />

<hr>

section jump [`Table of Contents`](#table-of-contents-)

(links must omit special characters and emojis, and spaces must have dashes. Underscores do not count as special characters. special means *anything* not alpha-numeric. this may not work in other previewers.)

<hr>

badges:

* license/GitHub
![GitHub](https://img.shields.io/github/license/anthonybench/Algorithms)
* Analysis/HitHub top language
![GitHub top language](https://img.shields.io/github/languages/top/anthonybench/Algorithms)
* Analysis/GitHub language count
![GitHub language count](https://img.shields.io/github/languages/count/anthonybench/anthonybench.github.io)
* Make new badge: [shield.io](https://shields.io/)
* [MIT License Link](https://opensource.org/licenses/MIT)