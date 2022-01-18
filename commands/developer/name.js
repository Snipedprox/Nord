module.exports = {
name: "setname",
aliases: ['sn','name','setbotname'],
code: `
$title[1;<:ckalixlinus:925830382102925333> **Bot username set**]
$color[1;$getVar[color]]
$setBotUserName[$message]
$description[1;**New bot name has been set to [$message]($getVar[support])**]
$onlyForIDS[$botOwnerId;896846485805744168;**NO U**]`}


