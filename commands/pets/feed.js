module.exports = {
name: "feed",
$if: "v4",
code: `
$color[1;YELLOW]
$description[1;**$username** feed **$get[pet]** by **$get[food]**
Now **$get[pet]** hunger is $if[$sum[$getGlobalUserVar[pethunger;$authorID];$random[9;16]]>100]
**100**$else**$get[pethunger]**$endif]
$if[$sum[$getGlobalUserVar[pethunger;$authorID];$random[9;16]]>100]
$setGlobalUserVar[pethunger;100;$authorID]
$endif
    $setGlobalUserVar[pethunger;$get[pethunger];$authorID]
    $setGlobalUserVar[$get[pfood];$sub[$getGlobalUserVar[$get[pfood];$authorID];1];$authorID]
    
    $onlyif[$getGlobalUserVar[$get[pfood];$authorID]>=1;🚫 | You need **$get[food]** to feed your pet
    $let[pet;$replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet];miu;<a:hskk:931531868329893888>];emaro;<a:emafos:931531733579468840>];hao;<:mius:931531680328613939>] $replaceText[$replaceText[$replaceText[$toLowerCase[$message[1]];miu;miu];emaro;emaro];hao;hao]]
    $let[food;$replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet];miu;🍋];emaro;🥕];hao;🍠]]
    $let[pethunger;$sum[$getGlobalUserVar[pethunger;$authorID];$random[9;16]]]

    $let[pfood;$replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet;$authorID];miu;food_miu];emaro;food_emaro];hao;food_hao]]

    $onlyif[$getGlobalUserVar[pethunger;$authorID]<100;🚫 | Your pet hunger is already full]

$globalCooldown[5m;**your pet doesnt wanna eat right now so wait %time%**]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}