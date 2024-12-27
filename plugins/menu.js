const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━━〔 *${config.BOT_NAME}* 〕━━━┈⊷
┃★╭──────────────
┃★│ 𝐎𝐰𝐧𝐞𝐫 : *${config.BOT_NAME}*
┃★│ 𝐁𝐚𝐢𝐥𝐞𝐲𝐬 : *Multi 𝐃𝐞𝐯𝐢𝐜𝐞*
┃★│ 𝐓𝐲𝐩𝐞 : *𝐍𝐨𝐝𝐞𝐉𝐬*
┃★│ 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : *𝐇𝐞𝐫𝐨𝐤𝐮*
┃★│ 𝐌𝐨𝐝𝐞 : *[${config.MODE}]*
┃★│ 𝐏𝐫𝐞𝐟𝐢𝐱 : *[${config.PREFIX}]*
┃★│ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : *v 1.0.0*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭━━〔 *𝐌𝐞𝐧𝐮 𝐋𝐢𝐬𝐭* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ᴀɪᴍᴇɴᴜ
┃◈┃• ᴀɴᴍɪᴇᴍᴇɴᴜ
┃◈┃• ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ
┃◈┃• ғᴜɴᴍᴇɴᴜ
┃◈┃• ᴅʟᴍᴇɴᴜ
┃◈┃• ʟɪsᴛᴄᴍᴅ
┃◈┃• ᴍᴀɪɴᴍᴇɴᴜ
┃◈┃• ɢʀᴏᴜᴘᴍᴇɴᴜ
┃◈┃• ᴀʟʟᴍᴇɴᴜ
┃◈┃• ᴏᴡɴᴇʀᴍᴇɴᴜ
┃◈┃• ᴏᴛʜᴇʀᴍᴇɴᴜ
┃◈┃• ʀᴇᴘᴏ
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/hVndwHm/6995.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363369260614615@newsletter',
                        newsletterName: 'SHEIKH-ALI-MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/sigma.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// dlmenu

cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ғᴀᴄᴇʙᴏᴏᴋ
┃◈┃• ᴍᴇᴅɪᴀғɪʀᴇ
┃◈┃• ᴛɪᴋᴛᴏᴋ
┃◈┃• ᴛᴡɪᴛᴛᴇʀ
┃◈┃• ɪɴsᴛᴀ
┃◈┃• ᴀᴘᴋ
┃◈┃• ɪᴍɢ
┃◈┃• ᴘʟᴀʏ
┃◈┃• ᴘʟᴀʏ2
┃◈┃• ᴀᴜᴅɪᴏ
┃◈┃• ᴠɪᴅᴇᴏ
┃◈┃• ᴠɪᴅᴇᴏ2
┃◈┃• ʏᴛᴍᴘ3
┃◈┃• ʏᴛᴍᴘ4
┃◈┃• sᴏɴɢ
┃◈┃• ᴅᴀʀᴀᴍᴀ
┃◈┃• ɢᴅʀɪᴠᴇ
┃◈┃• sᴍᴏᴠɪᴇ
┃◈┃• ʙᴀɪsᴄᴏᴘᴇ 
┃◈┃• ɢɪɴɪsɪʟɪᴀ 
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/n3hHrtw/8980.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363369260614615@newsletter',
                        newsletterName: 'SHEIKH-ALI-MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// group menu

