module.exports = {
name: "setbotavatar",
aliases: ['sav','setavatar','savatar','bavatar','bv','ba'],
code: `
$title[1;<:ckalixlinus:925830382102925333> **Bot avatar set**]
$color[1;$getVar[color]]
$setBotAvatar[$message]
$description[1;**New bot avatar has been set to [This]($message)**]
$image[1;$message]
$onlyForIDS[$botOwnerId;896846485805744168;**NO U**]`}