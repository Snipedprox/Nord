module.exports = {
name: "apply",
$if: "v4",
code: `
$if[$toLowerCase[$checkContains[$message[1];factory;factorian;factor]]==true]
$color[1;$getServerVar[color]]
$description[1;🏭 **You now work as a factorian!**]
$setGlobalUserVar[job;factorian]
$onlyIf[$getGlobalUserVar[cash]>=25000;**You need the balance of 25,000$getServerVar[symbol]**]
$else
$if[$toLowerCase[$checkContains[$message[1];thief;screwdriver;robber]]==true]
$color[1;$getServerVar[color]]
$description[1;🪛 **You now work as a thief!**]
$setGlobalUserVar[job;thief]
$onlyIf[$getGlobalUserVar[cash]>=8000;**You need the balance of 8,000$getServerVar[symbol]**]
$else
**You need to specify a valid job id**
$endif
$endif

$globalCooldown[3s;**Take it easy man wait %time%**]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}