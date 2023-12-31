import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zahwazein.xyz/randomimage/patrick?apikey=zenzkey_df78eae0044f'
	conn.sendFile(m.chat, url, null, 'Random Patrick', m)
}
handler.command = /^(randompatrick)$/i
handler.tags = ['random']
handler.help = ['randompatrick']
handler.premium = false
handler.limit = true
export default handler