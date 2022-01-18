module.exports = {
name: "nsfw",
$if: "v4",
code: `
$if[$getServerVar[pp]==on]
$if[$toLowerCase[$checkContains[$message[1];randomhentai;pussy;neko;nsfw_neko_gif;lewd;lesbian;kuni;cum;classic;boobs;anal;yuri;avatar;tits;trap;solog;solo;pwankg;pussyart;kemo;kitsune;keta;holoero;hentai;futanari;femdom;feetgif;erofeet;feet;ero;erok;erokemo;eron;eroyuri;cumjpg;blowjob;spank;gasm]]==true]
$image[1;$jsonRequest[https://nekos.life/api/v2/img/$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLowerCase[$message];randomhentai;Random_hentai_gif];pussy;pussy];neko;nsfw_neko_gif];lewd;lewd];lesbian;les];kuni;kuni];cum;cum];classic;classic];boobs;boobs];bj;bj];anal;anal];avatar;nsfw_avatar];yuri;yuri];trap;trap];tits;tits];solog;solog];solo;solo];pwankg;pwankg];pussyart;pussy_jpg];kemo;lewdkemo];kitsune;lewdk];keta;keta];holorero;holoero];hentai;hentai];futanari;futanari];femdom;femdom];feetgif;feetg];erofeet;erofeet];feet;feet];ero;ero];erok;erok];erokemo;erokemo];eron;eron];eroyuri;eroyuri];cumjpg;cum_jpg];blowjob;blowjob];spank;spank];gasm;gasm];url]]

$onlyif[$toLowerCase[$checkContains[$message[1];randomhentai;pussy;neko;nsfw_neko_gif;lewd;lesbian;kuni;cum;classic;boobs;anal;yuri;avatar;tits;trap;solog;solo;pwankg;pussyart;kemo;kitsune;keta;holoero;hentai;futanari;femdom;feetgif;erofeet;feet;ero;erok;erokemo;eron;eroyuri;cumjpg;blowjob;spank;gasm]]==true;**You havnt provided a valid type heres the list
\`\`\`
randomhentai , pussy , neko , lewd , lewd , lesbian , kuni , cum , classic , boobs , anal , yuri , avatar , tits , trap , solog , solo , pwankg , pussyart , kemo , kitsune , keta holoero , hentai , futanari , femdom , feetgif , erofeet , feet , ero , erok , erokemo , eron , eroyuri , cumjpg , blowjob , spank , gasm\`\`\`**]

$onlyNsfw[**Only accessable in nsfw channel**]
$else
$if[$getServerVar[pp]==off]
**Seems like this server does not have premium**
$endif
$endif
$endif
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed: {color:000000} {title:**Blacklisted from the bot**} {description:**Seems like you are blacklisted from using the bot you might wanna appeal in [here](https://discord.gg/8HbkqA73Jj)**}}]`}