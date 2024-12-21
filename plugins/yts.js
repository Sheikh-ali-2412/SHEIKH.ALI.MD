const config = require('../config')
const l = console.log
const { cmd, commands } = require('../command')
const dl = require('@bochilteam/scraper')  
const ytdl = require('yt-search');
const fs = require('fs-extra')
var videotime = 60000 
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')


const messages = {
    EN: {
        noQuery: 'Please give me words to search',
        error: 'Error !!',
        searchResult: (video) => `*🖲️${video.title}*\n🔗 ${video.url}\n\n`
    },
    SI: {
        noQuery: 'කරුණාකර සෙවීම සඳහා පද ලබා දෙන්න',
        error: 'දෝෂයක් !!',
        searchResult: (video) => `*🖲️${video.title}*\n🔗 ${video.url}\n\n`
    }
};


cmd({
    pattern: "yts",
    alias: ["ytsearch"],
    use: '.yts sameer kutti',
    react: "🔎",
    desc: "Search and get details from YouTube.",
    category: "search",
    filename: __filename
}, async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
        if (!q) return reply(messages[config.LANG].noQuery); 

        try {
            let yts = require("yt-search");
            var arama = await yts(q);
        } catch(e) {
            l(e)
            return await conn.sendMessage(from, { text: messages[config.LANG].error }, { quoted: mek });
        }
        
        var mesaj = '';
        arama.all.map((video) => {
            mesaj += messages[config.LANG].searchResult(video); 
        });

        await conn.sendMessage(from, { text: mesaj }, { quoted: mek });
    } catch (e) {
        l(e)
        reply(messages[config.LANG].error); 
    }
});
