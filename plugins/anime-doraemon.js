import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.botcahx.live/api/anime/doraemon?apikey=AXreaUg6'
		conn.sendFile(m.chat, url, null, 'Random doraemon', m)
		}
		handler.command = /^(doraemon)$/i
		handler.tags = ['anime']
		handler.help = ['doraemon']
		export default handler
