/*buatan ᴍʏʙᴏᴛᴢ*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} ᴍʏʙᴏᴛᴢ`)
  let res = API('https://api.zahwazein.xyz', '/ephoto/blueneon', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'blueneon.jpg', 'Ini Dia Kak', m)
}
handler.help = ['blueneon']
handler.tags = ['maker']
handler.command = /^(blueneon)$/i
export default handler