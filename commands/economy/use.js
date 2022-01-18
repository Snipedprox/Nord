module.exports = [{
name: "use",
$if: "v4",
code: `
$if[$toLowerCase[$message[1]]==income]
$color[1;YELLOW]
$description[1;**You used your <:boosty:930834566829187142> income buff and now have 3x income for 1h**]
$setGlobaluserVar[incomebuff;$sub[$getGlobaluserVar[incomebuff];1]]
$setTimeOut[buff;1h;{
"channel" : "$channelID",
"userid" : "$authorid"
}]
$setGlobalUserVar[buff;on]
$onlyIf[$getGlobalUserVar[incomebuff]>=1;**You need to buy this item first**]
$onlyIf[$getGlobalUserVar[buff]==off;**You already have this item enabled**]
$else

$if[$toLowerCase[$message[1]]==premium]
$color[1;YELLOW]
$description[1;**You used your <:premium:930836380077162556> premium point and $servername will have 3x income for 7d and also premium**]
$setGlobaluserVar[incomebuff;$sub[$getGlobaluserVar[incomebuff];1]]
$setServerVar[pp;on]
$setTimeOut[sbuff;7d;{
"channel" : "$channelID",
"server" : "$guildid"
}]
$setServerVar[sbuff;on]
$onlyIf[$getGlobalUserVar[premium]>=1;**You need to buy this item first**]
$onlyIf[$getServerVar[sbuff]==off;**You already have this item enabled**]
$endif
$endif
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`
} , {
type: "timeout",
name: "buff",
code: ` $channelSendMessage[$timeoutdata[channel];**<@$timeoutdata[userid]> your buff ran out**;no]
$setGlobalUserVar[buff;off;$timeoutdata[userid]]`
} , {
type: "timeout",
name: "sbuff",
code: ` $channelSendMessage[$timeoutdata[channel];**Sadly this server has lost their buff**;no]
$setServerVar[pp;off]
$setServerVar[sbuff;off;$timeoutdata[server]]`}]