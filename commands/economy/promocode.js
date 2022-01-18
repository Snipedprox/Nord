module.exports = [{
    name: "promocode",
    aliases: "pr",
    code: `
You used a promo code **$message[1]** and got **$random[50000;56000]** $getServerVar[symbol]
$setGlobalUserVar[cash;$sum[$random[50000;56000];$getGlobalUserVar[cash;$authorID]];$authorID]
$setVar[promocode;$joinSplitText[/]]
$removeTextSplitElement[$findTextSplitIndex[$message[1]]]
$textSpliT[$getVar[promocode];/]

$onlyif[$findTextSplitIndex[$message[1]]!=0;**🚫 Invalid promocode**]
$textSpliT[$getVar[promocode];/]
$argsCheck[1;🚫 | Please provide a promocode to use]
    `
} , {
    name: "pgen",
    code: ` 
    $setVar[promocode;$getVar[promocode]/$randomString[10]]
$sendDm[$mentioned[1;yes]; Hey **$username[$mentioned[1;yes]]** you got a promocode from **$username[$authorID]** Use it by \`$getServerVar[prefix]promocode <promocode>\`
Promocode - ||$randomString[10]||]
    $onlyForIds[896846485805744168;$botOwnerId;]
    Promocode creation sucessfull by **$username[$authorID]**
    $onlyIf[$isUserDmEnabled[$mentioned[1;yes]]==true;🚫 |Not able to dm **$username[$mentioned[1;yes]]**]
    `
}, { 
    name: "promocode-custom",
    aliases: "prc",
    code: `$setVar[promocode;$getVar[promocode]/$message[1]]
$sendDm[$mentioned[1;yes]; Hey **$username[$mentioned[1;yes]]** you got a custom promocode from **$username[$authorID]** Use it by \`$getServerVar[prefix]promocode <promocode>\`
Promocode - ||$message[1]||]
$onlyForIds[896846485805744168;$botOwnerId;]
$onlyIf[$isUserDmEnabled[$mentioned[1;yes]]==true;🚫 | **Not able to dm $mentioned[1;yes]**]
$deleteCommand
`}]