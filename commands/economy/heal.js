module.exports = {
name: "heal",
code: `
**You drank up your $getVar[hpemote] and got an extra 10 ❤️**
$setGlobalUserVar[hp;$sum[$getGlobalUserVar[hp];10]]
$setGlobalUserVar[potion;$sub[$getGlobalUserVar[potion];1]]
$onlyIf[$getGlobalUserVar[hp]<76;**You need less than 75 ❤️**]
$onlyIf[$getGlobalUserVar[potion]>=1;**You dont even own 1 $getVar[hpemote]**]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}