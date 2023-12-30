import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zahwazein.xyz/randomanime/v2/boruto?apikey=zenzkey_ab72cdd5af82'
		conn.sendFile(m.chat, url, null, 'Random Boruto', m)
		}
		handler.command = /^(boruto)$/i
		handler.tags = ['anime']
		handler.help = ['boruto']
		export default handler
