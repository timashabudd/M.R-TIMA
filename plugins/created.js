const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'git ?(.*)', fromMe: true, desc: 'owner number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Amalser [OWNER]\n' // full name
            + 'ORG:Amalser;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=94786825798:+94 786825798\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "Chamod Keshan [Queen Alexa OWNER]", vcard: vcard}, MessageType.contact)
}))
