module.exports = {
name: "rod",
$if: "v4",
aliases: ['fishing','frod','frishing'],
code: `
$if[$message[1]==]
$title[1;**Fishing rod**]
$color[1;$getVar[color]]
$thumbnail[1;https://cdn.discordapp.com/icons/565375575930437632/73ee226c8ace84b3f71e129bc9d0ea82.webp?size=40]
$description[1;
**== Fishing rod commands==**

**Subcommands**
**\`\`\`diff
- stats , list , repair \`\`\`**

**Aliases**
**\`\`\`xml
rod , fishing , frod , frishing\`\`\`**]
$else
$if[$message[1]==stats]
$color[1;$getVar[color]]
$title[1;**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;<:plasticrod:925107841528905808>];old;<:oldrod:925107841432432640>];wood;<:woodrod:925107842028044389>];metal;<:lavarod:925107841033986088>];lava;<:lavarod:925107841033986088>];dev;<:Developerod:925107839830216704>] Fishing rods**]
$description[1;
**Fishing rod:** **$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;<:plasticrod:925107841528905808>];old;<:oldrod:925107841432432640>];wood;<:woodrod:925107842028044389>];metal;<:lavarod:925107841033986088>];lava;<:lavarod:925107841033986088>];dev;<:Developerod:925107839830216704>] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;Plastic rod];old;Old rod];wood;Wooden rod];metal;Metal rod];enchant;Enchanted rod];sea;Ocean rod];gold;Golden rod];diamond;Diamond rod];emerald;Emerald rod];ruby;Ruby rod];obsidian;Obsidian rod];lava;Lava rod];dev;Developer rod]**
**Durability:** **[$repeatMessage[$getGlobalUserVar[fd];$replaceText[$getGlobalUserVar[fd];$getGlobalUserVar[fd];■]]]($getBotInvite)** ]
$else
$if[$message[1]==list]
$title[1;**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;<:plasticrod:925107841528905808>];old;<:oldrod:925107841432432640>];wood;<:woodrod:925107842028044389>];metal;<:lavarod:925107841033986088>];lava;<:lavarod:925107841033986088>];dev;<:Developerod:925107839830216704>] Fishing rod list**]
$color[1;$getVar[color]]
$description[1;
**== $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;<:plasticrod:925107841528905808>];old;<:oldrod:925107841432432640>];wood;<:woodrod:925107842028044389>];metal;<:lavarod:925107841033986088>];lava;<:lavarod:925107841033986088>];dev;<:Developerod:925107839830216704>] Fishing rod list ==**


**Your current fishing rod: $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;<:plasticrod:925107841528905808>];old;<:oldrod:925107841432432640>];wood;<:woodrod:925107842028044389>];metal;<:lavarod:925107841033986088>];lava;<:lavarod:925107841033986088>];dev;<:Developerod:925107839830216704>] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;Plastic rod];old;Old rod];wood;Wooden rod];metal;Metal rod];enchant;Enchanted rod];sea;Ocean rod];gold;Golden rod];diamond;Diamond rod];emerald;Emerald rod];ruby;Ruby rod];obsidian;Obsidian rod];lava;Lava rod];dev;Developer rod]**

**Next fishing rod upgrade:** **$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;$customEmoji[oldrod;925101047091961856]];$getGlobalUserVar[rod];] $replaceText[$replaceText[$getGlobalUserVar[rod];old;$customEmoji[woodrod;925101047091961856]];$getGlobalUserVar[rod];] $replaceText[$replaceText[$getGlobalUserVar[rod];wood;$customEmoji[metalrod;925101047091961856]];$getGlobalUserVar[rod];] $replaceText[$replaceText[$getGlobalUserVar[rod];metal;$customEmoji[lavarod;925101047091961856]];$getGlobalUserVar[rod];] $replaceText[$replaceText[$getGlobalUserVar[rod];dev;$customEmoji[Developerrod;925101047091961856]];$getGlobalUserVar[rod];] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;Old rod];old;Wooden rod];wood;Metal rod];metal;Lava rod];lava;You have reached max upgrade];dev;Developer rod]**]
$else
$if[$message[1]==repair]
$title[1;**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;<:plasticrod:925107841528905808>];old;<:oldrod:925107841432432640>];wood;<:woodrod:925107842028044389>];metal;<:lavarod:925107841033986088>];lava;<:lavarod:925107841033986088>];dev;<:Developerod:925107839830216704>] Fishing rod repaired**]
$color[1;$getVar[color]]
$description[1;
**You have repaired your $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;<:plasticrod:925107841528905808>];old;<:oldrod:925107841432432640>];wood;<:woodrod:925107842028044389>];metal;<:lavarod:925107841033986088>];lava;<:lavarod:925107841033986088>];dev;<:Developerod:925107839830216704>] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;Plastic rod];old;Old rod];wood;Wooden rod];metal;Metal rod];enchant;Enchanted rod];sea;Ocean rod];gold;Golden rod];diamond;Diamond rod];emerald;Emerald rod];ruby;Ruby rod];obsidian;Obsidian rod];lava;Lava rod];dev;Developer rod] and paid $numberSeparator[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;500];old;1000];wood;1500];metal;2000];enchant;2500];sea;3000];gold;3500];diamond;4000];emerald;4500];ruby;5000];obsidian;7500];lava;10000];dev;0];,]$getServerVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;500];old;1000];wood;1500];metal;2000];enchant;2500];sea;3000];gold;3500];diamond;4000];emerald;4500];ruby;5000];obsidian;7500];lava;10000];dev;0]]]

$setGlobalUserVar[fd;10]

$onlyIf[$getGlobalUserVar[cash]>=$get[cost];**You dont have enough $getServerVar[symbol] you need $numberSeparator[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;500];old;1000];wood;1500];metal;2000];enchant;2500];sea;3000];gold;3500];diamond;4000];emerald;4500];ruby;5000];obsidian;7500];lava;10000];dev;0];,]$getServerVar[symbol]**]


$let[cost;replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;500];old;1000];wood;1500];metal;2000];enchant;2500];sea;3000];gold;3500];diamond;4000];emerald;4500];ruby;5000];obsidian;7500];lava;10000];dev;0]]
$endif
$endif
$endif
$endif
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}