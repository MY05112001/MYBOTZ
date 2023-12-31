/*buatan ᴍʏʙᴏᴛᴢ*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} ᴍʏʙᴏᴛᴢ`)
  let res = API('https://api.zahwazein.xyz', '/ephoto/typography', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'typography.jpg', 'Ini Dia Kak', m)
}
handler.help = ['typography']
handler.tags = ['maker']
handler.command = /^(typography)$/i
export default handler