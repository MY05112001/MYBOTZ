/*buatan ᴍʏʙᴏᴛᴢ*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} ᴍʏʙᴏᴛᴢ`)
  let res = API('https://api.lolhuman.xyz', '/api/ephoto1/avatardota', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'avatardota.jpg', 'Ini Dia Kak', m)
}
handler.help = ['avatardota']
handler.tags = ['maker']
handler.command = /^(avatardota)$/i
export default handler