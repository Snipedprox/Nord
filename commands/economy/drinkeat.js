module.exports = [{
name: "drink",
$if: "v4",
code: `
$if[$toLowerCase[$message[1]]==chocodx]
**You drank 1 $getVar[chocodxemote] and you got the luck effect for 10m**
$setGlobalUserVar[lucky;on]
$setGlobalUserVar[chocodx;$sub[$getGlobalUserVar[chocodx];1]]

$setTimeOut[luck;10m;{
"id": "$authorid",
"cid": "$channelID"
}]
$onlyIf[$getGlobalUserVar[chocodx]>=1;**You dont even own $getVar[chocodxemote]**]
$onlyIf[$getGlobalUserVar[lucky]==off;**You already have the luck effecyt on**]
$else
$if[$toLowerCase[$message[1]]==choco]
**You drank 1 $getVar[chocoemote] and you a 100% thirst**
$setGlobalUserVar[thirst;100]
$setGlobalUserVar[choco;$sub[$getGlobalUserVar[choco];1]]
$onlyIf[$getGlobalUserVar[choco]>=1;**You dont even own $getVar[chocoemote]**]
$onlyIf[$getGlobalUserVar[thirst]<75;**You need less than 75 thirst **]
$else
**Are you gonna drink chocodx or choco**
$endif
$endif
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`
} , {
name: "eat",
code: `
$if[$toLowerCase[$message[1]]==chocobread]
**You ate 1 $getVar[chocobreademote] and you got 100% hunger and 100% health**
$setGlobalUserVar[hp;100]
$setGlobalUserVar[hunger;100]
$setGlobalUserVar[chocobread;$sub[$getGlobalUserVar[chocobread];1]]
$onlyIf[$getGlobalUserVar[chocobread]>=1;**You dont even own $getVar[chocobreademote]**]
$onlyIf[$getGlobalUserVar[hunger]<75;**You need less than 75 hunger **]
$onlyIf[$getGlobalUserVar[hp]<75;**You need less than 75 hp**]
$else
$if[$toLowerCase[$message[1]]==bread]
**You ate 1 $getVar[breademote] and you got 100% hunger**
$setGlobalUserVar[hunger;100]
$setGlobalUserVar[bread;$sub[$getGlobalUserVar[bread];1]]
$onlyIf[$getGlobalUserVar[bread]>=1;**You dont even own $getVar[breademote]**]
$onlyIf[$getGlobalUserVar[hunger]<75;**You need less than 75 hunger **]
$else
**Are you gonna eat bread or chocobread**
$endif
$endif
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`
} , {
type: "timeout",
name: "luck",
code: `$channelSendMessage[$timeOutData[cid];**<@$timeOutData[id]> your luck ran out!**]

$setGlobalUserVar[lucky;off;$timeOutData[id]]`
}]