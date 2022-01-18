module.exports = {
name: "open",
$if: "v4",
code: `
$if[$toLowerCase[$message[1]]==keychest]
$color[1;RANDOM]
$description[1;**You opened up 1 $getVar[keypackemote] key pack and got
+ $numberSeparator[$get[amount];,] $get[emote] , $numberSeparator[$get[amount1];,] $get[emote1]**]

$setGlobalUserVar[$get[item];$sum[$getGlobalUserVar[$get[item]];$get[amount]]]
$setGlobalUserVar[$get[item1];$sum[$getGlobalUserVar[$get[item1]];$get[amount1]]]

$setGlobalUserVar[keypack;$sub[$getGlobalUserVar[keypack];1]]

$let[emote;$randomText[$getVar[chocodxemote];$getServerVar[symbol];$getVar[enchantedemote];$getVar[hpemote];$getVar[coinemote]]]

$let[item;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$randomText[$getVar[chocodxemote];$getServerVar[symbol];$getVar[enchantedemote];$getVar[hpemote];$getVar[coinemote]];$getVar[chocodxemote];chocodx];$getServerVar[symbol];cash];$getVar[enchantedemote];enchanted];$getVar[hpemote];potion];$getVar[coinemote];coin]]

$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$randomText[$getVar[chocodxemote];$getServerVar[symbol];$getVar[enchantedemote];$getVar[hpemote];$getVar[coinemote]];$getVar[chocodxemote];$random[1000;2000]];$getServerVar[symbol];$random[100000;200000]];$getVar[enchantedemote];$random[1;10]];$getVar[hpemote];$random[1000;2000]];$getVar[coinemote];$random[1;20]]]



$let[emote1;$randomText[$getServerVar[symbol];$getVar[chocodxemote];$getVar[enchantedemote];$getVar[hpemote];$getVar[coinemote]]]

$let[item1;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$randomText[$getServerVar[symbol];$getVar[chocodxemote];$getVar[enchantedemote];$getVar[hpemote];$getVar[coinemote]];$getVar[chocodxemote];chocodx];$getServerVar[symbol];cash];$getVar[enchantedemote];enchanted];$getVar[hpemote];potion];$getVar[coinemote];coin]]

$let[amount1;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$randomText[$getServerVar[symbol];$getVar[chocodxemote];$getVar[enchantedemote];$getVar[hpemote];$getVar[coinemote]];$getVar[chocodxemote];$random[1000;2001]];$getServerVar[symbol];$random[100000;200001]];$getVar[enchantedemote];$random[1;11]];$getVar[hpemote];$random[1000;2001]];$getVar[coinemote];$random[1;21]]]

$onlyIf[$getGlobalUserVar[keypack]>=1;**You do not own that many**]

$else

$if[$toLowerCase[$message[1]]==epic]
$color[1;RANDOM]
$description[1;**You opened up 1 $getVar[epicemote] epic crate and got
+ $numberSeparator[$get[amount];,] $get[emote] , $numberSeparator[$get[amount1];,] $get[emote1]**]

$setGlobalUserVar[$get[item];$sum[$getGlobalUserVar[$get[item]];$get[amount]]]
$setGlobalUserVar[$get[item1];$sum[$getGlobalUserVar[$get[item1]];$get[amount1]]]

$setGlobalUserVar[epic;$sub[$getGlobalUserVar[epic];1]]

$let[emote;$randomText[$getVar[chocodxemote];$getVar[foodcrateemote];$getVar[mysteryemote]]]

$let[item;$replaceText[$replaceText[$replaceText[$randomText[$getVar[chocodxemote];$getVar[foodcrateemote];$getVar[mysteryemote]];$getVar[chocodxemote];chocodx];$getVar[foodcrateemote];foodcrate];$getVar[mysteryemote];mystery]]

$let[amount;$replaceText[$replaceText[$replaceText[$randomText[$getVar[chocodxemote];$getVar[foodcrateemote];$getVar[mysteryemote]];$getVar[chocodxemote];$random[1000;3000]];$getVar[foodcrateemote];$random[1000;30001]];$getVar[mysteryemote];$random[100;500]]]



$let[emote1;$randomText[$getVar[foodcrateemote];$getVar[mysteryemote];$getVar[chocodxemote]]]

$let[item1;$replaceText[$replaceText[$replaceText[$randomText[$getVar[foodcrateemote];$getVar[mysteryemote];$getVar[chocodxemote]];$getVar[chocodxemote];chocodx];$getVar[foodcrateemote];foodcrate];$getVar[mysteryemote];mystery]]

$let[amount1;$replaceText[$replaceText[$replaceText[$randomText[$getVar[foodcrateemote];$getVar[mysteryemote];$getVar[chocodxemote]];$getVar[chocodxemote];$random[1000;3001]];$getVar[foodcrateemote];$random[1000;3001]];$getVar[mysteryemote];$random[100;501]]]

$onlyIf[$getGlobalUserVar[epic]>=1;**You do not own that many**]


$else


$if[$toLowerCase[$message[1]]==enchanted]
$color[1;RANDOM]
$description[1;**You opened up 1 $getVar[enchantedemote] enchanted crate and got
+ $numberSeparator[$get[amount];,] $get[emote] , $numberSeparator[$get[amount1];,] $get[emote1]**]

$setGlobalUserVar[$get[item];$sum[$getGlobalUserVar[$get[item]];$get[amount]]]
$setGlobalUserVar[$get[item1];$sum[$getGlobalUserVar[$get[item1]];$get[amount1]]]

$setGlobalUserVar[enchanted;$sub[$getGlobalUserVar[enchanted];1]]

$let[emote;$randomText[$getVar[chocodxemote];$getVar[chocodxemote];$getVar[chocodxemote];$getVar[foodcrateemote];$getVar[mysteryemote]]]

$let[item;$replaceText[$replaceText[$replaceText[$randomText[$getVar[chocodxemote];$getVar[chocodxemote];$getVar[chocodxemote];$getVar[foodcrateemote];$getVar[mysteryemote]];$getVar[chocodxemote];chocodx];$getVar[foodcrateemote];foodcrate];$getVar[mysteryemote];mystery]]

$let[amount;$replaceText[$replaceText[$replaceText[$randomText[$getVar[foodcrateemote];$getVar[mysteryemote];$getVar[chocodxemote]];$getVar[chocodxemote];$random[10000;30000]];$getVar[foodcrateemote];$random[10000;30001]];$getVar[mysteryemote];$random[1000;5000]]]


$let[emote1;$randomText[$getVar[chocodxemote];$getVar[chocodxemote];$getVar[foodcrateemote];$getVar[chocodxemote];$getVar[mysteryemote]]]

$let[item1;$replaceText[$replaceText[$replaceText[$randomText[$getVar[chocodxemote];$getVar[chocodxemote];$getVar[foodcrateemote];$getVar[chocodxemote];$getVar[mysteryemote]];$getVar[chocodxemote];chocodx];$getVar[foodcrateemote];foodcrate];$getVar[mysteryemote];mystery]]

$let[amount1;$replaceText[$replaceText[$replaceText[$randomText[$getVar[chocodxemote];$getVar[chocodxemote];$getVar[foodcrateemote];$getVar[chocodxemote];$getVar[mysteryemote]];$getVar[chocodxemote];$random[10000;30001]];$getVar[foodcrateemote];$random[10000;30001]];$getVar[mysteryemote];$random[1000;5001]]]

$onlyIf[$getGlobalUserVar[enchanted]>=1;**You do not own that many**]



$else


$if[$toLowerCase[$message[1]]==mystery]
$color[1;RANDOM]
$description[1;**You opened up 1 $getVar[mysteryemote] mystery crate and got
+ $numberSeparator[$get[amount];,] $get[emote]**]

$setGlobalUserVar[$get[item];$sum[$getGlobalUserVar[$get[item]];$get[amount]]]


$setGlobalUserVar[enchanted;$sub[$getGlobalUserVar[enchanted];1]]

$let[emote;$randomText[$getVar[chocodxemote];$getVar[chocodxemote];$getVar[chocodxemote];$getVar[foodcrateemote];$getVar[foodcrateemote];$getVar[foodcrateemote];$getVar[foodcrateemote];$getVar[chocoemote];$getVar[chocoemote];$getVar[chocoemote]]]

$let[amount;$replaceText[$replaceText[$replaceText[$randomText[$getVar[chocodxemote];$getVar[chocodxemote];$getVar[chocodxemote];$getVar[foodcrateemote];$getVar[foodcrateemote];$getVar[foodcrateemote];$getVar[foodcrateemote];$getVar[chocoemote];$getVar[chocoemote];$getVar[chocoemote]];$getVar[foodcrateemote];$random[100;500]];$getVar[chocodxemote];$random[50;100]];$getVar[chocoemote];$random[100;500]]]

$let[item;$replaceText[$replaceText[$replaceText[$randomText[$getVar[chocodxemote];$getVar[chocodxemote];$getVar[chocodxemote];$getVar[foodcrateemote];$getVar[foodcrateemote];$getVar[foodcrateemote];$getVar[foodcrateemote];$getVar[chocoemote];$getVar[chocoemote];$getVar[chocoemote]];$getVar[chocodxemote];chocodx];$getVar[chocoemote];choco];$getVar[foodcrateemote];foodcrate]]

$onlyIf[$getGlobalUserVar[mystery]>=1;**You do not own that many**]


$else


$if[$toLowerCase[$message[1]]==foodcrate]
$color[1;RANDOM]
$description[1;**You opened up 1 $getVar[foodcrateemote] and got
+ $get[amount] $get[emote]**]

$setGlobalUserVar[$get[item];$sum[$getGlobalUserVar[$get[item]];$get[amount]]]


$setGlobalUserVar[foodcrate;$sub[$getGlobalUserVar[foodcrate];1]]

$let[emote;$randomText[$getVar[chocodxemote];$getVar[chocodxemote];$getVar[chocodxemote];$getVar[foodcrateemote];$getVar[foodcrateemote];$getVar[foodcrateemote];$getVar[foodcrateemote];$getVar[chocoemote];$getVar[chocoemote];$getVar[chocoemote]]]

$let[amount;$replaceText[$replaceText[$replaceText[$randomText[$getVar[chocodxemote];$getVar[chocodxemote];$getVar[chocodxemote];$getVar[foodcrateemote];$getVar[foodcrateemote];$getVar[foodcrateemote];$getVar[foodcrateemote];$getVar[chocoemote];$getVar[chocoemote];$getVar[chocoemote]];$getVar[foodcrateemote];$random[1;5]];$getVar[chocodxemote];$random[5;10]];$getVar[chocoemote];$random[10;50]]]

$let[item;$replaceText[$replaceText[$replaceText[$randomText[$getVar[chocodxemote];$getVar[chocodxemote];$getVar[chocodxemote];$getVar[foodcrateemote];$getVar[foodcrateemote];$getVar[foodcrateemote];$getVar[foodcrateemote];$getVar[chocoemote];$getVar[chocoemote];$getVar[chocoemote]];$getVar[chocodxemote];chocodx];$getVar[chocoemote];choco];$getVar[foodcrateemote];foodcrate]]

$onlyIf[$getGlobalUserVar[foodcrate]>=1;**You do not own that many**]
$else

**Not a valid crate provided**
$endif
$endif
$endif
$endif
$endif



$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}