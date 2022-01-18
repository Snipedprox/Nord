module.exports = {
name: "action",
$if: "v4",
code: `
$if[$toLowerCase[$checkContains[$message;baka;bite;blush;bored;cry;cuddle;dance;facepalm;feed;happy;highfive;laugh;hug;kiss;laugh;pat;poke;pout;shrug;slap;sleep;smile;smug;stare;think;thumbsup;tickle;wave;wink]]==true]
$jsonRequest[https://nekos.best/api/v1/$toLowerCase[$message];url;error occured]
$else
**Invalid action**
$endif
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}