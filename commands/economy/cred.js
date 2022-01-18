module.exports = {
name: "credits",
code: `
$color[1;YELLOW]
$description[1;**$username[$get[u]] currently has $numberSeparator[$truncate[$getGlobalUserVar[coin;$get[u]]];,]$getVar[coinemote] credits**]
$let[u;$findMember[$message;yes]]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}