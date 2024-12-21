const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');


const messages = {
    EN: {
        noCity: '❗ Please provide a city name. Usage: .weather [city name]',
        cityNotFound: '🚫 City not found. Please check the spelling and try again.',
        error: '⚠️ An error occurred while fetching the weather information. Please try again later.',
        weatherInfo: (data) => `
🌍 *Weather Information for ${data.name}, ${data.sys.country}* 🌍
🌡️ *Temperature*: ${data.main.temp}°C
🌡️ *Feels Like*: ${data.main.feels_like}°C
🌡️ *Min Temp*: ${data.main.temp_min}°C
🌡️ *Max Temp*: ${data.main.temp_max}°C
💧 *Humidity*: ${data.main.humidity}%
☁️ *Weather*: ${data.weather[0].main}
🌫️ *Description*: ${data.weather[0].description}
💨 *Wind Speed*: ${data.wind.speed} m/s
🔽 *Pressure*: ${data.main.pressure} hPa
`
    },
    SI: {
        noCity: '❗ කරුණාකර නගරයේ නම ලබා දෙන්න. භාවිතය: .weather [නගරයේ නම]',
        cityNotFound: '🚫 නගරය හමු නොවීය. අකුරු නිවැරදිව පරීක්ෂා කර නැවත උත්සාහ කරන්න.',
        error: '⚠️ කාලගුණ තොරතුරු ලබා ගැනීමේදී දෝෂයක් සිදු විය. කරුණාකර පසුව නැවත උත්සාහ කරන්න.',
        weatherInfo: (data) => `
🌍 *${data.name}, ${data.sys.country} සඳහා කාලගුණ තොරතුරු* 🌍
🌡️ * තාපමනය*: ${data.main.temp}°C
🌡️ *දැනුම් ගැනීමේ තාපමනය*: ${data.main.feels_like}°C
🌡️ *අවම තාපමනය*: ${data.main.temp_min}°C
🌡️ *උසුලන තාපමනය*: ${data.main.temp_max}°C
💧 *ඉඳිරිය*: ${data.main.humidity}%
☁️ *කාලගුණය*: ${data.weather[0].main}
🌫️ *විස්තරය*: ${data.weather[0].description}
💨 *ගාලු මාර්ග වේගය*: ${data.wind.speed} m/s
🔽 *අධික පීඩනය*: ${data.main.pressure} hPa
`
    }
};

cmd({
    pattern: "weather",
    desc: "🌤 Get weather information for a location",
    react: "🌤",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply(messages[config.LANG].noCity); 

        const apiKey = '2d61a72574c11c4f36173b627f8cb177'; 
        const city = q;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(url);
        const data = response.data;

        
        return reply(messages[config.LANG].weatherInfo(data));
    } catch (e) {
        console.log(e);
        if (e.response && e.response.status === 404) {
            return reply(messages[config.LANG].cityNotFound); 
        }
        return reply(messages[config.LANG].error); 
    }
});
