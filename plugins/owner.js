const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

> *MY OWNER INFO* 

*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ᴍᴀꜱᴛᴇʀ ʀᴏᴄᴋʏ*
*⚡ɴᴜᴍʙᴇʀ* -: 94704104383
*⚡ʏᴏᴜᴛᴜʙᴇ -:*https://www.youtube.com/@OTM_Rocky
*⚡ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:* https://whatsapp.com/channel/0029VammC2VD38CZ8OMdux3f

*©ᴹᵃᵈᵉ ᵇʸ ᵐᵃˢᵗᵉʳ ʳᵒᶜᵏʸ*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/cbf3858a08efefa2d1d47.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
