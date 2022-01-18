module.exports = {
name: "prefix",
code: `
$title[1;**prefix change**]
$description[1;**i have successfully set my server prefix to** \`$message[1]\`]
$setServerVar[prefix;$message[1]]
$onlyIf[$charcount[$message[1]]<5;**Server prefix has to be less than 5 charactars**]
$onlyIf[$charCount[$message[1]]>0;**You cant make the prefix empty**]
$onlyPerms[manageserver;**You are missing the manage server perm**]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}