import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zahwazein.xyz/randomanime/v2/chitoge?apikey=zenzkey_ab72cdd5af82'
		conn.sendFile(m.chat, url, null, 'Random chitoge', m)
		}
		handler.command = /^(chitoge)$/i
		handler.tags = ['anime']
		handler.help = ['chitoge']
		export default handler
