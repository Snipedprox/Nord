module.exports = {
name: "zoo",
$if: "v4",
code: `
$author[1;$username#$discriminator;$authorAvatar]
$thumbnail[1;$authorAvatar]
$title[1;Zoo 🌿]
$description[1;<:common:931508227693244436> | $if[$getGlobalUserVar[bee;$authorID]>0]
🐝 $else $get[emo] $endif \`$getGlobalUserVar[bee;$authorID]\` $if[$getGlobalUserVar[bug;$authorID]>0]
🐛 $else $get[emo] $endif \`$getGlobalUserVar[bug;$authorID]\` $if[$getGlobalUserVar[butterfly;$authorID]>0]
🦋 $else $get[emo] $endif \`$getGlobalUserVar[butterfly;$authorID]\` $if[$getGlobalUserVar[lady_beetle;$authorID]>0]
🐞 $else $get[emo] $endif \`$getGlobalUserVar[lady_beetle;$authorID]\` $if[$getGlobalUserVar[snail;$authorID]>0]
🐌 $else $get[emo] $endif \`$getGlobalUserVar[snail;$authorID]\`

<:uncommon:931508306877513768> | $if[$getGlobalUserVar[mouse2;$authorID]>0]
🐁 $else $get[emo] $endif \`$getGlobalUserVar[mouse2;$authorID]\` $if[$getGlobalUserVar[sheep;$authorID]>0]
🐑 $else $get[emo] $endif \`$getGlobalUserVar[sheep;$authorID]\` $if[$getGlobalUserVar[cow2;$authorID]>0]
🐄 $else $get[emo] $endif \`$getGlobalUserVar[cow2;$authorID]\` $if[$getGlobalUserVar[cat2;$authorID]>0]
🐈 $else $get[emo] $endif \`$getGlobalUserVar[cat2;$authorID]\` $if[$getGlobalUserVar[dog2;$authorID]>0]
🐕 $else $get[emo] $endif \`$getGlobalUserVar[dog2;$authorID]\`

<:rare:931508324741038121> | $if[$getGlobalUserVar[snake;$authorID]>0]
🐍 $else $get[emo] $endif \`$getGlobalUserVar[snake;$authorID]\` $if[$getGlobalUserVar[crocodile;$authorID]>0]
🐊 $else $get[emo] $endif \`$getGlobalUserVar[crocodile;$authorID]\` $if[$getGlobalUserVar[turtle;$authorID]>0]
🐢 $else $get[emo] $endif \`$getGlobalUserVar[turtle;$authorID]\` $if[$getGlobalUserVar[dove;$authorID]>0]
🕊️ $else $get[emo] $endif \`$getGlobalUserVar[dove;$authorID]\` $if[$getGlobalUserVar[elephant;$authorID]>0]
🐘 $else $get[emo] $endif \`$getGlobalUserVar[elephant;$authorID]\`

<:epicness:931508401735876660> | $if[$getGlobalUserVar[camel;$authorID]>0]
🐫 $else $get[emo] $endif \`$getGlobalUserVar[camel;$authorID]\` $if[$getGlobalUserVar[monkey;$authorID]>0]
🐒 $else $get[emo] $endif \`$getGlobalUserVar[monkey;$authorID]\` $if[$getGlobalUserVar[sloth;$authorID]>0]
🦥 $else $get[emo] $endif \`$getGlobalUserVar[sloth;$authorID]\` $if[$getGlobalUserVar[tiger2;$authorID]>0]
🐅 $else $get[emo] $endif \`$getGlobalUserVar[tiger2;$authorID]\` $if[$getGlobalUserVar[kangaroo;$authorID]>0]
🦘 $else $get[emo] $endif \`$getGlobalUserVar[kangaroo;$authorID]\`

<:mythical:931508496703295538> | $if[$getGlobalUserVar[flamingo;$authorID]>0]
🦩 $else $get[emo] $endif \`$getGlobalUserVar[flamingo;$authorID]\` $if[$getGlobalUserVar[shark;$authorID]>0]
🦈 $else $get[emo] $endif \`$getGlobalUserVar[shark;$authorID]\` $if[$getGlobalUserVar[dragon;$authorID]>0]
🐉 $else $get[emo] $endif \`$getGlobalUserVar[dragon;$authorID]\` $if[$getGlobalUserVar[peacock;$authorID]>0]
🦚 $else $get[emo] $endif \`$getGlobalUserVar[peacock;$authorID]\` $if[$getGlobalUserVar[whale2;$authorID]>0]
🐋 $else $get[emo] $endif \`$getGlobalUserVar[whale2;$authorID]\` 

<a:legendary:931509934431023114> | $if[$getGlobalUserVar[hippopotamus;$authorID]>0]
🦛 $else $get[emo] $endif \`$getGlobalUserVar[hippopotamus;$authorID]\` $if[$getGlobalUserVar[giraffe;$authorID]>0]
🦒 $else $get[emo] $endif \`$getGlobalUserVar[giraffe;$authorID]\` $if[$getGlobalUserVar[mammoth;$authorID]>0]
:mammoth: $else $get[emo] $endif \`$getGlobalUserVar[mammoth;$authorID]\` $if[$getGlobalUserVar[unicorn;$authorID]>0]
🦄 $else $get[emo] $endif \`$getGlobalUserVar[unicorn;$authorID]\` $if[$getGlobalUserVar[t_rex;$authorID]>0]
🦖 $else $get[emo] $endif \`$getGlobalUserVar[t_rex;$authorID]\`
$let[emo;❔]
]
$addTimestamp[1;ms]
$color[1;FF7300]
$globalCooldown[15s;⏱️ You are on a **cooldown** of **%time%**]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`
}