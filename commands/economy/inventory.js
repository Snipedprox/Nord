module.exports = {
name: "inv",
$if: "v4",
aliases: ['inventory','backpack'],
code: `
$title[1;**$usertag[$get[u]]'s inventory**]
$color[1;YELLOW]
$thumbnail[1;$useravatar[$get[u]]]
$description[1;

$getVar[chocodxemote] **Choccymilk DX: $numberSeparator[$getGlobalUserVar[chocodx;$get[u]];,]**
$getVar[chocoemote] **Choccymilk: $numberSeparator[$getGlobalUserVar[choco;$get[u]];,]**
$getVar[chocobreademote] **Choccybread: $numberSeparator[$getGlobalUserVar[chocobread;$get[u]];,]**
$getVar[breademote] **Bread: $numberSeparator[$getGlobalUserVar[bread;$get[u]];,]**
$getVar[enchantedemote] **Enchanted box: $numberSeparator[$getGlobalUserVar[enchanted;$get[u]];,]**
$getVar[hpemote] **Health potion: $numberSeparator[$getGlobalUserVar[potion;$get[u]];,]**
🍋 **Miu food: $numberSeparator[$getGlobalUserVar[food_miu;$get[u]];,]**
🥕 **Emaro food: $numberSeparator[$getGlobalUserVar[food_emaro;$get[u]];,]**
🍠 **Hao food: $numberSeparator[$getGlobalUserVar[food_hao;$get[u]];,]** 

\`\`\`
Keys\`\`\`

$getVar[commonkeyemote] **Common keys: $numberSeparator[$getGlobalUserVar[commonkey;$get[u]];,]** 
$getVar[uncommonkeyemote] **Uncommon keys: $numberSeparator[$getGlobalUserVar[uncommonkey;$get[u]];,]** 
$getVar[rarekeyemote] **Rare keys: $numberSeparator[$getGlobalUserVar[rarekey;$get[u]];,]** 
$getVar[legendarykeyemote] **Legendary keys: $numberSeparator[$getGlobalUserVar[legendarykey;$get[u]];,]** 

\`\`\`
Crates\`\`\`

$getVar[epicemote] **Epic chest: $numberSeparator[$getGlobalUserVar[epic;$get[u]];,]**
$getVar[mysteryemote] **Mystery chest: $numberSeparator[$getGlobalUserVar[mystery;$get[u]];,]**
$getVar[foodcrateemote] **Food chest: $numberSeparator[$getGlobalUserVar[foodcrate;$get[u]];,]**
$getVar[keypackemote] **Key chest: $numberSeparator[$getGlobalUserVar[keypack;$get[u]];,]**]
$let[u;$findUser[$message;yes]]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}