/*buatan ᴍʏʙᴏᴛᴢ*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} ᴍʏʙᴏᴛᴢ`)
  let res = API('https://api.lolhuman.xyz', '/api/ephoto1/cartoongravity', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'cartoongravity.jpg', 'Ini Dia Kak', m)
}
handler.help = ['cartoongravity']
handler.tags = ['maker']
handler.command = /^(cartoongravity)$/i
export default handler