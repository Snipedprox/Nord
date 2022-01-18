module.exports = {
name: "equip",
$if: "v4",
code: `
$if[$message[1]==]
$title[1;**Equipables**]
$color[1;$getServerVar[color]]
$description[1;**
Here are the swords / accessories that you can equip**

$getVar[sweateremote] **Sweater - Equip it because it seems nice (ID:** \`sweater\`**)**
$getVar[diamondswordemote] **Diamond sword - Equip it so you dont have to lose lifes during hunting (ID:** \`diamondsword\`**)**
$getVar[ironswordemote] **Iron sword - Equip it so you can hunt but you will lose 5 lifes per hunt (ID:** \`ironsword\`**)**]
$else
$if[$toLowerCase[$message[1]]==sweater]
$color[1;$getServerVar[color]]
$description[1;**You put on your $getVar[sweateremote] sweater how nice**]
$setGlobalUserVar[cequip;Sweater]
$onlyIf[$getGlobalUserVar[sweater]>=1;**You dont seem to own a sweater...**]
$else
$if[$toLowerCase[$message[1]]==ironsword]
$color[1;$getServerVar[color]]
$description[1;**You put on your $getVar[ironswordemote] iron sword, now go and hunt!**]
$setGlobalUserVar[sequip;Iron sword]
$onlyIf[$getGlobalUserVar[ironsword]>=1;**You dont seem to own a iron sword...**]
$else
$if[$toLowerCase[$message[1]]==diamondsword]
$color[1;$getServerVar[color]]
$description[1;**You put on your $getVar[diamondswordemote] diamond sword, now go and hunt without losing lifes!**]
$setGlobalUserVar[sequip;Diamond sword]
$onlyIf[$getGlobalUserVar[diamondsword]>=1;**You dont seem to own a diamond sword...**]
$endif
$endif
$endif
$endif
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}