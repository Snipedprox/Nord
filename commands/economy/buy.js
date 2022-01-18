module.exports = {
name: "buy",
$if: "v4",
code: `
$if[$toLowerCase[$message[1]]==chocodx]
$color[1;$getServerVar[color]]
$description[1;**You purchased $numberSeparator[$multi[1;$message[2]];,] $getVar[chocodxemote] Choccymilk DX and paid $numberSeparator[$multi[5000;$message[2]];,]$getServerVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[5000;$message[2]]]]
$setGlobalUserVar[chocodx;$sum[$getGlobalUserVar[chocodx];$multi[1;$message[2]]]]

$onlyIf[$getGlobalUserVar[cash]>=$multi[5000;$message[2]];**You need to have atleast $numberSeparator[$multi[5000;$message[2]];,]$getServerVar[symbol] for this item**]

$else

$if[$toLowerCase[$message[1]]==choco]
$color[1;$getServerVar[color]]
$description[1;**You purchased $numberSeparator[$multi[1;$message[2]];,] $getVar[chocoemote] Choccymilk and paid $numberSeparator[$multi[1000;$message[2]];,]$getServerVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[1000;$message[2]]]]
$setGlobalUserVar[choco;$sum[$getGlobalUserVar[choco];$multi[1;$message[2]]]]

$onlyIf[$getGlobalUserVar[cash]>=$multi[1000;$message[2]];**You need to have atleast $numberSeparator[$multi[1000;$message[2]];,]$getServerVar[symbol] for this item**]

$else

$if[$toLowerCase[$message[1]]==chocobread]
$color[1;$getServerVar[color]]
$description[1;**You purchased $numberSeparator[$multi[1;$message[2]];,] $getVar[chocobreademote] Choccybread and paid $numberSeparator[$multi[7000;$message[2]];,]$getServerVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[7000;$message[2]]]]
$setGlobalUserVar[chocobread;$sum[$getGlobalUserVar[chocobread];$multi[1;$message[2]]]]

$onlyIf[$getGlobalUserVar[cash]>=$multi[7000;$message[2]];**You need to have atleast $numberSeparator[$multi[7000;$message[2]];,]$getServerVar[symbol] for this item**]

$else

$if[$toLowerCase[$message[1]]==bread]
$color[1;$getServerVar[color]]
$description[1;**You purchased $numberSeparator[$multi[1;$message[2]];,] $getVar[breademote] Bread and paid $numberSeparator[$multi[1000;$message[2]];,]$getServerVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[1000;$message[2]]]]
$setGlobalUserVar[bread;$sum[$getGlobalUserVar[bread];$multi[1;$message[2]]]]

$onlyIf[$getGlobalUserVar[cash]>=$multi[1000;$message[2]];**You need to have atleast $numberSeparator[$multi[1000;$message[2]];,]$getServerVar[symbol] for this item**]

$else

$if[$toLowerCase[$message[1]]==epic]
$color[1;$getServerVar[color]]
$description[1;**You purchased $numberSeparator[$multi[1;$message[2]];,] $getVar[epicemote] Epic crates and paid $numberSeparator[$multi[150000;$message[2]];,]$getServerVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[150000;$message[2]]]]
$setGlobalUserVar[epic;$sum[$getGlobalUserVar[epic];$multi[1;$message[2]]]]

$onlyIf[$getGlobalUserVar[cash]>=$multi[150000;$message[2]];**You need to have atleast $numberSeparator[$multi[150000;$message[2]];,]$getServerVar[symbol] for this item**]

$else

$if[$toLowerCase[$message[1]]==enchanted]
$color[1;$getServerVar[color]]
$description[1;**You purchased $numberSeparator[$multi[1;$message[2]];,] $getVar[enchantedemote] Enchanted crates and paid $numberSeparator[$multi[500000;$message[2]];,]$getServerVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[500000;$message[2]]]]
$setGlobalUserVar[enchanted;$sum[$getGlobalUserVar[enchanted];$multi[1;$message[2]]]]

$onlyIf[$getGlobalUserVar[cash]>=$multi[500000;$message[2]];**You need to have atleast $numberSeparator[$multi[500000;$message[2]];,]$getServerVar[symbol] for this item**]

$else

$if[$toLowerCase[$message[1]]==mystery]
$color[1;$getServerVar[color]]
$description[1;**You purchased $numberSeparator[$multi[1;$message[2]];,] $getVar[mysteryemote] Mystery crates and paid $numberSeparator[$multi[50000;$message[2]];,]$getServerVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[50000;$message[2]]]]
$setGlobalUserVar[mystery;$sum[$getGlobalUserVar[mystery];$multi[1;$message[2]]]]

$onlyIf[$getGlobalUserVar[cash]>=$multi[50000;$message[2]];**You need to have atleast $numberSeparator[$multi[50000;$message[2]];,]$getServerVar[symbol] for this item**]

$else

$if[$toLowerCase[$message[1]]==foodcrate]
$color[1;$getServerVar[color]]
$description[1;**You purchased $numberSeparator[$multi[1;$message[2]];,] $getVar[foodcrateemote] Food crates and paid $numberSeparator[$multi[500;$message[2]];,]$getServerVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[500;$message[2]]]]
$setGlobalUserVar[foodcrate;$sum[$getGlobalUserVar[foodcrate];$multi[1;$message[2]]]]

$onlyIf[$getGlobalUserVar[cash]>=$multi[500;$message[2]];**You need to have atleast $numberSeparator[$multi[500;$message[2]];,]$getServerVar[symbol] for this item**]

$else

$if[$toLowerCase[$message[1]]==ironsword]
$color[1;$getServerVar[color]]
$description[1;**You purchased $numberSeparator[$multi[1;$message[2]];,] $getVar[ironswordemote] Iron sword and paid $numberSeparator[$multi[2000;$message[2]];,]$getServerVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[2000;$message[2]]]]
$setGlobalUserVar[ironsword;$sum[$getGlobalUserVar[ironsword];$multi[1;$message[2]]]]

$onlyIf[$getGlobalUserVar[cash]>=$multi[2000;$message[2]];**You need to have atleast $numberSeparator[$multi[2000;$message[2]];,]$getServerVar[symbol] for this item**]

$else

$if[$toLowerCase[$message[1]]==diamondsword]
$color[1;$getServerVar[color]]
$description[1;**You purchased $numberSeparator[$multi[1;$message[2]];,] $getVar[diamondswordemote] Diamond sword and paid $numberSeparator[$multi[50000;$message[2]];,]$getServerVar[symbol]**]


$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[50000;$message[2]]]]
$setGlobalUserVar[diamondsword;$sum[$getGlobalUserVar[diamondsword];$multi[1;$message[2]]]]

$onlyIf[$getGlobalUserVar[cash]>=$multi[50000;$message[2]];**You need to have atleast $numberSeparator[$multi[50000;$message[2]];,]$getServerVar[symbol] for this item**]


$else

$if[$toLowerCase[$message[1]]==sweater]
$color[1;$getServerVar[color]]
$description[1;**You purchased $numberSeparator[$multi[1;$message[2]];,] $getVar[sweateremote] Sweater and paid $numberSeparator[$multi[5000;$message[2]];,]$getServerVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[5000;$message[2]]]]
$setGlobalUserVar[sweater;$sum[$getGlobalUserVar[sweater];$multi[1;$message[2]]]]

$onlyIf[$getGlobalUserVar[cash]>=$multi[5000;$message[2]];**You need to have atleast $numberSeparator[$multi[5000;$message[2]];,]$getServerVar[symbol] for this item**]

$else

$if[$toLowerCase[$message[1]]==hp]
$color[1;$getServerVar[color]]
$description[1;**You purchased $numberSeparator[$multi[1;$message[2]];,] $getVar[hpemote] Health potion and paid $numberSeparator[$multi[2000;$message[2]];,]$getServerVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[2000;$message[2]]]]
$setGlobalUserVar[potion;$sum[$getGlobalUserVar[potion];$multi[1;$message[2]]]]

$onlyIf[$getGlobalUserVar[cash]>=$multi[2000;$message[2]];**You need to have atleast $numberSeparator[$multi[2000;$message[2]];,]$getServerVar[symbol] for this item**]
$else
$if[$message[1]==10]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought 1 <:goldpickaxe:926548373358641193> golden pickaxe and paid 15,000$getServerVar[symbol]**]
$setGlobalUserVar[pickaxe;gold]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];15000]]
$onlyIf[$getGlobalUserVar[cash]>=15000;**You need to have atleast 15,000$getServerVar[symbol]**]

$else

$if[$message[1]==11]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought 1 <:candypickaxe:926548448650621008> candy pickaxe and paid 50,000$getServerVar[symbol]**]
$setGlobalUserVar[pickaxe;candy]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];50000]]
$onlyIf[$getGlobalUserVar[cash]>=50000;**You need to have atleast 50,000$getServerVar[symbol]**]

$else

$if[$message[1]==12]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought 1 <:amethystpickaxe:926548560714010694> amethyst pickaxe and paid 250,000$getServerVar[symbol]**]
$setGlobalUserVar[pickaxe;amethyst]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];250000]]
$onlyIf[$getGlobalUserVar[cash]>=250000;**You need to have atleast 250,000$getServerVar[symbol]**]

$else

$if[$toLowerCase[$checkContains[$message[1];13]]==true]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought 1 <:spectre:926548638065389668> spectre pickaxe and paid 1,000,000$getServerVar[symbol]**]
$setGlobalUserVar[pickaxe;spectre]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];1000000]]
$onlyIf[$getGlobalUserVar[cash]>=1000000;**You need to have atleast 1,000,000$getServerVar[symbol]**]

$else

$if[$message[1]==14]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought 1 <:legendarypickaxe:926548756147617812> legendary pickaxe and paid 2,000,000$getServerVar[symbol]**]
$setGlobalUserVar[pickaxe;legendary]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];2000000]]
$onlyIf[$getGlobalUserVar[cash]>=2000000;**You need to have atleast 2,000,000$getServerVar[symbol]**]

$else

$if[$message[1]==15]
$title[1;**Item bought**]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$description[1;**You bought 1 <:devclaw:926548826150567998> claw and paid 5,000,000$getServerVar[symbol]**]
$setGlobalUserVar[pickaxe;claw]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];5000000]]
$onlyIf[$getGlobalUserVar[cash]>=5000000;**You need to have atleast 5,000,000$getServerVar[symbol]**]
$else

$if[$toLowerCase[$message[1]]==income]
$color[1;$getServerVar[color]]
$description[1;**You purchased $numberSeparator[$multi[1;$message[2]];,] <:boosty:930834566829187142> income buffs and paid $numberSeparator[$multi[200;$message[2]];,]$getVar[coinemote]**]

$setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin];$multi[200;$message[2]]]]
$setGlobalUserVar[incomebuff;$sum[$getGlobalUserVar[incomebuff];$multi[1;$message[2]]]]

$onlyIf[$getGlobalUserVar[coin]>=$multi[200;$message[2]];**You need to have atleast $numberSeparator[$multi[200;$message[2]];,]$getVar[coinemote] for this item**]

$else

$if[$toLowerCase[$message[1]]==premium]
$color[1;$getServerVar[color]]
$description[1;**You purchased $numberSeparator[$multi[1;$message[2]];,] <:premium:930836380077162556> premium points and paid $numberSeparator[$multi[250;$message[2]];,]$getVar[coinemote]**]

$setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin];$multi[250;$message[2]]]]
$setGlobalUserVar[premium;$sum[$getGlobalUserVar[premium];$multi[1;$message[2]]]]

$onlyIf[$getGlobalUserVar[coin]>=$multi[250;$message[2]];**You need to have atleast $numberSeparator[$multi[250;$message[2]];,]$getVar[coinemote] for this item**]
$else

$if[$toLowerCase[$message[1]]==foodmiu]
$color[1;$getServerVar[color]]
$description[1;**You purchased $numberSeparator[$multi[1;$message[2]];,] 🍋 miu food and paid $numberSeparator[$multi[1000;$message[2]];,]$getServerVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[1000;$message[2]]]]
$setGlobalUserVar[food_miu;$sum[$getGlobalUserVar[food_miu];$multi[1;$message[2]]]]

$onlyIf[$getGlobalUserVar[cash]>=$multi[1000;$message[2]];**You need to have atleast $numberSeparator[$multi[1000;$message[2]];,]$getServerVar[symbol] for this item**]

$else

$if[$toLowerCase[$message[1]]==foodemaro]
$color[1;$getServerVar[color]]
$description[1;**You purchased $numberSeparator[$multi[1;$message[2]];,] 🥕 emaro food and paid $numberSeparator[$multi[1000;$message[2]];,]$getServerVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[1000;$message[2]]]]
$setGlobalUserVar[food_emaro;$sum[$getGlobalUserVar[food_emaro];$multi[1;$message[2]]]]

$onlyIf[$getGlobalUserVar[cash]>=$multi[1000;$message[2]];**You need to have atleast $numberSeparator[$multi[1000;$message[2]];,]$getServerVar[symbol] for this item**]


$else

$if[$toLowerCase[$message[1]]==foodhao]
$color[1;$getServerVar[color]]
$description[1;**You purchased $numberSeparator[$multi[1;$message[2]];,] 🍠 hao food and paid $numberSeparator[$multi[1000;$message[2]];,]$getServerVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[1000;$message[2]]]]
$setGlobalUserVar[food_hao;$sum[$getGlobalUserVar[food_hao];$multi[1;$message[2]]]]

$onlyIf[$getGlobalUserVar[cash]>=$multi[1000;$message[2]];**You need to have atleast $numberSeparator[$multi[1000;$message[2]];,]$getServerVar[symbol] for this item**]

$else
**Thats not a valid item**
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif

$onlyIf[$isNumber[$message[2]]==true;**Not a valid number**]
$onlyIf[$message[2]>=1;**Specify an item**]
$onlyIf[$checkContains[$message[2];-;=;+;.;,;/;~]==false;**Dont use symbols**]

$globalCooldown[3s;**take a chillpill and wait %time%**]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}