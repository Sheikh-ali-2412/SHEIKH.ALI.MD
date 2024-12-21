const config = require('../config');
let fs = require('fs');
const { exec } = require('child_process');
const { cmd } = require('../command');

const messages = {
    EN: {
        updateStarted: '🔄 *Update process started...*',
        updateSuccess: '*✅ Update completed successfully!*',
        updateError: (error) => `*Error during update:* ${error.message}`,
    },
    SI: {
        updateStarted: '🔄 *අප්ඩේට් ක්‍රියාවලිය ආරම්භ කරයි...*',
        updateSuccess: '*✅ යාවත්කාලීන කිරීම සාර්ථකව අවසන් විය!*',
        updateError: (error) => `*යාවත්කාලීන කිරීමේ දෝෂය:* ${error.message}`,
    }
};

cmd({
    pattern: "update",
    react: "🔄",
    desc: "Update folder from GitHub",
    category: "system",
    use: '.update',
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const repoUrl = 'https://github.com/mranuhas/ANGEL-MD.git'; 
        const targetFolder = 'plugins'; 

        if (!fs.existsSync(targetFolder)) {
            fs.mkdirSync(targetFolder); 
        }

        
        reply(messages[config.LANG].updateStarted);

        const gitCommand = fs.existsSync(`${targetFolder}/.git`)
            ? `git -C ${targetFolder} pull`
            : `git clone ${repoUrl} ${targetFolder}`;

        await new Promise((resolve, reject) => {
            exec(gitCommand, (err, stdout, stderr) => {
                if (err) {
                    reject(`Git command failed: ${stderr}`);
                } else {
                    resolve(stdout);
                }
            });
        });

     
        await conn.sendMessage(from, { text: messages[config.LANG].updateSuccess }, { quoted: mek });
    } catch (error) {
        console.error(error);
       
        reply(messages[config.LANG].updateError(error));
    }
});
