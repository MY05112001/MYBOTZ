/*buatan ᴍʏʙᴏᴛᴢ*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} ᴍʏʙᴏᴛᴢ`)
  let res = API('https://api.zahwazein.xyz', '/ephoto/typography2', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'typography2.jpg', 'Ini Dia Kak', m)
}
handler.help = ['typography2']
handler.tags = ['maker']
handler.command = /^(typography2)$/i
export default handler