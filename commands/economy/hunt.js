module.exports = {
    name: "hunt",
    $if: "v4",
    code:`
    $if[$getGlobalUserVar[sequip]==Iron sword]
    $color[1;$getServerVar[color]]
    $description[1;**$username lost 5 ❤️ while hunting with their $getVar[ironswordemote] and they got
    $replaceText[:$get[ee]:; ;: :]**]


$setGlobalUserVar[hp;$sub[$getGlobalUserVar[hp;$authorID];5];$authorID]
$setGlobalUserVar[$get[1];$sum[1;$getGlobalUserVar[$get[1];$authorID]];$authorID]
$setGlobalUserVar[$get[2];$sum[1;$getGlobalUserVar[$get[2];$authorID]];$authorID]
$setGlobalUserVar[$get[3];$sum[1;$getGlobalUserVar[$get[3];$authorID]];$authorID]
$setGlobalUserVar[$get[4];$sum[1;$getGlobalUserVar[$get[4];$authorID]];$authorID]
$setGlobalUserVar[$get[5];$sum[1;$getGlobalUserVar[$get[5];$authorID]];$authorID]
$setGlobalUserVar[$get[6];$sum[1;$getGlobalUserVar[$get[6];$authorID]];$authorID]
$setGlobalUserVar[$get[7];$sum[1;$getGlobalUserVar[$get[7];$authorID]];$authorID]
$setGlobalUserVar[$get[8];$sum[1;$getGlobalUserVar[$get[8];$authorID]];$authorID]
$setGlobalUserVar[$get[9];$sum[1;$getGlobalUserVar[$get[9];$authorID]];$authorID]

$setGlobalUserVar[$get[10];$sum[1;$getGlobalUserVar[$get[10];$authorID]];$authorID]

$setGlobalUserVar[$get[1]TT;$sum[1;$getGlobalUserVar[$get[1]TT;$authorID]];$authorID]

$setGlobalUserVar[$get[2]TT;$sum[1;$getGlobalUserVar[$get[2]TT;$authorID]];$authorID]

$setGlobalUserVar[$get[3]TT;$sum[1;$getGlobalUserVar[$get[3]TT;$authorID]];$authorID]

$setGlobalUserVar[$get[4]TT;$sum[1;$getGlobalUserVar[$get[4]TT;$authorID]];$authorID]

$setGlobalUserVar[$get[5]TT;$sum[1;$getGlobalUserVar[$get[5]TT;$authorID]];$authorID]

$setGlobalUserVar[$get[6]TT;$sum[1;$getGlobalUserVar[$get[6]TT;$authorID]];$authorID]

$setGlobalUserVar[$get[7]TT;$sum[1;$getGlobalUserVar[$get[7]TT;$authorID]];$authorID]

$setGlobalUserVar[$get[8]TT;$sum[1;$getGlobalUserVar[$get[8]TT;$authorID]];$authorID]

$setGlobalUserVar[$get[9]TT;$sum[1;$getGlobalUserVar[$get[9]TT;$authorID]];$authorID]

$setGlobalUserVar[$get[10]TT;$sum[1;$getGlobalUserVar[$get[10]TT;$authorID]];$authorID]

$let[ee;$get[1] $get[2] $get[3] $get[4] $get[5] $get[6] $get[7] $get[8] $get[9] $get[10]]

$let[1;$splitText[$random[1;$get[num];no;yes]]] $let[2;$splitText[$random[1;$get[num];no;yes]]] $let[3;$splitText[$random[1;$get[num];no;yes]]] $let[4;$splitText[$random[1;$get[num];no;yes]]] $let[5;$splitText[$random[1;$get[num];no;yes]]] $let[6;$splitText[$random[1;$get[num];no;yes]]] $let[7;$splitText[$random[1;$get[num];no;yes]]] $let[8;$splitText[$random[1;$get[num];no;yes]]] $let[9;$splitText[$random[1;$get[num];no;yes]]] $let[10;$splitText[$random[1;$get[num];no;yes]]]

$let[num;$gettextSplitlength]

$textsplit[$get[a];|]

$Let[a;bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bug|bug|bug|bug|bug|bug|bug|bug|bug|bug|bug|bug|bug|bug|dragon|dragon|bug|bug|bug|bug|bug|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|butterfly|butterfly|butterfly|butterfly|butterfly|butterfly|butterfly|butterfly|butterfly|butterfly|snail|peacock|whale2|snail|snail|snail|snail|snail|snail|snail|snail|snail|snail|mouse2|mouse2|snail|snail|snail|snail|mouse2|flamingo|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|sheep|sheep|sheep|sheep|sheep|sheep|sheep|sheep|sheep|sheep|sheep|sheep|sheep|cow2|cow2|cow2|cow2|cow2|cow2|cow2|cow2|cow2|cow2|cat2|snail|snail|snail|cat2|cat2|cat2|cat2|cat2|cat2|cat2|cat2|cat2|cat2|bee|bee|bee|cat2|cat2|dog2|hippopotamus|giraffe|unicorn|unicorn|dog2|dog2|dog2|cat2|cat2|cat2|cat2|dog2|dog2|dog2|snake|snake|snake|snake|snake|mouse2|mouse2|snake|snake|snake|crocodile|crocodile|crocodile|crocodile|turtle|turtle|turtle|turtle|t_rex|turtle|turtle|snake|dove|dove|dove|dove|dove|dove|dove|dove|dove|flamingo|bug|bug|bug|bug|mouse2|mouse2|bug|bug|camel|camel|camel|monkey|monkey|monkey|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|sloth|tiger2|tiger2|kangaroo|kangaroo|kangaroo|elephant|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|cow2|cow2|cow2|cow2|cat2|cat2|cat2|cat2|cat2|elephant|shark|shark|hippopotamus|bee|bee|bee|bee|mammoth]



$onlyIF[$getGlobalUserVar[hp;$authorID]>14; **Your low on hp go drink a $getVar[hpemote]**]
$globalCooldown[15s;⏱️ You are on a **cooldown** of **%time%**]

$else

$if[$getGlobalUserVar[sequip]==Diamond sword]
$color[1;$getServerVar[color]]
    $description[1;**$username lost 0 ❤️ while hunting with their $getVar[diamondswordemote] and they got
    $replaceText[:$get[ee]:; ;: :]**]
$setGlobalUserVar[$get[1];$sum[1;$getGlobalUserVar[$get[1];$authorID]];$authorID]

$setGlobalUserVar[$get[2];$sum[1;$getGlobalUserVar[$get[2];$authorID]];$authorID]

$setGlobalUserVar[$get[3];$sum[1;$getGlobalUserVar[$get[3];$authorID]];$authorID]

$setGlobalUserVar[$get[4];$sum[1;$getGlobalUserVar[$get[4];$authorID]];$authorID]

$setGlobalUserVar[$get[5];$sum[1;$getGlobalUserVar[$get[5];$authorID]];$authorID]

$setGlobalUserVar[$get[6];$sum[1;$getGlobalUserVar[$get[6];$authorID]];$authorID]

$setGlobalUserVar[$get[7];$sum[1;$getGlobalUserVar[$get[7];$authorID]];$authorID]

$setGlobalUserVar[$get[8];$sum[1;$getGlobalUserVar[$get[8];$authorID]];$authorID]

$setGlobalUserVar[$get[9];$sum[1;$getGlobalUserVar[$get[9];$authorID]];$authorID]

$setGlobalUserVar[$get[10];$sum[1;$getGlobalUserVar[$get[10];$authorID]];$authorID]

$setGlobalUserVar[$get[1]TT;$sum[1;$getGlobalUserVar[$get[1]TT;$authorID]];$authorID]

$setGlobalUserVar[$get[2]TT;$sum[1;$getGlobalUserVar[$get[2]TT;$authorID]];$authorID]

$setGlobalUserVar[$get[3]TT;$sum[1;$getGlobalUserVar[$get[3]TT;$authorID]];$authorID]

$setGlobalUserVar[$get[4]TT;$sum[1;$getGlobalUserVar[$get[4]TT;$authorID]];$authorID]

$setGlobalUserVar[$get[5]TT;$sum[1;$getGlobalUserVar[$get[5]TT;$authorID]];$authorID]

$setGlobalUserVar[$get[6]TT;$sum[1;$getGlobalUserVar[$get[6]TT;$authorID]];$authorID]

$setGlobalUserVar[$get[7]TT;$sum[1;$getGlobalUserVar[$get[7]TT;$authorID]];$authorID]

$setGlobalUserVar[$get[8]TT;$sum[1;$getGlobalUserVar[$get[8]TT;$authorID]];$authorID]

$setGlobalUserVar[$get[9]TT;$sum[1;$getGlobalUserVar[$get[9]TT;$authorID]];$authorID]

$setGlobalUserVar[$get[10]TT;$sum[1;$getGlobalUserVar[$get[10]TT;$authorID]];$authorID]

$let[ee;$get[1] $get[2] $get[3] $get[4] $get[5] $get[6] $get[7] $get[8] $get[9] $get[10]]

$let[1;$splitText[$random[1;$get[num];no;yes]]] $let[2;$splitText[$random[1;$get[num];no;yes]]] $let[3;$splitText[$random[1;$get[num];no;yes]]] $let[4;$splitText[$random[1;$get[num];no;yes]]] $let[5;$splitText[$random[1;$get[num];no;yes]]] $let[6;$splitText[$random[1;$get[num];no;yes]]] $let[7;$splitText[$random[1;$get[num];no;yes]]] $let[8;$splitText[$random[1;$get[num];no;yes]]] $let[9;$splitText[$random[1;$get[num];no;yes]]] $let[10;$splitText[$random[1;$get[num];no;yes]]]

$let[num;$gettextSplitlength]

$textsplit[$get[a];|]

$Let[a;bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bee|bug|bug|bug|bug|bug|bug|bug|bug|bug|bug|bug|bug|bug|bug|dragon|dragon|bug|bug|bug|bug|bug|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|butterfly|butterfly|butterfly|butterfly|butterfly|butterfly|butterfly|butterfly|butterfly|butterfly|snail|peacock|whale2|snail|snail|snail|snail|snail|snail|snail|snail|snail|snail|mouse2|mouse2|snail|snail|snail|snail|mouse2|flamingo|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|sheep|sheep|sheep|sheep|sheep|sheep|sheep|sheep|sheep|sheep|sheep|sheep|sheep|cow2|cow2|cow2|cow2|cow2|cow2|cow2|cow2|cow2|cow2|cat2|snail|snail|snail|cat2|cat2|cat2|cat2|cat2|cat2|cat2|cat2|cat2|cat2|bee|bee|bee|cat2|cat2|dog2|hippopotamus|giraffe|unicorn|unicorn|dog2|dog2|dog2|cat2|cat2|cat2|cat2|dog2|dog2|dog2|snake|snake|snake|snake|snake|mouse2|mouse2|snake|snake|snake|crocodile|crocodile|crocodile|crocodile|turtle|turtle|turtle|turtle|t_rex|turtle|turtle|snake|dove|dove|dove|dove|dove|dove|dove|dove|dove|flamingo|bug|bug|bug|bug|mouse2|mouse2|bug|bug|camel|camel|camel|monkey|monkey|monkey|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|lady_beetle|sloth|tiger2|tiger2|kangaroo|kangaroo|kangaroo|elephant|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|mouse2|cow2|cow2|cow2|cow2|cat2|cat2|cat2|cat2|cat2|elephant|shark|shark|hippopotamus|bee|bee|bee|bee|mammoth]

$onlyIF[$getGlobalUserVar[hp;$authorID]>14; **Your low on hp go drink a $getVar[hpemote]**]

$globalCooldown[15s;⏱️ You are on a **cooldown** of **%time%**]
$else
$color[1;$getServerVar[color]]
$description[1;**I dont think you even equiped a sword**]
$endif
$endif
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}