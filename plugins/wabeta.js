const {
  cmd,
  commands
} = require('../command');
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");

cmd({
  'pattern': "wabeta",
  'alias': ["wabetainfo", "betawa"],
  'react': '✔️',
  'category': "search",
  'use': ".wabeta"
}, async (conn, message, chat, {
  from, 
  l, 
  quoted, 
  body, 
  isCmd, 
  command, 
  args, 
  q, 
  isGroup, 
  sender, 
  senderNumber, 
  botNumber2, 
  botNumber, 
  pushname, 
  isMe, 
  isOwner, 
  groupMetadata, 
  groupName, 
  participants, 
  groupAdmins, 
  isBotAdmins, 
  isAdmins, 
  reply
}) => {
  try {
    const response = await fetchJson("https://vihangayt.me/details/wabetainfo");
    const data = response.data;

    let messageText = `*🥏 Title :* ${data.title}\n*📅 Date :* ${data.date}\n*🖥️ Platform :* ${data.platform}\n*🔗 URL :* ${data.url}\n*🗞️ Short Desc :*\n${data.shortdesc}\n\n*ℹ️ FAQ*\n\n`;

    data.faq.forEach((faq, index) => {
      messageText += `*❓ Question :* ${faq.question}\n*👨🏻‍💻 Answer :* ${faq.answer}\n\n`;
    });

    messageText += `*📰 Full Desc :*\n${data.fulldesc}`;

    return await conn.sendMessage(from, {
      'image': {
        'url': data.image
      },
      'caption': messageText
    }, {
      'quoted': quoted
    });
  } catch (error) {
    console.log(error);
    reply('' + error);
  }
});
