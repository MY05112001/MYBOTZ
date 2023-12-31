/*buatan ᴍʏʙᴏᴛᴢ*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} ᴍʏʙᴏᴛᴢ`)
  let res = API('https://api.zahwazein.xyz', '/ephoto/blackpink', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'blackpink.jpg', 'Ini Dia Kak', m)
}
handler.help = ['mblackpink2']
handler.tags = ['maker']
handler.command = /^(mblackpink2)$/i
export default handler