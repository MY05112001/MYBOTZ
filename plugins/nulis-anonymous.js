/*buatan ᴍʏʙᴏᴛᴢ*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} ᴍʏʙᴏᴛᴢ`)
  let res = API('https://api.zahwazein.xyz', '/ephoto/anonymous', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'anonymous.jpg', 'Ini Dia Kak', m)
}
handler.help = ['manonymous']
handler.tags = ['maker']
handler.command = /^(manonymous)$/i
export default handler