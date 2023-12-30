import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Mau Nanya Apa?`
  m.reply(wait)
  try {
    let res = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${global.lol}&q=${text}`)
    let zel = await res.json()
   m.reply(zel.data)
   } catch (e) {
   throw e
   }
}
handler.help = ['gpt','ai']
handler.tags = ['ai']
handler.command = /^(gpt|ai)$/i
handler.limit = true
export default handler