const Neotro = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const Language = require('../language');
const Lang = Language.getString('system_stats');

if (Config.LANG == 'SI') {


    Neotro.addCommand({pattern: 'basichelp', fromMe: true, dontAddCommandList:true}, (async (message, match) => {
            
            var image = await axios.get (Config.MENU_LOGO, {responseType: 'arraybuffer'})
       
        await message.sendMessage (Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*⊰᯽⊱┈──╌❊  ❊╌──┈⊰᯽⊱*
 *═▣══❖⦁⦁⦁👽⦁⦁⦁❖══▣═*

 *🚀Dark Queen BASIC Help*

 🛸Dark Queen ඔබ භාවිතා කරන්නෙ ( Public) අකාරයට නම් ඔබට ක්‍රියාත්මක වන්නෙ පරිපාලක වරුන්ගෙ විධාන පමණි.
නමුත් අන් අයට පරිපාලක විධාන හැර අනෙකුත් විධාන සියල්ල ක්‍රියාත්මක වේ...

🌀පරිපාලක විධාන ලැයිස්තුව ලබා ගැනීමට( .Admin ) භාවිතා කරන්න
🌀සම්පූර්ණ විධාන ලැයිස්තුව ලබා ගැනීමට ( .tima ) භාවිතා කරන්න.

🛸 ඔබ amazone භාවිතා කරන්නෙ Private අකාරයටනම් ( .menu ) මෙම විධානය භාවිතා කර විධාන ලැයිස්තුව ලබාගත හැක.

🚀ඔබේ Bot එකවරම ක්‍රියා විරහිත වීම Bot ගෙ දෝෂයක් නොවෙ ( 75%)
එවන් අවස්තාවකදි ඔබේ අන්තර්ජාල සම්බන්ධ තාවය හා whatsapp web පරීක්ෂා කරන්න..

🚀එවැනි අවස්තාවකදි නැවත Bot ක්‍රියාත්මක කිරීමට ඔබ Heroku මගින් Bot Restart කල යුතු වේ...

🚀 ඔබේ Heroku Dyno පරීක්ෂා කිරිම අනිවාර්ය වෙ..

🛸පියවර

(01 ) Heroku Log වන්න
(02) ඔබ Bot සැකසූ App එක select කරන්න
(03) ඉහල කෙලවරේ ඇති [MORE] බටනය ඔබන්න
(04) එම ලැයිස්තුවෙ අවසානයට ඇති Restart all dynos ඔබන්න
🌀දැන් ඔබේ Bot restart වෙනු ඇත..එය භාවිත කිරීමෙනුත් Bot ක්‍රියාත්මක නොවේනම් logs වල screen shot සමඟ සහය සමූහයට ලියන්න

🚀ඔබ දන්නවද Amazone ඔබට Alive  message - Alive logo - Welcome Gif - Ban messages - Captions වෙනස් කිරීමේ පහසුකම් ලබා දී ඇති බව..


🚀  *විධානය: .setvar ALIVE_MESSAGE:(ඔබට අවශ්‍ය දේ ලියන්න)*
BOT හී alive message එක වෙනස් කරයි.


🚀 *විධානය: .setvar LANGUAGE:SI/ EN*
bot ක්‍රියාකාරිත්වය සිංහල හෝ ඉංග්‍රීසි භාෂාවට හැරවීම.


🚀 *විධානය: .setvar PROMOTE_MESSAGE:(ඔබට අවශ්‍ය දේ ලියන්න)*
 Addmin ලබාදීමේදි පැමිණෙන පණිවිඩය වෙනස් කිරීම.


🚀 *විධානය: .setvar DEMOTE_MESSAGE:(ඔබට අවශ්‍ය දේ ලියන්න)*
admin ඉවත් කිරීමෙදි පැමිණෙන පණිවිඩය වෙනස් කිරීම.


🚀 *විධානය: .setvar BAN_MESSAGE:(ඔබට අවශ්‍ය දේ ලියන්න)*
කණ්ඩායමෙන් අයෙක් ඉවත් කිරීමේදී පැමිණෙන පණිවිඩය වෙනස් කිරීමට.


🚀 *විධානය: .setvar WORK_TYPE:public / private*
ඔබට බොට් ක්‍රියාකාරිත්වය වෙනස් කිරීම මෙමගින් වෙනස් කිරීමට හැකිය.


🚀 *විධානය: .setvar MUTE_MESSAGE:(ඔබට අවශ්‍ය දේ ලියන්න)*
කණ්ඩායම mute කිරීමේදී පැමිණෙන පණිවිඩය නිර්මාණ හෝ වෙනස්කිරීම.


🚀 *විධානය: .setvar UNMUTE_MESSAGE:(ඔබට අවශ්‍ය දේ ලියන්න)*
කණ්ඩායම unmute කිරීමෙදී පැමිණෙන පණිවිඩය වෙනස් හෝ නිර්මාණය කිරීම

🚀 ALIVE LOGO - WELCOME GIF - BYE GIF වෙනස් කිරීමට පහත පියවර අනුගමනය කරන්න
*සහය සමූහයන්*

🛡️ Developer=wa.me/94715264791

🛸Dark Queen Bot Support 01
🔹 https://chat.whatsapp.com/ESgq5ThSobg4ZGD4pLAGf4

`}) 

 }));
}
