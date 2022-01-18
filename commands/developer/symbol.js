module.exports = {
name: "symbol",
code: `
$title[1;**Symbol change**]
$color[1;$getVar[color]]
$description[1;**Server currency symbol changed to $message**]
$setServerVar[symbol;$message]
$onlyForIDs[$botOwnerID;896846485805744168;]`}