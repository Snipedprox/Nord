module.exports = {
name: "pet",
code: `
$author[1;$username's pet;$replaceText[$replaceText[$replaceText[$getGlobaluserVar[pet];miu;https://cdn.discordapp.com/emojis/862974152708325457.gif?v=1&size=40];emaro;https://cdn.discordapp.com/emojis/872040059837222933.gif?v=1&size=40];hao;https://cdn.discordapp.com/emojis/884859005816668160.png?v=1&size=40]]
    $thumbnail[1;$replaceText[$replaceText[$replaceText[$getGlobaluserVar[pet];miu;https://cdn.discordapp.com/emojis/862974152708325457.gif?v=1&size=40];emaro;https://cdn.discordapp.com/emojis/872040059837222933.gif?v=1&size=40];hao;https://cdn.discordapp.com/emojis/884859005816668160.png?v=1&size=40]]

    $description[1;**Name : $replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet];miu;<a:hskk:931531868329893888>];emaro;<a:emafos:931531733579468840>];hao;<:mius:931531680328613939>] $replaceText[$replaceText[$replaceText[$getGlobaluserVar[pet];miu;miu];emaro;emaro];hao;hao]
Food : $replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet];miu;🍋];emaro;🥕];hao;🍠] 
Fav ability : $replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet];miu;<:multiplier:930818046220701767>];emaro;<:hourlymoney:930817890570096650>];hao;<:lucky:931269213266522162>] $replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet];miu;Income multiplier];emaro;Credit multiplier];hao;Random events]**

__**STATS**__
$addField[1;Ability ; **$replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet];miu;<:multiplier:930818046220701767>];emaro;<:hourlymoney:930817890570096650>];hao;<:lucky:931269213266522162>] $replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet];miu;Income multiplier];emaro;Credit multiplier];hao;Random events]**;yes]
$addField[1;Hunger;\`[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$truncate[$divide[$truncate[$divide[$multi[100;$getGlobalUserVar[pethunger;$authorID]];100]];10]];10;■■■■■■■■■■];2;■■□□□□□□□□];3;■■■□□□□□□□];4;■■■■□□□□□□];5;■■■■■□□□□□];6;■■■■■■□□□□];7;■■■■■■■□□□];8;■■■■■■■■□□];9;■■■■■■■■■□];1;■□□□□□□□□□];0;□□□□□□□□□□]]\`;yes]
$addField[1;Happines;\`[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$truncate[$divide[$truncate[$divide[$multi[100;$getGlobalUserVar[happiness;$authorID]];100]];10]];10;■■■■■■■■■■];2;■■□□□□□□□□];3;■■■□□□□□□□];4;■■■■□□□□□□];5;■■■■■□□□□□];6;■■■■■■□□□□];7;■■■■■■■□□□];8;■■■■■■■■□□];9;■■■■■■■■■□];1;■□□□□□□□□□];0;□□□□□□□□□□]]\`;yes]
$addField[1;Pet level; $getGlobalUserVar[level];yes]]

$color[1;FF7300]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]
`}