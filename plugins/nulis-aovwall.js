/*buatan ᴍʏʙᴏᴛᴢ*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} ᴍʏʙᴏᴛᴢ`)
  let res = API('https://api.lolhuman.xyz', '/api/ephoto1/aovwall', { text: text }, 'apikey')
  conn.sendFile(m.chat, res, 'aovwall.jpg', 'Ini Dia Kak', m)
}
handler.help = ['aovwall']
handler.tags = ['maker']
handler.command = /^(aovwall)$/i
export default handler