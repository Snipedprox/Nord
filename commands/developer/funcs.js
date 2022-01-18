module.exports = {
name: "func",
aliases: ['funcs','commands','code'],
code: `
$title[1;$getObjectProperty[data[0].name];https://aoi.leref.ga/functions/$replaceText[$getObjectProperty[data[0].name];$;usd]]
$author[1;aoi.js (Stable)]
$addField[1;Source;[Documentation](https://aoi.leref.ga);yes]
$addField[1;Description;\`\`\`$getObjectProperty[data[0].desc]\`\`\`]
$addField[1;Usage;\`\`\`php
$getObjectProperty[data[0].usage]\`\`\`]
$addTimestamp[1]
$color[1;RANDOM]
$createObject[$jsonRequest[https://api.leref.ga/functions/$message]]
$argsCheck[>0;:x: Please enter the function name.]
$suppressErrors[:x: Function \`$message\` not found or something went wrong.]`
}