const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "about",

    desc: "To get the bot informations.",

    react: "ℹ️",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*
                    
 𝐈 𝐀𝐌 ꜱᴇɴᴜ Qᴜᴇᴇɴ ʷʰᵃᵗˢᵃᵖᵖ ᵇᵒᵗ ♡
              
*ʏᴏᴜᴛᴜʙᴇ :* https://www.youtube.com/@OTM_Rocky
      
*ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ :* https://whatsapp.com/channel/0029VammC2VD38CZ8OMdux3f

*©ᴹᵃᵈᵉ ᵇʸ ᵐᵃˢᵗᵉʳ ʳᵒᶜᵏʸ*`

return await conn.sendMessage(from,{image: {url:`https://telegra.ph/file/cbf3858a08efefa2d1d47.jpg`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})




