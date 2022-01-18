module.exports = [{
name: "ping",
code: `
$color[1;YELLOW]
$description[1;**My ping is $pingms**]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`
} , {
name: "uptime",
code: `
$color[1;YELLOW]
$description[1;**I have been online for $uptime**]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`
} , {
name: "avatar",
code: `
$color[1;YELLOW]
$description[1;**$usertag[$get[u]]'s avatar**]
$image[1;$useravatar[$get[u]]]
$let[u;$findUser[$message;yes]]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}]