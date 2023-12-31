import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zahwazein.xyz/randomimage/aesthetic?apikey=zenzkey_df78eae0044f'
	conn.sendFile(m.chat, url, null, 'Random Aesthetic', m)
}
handler.command = /^(randomaesthetic)$/i
handler.tags = ['random']
handler.help = ['randomaesthetic']
handler.premium = false
handler.limit = true
export default handler
