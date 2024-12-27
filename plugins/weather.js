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

const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');
cmd({
    pattern: "weather",
    desc: "🌤 Get weather information for a location",
    react: "🌤",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply("❗ Please provide a city name. Usage: .weather [city name]");
        const apiKey = '2d61a72574c11c4f36173b627f8cb177'; 
        const city = q;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(url);
        const data = response.data;
        const weather = `
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

*ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼*
`;
        return reply(weather);
    } catch (e) {
        console.log(e);
        if (e.response && e.response.status === 404) {
            return reply("🚫 City not found. Please check the spelling and try again.");
        }
        return reply("⚠️ An error occurred while fetching the weather information. Please try again later.");
    }
});
