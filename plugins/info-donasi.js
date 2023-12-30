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

╭─「 • *ᴇ-ᴡᴀʟʟᴇᴛ* • 」
│ • *ᴅᴀɴᴀ* 0896-2800-7295
╰─────

_Terimakasih Atas Donasinya_
`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: ` © Donasi`,
      body: global.author,
      thumbnailUrl: `https://telegra.ph/file/d6cc9372c8037af3cdae8.jpg`,
      sourceUrl: `https://chat.whatsapp.com/BiWNX0Ow0Q4D4OHGQXlMDS`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(donasi)$/i;

export default handler;