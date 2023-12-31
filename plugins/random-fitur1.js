import fetch from 'node-fetch'
import { asmaulhusna } from '@bochilteam/scraper'

let toM = a => '@' + a.split('@')[0]
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'jadian2') {
let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    m.reply(`${toM(a)} ❤️ ${toM(b)}`, null, {
        mentions: [a, b]
    })
    }
    if (command == 'menikah') {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, KAU HARUS MENIKAH ${toM(b)}, kamu MENJADI PASANGAN YANG BAIK 💓*`, null, {
mentions: [a, b]
})
}

if (command == 'metercinta') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} terserah`
conn.reply(m.chat, `
*❤️❤️ METER CINTA ❤️❤️*
*cinta dari ${text} itu untuk kamu* *${Math.floor(Math.random() * 100)}%* *dari 100%*
*kamu harus memintanya untuk menjadi pacar kamu ?*
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid
}} : {})
}

if (command == 'bertanya') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} terserah`
m.reply(`
*⁉️ PERTANYAAN ⁉️*
 
*PERTANYAAN:* ${text}
*TANGGAPAN:* ${['Ya','Mungkin ya','Mungkin','Mungkin tidak','Tidak','Tidak mungkin'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
}



if (command == 'asmaulhusna') {
let xf = await asmaulhusna()
let { index, latin, arabic, translation_id, translation_en } = xf
let teks = `
  ${index}
  ${latin}
  ${arabic}
  ${translation_id}
  ${translation_en}
`
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m, { quoted: fakes })
            
}


if (command == 'memeindo') {
let caption = `Nihh banh ${command} nya`
let url = `https://api.lolhuman.xyz/api/meme/memeindo?apikey=6d53b431bb34f1c8ba71dce2`
await conn.sendFile(m.chat, url, '', caption, m)
}

if (command == 'randommeme') {
let caption = `Nihh banh ${command} nya`
let url = `https://api.lolhuman.xyz/api/random/meme?apikey=6d53b431bb34f1c8ba71dce2`
await conn.sendFile(m.chat, url, '', caption, m)
}

if (command == 'memedarkjoke') {
let caption = `Nihh banh ${command} nya`
let url = `https://api.lolhuman.xyz/api/meme/darkjoke?apikey=6d53b431bb34f1c8ba71dce2`
await conn.sendFile(m.chat, url, '', caption, m)
}

if (command == 'beasiswa') {
            let gas = await fetch(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=6d53b431bb34f1c8ba71dce2`)
    let json = await gas.json()
    let hasil = json.results
	let row = Object.values(hasil).map((v, index) => ({
		title: '📌 ' + v.title,
		description: '\n*Judul:* ' + v.title + '\n*Link:* ' + v.link,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'apkdown') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} com.whatsapp`

let f = await fetch(`https://api.lolhuman.xyz/api/apkdownloader?apikey=6d53b431bb34f1c8ba71dce2&package=${text}`)
let x = await f.json()
let caption = `*Apk Name:* ${x.result.apk_name}
*Version:* ${x.result.apk_version}
*Author:* ${x.result.apk_author}
`
    await conn.sendFile(m.chat, x.result.apk_icon, '', caption, m)
    await m.reply('File dikirim..')
    await conn.sendFile(m.chat, x.result.apk_link, x.result.apk_link, '', m)
}

if (command == 'ouoshort') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://google.com`

        let f = await fetch(`https://api.lolhuman.xyz/api/ouoshortlink?apikey=6d53b431bb34f1c8ba71dce2&url=${text}`)
let jsons = await f.json()
let x = jsons.result
let caption = `*Result:* ${x}`
        await conn.sendButton(m.chat, caption, author, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m, { quoted: fakes })
}

if (command == 'shortlink') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://google.com`

        let f = await fetch(`https://api.lolhuman.xyz/api/shortlink?apikey=6d53b431bb34f1c8ba71dce2&url=${text}`)
let jsons = await f.json()
let x = jsons.result
let caption = `*Result:* ${x}`
        await conn.sendButton(m.chat, caption, author, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m, { quoted: fakes })
}

if (command == 'shortlink2') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://google.com`

        let f = await fetch(`https://api.lolhuman.xyz/api/shortlink2?apikey=6d53b431bb34f1c8ba71dce2&url=${text}`)
let jsons = await f.json()
let x = jsons.result
let caption = `*Result:* ${x}`
        await conn.sendButton(m.chat, caption, author, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m, { quoted: fakes })
}

if (command == 'shortlink3') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://google.com`

        let f = await fetch(`https://api.lolhuman.xyz/api/shortlink3?apikey=6d53b431bb34f1c8ba71dce2&url=${text}`)
let jsons = await f.json()
let x = jsons.result
let caption = `*Result:* ${x}`
        await conn.sendButton(m.chat, caption, author, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m, { quoted: fakes })
}

if (command == 'shortlink4') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://google.com`

        let f = await fetch(`https://api.lolhuman.xyz/api/shortlink4?apikey=6d53b431bb34f1c8ba71dce2&url=${text}`)
let jsons = await f.json()
let x = jsons.result
let caption = `*Result:* ${x}`
        await conn.sendButton(m.chat, caption, author, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m, { quoted: fakes })
}


if (command == 'sl') {
  let res = await fetch('https://api.lolhuman.xyz/api/' + args[0] + '?apikey=' + '6d53b431bb34f1c8ba71dce2' + '&url=' + args[1])
  let json = await res.json()
  m.reply(json.result)
	}
}
handler.command = handler.help = ['jadian2', 'menikah', 'metercinta', 'bertanya', 'memeindo', 'memedarkjoke', 'apkdown']
handler.tags = ['random']

export default handler