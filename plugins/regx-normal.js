/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const Neotro = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Language = require('../language');
let config = require('../config');
const Lang = Language.getString('weather');
let td = config.WORKTYPE == 'public' ? false : true


Neotro.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (message.jid === '919562803423-1627735504@g.us') {

             return;
         }
         let regex1 = new RegExp('๐๐ผโคANIME-LIST')
         let regex2 = new RegExp('๐๐ผโคMEME-LIST')
         let regex3 = new RegExp('๐๐ผโคTTP-LIST')
         let regex4 = new RegExp'๐๐ผโคALL-COMMAND')
         let regex5 = new RegExp('๐๐ผโคADMIN-LIST')
         let regex6 = new RegExp('๐๐ผโคLOGO-LIST')
         let regex7 = new RegExp'๐๐ผโคDOWNLOAD-LIST')
         let regex8 = new RegEx'๐๐ผโคMAIN-LIST')
         let regex9 = new RegExp('๐๐ผโคHELP-LIST')
         let regex10 = new RegExp('๐๐ผโคAPK-LIST')
         let regex11 = new RegExp('๐๐ผโคEHI-LIST')
         let regex12 = new RegExp('QASH')
         let regex13 = new RegExp('JASH')
         let regex14 = new RegExp('CASH')
         let regex15 = new RegExp('XASH')
         let regex16 = new RegExp('DASH')
         let regex17 = new RegExp('EASG')
         let regex18 = new RegExp('YASH')
         let regex19 = new RegExp('UASH')
          if (regex1.test(message.message)) {              
             await message.client.sendMessage(message.jid,'*๐๐ผโคDark Queen Anime List*\n\nโโโโโโโโโโโท\nโ ๐ผ: .loli\nโ ๐ผ: .wifu\nโ ๐ผ: .neko\nโ ๐ผ: .ava\nโ ๐ผ: .kemo\nโ ๐ผ: .awoo\nโ ๐ผ: .shinobu\nโ ๐ผ: .megumin\nโโโโโโโโโโโท', MessageType.text, {quoted: message.data })
         } 
         else if (regex2.test(message.message)) {
            await message.client.sendMessage(message.jid,'*โโโโโโโแดแดสแด วซแดแดแดษดโโโโโโโ*\n          ๐๐ผโคแดแดสแด วซแดแดแดษด ๐ช\n*โโเถธเทเถธเท เถฝเทเถบเทเทเทเถญเทเท แดแดแดแด แดแดแดแดโโ*\n\n*๐ .yasai       โดyour textโต*\n*๐ .uddika    โดyour textโต*\n*๐ .aah          โดyour textโต*\n*๐ .sir            โดyour textโต*\n*๐ .my3         โดyour textโต*\n*๐ .fuck         โดyour textโต*\n*๐ .hii             โดyour textโต*\n*๐ .asai          โดyour textโต*\n*๐ .hapoi       โดyour textโต*\n*๐ .anura       โดyour textโต*\n*๐ .gemba       โดyour textโต*\n*๐ .wow       โดyour textโต*\n*๐ .hapo       โดyour textโต*\n*๐ .babah       โดyour textโต*\n*๐ .mcn       โดyour textโต*\n*๐ .nah       โดyour textโต*\n*โโโโโโโโฃโโโฃโโโโโโโ*\n\nโทแดแดแดแดแด สส แด.ส แดษชแดแด' , MessageType.text, {quoted: message.data })
         }
          else if (regex3.test(message.message)) {
             await message.client.sendMessage(message.jid,'*๐๐ผโคDark Queen TTP list*\n\nโโโโโโโโโโโโท\n*โ ๐: .bluet < your Text>*\n*โ ๐: .yellowt < your Text>*\n*โ ๐: .greent < your Text>*\n*โ ๐: .pinkt < your Text>*\n*โ ๐: .purplet < your Text>*\n*โ ๐: .redt < your Text>*\n*โ ๐: .blackt < your Text>*\n*โ ๐: .brownt < your Text>*\nโโโโโโโโโโโโท', MessageType.text, {quoted: message.data })
         }
         else if (regex4.test(message.message)) {
            await message.client.sendMessage(message.jid,'๐ฉโ๐ฆฐ', MessageType.text, {quoted: message.data })
         }
         else if (regex5.test(message.message)) {
           await message.client.sendMessage(message.jid,'*โ=====๐๐ผโคDark Queen Admin Panel====โท*\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .ban\n*๐ เทเทเทเทเถญเถปเถบ* : ```เถเถซเทเถฉเทเถบเถธเท เถเทเถฑเทเถเท เถเทเถญเท เถเถปเถฑเทเถฑ. เถดเถซเทเทเทเถฉเถบ mention เถฏเทเถฑเทเถฑ เทเท เทเทเถฐเทเถฑเถบ เถทเทเทเทเถญเท เถเทเถปเทเถธเถง เถดเทเถฏเทเถเถฝเถบเถเท เถงเทเถเท เถเถปเถฑเทเถฑ```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .add\n*๐ เทเทเทเทเถญเถปเถบ* : ```เถเถซเทเถฉเทเถบเถธเถง เถบเถธเทเถเท เถเถเถญเท เถเถปเถบเท```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .mute\n*๐ เทเทเทเทเถญเถปเถบ* : ```เถเถซเทเถฉเทเถบเถธเท chat เถฑเทเทเทเทเถถเทเถฏ เถเถปเถฑเทเถฑ. เถดเถซเทเทเทเถฉเถบ เถบเทเทเทเถบ เทเทเถเทเถเท admin เถดเถธเถซเท```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .unmute\n*๐ เทเทเทเทเถญเถปเถบ* : ```เถเถซเทเถฉเทเถบเถธเท chat เถฑเทเทเทเทเถถเทเถฏ เถเทเถปเทเถธ เถเทเถญเท เถเทเถปเทเถธ. เถเถฑเทเถธ เถเทเถฑเทเถเทเถง เถดเถซเทเทเทเถฉเถบเถเท เถบเทเทเทเถบ เทเทเถเทเถบ.```\n\n*๐เทเทเถฐเทเถฑเถบ* : .clear\n*๐ เทเทเทเทเถญเถปเถบ* : ```Chat เถธเถเท เถฏเถธเถบเท.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .promote\n*๐ เทเทเทเทเถญเถปเถบ* : ```เทเทเถธเทเถขเทเถเถบเถฑเท admin เถเถปเถบเท.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .demote\n*๐ เทเทเทเทเถญเถปเถบ* : ```Admin เทเทเถธเทเถขเทเถเถบเถเท เถถเทเถง เถดเถญเท เถเถปเถบเท.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .plugin\n*๐ เทเทเทเทเถญเถปเถบ* : ```plugin เทเทเถฎเทเถดเถฑเถบ เถเถปเถฑเทเถฑ.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .remove\n*๐ เทเทเทเทเถญเถปเถบ* : ```plugin เถเทเถญเท เถเถปเถบเท.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .invite\n*๐ เทเทเทเทเถญเถปเถบ* : ```เถเถซเทเถฉเทเถบเถธเท เถเถปเทเถฐเถฑเท เถฝเทเถฑเทเถเทเท เทเถดเถบเถบเท.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .afk\n*๐ เทเทเทเทเถญเถปเถบ* : ```เถเถบ bot AFK เถถเทเถง เถดเถญเท เถเถปเถบเท.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .restart\n*๐ เทเทเทเทเถญเถปเถบ* : ```Restart the bot.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .shutdown\n*๐ เทเทเทเทเถญเถปเถบ* : ```Shutdown the Bot.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .setvar\n*๐ เทเทเทเทเถญเถปเถบ* : ```Heroku config vars เทเถเทเถฑเทเถฑ.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .getvar\n*๐ เทเทเทเทเถญเถปเถบ* : ```Heroku config var เถฝเถถเท เถเถฑเทเถฑ```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .speedtest\n*๐ เทเทเทเทเถญเถปเถบ* : ``` Download เถเทเถปเทเถธ เทเท Upload เถเทเถปเทเถธเท เทเทเถเถบ เถธเทเถฑเทเถธ.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .filter\n*๐ เทเทเทเทเถญเถปเถบ* : ```เถเถบ filters เถเถเท เถเถปเถบเท. เถเทเทเถปเทเทเถปเท เถเถถเท filter word เถฝเทเถบเถฑเทเถฑเท เถฑเถธเท, เถเถบ เถดเทเทเทเถญเทเถป เถบเทเถบเท. เถเถถ .filter เถฝเทเทเทเทเทเทเถญเท เถเถบ เถเถถเถเท filters เถฝเทเถบเทเทเทเถญเทเท เถดเทเถฑเทเทเถฑเท เถเถญ.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* :  .stop\n*๐ เทเทเทเทเถญเถปเถบ* : ``` เถเถถ เถเถฝเทเถฑเท เถเถเถญเท เถเท filters เถฑเทเถญเทเทเถบเท.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* :  .welcome\n*๐ เทเทเทเทเถญเถปเถบ* : ``` เถเถบ เถดเทเทเทเถเทเถฑเทเถธเท เถดเถซเทเทเทเถฉเถบ เทเถเทเถบเท.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .goodbye\n*๐ เทเทเทเทเถญเถปเถบ* : ```เทเถธเทเถเทเถฑเทเถธเท เถดเถซเทเทเทเถฉเถบ เทเถเทเถบเท.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .kickme\n*๐ เทเทเทเทเถญเถปเถบ* : ```เถเถบ เทเทเถฐเทเถฑเถบ เถฝเถถเท เถฏเท เถเถญเท เถเถซเทเถฉเทเถบเถธเทเถฑเท bot เถเทเถญเท เถเถปเถบเท.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .pp\n*๐ เทเทเทเทเถญเถปเถบ* : ```เถเถถ mention เทเถดเถบเถฑ เถกเทเถบเทเถปเทเถดเถบ, bot profile เถกเทเถบเทเถปเทเถดเถบ เถเถปเถบเท.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .block\n*๐ เทเทเทเทเถญเถปเถบ* : ```Block tagged user.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .unblock\n*๐ เทเทเทเทเถญเถปเถบ* : ```Unblock tagged user.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .jid\n*๐ เทเทเทเทเถญเถปเถบ* : ```เถดเถปเทเทเทเถฝเถเถบเทเถเท JID เถฝเถถเท เถฏเทเถบเท.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .tagall\n*๐ เทเทเทเทเถญเถปเถบ* : ```เถเถซเทเถฉเทเถบเถธเท เทเทเถงเทเถฑ เทเทเถบเถฝเทเถฝเถฑเท เถงเทเถเท เถเถปเถบเท.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .update\n*๐ เทเทเทเทเถญเถปเถบ* : ```Updates เถดเถปเทเถเทเทเท เถเถปเถบเท.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .update now\n*๐ เทเทเทเทเถญเถปเถบ* : ```เถเถบ เถถเทเถงเท update เถเถปเถบเท.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .dyno\n*๐ เทเทเทเทเถญเถปเถบ* : ```Showing heroku dyno hours.```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .add\n*๐ เทเทเทเทเถญเถปเถบ* : ```เถเถซเทเถฉเทเถบเถธเถง เถบเถธเทเถเท เถเถเถญเท เถเถปเถบเท```\n\n*๐งโโ๏ธเทเทเถฐเทเถฑเถบ* : .sysd\n*๐ เทเทเทเทเถญเถปเถบ* : ```เถดเถฏเทเถฐเถญเท เทเถเถเทเถบเทเถฝเทเถเถฑ เถดเทเถฑเทเทเทเถธ```\n\n*๐เทเทเถฐเทเถฑเถบ* : .rename\n*๐ เทเทเทเทเถญเถปเถบ* : เทเถธเทเทเถบเท เถฑเถธ เทเทเถฑเทเท เถเถปเถบเท.\n\n*๐เทเทเถฐเทเถฑเถบ* : .safemode on -off\n*๐ เทเทเทเทเถญเถปเถบ* : เถเถป queen เถธเท queen เถเถบเทเถเท เถเทฒเถดเท เถเถ เทเทเถดเทเถธเท เถเทเถฑเทเถฑ เทเทเถฏเทเทเทเถญเท Auto Remove.', MessageType.text, {quoted: message.data })
         }
          else if (regex6.test(message.message)) {
            await message.client.sendMessage(message.jid,'\n๐ฉโ๐ฆฐ', MessageType.text, {quoted: message.data })
         }
          else if (regex7.test(message.message)) {
            await message.client.sendMessage(message.jid,'๐ฉโ๐ฆฐ', MessageType.text, {quoted: message.data })
         }
          else if (regex8.test(message.message)) {
            await message.client.sendMessage(message.jid,'๐ฉโ๐ฆฐ', MessageType.text, {quoted: message.data })
         }
          else if (regex9.test(message.message)) {
            await message.client.sendMessage(message.jid,'๐ฉโ๐ฆฐ', MessageType.text, {quoted: message.data })
         }
         else if (regex10.test(message.message)) {
            await message.client.sendMessage(message.jid,'๐ฉโ๐ฆฐ', MessageType.text, {quoted: message.data })
         }
         else if (regex11.test(message.message)) {
            await message.client.sendMessage(message.jid,'๐ฉโ๐ฆฐ', MessageType.text, {quoted: message.data })
         }   
         else if (regex12.test(message.message)) {
            await message.client.sendMessage(message.jid,'๐ฉโ๐ฆฐ', MessageType.text, {quoted: message.data })
         }
         else if (regex13.test(message.message)) {
            await message.client.sendMessage(message.jid,'๐ฉโ๐ฆฐ', MessageType.text, {quoted: message.data })
         }

         else if (regex14.test(message.message)) {
            await message.client.sendMessage(message.jid,'๐ฉโ๐ฆฐ', MessageType.text, {quoted: message.data })
         }

         else if (regex15.test(message.message)) {
            await message.client.sendMessage(message.jid,'๐ฉโ๐ฆฐ', MessageType.text, {quoted: message.data })
         }
        
         else if (regex16.test(message.message)) {
            await message.client.sendMessage(message.jid,'๐ฉโ๐ฆฐ', MessageType.text, {quoted: message.data })
         }
        
         else if (regex17.test(message.message)) {
            await message.client.sendMessage(message.jid,'*๐ฉโ๐ฆฐ', MessageType.text, {quoted: message.data })
         }
        
         else if (regex18.test(message.message)) {
            await message.client.sendMessage(message.jid,'๐ฉโ๐ฆฐ', MessageType.text, {quoted: message.data })
         }
        
         else if (regex18.test(message.message)) {
            await message.client.sendMessage(message.jid,'๐ฉโ๐ฆฐ', MessageType.text, {quoted: message.data })
         }
        
         else if (regex19.test(message.message)) {
            await message.client.sendMessage(message.jid,'๐ฉโ๐ฆฐ', MessageType.text, {quoted: message.data })
         }
        
 }));
