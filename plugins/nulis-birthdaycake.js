/*buatan ᴍʏʙᴏᴛᴢ*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} ᴍʏʙᴏᴛᴢ`)
  let res = API('https://api.lolhuman.xyz', '/api/ephoto1/birthdaycake', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'birthdaycake.jpg', 'Ini Dia Kak', m)
}
handler.help = ['birthdaycake']
handler.tags = ['maker']
handler.command = /^(birthdaycake)$/i
export default handler