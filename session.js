//  * @project_name : SHEIKH ALI MD
//  * @author : 𝐀𝐋𝐈 𝐀𝐇𝐌𝐀𝐃•••²⁴⁰⁶
//  * @youtube : https://www.youtube.com/@gamingrash2006
//  * @description : SHEIKH ALI MD, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//base by 𝐀𝐋𝐈 𝐀𝐇𝐌𝐀𝐃•••²⁴⁰⁶
//GitHub: @Sheikh-ali-2412
//WhatsApp: +923143702270
//want more free bot scripts? follow to my whatsapp channel: https://whatsapp.com/channel/0029Vao1lnR1nozDF8jBNh3B
//   * Created By Github: Sheikh-ali-2412.
//   * Credit To 𝐀𝐋𝐈 𝐀𝐇𝐌𝐀𝐃•••²⁴⁰⁶
//   * © 2024 SHEIKH ALI MD.
// ⛥┌┤
// */
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "enter you session",
};
