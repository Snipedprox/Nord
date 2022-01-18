module.exports = {
name: "set",
$if: "v4",
code: `
$title[1;** Successfully set money**]
$color[1;$getServerVar[color]]
$description[1;**i set $username[$get[u]]'s balance to $numberSeparator[$message[1];,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$message[1];$get[u]]
$let[u;$findUser[$message[2];yes]]
$onlyIf[$isNumber[$message[1]]==true;**$getServerVar[prefix]set @user < amount >**]

$onlyForIds[852908598664364082;896846485805744168;$botownerid;]
`
}