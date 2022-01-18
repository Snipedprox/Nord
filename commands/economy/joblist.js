module.exports = {
name: "joblist",
aliases: ['jobs','jlist'],
code: `
$title[1;**Welcome to the job list**]
$color[1;$getServerVar[color]]
$thumbnail[1;https://media.discordapp.net/attachments/780464129319108708/857341011108691998/unknown.png?width=421&height=421]
$description[1;
\`\`\`
To apply for a job simply do $getServerVar[prefix]apply < id >\`\`\`
🏭 **[Factorian]($getBotInvite)**
**ID: factory**
**Balance needed: 25,000$getServerVar[symbol]**

🪛 **[Thief]($getBotInvite)**
**ID: thief**
**Balance needed: 8,000$getServerVar[symbol]**]

$globalCooldown[3s;**Take it easy man wait %time%**]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}