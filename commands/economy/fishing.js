module.exports = {
name: "fish",
$if: "v4",
code: `
$if[$getGlobalUserVar[rod]==plastic]
$title[1;**Fishes caught**]
$color[1;$getVar[color]]
$thumbnail[1;https://media.discordapp.net/attachments/925101047091961860/925446432822026260/720806c4ff4375a2f36674e8aeeb1906.png]
$description[1;
<:plasticrod:925107841528905808> **| You casted out your plastic rod and you brought home**
<:fish:925107840547454976> <:salmon:925107841751191572> <:clownfish:925107839490469998> <:bluefishs:925107839389806642> <:spacefish:925107841893814353>
$getServerVar[symbol] **| You got $random[1;5000]**]
$setGlobalUserVar[fish;$sum[$getGlobalUserVar[fish];1]]
$setGlobalUserVar[space;$sum[$getGlobalUserVar[space];1]]
$setGlobalUserVar[salmon;$sum[$getGlobalUserVar[salmon];1]]
$setGlobalUserVar[clown;$sum[$getGlobalUserVar[clown];1]]
$setGlobalUserVar[blue;$sum[$getGlobalUserVar[blue];1]]
$setGlobalUserVar[fd;$sub[$getGlobalUserVar[fd];1]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;5000]]]

$else


$if[$getGlobalUserVar[rod]==old]
$title[1;**Fishes caught**]
$color[1;$getVar[color]]
$thumbnail[1;https://media.discordapp.net/attachments/925101047091961860/925446432822026260/720806c4ff4375a2f36674e8aeeb1906.png]
$description[1;
<:oldrod:925107841432432640> **| You casted out your old rod and you brought home**
<:fish:925107840547454976> <:salmon:925107841751191572> <:clownfish:925107839490469998> <:bluefishs:925107839389806642> <:spacefish:925107841893814353> <:squud:925107842028040192>
$getServerVar[symbol] **| You got $random[1000;5000]**]
$setGlobalUserVar[fish;$sum[$getGlobalUserVar[fish];2]]
$setGlobalUserVar[space;$sum[$getGlobalUserVar[space];2]]
$setGlobalUserVar[salmon;$sum[$getGlobalUserVar[salmon];2]]
$setGlobalUserVar[clown;$sum[$getGlobalUserVar[clown];2]]
$setGlobalUserVar[blue;$sum[$getGlobalUserVar[blue];2]]
$setGlobalUserVar[fd;$sub[$getGlobalUserVar[fd];1]]
$setGlobalUserVar[squid;$sum[$getGlobalUserVar[squid];2]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;5000]]]



$else


$if[$getGlobalUserVar[rod]==wood]

$title[1;**Fishes caught**]
$color[1;$getVar[color]]
$thumbnail[1;https://media.discordapp.net/attachments/925101047091961860/925446432822026260/720806c4ff4375a2f36674e8aeeb1906.png]
$description[1;

<:woodrod:925107842028044389> **| You casted out your wooden rod and you brought home**
<:fish:925107840547454976> <:salmon:925107841751191572> <:clownfish:925107839490469998> <:bluefishs:925107839389806642> <:spacefish:925107841893814353> <:squud:925107842028040192> <:shark:925107841927372810> 
$getServerVar[symbol] **| You got $random[1000;5000]**]
$setGlobalUserVar[fish;$sum[$getGlobalUserVar[fish];3]]
$setGlobalUserVar[space;$sum[$getGlobalUserVar[space];3]]
$setGlobalUserVar[salmon;$sum[$getGlobalUserVar[salmon];3]]
$setGlobalUserVar[clown;$sum[$getGlobalUserVar[clown];3]]
$setGlobalUserVar[blue;$sum[$getGlobalUserVar[blue];3]]
$setGlobalUserVar[fd;$sub[$getGlobalUserVar[fd];1]]
$setGlobalUserVar[squid;$sum[$getGlobalUserVar[squid];3]]
$setGlobalUserVar[shark;$sum[$getGlobalUserVar[shark];3]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;5000]]]


$else
$if[$getGlobalUserVar[rod]==metal]

$title[1;**Fishes caught**]
$color[1;$getVar[color]]
$thumbnail[1;https://media.discordapp.net/attachments/925101047091961860/925446432822026260/720806c4ff4375a2f36674e8aeeb1906.png]
$description[1;
<:metalrod:925107841352749106> **| You casted out your iron rod and you brought home**
<:fish:925107840547454976> <:salmon:925107841751191572> <:clownfish:925107839490469998> <:bluefishs:925107839389806642> <:spacefish:925107841893814353> <:squud:925107842028040192> <:shark:925107841927372810> <:dolphin:925107840014774272>
$getServerVar[symbol] **| You got $random[1000;5000]**]
$setGlobalUserVar[fish;$sum[$getGlobalUserVar[fish];4]]
$setGlobalUserVar[space;$sum[$getGlobalUserVar[space];4]]
$setGlobalUserVar[salmon;$sum[$getGlobalUserVar[salmon];4]]
$setGlobalUserVar[clown;$sum[$getGlobalUserVar[clown];4]]
$setGlobalUserVar[blue;$sum[$getGlobalUserVar[blue];4]]
$setGlobalUserVar[fd;$sub[$getGlobalUserVar[fd];1]]
$setGlobalUserVar[squid;$sum[$getGlobalUserVar[squid];4]]
$setGlobalUserVar[shark;$sum[$getGlobalUserVar[shark];4]]
$setGlobalUserVar[dolphin;$sum[$getGlobalUserVar[dolphin];4]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;5000]]]




$else

$if[$getGlobalUserVar[rod]==lava]
$title[1;**Fishes caught**]
$color[1;$getVar[color]]
$thumbnail[1;https://media.discordapp.net/attachments/925101047091961860/925446432822026260/720806c4ff4375a2f36674e8aeeb1906.png]
$description[1;

<:lavarod:925107841033986088> **| You casted out your lava rod and you brought home**
<:fish:925107840547454976> <:salmon:925107841751191572> <:clownfish:925107839490469998> <:bluefishs:925107839389806642> <:spacefish:925107841893814353> <:squud:925107842028040192> <:shark:925107841927372810> <:dolphin:925107840014774272> <:galaticcrab:925107840622923817>
$getServerVar[symbol] **| You got $random[1000;5000]**]
$setGlobalUserVar[fish;$sum[$getGlobalUserVar[fish];10]]
$setGlobalUserVar[space;$sum[$getGlobalUserVar[space];10]]
$setGlobalUserVar[salmon;$sum[$getGlobalUserVar[salmon];10]]
$setGlobalUserVar[clown;$sum[$getGlobalUserVar[clown];10]]
$setGlobalUserVar[blue;$sum[$getGlobalUserVar[blue];10]]
$setGlobalUserVar[fd;$sub[$getGlobalUserVar[fd];5]]
$setGlobalUserVar[squid;$sum[$getGlobalUserVar[squid];10]]
$setGlobalUserVar[shark;$sum[$getGlobalUserVar[shark];10]]
$setGlobalUserVar[dolphin;$sum[$getGlobalUserVar[dolphin];10]]
$setGlobalUserVar[crab;$sum[$getGlobalUserVar[crab];10]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;5000]]]


$else

$if[$getGlobalUserVar[rod]==dev]

$title[1;**Fishes caught**]
$color[1;$getVar[color]]
$thumbnail[1;https://media.discordapp.net/attachments/925101047091961860/925446432822026260/720806c4ff4375a2f36674e8aeeb1906.png]
$description[1;

<:Developerod:925107839830216704>  **| You casted out your developer rod and you brought home**
<:fish:925107840547454976> <:salmon:925107841751191572> <:clownfish:925107839490469998> <:bluefishs:925107839389806642> <:spacefish:925107841893814353> <:squud:925107842028040192> <:shark:925107841927372810> <:dolphin:925107840014774272> <:galaticcrab:925107840622923817>
$getServerVar[symbol] **| You got $random[1000;5000]**]
$setGlobalUserVar[fish;$sum[$getGlobalUserVar[fish];100]]
$setGlobalUserVar[space;$sum[$getGlobalUserVar[space];100]]
$setGlobalUserVar[salmon;$sum[$getGlobalUserVar[salmon];100]]
$setGlobalUserVar[clown;$sum[$getGlobalUserVar[clown];100]]
$setGlobalUserVar[blue;$sum[$getGlobalUserVar[blue];100]]
$setGlobalUserVar[squid;$sum[$getGlobalUserVar[squid];100]]
$setGlobalUserVar[shark;$sum[$getGlobalUserVar[shark];100]]
$setGlobalUserVar[dolphin;$sum[$getGlobalUserVar[dolphin];100]]
$setGlobalUserVar[crab;$sum[$getGlobalUserVar[crab];100]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;5000]]]
$endif
$endif
$endif
$endif
$endif
$endif

$globalCooldown[70s;**Wait %time%**]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}
