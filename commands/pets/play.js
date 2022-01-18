module.exports = {
name: "play",
$if: "v4",
code: `
$color[1;YELLOW]
$description[1;**$username** played with **$get[pet]** 
Now **$get[pet]** happiness is $if[$sum[$getGlobalUserVar[happiness;$authorID];$random[9;16]]>100]
**100**$else**$get[happiness]**$endif]
$if[$sum[$getGlobalUserVar[happiness;$authorID];$random[9;16]]>100]
$setGlobalUserVar[happiness;100;$authorID]
$endif
    $setGlobalUserVar[happiness;$get[happiness];$authorID]
    
    
   
    $let[pet;$replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet];miu;<a:hskk:931531868329893888>];emaro;<a:emafos:931531733579468840>];hao;<:mius:931531680328613939>] $replaceText[$replaceText[$replaceText[$toLowerCase[$message[1]];miu;miu];emaro;emaro];hao;hao]]
    
    $let[happiness;$sum[$getGlobalUserVar[happiness;$authorID];$random[9;16]]]

    $onlyif[$getGlobalUserVar[happiness;$authorID]<100;🚫 | Your pet doesnt wanna play right now]

$globalCooldown[5m;**your pet doesnt wanna play right now so wait %time%**]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]
`}