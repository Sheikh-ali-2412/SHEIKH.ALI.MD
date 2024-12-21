const { cmd, commands } = require('../command');
const { exec } = require('child_process');
const config = require('../config');
const { sleep } = require('../lib/functions');

const messages = {
    EN: {
        notOwner: "❌ You are not the owner!",
        shuttingDown: "🛑 Shutting down...",
        broadcastPrompt: "📢 Please provide a message to broadcast.",
        broadcastSuccess: "📢 Message broadcasted to all groups.",
        setppPrompt: "❌ Please reply to an image.",
        setppSuccess: "🖼️ Profile picture updated successfully!",
        blockPrompt: "❌ Please reply to the user you want to block.",
        blockSuccess: "🚫 User blocked successfully.",
        unblockPrompt: "❌ Please reply to the user you want to unblock.",
        unblockSuccess: "✅ User unblocked successfully.",
        clearchatsSuccess: "🧹 All chats cleared successfully!",
        clearchatsError: "❌ Error clearing chats: {error}",
        jid: "🤖 *Bot JID:* {jid}",
        gjid: "📝 *Group JIDs:*\n\n{groupJids}"
    },
    SI: {
        notOwner: "❌ ඔබ හිමිකරුවෙකු නොවේ!",
        shuttingDown: "🛑 බොට් නිවීම...",
        broadcastPrompt: "📢 කරුණාකර පණිවිඩයක් ලබා දී broadcast කරන්න.",
        broadcastSuccess: "📢 පණිවිඩය සියළුම කණ්ඩායම් වෙත පරිසීලනය කරන ලදී.",
        setppPrompt: "❌ ඡායාරූපයට පිළිතුරු දක්වන්න.",
        setppSuccess: "🖼️ ගැටයුම් පින්තූරය සාර්ථකව යාවත්කාලීන කරන ලදී!",
        blockPrompt: "❌ ඔබ අවහිර කරන කෙනාට පිළිතුරු දෙන්න.",
        blockSuccess: "🚫 පරිශීලකයා සාර්ථකව අවහිර කර ඇත.",
        unblockPrompt: "❌ ඔබ අවහිර ඉවත් කරන කෙනාට පිළිතුරු දෙන්න.",
        unblockSuccess: "✅ පරිශීලකයා සාර්ථකව අවහිර ඉවත් කර ඇත.",
        clearchatsSuccess: "🧹 සියලු චැට් මකා දමන ලදී!",
        clearchatsError: "❌ චැට් මකා දමන කාලයේ දෝෂයක්: {error}",
        jid: "🤖 *බොට් JID:* {jid}",
        gjid: "📝 *කණ්ඩායම් JID:*\n\n{groupJids}"
    }
};

cmd({
    pattern: "shutdown",
    desc: "Shutdown the bot.",
    category: "owner",
    react: "🛑",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, reply }) => {
    if (!isOwner) return reply(messages[config.LANG].notOwner);
    reply(messages[config.LANG].shuttingDown).then(() => process.exit());
});


cmd({
    pattern: "broadcast",
    desc: "Broadcast a message to all groups.",
    category: "owner",
    react: "📢",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, args, reply }) => {
    if (!isOwner) return reply(messages[config.LANG].notOwner);
    if (args.length === 0) return reply(messages[config.LANG].broadcastPrompt);
    const message = args.join(' ');
    const groups = Object.keys(await conn.groupFetchAllParticipating());
    for (const groupId of groups) {
        await conn.sendMessage(groupId, { text: message }, { quoted: mek });
    }
    reply(messages[config.LANG].broadcastSuccess);
});


cmd({
    pattern: "setpp",
    desc: "Set bot profile picture.",
    category: "owner",
    react: "🖼️",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply(messages[config.LANG].notOwner);
    if (!quoted || !quoted.message.imageMessage) return reply(messages[config.LANG].setppPrompt);
    try {
        const media = await conn.downloadMediaMessage(quoted);
        await conn.updateProfilePicture(conn.user.jid, { url: media });
        reply(messages[config.LANG].setppSuccess);
    } catch (error) {
        reply(`❌ Error updating profile picture: ${error.message}`);
    }
});


cmd({
    pattern: "block",
    desc: "Block a user.",
    category: "owner",
    react: "🚫",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply(messages[config.LANG].notOwner);
    if (!quoted) return reply(messages[config.LANG].blockPrompt);
    const user = quoted.sender;
    try {
        await conn.updateBlockStatus(user, 'block');
        reply(messages[config.LANG].blockSuccess);
    } catch (error) {
        reply(`❌ Error blocking user: ${error.message}`);
    }
});


cmd({
    pattern: "unblock",
    desc: "Unblock a user.",
    category: "owner",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply(messages[config.LANG].notOwner);
    if (!quoted) return reply(messages[config.LANG].unblockPrompt);
    const user = quoted.sender;
    try {
        await conn.updateBlockStatus(user, 'unblock');
        reply(messages[config.LANG].unblockSuccess);
    } catch (error) {
        reply(`❌ Error unblocking user: ${error.message}`);
    }
});


cmd({
    pattern: "clearchats",
    desc: "Clear all chats from the bot.",
    category: "owner",
    react: "🧹",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, reply }) => {
    if (!isOwner) return reply(messages[config.LANG].notOwner);
    try {
        const chats = conn.chats.all();
        for (const chat of chats) {
            await conn.modifyChat(chat.jid, 'delete');
        }
        reply(messages[config.LANG].clearchatsSuccess);
    } catch (error) {
        reply(messages[config.LANG].clearchatsError.replace('{error}', error.message));
    }
});


cmd({
    pattern: "jid",
    desc: "Get the bot's JID.",
    category: "owner",
    react: "🤖",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, reply }) => {
    if (!isOwner) return reply(messages[config.LANG].notOwner);
    reply(messages[config.LANG].jid.replace('{jid}', conn.user.jid));
});


cmd({
    pattern: "gjid",
    desc: "Get the list of JIDs for all groups the bot is part of.",
    category: "owner",
    react: "📝",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, reply }) => {
    if (!isOwner) return reply(messages[config.LANG].notOwner);
    const groups = await conn.groupFetchAllParticipating();
    const groupJids = Object.keys(groups).join('\n');
    reply(messages[config.LANG].gjid.replace('{groupJids}', groupJids));
});
