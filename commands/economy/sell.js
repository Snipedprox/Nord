module.exports = {
    name: "sell",
    code: `
$setGlobalUserVar[$get[item];$sub[$getGlobalUserVar[$get[item];$authorID];$replaceText[$message[2];all;$getGlobalUserVar[$get[item];$authorID]]];$authorID]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];$multi[$get[price];$replaceText[$message[2];all;$getGlobalUserVar[$get[item];$authorID]]]];$authorID]



$color[1;$getServerVar[color]] 
$description[1;**$username sold $numberSeparator[$replaceText[$message[2];all;$getGlobalUserVar[$get[item];$authorID]];,] $replaceText[$get[item](s);_; ] for $numberSeparator[$multi[$get[price];$replaceText[$message[2];all;$getGlobalUserVar[$get[item];$authorID]]];,] $getGlobalUserVar[symbol]**]

$onlyIf[$replaceText[$message[2];all;$getGlobalUserVar[$get[item];$authorID]]>=1;Specify a correct amount / item ]

$onlyIf[$getGlobalUserVar[$get[item];$authorID]>=$replaceText[$message[2];all;$getGlobalUserVar[$get[item];$authorID]];You dont have enough items]

$onlyIf[$getGlobalUserVar[$get[item];$authorID]>=1;You don't have enough items]

$onlyIf[$isnumber[$replaceText[$message[2];all;$getGlobalUserVar[$get[item];$authorID]]]==true; Please specify a correct amount]

$onlyIf[$get[item]!=undefined;This item doesn't exist]

$let[item;$djseval[const item = {

$readfile[./items/sell-items.json]

}

item['$tolowercase[$message[1]]'];yes]] 

$let[price;$djseval[const item = {

$readfile[./items/sell-items.json]

}

item['$tolowercase[$message[1]]prize'];yes]] 

$onlyIf[$message[2]!=; Please specify a correct amount]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]
`}