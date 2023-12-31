/*buatan ᴍʏʙᴏᴛᴢ*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} ᴍʏʙᴏᴛᴢ`)
  let res = API('https://api.lolhuman.xyz', '/api/ephoto1/beautifulflower', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'beautifulflower.jpg', 'Ini Dia Kak', m)
}
handler.help = ['beautifulflower']
handler.tags = ['maker']
handler.command = /^(beautifulflower)$/i
export default handler