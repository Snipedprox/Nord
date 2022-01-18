module.exports = {
name: "invite",
code: `
$color[1;$getServervar[color]]
$description[1;**Hey thanks for inviting me here you go [Invite link](https://discord.com/api/oauth2/authorize?client_id=875083183652229160&permissions=412317247489&scope=bot%20applications.commands)**]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}