cmd({
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try
       {
        let dec = `╭━━〔 *𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ɢʀᴏᴜᴘʟɪɴᴋ
┃◈┃• ᴀᴅᴅ
┃◈┃• ʀᴇᴍᴏᴠᴇ
┃◈┃• ᴋɪᴄᴋ
┃◈┃• ᴘʀᴏᴍᴏᴛᴇ 
┃◈┃• ᴅᴇᴍᴏᴛᴇ
┃◈┃• ᴅɪsᴍɪss 
┃◈┃• ʀᴇᴠᴏᴋᴇ
┃◈┃• sᴇᴛɢᴏᴏᴅʙʏᴇ
┃◈┃• sᴇᴛᴡᴇʟᴄᴏᴍᴇ
┃◈┃• ᴅᴇʟᴇᴛᴇ 
┃◈┃• ɢᴇᴛᴘɪᴄ
┃◈┃• ɢɪɴғᴏ
┃◈┃• ᴅᴇʟᴇᴛᴇ 
┃◈┃• ᴅɪsᴀᴘᴘᴇᴀʀ on
┃◈┃• ᴅɪsᴀᴘᴘᴇᴀʀ off
┃◈┃• ᴅɪsᴀᴘᴘᴇᴀʀ 7D,24H
┃◈┃• ᴀʟʟʀᴇǫ
┃◈┃• ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ
┃◈┃• ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ
┃◈┃• ᴊᴏɪɴʀᴇǫᴜᴇsᴛs
┃◈┃• sᴇɴᴅᴅᴍ
┃◈┃• ɴɪᴋᴀʟ
┃◈┃• ᴍᴜᴛᴇ
┃◈┃• ᴜɴᴍᴜᴛᴇ
┃◈┃• ʟᴏᴄᴋɢᴄ
┃◈┃• ᴜɴʟᴏᴄᴋɢᴄ
┃◈┃• ɪɴᴠɪᴛᴇ
┃◈┃• ᴛᴀɢ
┃◈┃• ʜɪᴅᴇᴛᴀɢ
┃◈┃• ᴛᴀɢᴀʟʟ
┃◈┃• ᴛᴀɢᴀᴅᴍɪɴs
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/myBRtCJ/2900.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363369260614615@newsletter',
                        newsletterName: 'SHEIKH-ALI-MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// fun menu

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "😎",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        let dec = `╭━━〔 *𝐅𝐮𝐧 𝐌𝐞𝐧𝐮* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ɪɴsᴜʟᴛ
┃◈┃• ʜᴀᴄᴋ
┃◈┃• ᴊᴏᴋᴇ
┃◈┃• ʜᴇᴀʀᴛ 
┃◈┃• ʜᴀᴘᴘʏ 
┃◈┃• sᴀᴅ
┃◈┃• ᴀɴɢʀʏ 
┃◈┃• sʜʏ
┃◈┃• ᴋɪss
┃◈┃• ᴍᴏᴏɴ
┃◈┃• ᴄᴜɴғᴜᴢᴇᴅ
┃◈┃• ʜᴀɴᴅ
┃◈┃• ɴɪᴋᴀʟ
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/JrD1gbs/8432.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363369260614615@newsletter',
                        newsletterName: 'SHEIKH-ALI-MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// other menu

cmd({
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ғᴀᴄᴛ
┃◈┃• ғᴏɴᴛ
┃◈┃• ᴅᴇғɪɴᴇ
┃◈┃• ɴᴇᴡs
┃◈┃• ᴍᴏᴠɪᴇ
┃◈┃• ᴡᴇᴀᴛʜᴇʀ
┃◈┃• sʀᴇᴘᴏ
┃◈┃• ɪɴsᴜʟᴛ
┃◈┃• sᴀᴠᴇ
┃◈┃• ᴡɪᴋɪᴘᴇᴅɪᴀ
┃◈┃• ɢᴘᴀss
┃◈┃• ɢɪᴛʜᴜʙsᴛᴀʟᴋ
┃◈┃• ʏᴛs
┃◈┃• ʏᴛᴠ
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/n3hHrtw/8980.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363369260614615@newsletter',
                        newsletterName: 'SHEIKH-ALI-MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// main menu

cmd({
    pattern: "mainmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🗿",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ᴘɪɴɢ
┃◈┃• ᴀʟɪᴠᴇ
┃◈┃• ʀᴜɴᴛɪᴍᴇ
┃◈┃• ᴜᴘᴛɪᴍᴇ 
┃◈┃• ʀᴇᴘᴏ
┃◈┃• ᴏᴡɴᴇʀ
┃◈┃• ᴍᴇɴᴜ
┃◈┃• ᴍᴇɴᴜ2
┃◈┃• ʀᴇsᴛᴀʀᴛ
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/myBRtCJ/2900.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363369260614615@newsletter',
                        newsletterName: 'SHEIKH-ALI-MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ᴏᴡɴᴇʀ
┃◈┃• ᴍᴇɴᴜ
┃◈┃• ᴍᴇɴᴜ2
┃◈┃• ʟɪsᴛᴄᴍᴅ
┃◈┃• ᴀʟʟᴍᴇɴᴜ
┃◈┃• ʀᴇᴘᴏ
┃◈┃• ʙʟᴏᴄᴋ
┃◈┃• ᴜɴʙʟᴏᴄᴋ
┃◈┃• ғᴜʟʟᴘᴘ
┃◈┃• sᴇᴛᴘᴘ
┃◈┃• ʀᴇsᴛᴀʀᴛ
┃◈┃• sʜᴜᴛᴅᴏᴡɴ
┃◈┃• ᴜᴘᴅᴀᴛᴇᴄᴍᴅ
┃◈┃• ᴀʟɪᴠᴇ
┃◈┃• ᴘɪɴɢ 
┃◈┃• ɢᴊɪᴅ
┃◈┃• ᴊɪᴅ
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/JrD1gbs/8432.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363369260614615@newsletter',
                        newsletterName: 'SHEIKH-ALI-MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• sᴛɪᴄᴋᴇʀ
┃◈┃• sᴛɪᴄᴋᴇʀ2
┃◈┃• ғᴀɴᴄʏ
┃◈┃• ᴛᴀᴋᴇ
┃◈┃• ᴛᴏᴍᴘ3
┃◈┃• ᴛᴛs
┃◈┃• ᴛʀᴛ
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/n3hHrtw/8980.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363369260614615@newsletter',
                        newsletterName: 'SHEIKH-ALI-MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// anmie menu 

cmd({
    pattern: "animemenu",
    desc: "menu the bot",
    category: "menu",
    react: "🧚",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
          let dec = `╭━━〔 *𝐀𝐧𝐢𝐦𝐞 𝐌𝐞𝐧𝐮* 〕━━┈⊷
┃◈╭─────────────·๏

┃◈┃• ᴅᴏɢ
┃◈┃• ᴋɪɴɢ
┃◈┃• ᴀɴɪᴍᴇɢɪʀʟ
┃◈┃• ᴀɴɪᴍᴇɢɪʀʟ
┃◈┃• ᴀɴɪᴍᴇɢɪʀʟ1
┃◈┃• ᴀɴɪᴍᴇɢɪʀʟ2
┃◈┃• ᴀɴɪᴍᴇɢɪʀʟ3
┃◈┃• ᴀɴɪᴍᴇɢɪʀʟ4
┃◈┃• ᴀɴɪᴍᴇɢɪʀʟ5
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/myBRtCJ/2900.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363369260614615@newsletter',
                        newsletterName: 'SHEIKH-ALI-MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// ai menu 

cmd({
    pattern: "aimenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *𝐀𝐢 𝐌𝐞𝐧𝐮* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ᴀɪ
┃◈┃• ɢᴘᴛ
┃◈┃• ᴍᴇᴛᴀ
┃◈┃• ʙʟᴀᴄᴋʙᴏx
┃◈┃• ɢᴘᴛ4
┃◈┃• ʙɪɴɢ
┃◈┃• ᴄᴏᴘɪʟᴏᴛ
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/JrD1gbs/8432.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363369260614615@newsletter',
                        newsletterName: 'SHEIKH-ALI-MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

