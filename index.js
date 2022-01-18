const keepAlive = require('./app.js')
const express = require('express');
const app = express();

app.get('/server', (req, res) => {
	res.sendFile('server.html', {root: __dirname })
});

app.listen(3000, () => {
	console.log('Server started');
});
const aoijs = require('aoi.js');
const config = require('./config.js');
const bot = new aoijs.Bot(config.Bot);
const fs = require('fs');

bot.onMessage()
bot.functionManager.createCustomFunction({
  name: "$removeSpecialChars",
  type: "aoi.js",
    params: ['msg'],
  code: `$replaceTextWithRegex[$get[msg];/[^a-zA-Z ]/;g;]

$let[msg;{msg}]`})
 

//Configs
require('./handler/status')(bot)
require('./handler/variables')(bot)
require('./handler/callbacks')(bot)



//Loader
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")

const voice = new aoijs.Voice (bot)

const Lavalink = new aoijs.Lavalink(bot);
Lavalink.addNode({
 url: "lava.link:80",
 password: "neo",
 name: "aoi.js",
 secure: false,
 })
 
loader.setColors({
  walking: ["blink", "dim", "fgWhite"],
  failedWalking: {
    name: ["bright", "fgYellow", "underline"],
 
    text: ["gray", "fgRed"]
  },
  typeError: {
    command: ["bright", "fgYellow"],
    type: ["fgYellow"],
    text: ["bright", "fgRed"]
  },
  failLoad: {
    command: ["bright", "fgMagenta"],
    type: ["fgRed"],
    text: ["bright", "fgRed"],
  },
  loaded: {
    command: ["bright", "fgRed"],
    type: ["bright", "fgWhite"],
    text: ["bright", "fgBlue"]
  },
 
})
