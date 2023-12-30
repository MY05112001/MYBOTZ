let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur / Tahun Kelahiran :* 
│ *Asal         :* 
│ *Agama    :* 
│ *Status     :*
│ *Bias :* 
|
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`
conn.reply(m.chat, krtu, m)
}
handler.customPrefix = /^(intro)$/i;
handler.command = new RegExp();

export default handler

