module.exports = {
name: "recipe",
$if: "v4",
aliases: ['recipes','recip'],
code: `
$title[1;**Welcome to crafting recipes**]
$color[1;$getServerVar[color]]
$description[1;
\`\`\`
To craft an item you should do $getServerVar[prefix]craft {id} {amount}\`\`\`
$getVar[legendarykeyemote] **Legendary key**
**ID: legendarykey**
**Items needed: <:amethyst:926585236211499018> x1,000 amethyst**

$getVar[rarekeyemote] **Rare key**
**ID: rarekey**
**Items needed: <:ember:926585426490306600> x1,000 ember**

$getVar[uncommonkeyemote] **Uncommon key**
**ID: uncommonkey**
**Items needed: <:quartz:926585163801067530> x1,000 quartz**

$getVar[commonkeyemote] **Common key**
**ID: commonkey**
**Items needed: <:ember:926585426490306600> x500 ember**

$getVar[keypackemote] **Key chest**
**ID: keychest**
**Items needed: $getVar[legendarykeyemote] x1 , $getVar[rarekeyemote] x1 , $getVar[uncommonkeyemote] x1 , $getVar[commonkeyemote] x1**
**Findings: $getVar[chocodxemote] , $getServerVar[symbol] , $getVar[enchantedemote] , $getVar[hpemote] , $getVar[coinemote]**]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}