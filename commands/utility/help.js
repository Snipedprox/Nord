module.exports = {
name: "help",
$if: "v4",
code: `
$color[1;YELLOW]
$title[1;**Welcome to my command list**]
$thumbnail[1;$useravatar[$clientid]]
$description[1;
<:goldsouvenir:929796559682551908> **Economy system**
\`\`\`
apply , balance , buy , drink , eat , inventory , joblist , open , profile , shop , weekly , work , pay , rod stats , rod list , rod repair , fish , sell , fupgrade , pickshop , ores ,  mine , hunt , zoo , equip , use , creditshop , credits , heal , lb\`\`\`

<:ringgg:929796089970819082> **Utility system**
\`\`\`
help , invite , avatar , ping , uptime , prefix\`\`\`

<:haopet_hao:930816687673049169> **Pet system**
\`\`\`
pet , adopt , play , feed\`\`\`

<:Emaro:930816573994831902> **Interactions**
\`\`\`
action baka , action bite , action blush , action bored , action cry , action cuddle , dance , action facepalm , action feed , action happy , action highfive , action hug , action kiss , action laugh , action neko , action pat , action poke , action pout , action shrug , action slap , action sleep , action smile , action smug , action stare , action think , action thumbsup , action tickle , action wave , action wink\`\`\`
$replaceText[$replaceText[$channelNsfw[$channelID];true;
🔞** Nsfw system**
\`\`\`
nsfw randomhentai , nsfw pussy , nsfw neko , nsfw lewd , nsfw lesbian , nsfw kuni , nsfw cum , nsfw classic , nsfw boobs , nsfw anal , nsfw yuri , nsfw avatar , nsfw tits , nsfw trap , nsfw solog , nsfw solo , nsfw pwankg , nsfw pussyart , nsfw kemo , nsfw kitsune , nsfw keta , nsfw holoero , nsfw hentai , nsfw futanari , nsfw femdom , nsfw feetgif , nsfw erofeet , nsfw feet , nsfw ero , nsfw erok , nsfw erokemo , nsfw eron , nsfw eroyuri , nsfw cumjpg , nsfw blowjob , nsfw spank , nsfw gasm\`\`\`];false;]

<:devssss:931513196886491146> **Developer system**
\`\`\`
eval , djs , blacklist , unblacklist , set , update , guilds , symbol  , setname , setavatar , prc , pgen\`\`\`]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}