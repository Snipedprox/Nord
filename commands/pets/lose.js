module.exports = {
name: "$alwaysExecute",
code: `
$setGlobalUserVar[happiness;$sub[$getGlobalUserVar[happiness];$random[1;8]]]
$setGlobalUserVar[hunger;$sub[$getGlobalUserVar[hunger];$random[1;8]]]

$onlyIf[$getGlobalUserVar[happiness]>7;]
$onlyIf[$getGlobalUserVar[hunger]>7;]

$globalCooldown[4s]
$onlyIf[$getGlobalUserVar[blacklist]==false;]`
}