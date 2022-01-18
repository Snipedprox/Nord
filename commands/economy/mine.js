module.exports = ({
name: "mine",
$if: "v4",
code: `
$if[$getGlobalUserVar[pickaxe]==silver]
$title[1;**Mining!**]
$color[1;$getVar[color]]
$description[1;
**You went into a dark cave with your <:silverpickaxe:926548290277875712> silver pickaxe and you got**
\`+ $truncate[$random[1;5]]\` <:quartz:926585163801067530>
\`+ $truncate[$random[1;4]]\` <:amethyst:926585236211499018>
**You also got $numberSeparator[$truncate[$random[1000;5000]];,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$truncate[$random[1000;5000]]]]
$setGlobalUserVar[quartz;$sum[$getGlobalUserVar[quartz];$truncate[$random[1;5]]]]
$setGlobalUserVar[amethyst;$sum[$getGlobalUserVar[amethyst];$truncate[$random[1;4]]]]
$setGlobalUserVar[durability;$sub[$getGlobalUserVar[durability];$truncate[$random[1;2]]]]

$else

$if[$getGlobalUserVar[pickaxe]==gold]
$title[1;**Mining!**]
$color[1;$getVar[color]]
$description[1;
**You went into a dark cave with your <:goldpickaxe:926548373358641193> gold pickaxe and you got**
\`+ $truncate[$random[1;15]]\` <:quartz:926585163801067530>
\`+ $truncate[$random[1;14]]\` <:amethyst:926585236211499018>
\`+ $truncate[$random[10;53]]\` <:ember:926585426490306600>
**You also got $numberSeparator[$truncate[$random[10090;50009]];,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$truncate[$random[10090;50009]]]]
$setGlobalUserVar[quartz;$sum[$getGlobalUserVar[quartz];$truncate[$random[1;15]]]]
$setGlobalUserVar[ember;$sum[$getGlobalUserVar[ember];$truncate[$random[10;53]]]]
$setGlobalUserVar[amethyst;$sum[$getGlobalUserVar[amethyst];$truncate[$random[1;14]]]]
$setGlobalUserVar[durability;$sub[$getGlobalUserVar[durability];$truncate[$random[1;2]]]]

$else

$if[$getGlobalUserVar[pickaxe]==candy]
$title[1;**Mining!**]
$color[1;$getVar[color]]
$description[1;
**You went into a dark cave with your <:candypickaxe:926548448650621008> candy pickaxe and you got**
\`+ $truncate[$random[50;100]]\` <:quartz:926585163801067530>
\`+ $truncate[$random[1;20]]\` <:amethyst:926585236211499018>
\`+ $truncate[$random[1;21]]\` <:ember:926585426490306600>
**You also got $numberSeparator[$truncate[$random[16000;56000]];,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$truncate[$random[16000;56000]]]]
$setGlobalUserVar[quartz;$sum[$getGlobalUserVar[quartz];$truncate[$random[50;100]]]]
$setGlobalUserVar[ember;$sum[$getGlobalUserVar[ember];$truncate[$random[1;21]]]]
$setGlobalUserVar[amethyst;$sum[$getGlobalUserVar[amethyst];$truncate[$random[1;20]]]]
$setGlobalUserVar[durability;$sub[$getGlobalUserVar[durability];$truncate[$random[1;2]]]]

$else

$if[$getGlobalUserVar[pickaxe]==amethyst]
$title[1;**Mining!**]
$color[1;$getVar[color]]
$description[1;
**You went into a dark cave with your <:amethystpickaxe:926548560714010694> amethyst pickaxe and you got**
\`+ $truncate[$random[5;50]]\` <:quartz:926585163801067530>
\`+ $truncate[$random[20;50]]\` <:amethyst:926585236211499018>
\`+ $truncate[$random[1;21]]\` <:ember:926585426490306600>
**You also got $numberSeparator[$truncate[$random[19000;59000]];,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$truncate[$random[19000;59000]]]]
$setGlobalUserVar[quartz;$sum[$getGlobalUserVar[quartz];$truncate[$random[5;50]]]]
$setGlobalUserVar[ember;$sum[$getGlobalUserVar[ember];$truncate[$random[1;21]]]]
$setGlobalUserVar[amethyst;$sum[$getGlobalUserVar[amethyst];$truncate[$random[20;50]]]]
$setGlobalUserVar[durability;$sub[$getGlobalUserVar[durability];$truncate[$random[1;2]]]]


$else

$if[$getGlobalUserVar[pickaxe]==spectre]
$title[1;**Mining!**]
$color[1;$getVar[color]]
$description[1;
**You went into a dark cave with your <:spectre:926548638065389668> spectre pickaxe and you got**
\`+ $truncate[$random[5;50]]\` <:quartz:926585163801067530>
\`+ $truncate[$random[20;50]]\` <:amethyst:926585236211499018>
\`+ $truncate[$random[1;21]]\` <:ember:926585426490306600>
\`+ $truncate[$random[20;50]]\` <:obsidian:926585310719148052>
**You also got $numberSeparator[$truncate[$random[12000;52000]];,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$truncate[$random[12000;52000]]]]
$setGlobalUserVar[obsidian;$sum[$getGlobalUserVar[obdsidian];$truncate[$random[20;50]]]]
$setGlobalUserVar[quartz;$sum[$getGlobalUserVar[quartz];$truncate[$random[5;50]]]]
$setGlobalUserVar[ember;$sum[$getGlobalUserVar[ember];$truncate[$random[1;21]]]]
$setGlobalUserVar[amethyst;$sum[$getGlobalUserVar[amethyst];$truncate[$random[20;50]]]]
$setGlobalUserVar[durability;$sub[$getGlobalUserVar[durability];$truncate[$random[1;2]]]]


$else

$if[$getGlobalUserVar[pickaxe]==legendary]
$title[1;**Mining!**]
$color[1;$getVar[color]]
$description[1;
**You went into a dark cave with your <:legendarypickaxe:926548756147617812> legendary pickaxe and you got**
\`+ $truncate[$random[5;50]]\` <:quartz:926585163801067530>
\`+ $truncate[$random[15;50]]\` <:crystal:926585587148927016>
\`+ $truncate[$random[20;50]]\` <:amethyst:926585236211499018>
\`+ $truncate[$random[1;21]]]\` <:ember:926585426490306600>
\`+ $truncate[$random[20;50]]\` <:obsidian:926585310719148052>
**You also got $numberSeparator[$truncate[$random[15000;55000]];,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$truncate[$random[15000;55000]]]]
$setGlobalUserVar[obsidian;$sum[$getGlobalUserVar[obdsidian];$truncate[$random[20;50]]]]
$setGlobalUserVar[crystal;$sum[$getGlobalUserVar[crystal];$truncate[$random[15;50]]]]
$setGlobalUserVar[quartz;$sum[$getGlobalUserVar[quartz];$truncate[$random[5;50]]]]
$setGlobalUserVar[ember;$sum[$getGlobalUserVar[ember];$truncate[$random[1;21]]]]
$setGlobalUserVar[amethyst;$sum[$getGlobalUserVar[amethyst];$truncate[$random[20;50]]]]
$setGlobalUserVar[durability;$sub[$getGlobalUserVar[durability];$truncate[$random[1;2]]]]

$else

$if[$getGlobalUserVar[pickaxe]==claw]
$title[1;**Mining!**]
$color[1;$getVar[color]]
$description[1;
**You went into a dark cave with your <:devclaw:926548826150567998> claws and just scraped al of the ores and you got**
\`+ $truncate[$random[50;500]]\` <:quartz:926585163801067530>
\`+ $truncate[$random[50;501]]\` <:amethyst:926585236211499018>
\`+ $truncate[$random[50;221]]\` <:ember:926585426490306600>
\`+ $truncate[$random[50;505]]\` <:obsidian:926585310719148052>
\`+ $truncate[$random[50;450]]\` <:emeralds:926585524347617300>
\`+ $truncate[$random[50;100]]\` <:crystal:926585587148927016>
**You also got $numberSeparator[$truncate[$random[10000;50000]];,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[10000;50000]]]
$setGlobalUserVar[obsidian;$sum[$getGlobalUserVar[obsidian];$random[50;505]]]
$setGlobalUserVar[quartz;$sum[$getGlobalUserVar[quartz];$truncate[$random[50;500]]]]
$setGlobalUserVar[ember;$sum[$getGlobalUserVar[ember];$truncate[$random[50;221]]]]
$setGlobalUserVar[amethyst;$sum[$getGlobalUserVar[amethyst];$truncate[$random[50;501]]]]
$setGlobalUserVar[durability;$sub[$getGlobalUserVar[durability];$truncate[$random[1;2]]]]
$setGlobalUserVar[emerald;$sum[$getGlobalUserVar[emerald];$truncate[$random[50;450]]]]
$setGlobalUserVar[crystal;$sum[$getGlobalUserVar[crystal];$truncate[$random[50;100]]]]
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$globalcooldown[$getGlobalUserVar[cooldown];**wait %time%**]`})
