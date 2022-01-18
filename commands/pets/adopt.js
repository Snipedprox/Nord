module.exports = {
name: "adopt",
$if: "v4",
code: `
$if[$toLowerCase[$message[1]]==]
$title[1;**Adopt a pet**]
$thumbnail[1;https://media.discordapp.net/attachments/931266882542141440/931540021280899082/931531680328613939.png]
$color[1;YELLOW]
$description[1;
**\`\`\`
To adopt one of these pets simply do $getServerVar[prefix]adopt < pet > make sure to feed and play with your pets #COLON#D\`\`\`**

<a:hskk:931531868329893888> **Miu**
**ID: miu**
**Ability: <:multiplier:930818046220701767> Income multiplier**
**Fav food: 🍋**

<a:emafos:931531733579468840> **Emaro**
**ID: emaro**
**Ability: <:hourlymoney:930817890570096650> Credit multiplier**
**Fav food: 🥕**

<:mius:931531680328613939> **Hao**
**ID: hao**
**Ability: <:lucky:931269213266522162> Random events**
**Fav food: 🍠**]
$else
$if[$toLowerCase[$checkContains[$message[1];miu;emaro;hao]]==true]
$title[1;**Adoption a success**]
$thumbnail[1;$get[thumbnail]]
$description[1;**You have sucessfully adopted $replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet];miu;<a:hskk:931531868329893888>];emaro;<a:emafos:931531733579468840>];hao;<:mius:931531680328613939>] $replaceText[$replaceText[$replaceText[$toLowerCase[$message[1]];miu;miu];emaro;emaro];hao;hao] as your new pet, you can adopt a new pet in 1 week**
]
$let[thumbnail;$replaceText[$replaceText[$replaceText[$toLowerCase[$message[1]];miu;https://cdn.discordapp.com/emojis/862974152708325457.gif?v=1&size=40];emaro;https://cdn.discordapp.com/emojis/872040059837222933.gif?v=1&size=40];hao;https://cdn.discordapp.com/emojis/884859005816668160.png?v=1&size=40]]



$setGlobalUserVar[pet;$get[name]]
$let[name;$replaceText[$replaceText[$replaceText[$toLowerCase[$message[1]];miu;miu];emaro;emaro];hao;hao]]

$globalcooldown[7d;**Dont be such a bully wait %time%**]
$else
$title[1;**Adopt a pet**]
$thumbnail[1;https://media.discordapp.net/attachments/877803369702522911/894170655807930388/PicsArt_10-03-04.04.43.png]
$color[1;YELLOW]
$description[1;
**\`\`\`
To adopt one of these pets simply do $getServerVar[prefix]adopt < pet > make sure to feed and play with your pets #COLON#D\`\`\`**

<a:hskk:931531868329893888> **Miu**
**ID: miu**
**Ability: <:multiplier:930818046220701767> Income multiplier**
**Fav food: 🍋**

<a:emafos:931531733579468840> **Emaro**
**ID: emaro**
**Ability: <:hourlymoney:930817890570096650> Credit multiplier**
**Fav food: 🥕**

<:mius:931531680328613939> **Hao**
**ID: hao**
**Ability: <:lucky:931269213266522162> Random events**
**Fav food: 🍠**]
$endif
$endif
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}