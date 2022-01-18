module.exports = {
name: "shop",
$if: "v4",
code: `
$if[$toLowerCase[$message[1]]==]
$color[1;RED]
$title[1;**Welcome to the shop menu**]
$description[1;
\`\`\`js
You can sellect a shop page by doing $getServerVar[prefix]shop < id > and you can purchase any item by doing $getServerVar[prefix]buy ( id ) ( amount )\`\`\`

$getVar[reddot] **Food shop
ID: food

$getVar[reddot] Crate shop
ID: crate

$getVar[reddot] Equipment shop
ID: equip

$getVar[reddot] Basic shop
ID: basic**]
$else
$if[$toLowerCase[$message[1]]==food]
$color[1;$getServerVar[color]]
$title[1;**Welcome to the shop: foods**]
$description[1;
$getVar[chocodxemote] **Choccymilk DX - This gives you a luck effect for 10 minutes |** \`5,000\`$getServerVar[symbol]
**ID:** \`chocodx\`

$getVar[chocoemote] **Choccy milk - Regular choco restores 100% thirst |** \`1,000\`$getServerVar[symbol]
**ID:** \`choco\`

$getVar[chocobreademote] **Choco bread - Choco bread restores all hunger and health |** \`7,000\`$getServerVar[symbol]
**ID:** \`chocobread\`

$getVar[breademote] **Bread - Just eat it and restore all hunger |** \`1,000\`$getServerVar[symbol]
**ID:** \`bread\`

🍋 **Miu food - Food for your pet miu |** \`1,000\`$getServerVar[symbol]
**ID:** \`foodmiu\`

🥕 **Emaro food - Food for your pet emaro |** \`1,000\`$getServerVar[symbol]
**ID:** \`foodemaro\`

🍠 **Hao food - Food for your pet hao |** \`1,000\`$getServerVar[symbol]
**ID:** \`foodhao\`]
$else
$if[$toLowerCase[$message[1]]==crate]
$color[1;$getServerVar[color]]
$title[1;**Welcome to the shop: crates**]
$description[1;
$getVar[epicemote] **Epic crate - This gives some good loot ngl |** \`150,000\`$getServerVar[symbol]
**ID:** \`epic\`

$getVar[enchantedemote] **Enchanted crate - This is not your ordinary crate |** \`500,000\`$getServerVar[symbol]
**ID:** \`enchanted\`

$getVar[mysteryemote] **Mystery crate - Will give a not too op mystery item |** \`50,000\`$getServerVar[symbol]
**ID:** \`mystery\`

$getVar[foodcrateemote] **Food crate - This will give you the basic foods |** \`500\`$getServerVar[symbol]
**ID:** \`foodcrate\`]
$else
$if[$toLowerCase[$message[1]]==equip]
$color[1;$getServerVar[color]]
$title[1;**Welcome to the shop: equipment**]
$description[1;
$getVar[ironswordemote] **Iron sword - Basic damage dealing weapon |** \`2,000\`$getServerVar[symbol]
**ID:** \`ironsword\`

$getVar[diamondswordemote] **Diamond sword - This is oneshot |** \`50,000\`$getServerVar[symbol]
**ID:** \`diamondsword\`

$getVar[sweateremote] **Sweater - Pretty warm sweater tho has no use |** \`5,000\`$getServerVar[symbol]
**ID:** \`mystery\`]
$else
$if[$toLowerCase[$message[1]]==basic]
$color[1;$getServerVar[color]]
$title[1;**Welcome to the shop: equipment**]
$description[1;
$getVar[hpemote] **Health potion - Heals 10% health |** \`2,000\`$getServerVar[symbol]
**ID:** \`hp\`]
$endif
$endif
$endif
$endif
$endif

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}