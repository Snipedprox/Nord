module.exports = {
name: "$alwaysExecute",
code: `
$setGlobalUserVar[thirst;$sub[$getGlobalUserVar[thirst];2]]
$setGlobalUserVar[hunger;$sub[$getGlobalUserVar[hunger];2]]

$onlyIf[$getGlobalUserVar[thirst]>=2;]
$onlyIf[$getGlobalUserVar[hunger]>=2;]
$onlyIf[$getGlobalUserVar[blacklist]==false;]`
}