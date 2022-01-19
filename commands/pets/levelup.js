module.exports
= {
name: "$alwaysExecute",
$if: "v4",
code:` 
$if[$getGlobalUserVar[xp]>$getGlobalUserVar[req]]
$title[1;**Pet levelled up!**]
$color[1;$getServerVar[color]]
$description[1;**Oh nice $replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet];miu;<a:hskk:931531868329893888>];emaro;<a:emafos:931531733579468840>];hao;<:mius:931531680328613939>] $replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet];miu;miu];emaro;emaro];hao;hao] levelled up to $getGlobalUserVar[level]**]
$setGlobalUserVar[req;$sum[$getGlobalUserVar[req];100]]
$setGlobalUserVar[xp;0]
$setGlobalUserVar[level;$sum[$getGlobalUserVar[level];1]]
$else
$setGlobalUserVar[xp;$sum[$getGlobalUserVar[xp];$random[1;9]]]
$cooldown[7s]
$endif
$onlyIf[$getGlobalUserVar[pet]!=0;]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`
}
