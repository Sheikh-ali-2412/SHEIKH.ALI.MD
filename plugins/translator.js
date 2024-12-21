const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');


const messages = {
    EN: {
        provideLangText: "❗ Please provide a language code and text. Usage: .translate [language code] [text]",
        translationHeader: "🌍 *TRANSLATION* 🌍",
        originalText: "🔤 *Original*: ",
        translatedText: "🔠 *Translated*: ",
        languageLabel: "🌐 *Language*: ",
        error: "⚠️ An error occurred while translating your text. Please try again later🤕"
    },
    SI: {
        provideLangText: "❗ කරුණාකර භාෂා කේතය සහ පණිවිඩය ලබා දෙන්න. භාවිතය: .translate [භාෂා කේතය] [පණිවිඩය]",
        translationHeader: "🌍 *පරිවර්තනය* 🌍",
        originalText: "🔤 *මුල්*: ",
        translatedText: "🔠 *පරිවර්තනය*: ",
        languageLabel: "🌐 *භාෂාව*: ",
        error: "⚠️ ඔබගේ පණිවිඩය පරිවර්තනය කරමින් දෝෂයක් ඇතිවී ඇත. කරුණාකර පසුව නැවත උත්සාහ කරන්න🤕"
    }
};

cmd({
    pattern: "trt",
    alias: ["translate"],
    desc: "🌍 Translate text between languages",
    react: "⚡",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const args = q.split(' ');
        if (args.length < 2) return reply(messages[config.LANG].provideLangText);

        const targetLang = args[0];
        const textToTranslate = args.slice(1).join(' ');

        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=en|${targetLang}`;

        const response = await axios.get(url);
        const translation = response.data.responseData.translatedText;

        const translationMessage = `
${messages[config.LANG].translationHeader}

${messages[config.LANG].originalText}${textToTranslate}

${messages[config.LANG].translatedText}${translation}

${messages[config.LANG].languageLabel}${targetLang.toUpperCase()}
`;

        return reply(translationMessage);
    } catch (e) {
        console.log(e);
        return reply(messages[config.LANG].error);
    }
});
