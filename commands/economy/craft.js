module.exports = {
name: "craft",
$if: "v4",
code: `
$if[$toLowerCase[$message[1]]==legendarykey]
$color[1;$getServerVar[color]]
$description[1;**You crafted $numberSeparator[$multi[1;$message[2]];,]$getVar[legendarykeyemote] which you had to use $numberSeparator[$multi[1000;$message[2]];,]<:amethyst:926585236211499018> amethyst**]
$setGlobalUserVar[amethyst;$sub[$getGlobalUserVar[amethyst];$multi[1000;$message[2]]]]
$setGlobaluserVar[legendarykey;$sum[$getGlobalUserVar[legendarykey];$multi[1;$message[2]]]]
$onlyIf[$getGlobalUserVar[amethyst]>=$multi[1000;$message[2]];**You dont have enough materials for this**]
$else
$if[$toLowerCase[$message[1]]==rarekey]
$color[1;$getServerVar[color]]
$description[1;**You crafted $numberSeparator[$multi[1;$message[2]];,]$getVar[rarekeyemote] which you had to use $numberSeparator[$multi[1000;$message[2]];,]<:ember:926585426490306600> ember**]
$setGlobalUserVar[ember;$sub[$getGlobalUserVar[ember];$multi[1000;$message[2]]]]
$setGlobaluserVar[rarekey;$sum[$getGlobalUserVar[rarekey];$multi[1;$message[2]]]]
$onlyIf[$getGlobalUserVar[ember]>=$multi[1000;$message[2]];**You dont have enough materials for this**]
$else
$if[$toLowerCase[$message[1]]==uncommonkey]
$color[1;$getServerVar[color]]
$description[1;**You crafted $numberSeparator[$multi[1;$message[2]];,]$getVar[uncommonkeyemote] which you had to use $numberSeparator[$multi[1000;$message[2]];,]<:quartz:926585163801067530> quartz**]
$setGlobalUserVar[quartz;$sub[$getGlobalUserVar[quartz];$multi[1000;$message[2]]]]
$setGlobaluserVar[uncommonkey;$sum[$getGlobalUserVar[uncommonkey];$multi[1;$message[2]]]]
$onlyIf[$getGlobalUserVar[quartz]>=$multi[1000;$message[2]];**You dont have enough materials for this**]
$else
$if[$toLowerCase[$message[1]]==commonkey]
$color[1;$getServerVar[color]]
$description[1;**You crafted $numberSeparator[$multi[1;$message[2]];,]$getVar[commonkeyemote] which you had to use $numberSeparator[$multi[500;$message[2]];,]<:ember:926585426490306600> ember**]
$setGlobalUserVar[ember;$sub[$getGlobalUserVar[ember];$multi[500;$message[2]]]]
$setGlobaluserVar[commonkey;$sum[$getGlobalUserVar[commonkey];$multi[1;$message[2]]]]
$onlyIf[$getGlobalUserVar[ember]>=$multi[500;$message[2]];**You dont have enough materials for this**]
$else
$if[$toLowerCase[$message[1]]==keychest]
$color[1;$getServerVar[color]]
$description[1;**You crafted $numberSeparator[$multi[1;$message[2]];,]$getVar[keypackemote] which you had to use $numberSeparator[$multi[1;$message[2]];,]$getVar[legendarykeyemote] , $numberSeparator[$multi[1;$message[2]];,]$getVar[rarekeyemote] , $numberSeparator[$multi[1;$message[2]];,]$getVar[uncommonkeyemote] , $numberSeparator[$multi[1;$message[2]];,]$getVar[commonkeyemote]**]

$setGlobalUserVar[legendarykey;$sub[$getGlobalUserVar[legendarykey];$multi[1;$message[2]]]]
$setGlobalUserVar[rarekey;$sub[$getGlobalUserVar[rarekey];$multi[1;$message[2]]]]
$setGlobalUserVar[commonkey;$sub[$getGlobalUserVar[commonkey];$multi[1;$message[2]]]]
$setGlobalUserVar[uncommonkey;$sub[$getGlobalUserVar[uncommonkey];$multi[1;$message[2]]]]


$setGlobaluserVar[keypack;$sum[$getGlobalUserVar[keypack];$multi[1;$message[2]]]]
$onlyIf[$getGlobalUserVar[legendarykey]>=$multi[1;$message[2]];**You dont have enough $numberSeparator[$multi[1;$message[2]];,] $getVar[legendarykeyemote]**]
$onlyIf[$getGlobalUserVar[rarekey]>=$multi[1;$message[2]];**You dont have enough $numberSeparator[$multi[1;$message[2]];,] $getVar[rarekeyemote]**]
$onlyIf[$getGlobalUserVar[uncommonkey]>=$multi[1;$message[2]];**You dont have enough $numberSeparator[$multi[1;$message[2]];,] $getVar[uncommonkeyemote]**]
$onlyIf[$getGlobalUserVar[commonkey]>=$multi[1;$message[2]];**You dont have enough $numberSeparator[$multi[1;$message[2]];,] $getVar[commonkeyemote]**]
$else
**That is not a valid item to craft**
$endif
$endif
$endif
$endif
$endif

$onlyIf[$checkContains[$message[2];-;.;,;/;_;=;+;%;^;~]==false;**Dont use symbols**]
$onlyIf[$isNumber[$message[2]]==true;**that is not a valid number**]
$onlyIf[$messsage[2]>=1;**You havnt specified the amount to craft**]


$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}