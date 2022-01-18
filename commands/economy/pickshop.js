module.exports = {
name: "pickshop",
code: `
$title[1;**Welcome to the pickaxe shop!**]
$color[1;$getVar[color]]
$description[1;
**All of these pickaxes are diffrent they give more ores, the better the pickaxe the better and greater the ore how do you get them heres how**
\`\`\`
- $getServerVar[prefix]buy < number >\`\`\`

══════════════════
\`10\` <:goldpickaxe:926548373358641193> \`Golden pickaxe------- 15K\`$getServerVar[symbol]
\`11\` <:candypickaxe:926548448650621008> \`Candy pickaxe--------- 50K\`$getServerVar[symbol]
\`12\` <:amethystpickaxe:926548560714010694> \`Amethyst pickaxe---- 250K\`$getServerVar[symbol]
\`13\` <:spectre:926548638065389668> \`Spectre pickaxe-------- 1M\`$getServerVar[symbol]
\`14\` <:legendarypickaxe:926548756147617812> \`Legendary pickaxe----- 2M\`$getServerVar[symbol]
\`15\` <:devclaw:926548826150567998> \`Claws---------- 5M\`$getServerVar[symbol]]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`
}