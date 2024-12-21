const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { iosNews } = require('ios-news')

var tmsg =''
if(config.LANG === 'SI') tmsg = 'එය IOS news ලබා දෙයි.'
else tmsg = "It gives IOS news."


cmd({
    pattern: "hiru",
    react: "🍎",
    desc: tmsg,
    category: "search",
    use: '.ios',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const data = await fetchJson(`https://vajira-api.vercel.app/news/hiru`);
let info = `*📃 Title :* ${data.result.title}
*🕒 Time:* ${data.result.date} 
*⛓️ Link:* ${data.result.link}
*📚 Description:* ${data.result.desc}
`
return await conn.sendMessage(from, { image: { url: data.img} , caption: info } , { quoted: mek })
} catch (e) {
l(e)
}
})
