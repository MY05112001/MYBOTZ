/*buatan ᴍʏʙᴏᴛᴢ*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} ᴍʏʙᴏᴛᴢ`)
  let res = API('https://api.zahwazein.xyz', '/ephoto/cake', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'cake.jpg', 'Ini Dia Kak', m)
}
handler.help = ['cake']
handler.tags = ['maker']
handler.command = /^(cake)$/i
export default handler