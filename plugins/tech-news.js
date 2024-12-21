const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "tech",
    desc: "Get the latest buisness news headlines.",
    category: "search",
    react: "📰",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
const apiKey = "aea4ce0e9a2d4ae382a59dbbe6f5de4a"; 
const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`);
        const articles = response.data.articles;
        if (!articles.length) return reply("No news articles found.");

        
        for (let i = 0; i < Math.min(articles.length, 5); i++) {
            const article = articles[i];
            let message = `
➣ 📰 ${article.title}

➣ ⚠️ ${article.description}

➣ 🔗 ${article.url}

            `;

            console.log('Article URL:', article.urlToImage); 

            if (article.urlToImage) {
               
                await conn.sendMessage(from, { image: { url: article.urlToImage }, caption: message });
            } else {
              
                await conn.sendMessage(from, { text: message });
            }
        };
    } catch (e) {
        console.error("Error fetching news:", e);
        reply("Could not fetch news. Please try again later.");
    }
});
