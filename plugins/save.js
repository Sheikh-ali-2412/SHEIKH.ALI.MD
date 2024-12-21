const config = require('../config');
const { cmd, commands } = require('../command');
const fs = require('fs');
const path = require('path');


const messages = {
    EN: {
        noQuotedMedia: "❌ Reply to a media message (video, image, or audio) with the `.save` command.",
        unsupportedMedia: "❌ Only video, image, or audio messages are supported.",
        success: "✅ Successfully saved and sent the media file.",
        failure: "❌ Failed to save and send the media. Please try again."
    },
    SI: {
        noQuotedMedia: "❌ කරුණාකර `.save` විධානය සමඟ මාධ්‍ය පණිවිඩයකට (වීඩියෝ, පින්තූරය හෝ ඕඩියෝ) ප්‍රතිචාර දැක්වන්න.",
        unsupportedMedia: "❌ පමණක් වීඩියෝ, පින්තූරය හෝ ඕඩියෝ පණිවිඩයන් අනුකූලයි.",
        success: "✅ සාර්ථකව මාධ්‍ය ගොනුව සුරැකුවා සහ එය යවන්න.",
        failure: "❌ මාධ්‍ය සුරැකීම සහ එය යැවීම අසාර්ථක විය. කරුණාකර නැවත උත්සාහ කරන්න."
    }
};

cmd({
    pattern: "sav",
    react: "📁",
    alias: ["store"],
    desc: "Save and send back a media file (image, video, or audio).",
    category: "media",
    use: ".save <caption>",
    filename: __filename,
},
async (conn, mek, m, { quoted, q, reply }) => {
    try {
        if (!quoted) {
            return reply(messages[config.LANG].noQuotedMedia);
        }

        const messageType = quoted.mtype;
        let mediaType;

        if (/video/.test(messageType)) {
            mediaType = "video";
        } else if (/image/.test(messageType)) {
            mediaType = "image";
        } else if (/audio/.test(messageType)) {
            mediaType = "audio";
        } else {
            return reply(messages[config.LANG].unsupportedMedia);
        }

        const mediaPath = await conn.downloadAndSaveMediaMessage(quoted);
        const filePath = path.resolve(mediaPath);

        const mediaMessage = {
            caption: q || '',
        };
        mediaMessage[mediaType] = { url: `file://${filePath}` };

        await conn.sendMessage(m.sender, mediaMessage, { quoted: mek });
        await reply(messages[config.LANG].success);
    } catch (error) {
        console.error(error);
        reply(messages[config.LANG].failure);
    }
});
