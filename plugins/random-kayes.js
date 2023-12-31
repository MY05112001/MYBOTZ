import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zahwazein.xyz/randomasupan/kayes?apikey=zenzkey_df78eae0044f'
	conn.sendFile(m.chat, url, null, 'Kayes', m)
}
handler.command = /^(kayes)$/i
handler.tags = ['random']
handler.help = ['kayes']
handler.premium = false
handler.limit = true
export default handler