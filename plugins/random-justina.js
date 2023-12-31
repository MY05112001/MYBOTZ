import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zahwazein.xyz/randomasupan/justina?apikey=zenzkey_df78eae0044f'
	conn.sendFile(m.chat, url, null, 'Justina', m)
}
handler.command = /^(justina)$/i
handler.tags = ['random']
handler.help = ['justina']
handler.premium = false
handler.limit = true
export default handler