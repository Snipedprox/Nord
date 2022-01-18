module.exports = {
name: "creditshop",
$if: "v4",
code: `
$title[1;**credit shop**]
$color[1;YELLOW]
$thumbnail[1;https://media.discordapp.net/attachments/929842100210642997/930834082538070086/929796559682551908.png]
$description[1;

<:boosty:930834566829187142> **Income buff**
**ID: income**
**Cost: 200$getVar[coinemote]**

<:premium:930836380077162556> **Premium point**
**ID: premium**
**cost: 250$getVar[coinemote]**]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}