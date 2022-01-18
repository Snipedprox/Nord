module.exports = {
name: "profile",
$if: "v4",
code: `
$title[1;**Welcome to $username's profile**]
$color[1;$getServerVar[color]]
$description[1;
$getVar[hungeremote] **Hunger: $getGlobalUserVar[hunger]%**
$getVar[thirstemote] **Thirst: $getGlobalUserVar[thirst]%**

$getVar[reddot] **Sword equiped: $getGlobalUserVar[sequip]**
$getVar[reddot] **Clothing equiped: $getGlobalUserVar[cequip]**
$getVar[reddot] **Health: $getGlobalUserVar[hp]**]


$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`
}