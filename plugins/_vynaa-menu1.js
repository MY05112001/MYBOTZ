import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
'⋘ 𝑃𝑙𝑒𝑎𝑠𝑒 𝑤𝑎𝑖𝑡...  𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑑𝑎𝑡𝑎... ⋙',
'▒▒▒▒▒▒▒▒▒▒ 0%',
'█▒▒▒▒▒▒▒▒▒ 10%',
'███▒▒▒▒▒▒▒ 30%',
'█████▒▒▒▒▒ 50%',
'███████▒▒▒ 70%',
'█████████▒ 90%',
'██████████ 100%',
'Ｓｕｃｃｅｓｓ...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
ubah menu di bawah!!!
`;
 conn.sendMessage(m.chat, {
      video: { url: "https://telegra.ph/file/c5e857ca966638ef714bc.mp4"},
      gifPlayback: true,
      caption: '*ᴍʏʙᴏᴛᴢ* ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍᴇɴᴜʜɪ ᴋᴇʙᴜᴛᴜʜᴀɴ ᴅɪɢɪᴛᴀʟ ᴀɴᴅᴀ. ᴀᴘᴀᴋᴀʜ ᴋᴀᴍᴜ ᴍᴇʀᴀꜱᴀ ʟᴇʟᴀʜ? *ᴍʏʙᴏᴛᴢ* ꜱᴇʟᴀʟᴜ ᴅɪ ꜱɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴜᴀᴛ ʜᴀʀɪ ᴀɴᴅᴀ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ. ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ᴅᴀꜰᴛᴀʀᴋᴀɴ ᴅɪʀɪ ᴀɴᴅᴀ ᴅɪ *ᴅᴀᴛᴀʙᴀꜱᴇ* ᴍʏʙᴏᴛᴢ ᴀɢᴀʀ ᴍʏʙᴏᴛᴢ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪɴɢᴀᴛ ᴀɴᴅᴀ ꜱᴇʟᴀᴍᴀ ᴍʏʙᴏᴛᴢ ᴍᴀꜱɪʜ ᴀᴋᴛɪꜰ.\n\n*L I S T - M E N U*\n*.about*\n*.ᴀʟʟᴍᴇɴᴜ*\n*.ᴍᴇɴᴜʟɪꜱᴛ* (new!)',
      contextInfo: {
      externalAdReply: {
      title: `© ᴍʏʙᴏᴛᴢ`,
      body: global.author,
      thumbnailUrl: 'https://telegra.ph/file/4751537e832c77df5fff9.jpg',
      sourceUrl: `https://chat.whatsapp.com/BiWNX0Ow0Q4D4OHGQXlMDS`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
              let vn = "./vn/yowaimo.mp3"
      
	conn.sendFile(m.chat, vn, "ehee.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
}
handler.command = /^(menu|helo|help)$/i;

export default handler;