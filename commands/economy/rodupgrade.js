module.exports = {
name: "fupgrade",
$if: "v4",
code: `
$if[$toLowerCase[$checkContains[$message;old;olds;oldrod]]==true]
$setGlobalUserVar[rod;old]
$setGlobalUserVar[fd;10]

$title[1;**Rod upgraded!**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;**You upgraded / downgraded your $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;<:plasticrod:925107841528905808>];old;<:oldrod:925107841432432640>];wood;<:woodrod:925107842028044389>];metal;<:lavarod:925107841033986088>];lava;<:lavarod:925107841033986088>];dev;<:Developerod:925107839830216704>] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;Plastic rod];old;Old rod];wood;Wooden rod];metal;Metal rod];lava;Lava rod];dev;Developer rod] to <:oldrod:925107841432432640> which costed 20,000$getServerVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];20000]]
$onlyIf[$getGlobalUserVar[cash]>=2000;**You are lacking 20,000$getServerVar[symbol]**]

$else

$if[$toLowerCase[$checkContains[$message;wood;wooden;woodrod]]==true]
$setGlobalUserVar[rod;wood]
$setGlobalUserVar[fd;10]

$title[1;**Rod upgraded!**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;**You upgraded / downgraded your $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;<:plasticrod:925107841528905808>];old;<:oldrod:925107841432432640>];wood;<:woodrod:925107842028044389>];metal;<:lavarod:925107841033986088>];lava;<:lavarod:925107841033986088>];dev;<:Developerod:925107839830216704>] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;Plastic rod];old;Old rod];wood;Wooden rod];metal;Metal rod];lava;Lava rod];dev;Developer rod] to <:woodrod:925107842028044389> which costed 30,000$getServerVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];30000]]
$onlyIf[$getGlobalUserVar[cash]>=5000;**You are lacking 30,000$getServerVar[symbol]**]

$else

$if[$toLowerCase[$checkContains[$message;metal;metalrod;metals]]==true]
$setGlobalUserVar[rod;metal]
$setGlobalUserVar[fd;10]

$title[1;**Rod upgraded!**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;**You upgraded / downgraded your $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;<:plasticrod:925107841528905808>];old;<:oldrod:925107841432432640>];wood;<:woodrod:925107842028044389>];metal;<:lavarod:925107841033986088>];lava;<:lavarod:925107841033986088>];dev;<:Developerod:925107839830216704>] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;Plastic rod];old;Old rod];wood;Wooden rod];metal;Metal rod];lava;Lava rod];dev;Developer rod] to <:metalrod:925107841352749106> which costed 40,000$getServerVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];40000]]
$onlyIf[$getGlobalUserVar[cash]>=8000;**You are lacking 40,000$getServerVar[symbol]**]

$else

$if[$toLowerCase[$checkContains[$message;lava;lafa;lavarod;lavas;lafas]]==true]
$setGlobalUserVar[rod;lava]
$setGlobalUserVar[fd;10]

$title[1;**Rod upgraded!**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;**You upgraded / downgraded your $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;<:plasticrod:925107841528905808>];old;<:oldrod:925107841432432640>];wood;<:woodrod:925107842028044389>];metal;<:lavarod:925107841033986088>];lava;<:lavarod:925107841033986088>];dev;<:Developerod:925107839830216704>] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;Plastic rod];old;Old rod];wood;Wooden rod];metal;Metal rod];lava;Lava rod];dev;Developer rod] to <:lavarod:925107841033986088> which costed 50,000$getServerVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];50000]]
$onlyIf[$getGlobalUserVar[cash]>=50000;**You are lacking 50,000$getServerVar[symbol]**]

$else

$if[$toLowerCase[$checkContains[$message;dev;drod;devs]]==true]
$setGlobalUserVar[rod;lava]
$setGlobalUserVar[fd;10]

$title[1;**Rod upgraded!**]
$color[1;$getVar[color]]
$thumbnail[1;$useravatar[$clientid]]
$description[1;**You upgraded / downgraded your $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;<:plasticrod:925107841528905808>];old;<:oldrod:925107841432432640>];wood;<:woodrod:925107842028044389>];metal;<:lavarod:925107841033986088>];lava;<:lavarod:925107841033986088>];dev;<:Developerod:925107839830216704>] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rod];plastic;Plastic rod];old;Old rod];wood;Wooden rod];metal;Metal rod];lava;Lava rod];dev;Developer rod] to <:Developerod:925107839830216704> which costed 0$getServerVar[symbol]**]


$onlyForIds[$botownerid;896846485805744168;n o t  f o r  y o u]
$else
**Not a valid rod**
$endif
$endif 
$endif
$endif
$endif
$endif
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`
}