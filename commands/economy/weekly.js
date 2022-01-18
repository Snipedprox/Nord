module.exports = {
name: "weekly",
$if: "v4",
code: `
$if[$getGlobalUserVar[lucky]==off]
$thumbnail[1;https://media.discordapp.net/attachments/929842100210642997/930777022257573898/928415916260229170.png]
$color[1;$getServerVar[color]]
$description[1;**You claimed your weekly with your boost and earned $numberSeparator[$random[5000;20000];,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[5000;20000]]]
$else
$if[$getGlobalUserVar[lucky]==on]
$thumbnail[1;https://media.discordapp.net/attachments/929842100210642997/930777022257573898/928415916260229170.png]
$color[1;$getServerVar[color]]
$description[1;**You claimed your weekly and earned $numberSeparator[$random[5000;10000];,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[5000;10000]]]
$endif
$endif
$globalCooldown[7d;**Your weekly is on a cooldown of %time%**]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}