/*buatan ᴍʏʙᴏᴛᴢ*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} ᴍʏʙᴏᴛᴢ`)
  let res = API('https://api.lolhuman.xyz', '/api/ephoto1/avatarlolnew', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'avatarlolnew.jpg', 'Ini Dia Kak', m)
}
handler.help = ['avatarlolnew']
handler.tags = ['maker']
handler.command = /^(avatarlolnew)$/i
export default handler