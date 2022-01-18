module.exports = [{
name: "$alwaysExecute",
$if: "v4",
code: `
$if[$getGlobalUserVar[pet]==miu]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;9]]]
$cooldown[10s]
$else
$if[$getGlobalUserVar[pet]==emaro]
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];1]]
$cooldown[13s]
$else
$if[$getGlobalUserVar[pet]==hao]
$awaitMessages[$channelId;everyone;69s;claim;claim;Ah shoot command timed out;{}]
$color[1;$getServerVar[color]]
$description[1;**$username's <:mius:931531680328613939> hao summoned a claim event in chat type \`claim\` to claim it**]
$onlyIf[$random[10;40]==21;]
$endif
$endif
$endif
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`
} , {
type: "awaited",
name: "claim",
code: `
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorid];$random[1000;2000]];$authorid]
**$username claimed the drop just in time and got away with $numberSeparator[$random[1000;2000];,]$getServerVar[symbol]**`}]