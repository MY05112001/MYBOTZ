/*buatan ᴍʏʙᴏᴛᴢ*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} ᴍʏʙᴏᴛᴢ`)
  let res = API('https://api.lolhuman.xyz', '/api/ephoto1/anonymhacker', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'anonymhacker.jpg', 'Ini Dia Kak', m)
}
handler.help = ['anonymhacker']
handler.tags = ['maker']
handler.command = /^(anonymhacker)$/i
export default handler