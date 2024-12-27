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

const { cmd } = require('../command')
const fs = require('fs');
const path = require('path');
const config = require('../config')
// List of bad words to check against
 // Replace with actual words
cmd({
  on: "body"
},
async (conn,mek, m, { from, body, isGroup, isAdmins, isBotAdmins, reply, sender }) => {
    try {
    
        const badWords = ["wtf", "mia", "xxx","fuck","sex","huththa","pakaya","ponnaya","hutto","lol"]
        if (!isGroup || isAdmins || !isBotAdmins) return; // Skip if not in group, or sender is admin, or bot is not admin
      
        const lowerCaseMessage = body.toLowerCase();
        const containsBadWord = badWords.some(word => lowerCaseMessage.includes(word));
        
        if (containsBadWord & config.ANTI_BAD === 'true') {
          await conn.sendMessage(from, { delete: mek.key }, { quoted: mek });
          await conn.sendMessage(from, { text: "🚫 ⚠️BAD WORDS NOT ALLOWED⚠️ 🚫" }, { quoted: mek });
        }
    } catch (error) {
        console.error(error)
        reply("An error occurred while processing the message.")
    }
})

const linkPatterns = [
    /https?:\/\/(?:chat\.whatsapp\.com|wa\.me)\/\S+/gi,   // WhatsApp group or chat links
    /https?:\/\/(?:t\.me|telegram\.me)\/\S+/gi,           // Telegram links
    /https?:\/\/(?:www\.)?youtube\.com\/\S+/gi,           // YouTube links
    /https?:\/\/youtu\.be\/\S+/gi,                        // YouTube short links
    /https?:\/\/(?:www\.)?facebook\.com\/\S+/gi,          // Facebook links
    /https?:\/\/fb\.me\/\S+/gi,                           // Facebook short links
    /https?:\/\/(?:www\.)?instagram\.com\/\S+/gi,         // Instagram links
    /https?:\/\/(?:www\.)?twitter\.com\/\S+/gi,           // Twitter links
    /https?:\/\/(?:www\.)?tiktok\.com\/\S+/gi,            // TikTok links
    /https?:\/\/(?:www\.)?linkedin\.com\/\S+/gi,          // LinkedIn links
    /https?:\/\/(?:www\.)?snapchat\.com\/\S+/gi,          // Snapchat links
    /https?:\/\/(?:www\.)?pinterest\.com\/\S+/gi,         // Pinterest links
    /https?:\/\/(?:www\.)?reddit\.com\/\S+/gi,            // Reddit links
    /https?:\/\/ngl\/\S+/gi,                              // NGL links
    /https?:\/\/(?:www\.)?discord\.com\/\S+/gi,           // Discord links
    /https?:\/\/(?:www\.)?twitch\.tv\/\S+/gi,             // Twitch links
    /https?:\/\/(?:www\.)?vimeo\.com\/\S+/gi,             // Vimeo links
    /https?:\/\/(?:www\.)?dailymotion\.com\/\S+/gi,       // Dailymotion links
    /https?:\/\/(?:www\.)?medium\.com\/\S+/gi             // Medium links
];

cmd({
    on: "body"
}, async (conn, mek, m, { from, body, sender, isGroup, isAdmins, isBotAdmins, reply }) => {
    try {
        if (!isGroup || isAdmins || !isBotAdmins) return; // Skip if not in group, or sender is admin, or bot is not admin

        const containsLink = linkPatterns.some(pattern => pattern.test(body));

        if (containsLink && config.ANTI_LINK === 'true') {
            // Delete the message
            await conn.sendMessage(from, { delete: mek.key }, { quoted: mek });

            // Warn the user
            await conn.sendMessage(from, { text: `⚠️ Links are not allowed in this group.\n@${sender.split('@')[0]} has been removed. 🚫`, mentions: [sender] }, { quoted: mek });

            // Remove the user from the group
            await conn.groupParticipantsUpdate(from, [sender], 'remove');
        }
    } catch (error) {
        console.error(error);
        reply("An error occurred while processing the message.");
    }
});
