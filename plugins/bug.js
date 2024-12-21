// Required modules
const axios = require('axios');
const { cmd, commands } = require('../command');
const config = require('../config');
const { telapreta3 } = require('../my_data/telapreta3'); // Import telapreta3.js

//======================================================================================================================
// Define the "bug2" command
cmd({
    pattern: "bug2",
    desc: "Simulate a hacker-style bug progress animation for bug2.",
    react: "🕵️‍♂️",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { reply, isOwner, prefix }) => {
    try {
        // Check if the user is the bot owner
        if (!isOwner) {
            return reply("❌ You are not the owner! This command is restricted.");
        }

        // Define the progress bar stages for bug2
        const progressSteps = [
            '```[███████] 10%``` ⏳',
            '```[██████████████████] 50%``` ⏳',
            '```[████████████████████████] 100%``` ✅',
            'Bug report complete!'
        ];

        // Send each progress step with a delay
        for (const step of progressSteps) {
            await reply(step); // Reply to the user with the current step
            await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay between steps
        }

        // Use telapreta3 function from telapreta3.js
        const finalMessage = telapreta3(prefix);
        await reply(finalMessage); // Send final text after the progress bar finishes
    } catch (e) {
        console.log(e);
        // Handle any errors during execution
        return reply(`🚫 An error occurred: ${e.message}`);
    }
});
