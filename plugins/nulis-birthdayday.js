/*buatan ᴍʏʙᴏᴛᴢ*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} ᴍʏʙᴏᴛᴢ`)
  let res = API('https://api.lolhuman.xyz', '/api/ephoto1/birthdayday', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'birthdayday.jpg', 'Ini Dia Kak', m)
}
handler.help = ['birthdayday']
handler.tags = ['maker']
handler.command = /^(birthdayday)$/i
export default handler