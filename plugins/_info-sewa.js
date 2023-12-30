import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
 '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《████▒▒▒▒▒▒▒▒▒》30%',
 '《███████▒▒▒▒▒▒》50%',
 '《██████████▒▒▒》70%',
 '《█████████████》100%',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
❏ *_Harga Sewa_*
❃ *5 Hari:* 3K
❃ *1 Minggu:* 5K
❃ *2 Minggu:* 10K
❃ *3 Minggu:* 15K
❃ *1 Bulan+1 User Premium:* 20K 

❏ *_Fitur_*
❃ _Antilink_
❃ _Welcome_
❃ _Enable_
❃ _Store List_
❃ _Promote/Demote_
❃ _HideTag_
❃ _Dan Lain Lain_

Jika Berminat Silahkan Hubungi Owner ᴍʏʙᴏᴛᴢ
*(Ketik .owner)*
`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: ` © ᴍʏʙᴏᴛᴢ `,
      body: global.author,
      thumbnailUrl: `https://telegra.ph/file/090709e7567876151ded3.jpg`,
      sourceUrl: `https://chat.whatsapp.com/BiWNX0Ow0Q4D4OHGQXlMDS`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(sewabot|sewa|rental)$/i;

export default handler;