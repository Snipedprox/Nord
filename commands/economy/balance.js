module.exports = {
name: "bal",
aliases: ['balance','wallet'],
code: `
$title[1;**$usertag[$get[u]]'s balance**]
$thumbnail[1;$useravatar[$get[u]]]
$color[1;$getServerVar[color]]
$description[1;
<:wallet:924320830748491867> **Wallet » $numberSeparator[$truncate[$getGlobalUserVar[cash;$get[u]]];,] $getServerVar[symbol]**
<:bsymbol:924321320462876732> **Bank » $numberSeparator[$truncate[$getGlobalUserVar[bank;$get[u]]];,] $getServerVar[symbol]**]

$let[u;$findMember[$message;yes]]


$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}