/*

                                                                                                                                                                                             
                                                                                                                                                                                             
   SSSSSSSSSSSSSSS HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIIIKKKKKKKKK    KKKKKKKHHHHHHHHH     HHHHHHHHH                    AAA               LLLLLLLLLLL             IIIIIIIIII
 SS:::::::::::::::SH:::::::H     H:::::::HE::::::::::::::::::::EI::::::::IK:::::::K    K:::::KH:::::::H     H:::::::H                   A:::A              L:::::::::L             I::::::::I
S:::::SSSSSS::::::SH:::::::H     H:::::::HE::::::::::::::::::::EI::::::::IK:::::::K    K:::::KH:::::::H     H:::::::H                  A:::::A             L:::::::::L             I::::::::I
S:::::S     SSSSSSSHH::::::H     H::::::HHEE::::::EEEEEEEEE::::EII::::::IIK:::::::K   K::::::KHH::::::H     H::::::HH                 A:::::::A            LL:::::::LL             II::::::II
S:::::S              H:::::H     H:::::H    E:::::E       EEEEEE  I::::I  KK::::::K  K:::::KKK  H:::::H     H:::::H                  A:::::::::A             L:::::L                 I::::I  
S:::::S              H:::::H     H:::::H    E:::::E               I::::I    K:::::K K:::::K     H:::::H     H:::::H                 A:::::A:::::A            L:::::L                 I::::I  
 S::::SSSS           H::::::HHHHH::::::H    E::::::EEEEEEEEEE     I::::I    K::::::K:::::K      H::::::HHHHH::::::H                A:::::A A:::::A           L:::::L                 I::::I  
  SS::::::SSSSS      H:::::::::::::::::H    E:::::::::::::::E     I::::I    K:::::::::::K       H:::::::::::::::::H               A:::::A   A:::::A          L:::::L                 I::::I  
    SSS::::::::SS    H:::::::::::::::::H    E:::::::::::::::E     I::::I    K:::::::::::K       H:::::::::::::::::H              A:::::A     A:::::A         L:::::L                 I::::I  
       SSSSSS::::S   H::::::HHHHH::::::H    E::::::EEEEEEEEEE     I::::I    K::::::K:::::K      H::::::HHHHH::::::H             A:::::AAAAAAAAA:::::A        L:::::L                 I::::I  
            S:::::S  H:::::H     H:::::H    E:::::E               I::::I    K:::::K K:::::K     H:::::H     H:::::H            A:::::::::::::::::::::A       L:::::L                 I::::I  
            S:::::S  H:::::H     H:::::H    E:::::E       EEEEEE  I::::I  KK::::::K  K:::::KKK  H:::::H     H:::::H           A:::::AAAAAAAAAAAAA:::::A      L:::::L         LLLLLL  I::::I  
SSSSSSS     S:::::SHH::::::H     H::::::HHEE::::::EEEEEEEE:::::EII::::::IIK:::::::K   K::::::KHH::::::H     H::::::HH        A:::::A             A:::::A   LL:::::::LLLLLLLLL:::::LII::::::II
S::::::SSSSSS:::::SH:::::::H     H:::::::HE::::::::::::::::::::EI::::::::IK:::::::K    K:::::KH:::::::H     H:::::::H       A:::::A               A:::::A  L::::::::::::::::::::::LI::::::::I
S:::::::::::::::SS H:::::::H     H:::::::HE::::::::::::::::::::EI::::::::IK:::::::K    K:::::KH:::::::H     H:::::::H      A:::::A                 A:::::A L::::::::::::::::::::::LI::::::::I
 SSSSSSSSSSSSSSS   HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIIIKKKKKKKKK    KKKKKKKHHHHHHHHH     HHHHHHHHH     AAAAAAA                   AAAAAAALLLLLLLLLLLLLLLLLLLLLLLLIIIIIIIIII
                                                                                                                                                                                             
                                                                                                                                                                                             
                                                                                                                                                                                             
                                                                                                                                                                                             
                                                                                                                                                                                             
                                                                                                                                                                                             
                                                                                                                                                                                             
                                                                                                                                                                                               
created by 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ 🕵
contact me 923143702270 ♻️
© Copy coder alert ⚠
*/

const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu2",
    alias: "allmenu",
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
┃★│ 𝐁𝐚𝐢𝐥𝐞𝐲𝐬 : *𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞*
┃★│ 𝐓𝐲𝐩𝐞 : *𝐍𝐨𝐝𝐞𝐉𝐬*
┃★│ 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : *𝐇𝐞𝐫𝐨𝐤𝐮*
┃★│ 𝐌𝐨𝐝𝐞 : *[${config.MODE}]*
┃★│ 𝐏𝐫𝐞𝐟𝐢𝐱 : *[${config.PREFIX}]*
┃★│ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : *v 1.0.0*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭━━〔 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮* 〕━━┈⊷
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
╭━━〔 *𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮* 〕━━┈⊷
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
╭━━〔 *𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮* 〕━━┈⊷
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
╭━━〔 *𝐅𝐮𝐧 𝐌𝐞𝐧𝐮* 〕━━┈⊷
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
╭━━〔 *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮* 〕━━┈⊷
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
╭━━〔 *𝐀𝐢 𝐌𝐞𝐧𝐮* 〕━━┈⊷
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
╭━━〔 *𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ᴘɪɴɢ
┃◈┃• ᴘɪɴɢ2
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
╭━━〔 *𝐀𝐧𝐢𝐦𝐞 𝐌𝐞𝐧𝐮* 〕━━┈⊷
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
╭━━〔 *𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ғᴀᴄᴛ
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
                image: { url: `https://i.ibb.co/hVndwHm/6995.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363369260614615@newsletter',
                        newsletterName: 'SHEIKH-ALI-MD,
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
