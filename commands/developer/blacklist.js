module.exports = [{
name: "blacklist",
$if: "v4",
code: `
$color[1;RED]
$description[1;**Added $usertag[$get[u]] to the blacklist**]
$setGlobalUserVar[blacklist;true;$get[u]]
$onlyIf[$get[u]!=$authorid;**Provide a user id**]
$let[u;$findUser[$message;yes]]
$onlyforids[$botownerid;896846485805744168;]`
} , {
name: "unblacklist",
code: `
$color[1;RED]
$description[1;**Removed $usertag[$get[u]] from the blacklist**]
$setGlobalUserVar[blacklist;false;$get[u]]
$onlyIf[$get[u]!=$authorid;**Provide a user id**]
$let[u;$findUser[$message;yes]]
$onlyforids[$botownerid;896846485805744168;]`}]