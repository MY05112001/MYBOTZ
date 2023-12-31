/*buatan ᴍʏʙᴏᴛᴢ*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} ᴍʏʙᴏᴛᴢ`)
  let res = API('https://api.zahwazein.xyz', '/ephoto/american', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'american.jpg', 'Ini Dia Kak', m)
}
handler.help = ['american']
handler.tags = ['maker']
handler.command = /^(american)$/i
export default handler