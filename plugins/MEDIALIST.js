/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const Neotro = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Language = require('../language');
const Config = require('../config');
const Lang = Language.getString('amazone');
let fs = Config.WORKTYPE == 'public' ? false : true
const TT = 'Show super TTP PACK'



Neotro.addCommand({pattern: 'listp', fromMe: fs, desc: Lang.BLIST}, (async (message, match) => {
    await message.sendMessage("*👩‍🦰Dark Queen TTP list*\n\n╔══════════▷\n*╠📑: .tblue < your Text>*\n*╠📑: .tyellow < your Text>*\n*╠📑: .tgreen< your Text>*\n*╠📑: .tpink < your Text>*\n*╠📑: .tpurple < your Text>*\n*╠📑: .tred < your Text>*\n*╠📑: .tblack < your Text>*\n*╠📑: .tbrown < your Text>*\n╠📑: .tpurple < your text>\n╚══════════▷");

}));

Neotro.addCommand({pattern: 'listanim', fromMe: fs, desc: Lang.CLIST}, (async (message, match) => {
    await message.sendMessage("  *👩‍🦰Dark Queen Anime List*\n\n╔═════════▷\n╠🌼: .loli\n╠🌼: .wifu\n╠🌼: .neko\n╠🌼: .ava\n╠🌼: .kemo\n╠🌼: .awoo\n╠🌼: .shinobu\n╠🌼: .megumin\n╚═════════▷");

}));

Neotro.addCommand({pattern: 'spgroup', fromMe: true, dontAddCommandList:true}, (async (message, match) => {
    await message.sendMessage("*<===👩Suppor Group\n💬https://chat.whatsapp.com/ESgq5ThSobg4ZGD4pLAGf4\n\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ǫᴜᴇᴇɴ");

}));

Neotro.addCommand({pattern: 'logo', fromMe: fs, desc: 'more text img commands'}, (async (message, match) => {
  await message.sendMessage('*<=====👩‍🦰Dark Queen MORE LOGO pack===>*\n\n🐼command : .break\n🦋desc : change your text to wall breaking image.\n\n🐼command : .phub\n🦋desc : change your text into pornhub logo.\n🏷️example : .phuh BOT;X.\n\n🐼command : .blood\n🦋desc : change your text frozen blood on a glass\n\n🐼command : .1917\n🦋desc : change your text to a 1917 model image\n\n🐼command : .avengers\n🦋desc : change your text to avangers logo\n🏷️example : .avengers its;BOT X.\n\n🐼command : .boxed\n🦋desc : change your text to 3d boxed design\n\n🐼command : .window\n🦋desc : write your text on a foggy window \n\n🐼command : .skywal\n🦋desc : random sky wallpaper with given text\n\n🐼command : .holo\n🦋desc : change your text to holo design\n\n🐼command : .drop\n🦋desc : change your text into rain water drop.n\n🐼command : .flame\n🦋desc : text with fire effect.\n\n🐼command : .vtext\n🦋desc : text to video.\n\n🐼command : .ptext\n🦋desc : text to video.\n\n🐼command : .colortext\n🦋desc : text to colorfull video\n\n🐼command : .cloud\n🦋desc : text on cloud\n\n🐼command : .2ninja\n🦋desc : random ninja logo with given name.');
  
}));

Neotro.addCommand({pattern: 'stlist', fromMe: fs, desc: TT}, (async (message, match) => {
  await message.sendMessage('*╭─「 DARK QUEEN SUPER TTP 」*\n│ \n│🧚‍♂Dark Queen  Super TTP pack)\n│ සිංහල Font Support 😍\n╰────\n╭─「 COMMANDS」\n│ \n│ • 1ttp <your Text >\n│ • 2ttp <your Text >\n│ • 3ttp <your Text >\n「 ©️ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ǫᴜᴇᴇɴ」');
  
}));


//=============PRIVATE START



Neotro.addCommand({pattern: 'listp', fromMe: fs, desc: Lang.BLIST}, (async (message, match) => {
    await message.sendMessage("*👩‍🦰Dark Queen TTP list*\n\n╔══════════▷\n*╠📑: .tblue < your Text>*\n*╠📑: .tyellow < your Text>*\n*╠📑: .tgreen< your Text>*\n*╠📑: .tpink < your Text>*\n*╠📑: .tpurple < your Text>*\n*╠📑: .tred < your Text>*\n*╠📑: .tblack < your Text>*\n*╠📑: .tbrown < your Text>*\n╠📑: .tpurple < your text>\n╚══════════▷");

}));

Neotro.addCommand({pattern: 'listanim', fromMe: fs, desc: Lang.CLIST}, (async (message, match) => {
    await message.sendMessage("  *👩‍🦰Dark Queen Anime List*\n\n╔═════════▷\n╠🌼: .loli\n╠🌼: .wifu\n╠🌼: .neko\n╠🌼: .ava\n╠🌼: .kemo\n╠🌼: .awoo\n╠🌼: .shinobu\n╠🌼: .megumin\n╚═════════▷");

}));

Neotro.addCommand({pattern: 'spgroup', fromMe: true, dontAddCommandList:true}, (async (message, match) => {
    await message.sendMessage("*<===👩Suppor Group\n💬https://chat.whatsapp.com/ESgq5ThSobg4ZGD4pLAGf4\n\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ǫᴜᴇᴇɴ");

}));

Neotro.addCommand({pattern: 'logo', fromMe: fs, desc: 'more text img commands'}, (async (message, match) => {
  await message.sendMessage('*<=====👩‍🦰Dark Queen MORE LOGO pack===>*\n\n🐼command : .break\n🦋desc : change your text to wall breaking image.\n\n🐼command : .phub\n🦋desc : change your text into pornhub logo.\n🏷️example : .phuh BOT;X.\n\n🐼command : .blood\n🦋desc : change your text frozen blood on a glass\n\n🐼command : .1917\n🦋desc : change your text to a 1917 model image\n\n🐼command : .avengers\n🦋desc : change your text to avangers logo\n🏷️example : .avengers its;BOT X.\n\n🐼command : .boxed\n🦋desc : change your text to 3d boxed design\n\n🐼command : .window\n🦋desc : write your text on a foggy window \n\n🐼command : .skywal\n🦋desc : random sky wallpaper with given text\n\n🐼command : .holo\n🦋desc : change your text to holo design\n\n🐼command : .drop\n🦋desc : change your text into rain water drop.n\n🐼command : .flame\n🦋desc : text with fire effect.\n\n🐼command : .vtext\n🦋desc : text to video.\n\n🐼command : .ptext\n🦋desc : text to video.\n\n🐼command : .colortext\n🦋desc : text to colorfull video\n\n🐼command : .cloud\n🦋desc : text on cloud\n\n🐼command : .2ninja\n🦋desc : random ninja logo with given name.');
  
}));

Neotro.addCommand({pattern: 'stlist', fromMe: fs, desc: TT}, (async (message, match) => {
  await message.sendMessage('*╭─「 DARK QUEEN SUPER TTP 」*\n│ \n│🧚‍♂Dark Queen  Super TTP pack)\n│ සිංහල Font Support 😍\n╰────\n╭─「 COMMANDS」\n│ \n│ • 1ttp <your Text >\n│ • 2ttp <your Text >\n│ • 3ttp <your Text >\n「 ©️ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ǫᴜᴇᴇɴ」');
  
}));
