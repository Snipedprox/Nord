module.exports = ({
name:"give",
aliases:"pay",
description:"Pay cash to someone!",
usage:"pay <amount> <user>",
code:`
$sendmessage[{newEmbed: {color:BLUE} {description:**<@$authorID> gave **$getServerVar[symbol] \`$numberSeparator[$get[amount];,]\` **(and paid** $getServerVar[symbol] \`$numberSeparator[$sub[$get[tax];$get[amount]];,]\`** tax) to $username[$get[user]]**}};no]
$setglobaluservar[cash;$sub[$getglobaluservar[cash;$authorID];$get[amount]];$authorID]
$setglobaluservar[cash;$sum[$getglobaluservar[cash;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]!=0;{newEmbed:{description:$getVar[x] Cannot pay 0!}{color:$getVar[color]}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed:{description:$getVar[x] Cannot pay negative amounts!}{color:$getVar[color]}}]
$onlyif[$get[amount]<=$getglobaluservar[cash;$authorID];{newEmbed:{description:$getVar[x] You do not have that much to give!}{color:$getVar[color]}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed:{description:$getVar[x] Invalid Args
Usage:
\`pay <amount> <user>\`}{color:$getVar[color]}}]
$let[tax;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[cash;$authorID];1];max;$getglobalUserVar[cash;$authorID];1]]
$let[amount;$truncate[$sub[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[cash;$authorID];1];max;$getglobalUserVar[cash;$authorID];1];$multi[$divide[5;100];$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[cash;$authorID];1];max;$getglobalUserVar[cash;$authorID];1]]]]]
$onlyif[$get[user]!=$authorid;{newEmbed:{description:$getVar[x] Do you really want to share your cash?}{color:$getVar[color]}}]
$onlyif[$memberexists[$get[user]]==true;{newEmbed:{description:$getVar[x] User not found!}{color:$getVar[color]}}]
$let[user;$findUser[$message[2];no]]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`})