/*buatan ᴍʏʙᴏᴛᴢ*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} ᴍʏʙᴏᴛᴢ`)
  let res = API('https://api.zahwazein.xyz', '/ephoto/yasuologo', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'yasuologo.jpg', 'Ini Dia Kak', m)
}
handler.help = ['yasuologo']
handler.tags = ['maker']
handler.command = /^(yasuologo)$/i
export default handler