module.exports = {
name: "work",
$if: "v4",
code: `
$if[$getGlobalUserVar[job]==factorian]
$color[1;$getServervar[color]]
$description[1;**you worked in your factory and produced $get[amount] $get[emote]**]

$setGlobalUserVar[$get[item];$sum[$getGlobalUserVar[$get[item]];$get[amount]]]

$setGlobalUserVar[worked;$sum[$getGlobalUserVar[worked];1]]

$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$randomText[$getServerVar[symbol];$getServerVar[symbol];$getServerVar[symbol];$getServerVar[symbol];$getServerVar[symbol];$getVar[chocoemote];$getVar[chocoemote];$getVar[chocoemote];$getVar[chocoemote];$getVar[chocodxemote];$getVar[chocodxemote];$getVar[chocodxemote];$getVar[breademote];$getVar[breademote];$getVar[breademote];$getVar[breademote];$getVar[chocobreademote]];$getVar[chocoemote];$random[1;10]];$getVar[chocodxemote];$random[1;9]];$getVar[breademote];$random[1;20]];$getVar[chocobreademote];$random[1;7]];$getServerVar[symbol];$random[100;999]]]

$let[emote;$randomText[$getServerVar[symbol];$getServerVar[symbol];$getServerVar[symbol];$getServerVar[symbol];$getServerVar[symbol];$getVar[chocoemote];$getVar[chocoemote];$getVar[chocoemote];$getVar[chocoemote];$getVar[chocodxemote];$getVar[chocodxemote];$getVar[chocodxemote];$getVar[breademote];$getVar[breademote];$getVar[breademote];$getVar[breademote];$getVar[chocobreademote]]]

$let[item;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$randomText[$getServerVar[symbol];$getServerVar[symbol];$getServerVar[symbol];$getServerVar[symbol];$getServerVar[symbol];$getVar[chocoemote];$getVar[chocoemote];$getVar[chocoemote];$getVar[chocoemote];$getVar[chocodxemote];$getVar[chocodxemote];$getVar[chocodxemote];$getVar[breademote];$getVar[breademote];$getVar[breademote];$getVar[breademote];$getVar[chocobreademote]];$getVar[chocoemote];choco];$getVar[chocodxemote];chocodx];$getVar[breademote];bread];$getVar[chocobreademote];chocobread];$getServerVar[symbol];cash]]

$else

$if[$getGlobalUserVar[job]==thief]
$color[1;$getServervar[color]]
$description[1;**You worked as a thief and stole $numberSeparator[$random[1000;3000];,]$getServerVar[symbol] **]


$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;3000]]]

$setGlobalUserVar[worked;$sum[$getGlobalUserVar[worked];1]]

$else
$if[$getGlobalUserVar[job]==none]
**You dont have a job, you should check the job list**
$endif
$endif
$endif


$globalCooldown[75s;**Take it easy man wait %time%**]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}