/*buatan ᴍʏʙᴏᴛᴢ*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} ᴍʏʙᴏᴛᴢ`)
  let res = API('https://api.zahwazein.xyz', '/ephoto/cloth', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'cloth.jpg', 'Ini Dia Kak', m)
}
handler.help = ['cloth']
handler.tags = ['maker']
handler.command = /^(cloth)$/i
export default handler