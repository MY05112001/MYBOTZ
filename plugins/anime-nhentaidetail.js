import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukan Linknya?`
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/nhentai-detail?url=${text}&apikey=jJ7GipGRIB`)
  let json = await res.json()
  conn.sendFile(m.chat, json.data.thumbnail, '', json.data.info, m)
}
handler.help = ['nhentaidetail']
handler.tags = ['anime']
handler.command = /^(nhentaidetail)$/i

export default handler