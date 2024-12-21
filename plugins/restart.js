const config = require('../config');
const { cmd, commands } = require('../command');
const { sleep } = require('../lib/functions');
const { exec } = require("child_process");


const messages = {
    EN: {
        notOwner: "❌ You must be the owner to use this command.",
        restarting: "🔄 Restarting the bot...",
        error: "⚠️ An error occurred while restarting the bot. Please try again later."
    },
    SI: {
        notOwner: "❌ මෙම විධානය භාවිතා කිරීමට ඔබ හිමිකරුවෙකු විය යුතුය.",
        restarting: "🔄 බොට් පනස්වීමේදී...",
        error: "⚠️ බොට් නැවත පටන් ගන්නා අතරේ දෝෂයක් සිදු විය. කරුණාකර නැවත උත්සාහ කරන්න."
    }
};

cmd({
    pattern: "restart",
    alias: ["rebot", "reboot"],
    react: "🐬",
    desc: "Restart the bot",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isOwner) {
            return reply(messages[config.LANG].notOwner);
        }

        reply(messages[config.LANG].restarting);
        await sleep(1500);
        
        exec("pm2 restart all", (err, stdout, stderr) => {
            if (err) {
                console.log(err);
                return reply(messages[config.LANG].error);
            }
            console.log(stdout);
        });
    } catch (e) {
        console.log(e);
        reply(messages[config.LANG].error);
    }
});
