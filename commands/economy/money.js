module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `
$if[$getGlobalUserVar[buff]==off]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];1]]
$else
$if[$getGlobalUserVar[buff]==on]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];3]]
$else
$if[$getServerVar[sbuff]==off]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];1]]
$else
$if[$getServerVar[sbuff]==on]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];3]]
$endif
$endif
$endif
$endif
$onlyIf[$getGlobalUserVar[blacklist]==false;]`}