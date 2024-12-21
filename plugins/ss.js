const config = require('../config');
const { cmd } = require('../command');
const { getRandom } = require('../lib/functions');
const axios = require('axios');
const fs = require('fs-extra');
const {WebScreenShot,WebPdf,valid_devices} = require('@sl-code-lords/web_screenshot')

// Screenshot Function
cmd({
    pattern: 'ss',
    alias :['webss'],
    category: "search",
    desc: "Provides screenshot of given url",
    use: '<text>',
    filename: __filename,
},
async(Void, citel, text) => {
    if (!text) return citel.reply("```Uhh Please, Give me Url!```");
    const getRandom = (ext) => { 
        return `${Math.floor(Math.random() * 10000)}${ext}`; 
    };
try {
    let device = 'phone' // tablet or phone
    let full_page = false // true
    let url = text
    let randomName = getRandom(".png"); 
    var data = await WebScreenShot(url,device,full_page)
    fs.writeFileSync(`./${randomName}`,data)
 await Void.sendMessage(citel.chat ,{image : fs.readFileSync(`./${randomName}`)} , {quoted:citel} )
 return fs.unlinkSync(`./${randomName}`)
}
catch (err) { await citel.reply("```Error While Fetching Snapshot```")
return fs.unlinkSync(`./${randomName}`)}
}
)
//---------------------------------------------
cmd({
    pattern: 'sspdf',
    alias :['websspdf' , 'fullss'],
    category: "search",
    desc: "Provides screenshot of given url",
    use: '<text>',
    filename: __filename,
},
async(Void, citel, text) => {
    if (!text) return citel.reply("```Uhh Please, Give me Url!```");
    const getRandom = (ext) => { 
        return `${Math.floor(Math.random() * 10000)}${ext}`; 
    };
try {
    let device = 'phone' // tablet or phone
    let full_page = true // true
    let url = text
    let randomName = getRandom(".png"); 
    var data = await WebScreenShot(url,device,full_page)
    fs.writeFileSync(`./${randomName}`,data)
 await Void.sendMessage(citel.chat ,{image : fs.readFileSync(`./${randomName}`)} , {quoted:citel} )
 return fs.unlinkSync(`./${randomName}`)
}
catch (err) { await citel.reply("```Error While Fetching Snapshot```")
return fs.unlinkSync(`./${randomName}`)}
}
)
//------

