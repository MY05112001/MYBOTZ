/*buatan ᴍʏʙᴏᴛᴢ*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} ᴍʏʙᴏᴛᴢ`)
  let res = API('https://api.zahwazein.xyz', '/ephoto/aov', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'aov.jpg', 'Ini Dia Kak', m)
}
handler.help = ['aov']
handler.tags = ['maker']
handler.command = /^(aov)$/i
export default handler