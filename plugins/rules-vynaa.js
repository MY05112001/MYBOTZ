import fetch from 'node-fetch'
let handler = async (m) => {
let teks = `乂 *Rules MYBOTZ:*

❃ 1. Dilarang Melakukan Spam Kepada Bot, Jika Ketahuan Akan Di Banned

❃ 2. Jika Bot Tidak Menjawab 1x, Silahkan Di Coba Lagi, Tapi Jika Bot Tidak Menjawab 2x Itu Artinya Delay, Jangan Di Pakai Dulu

❃ 3. Jika Limit Habis Silahkan Bermain Game, Untuk Mendapatkan Exp
Contoh Game:
Tebak Tebakan
Rpg Game
Dll

❃ 4. Dilarang Mengirim Virtex/Bug Ke Bot, Walau Gaada Efek :v

❃ 5. Dilarang Keras Menelpon Bot, Jika Menelpon Akan Otomatis Di Block

❃ 6. Jika Tidak Mengerti Cara Menggunakan Bot, Silahkan Bertanya Pada Member Lain, Atau Jika Tidak Join Group Bot Silahkan Ketik #gcbot Dan Masuk Group Bot

❃ 7. Jika Ada Fitur Error/Tidak Mengerti Cara Menggunakannya Silahkan Laporkan/Tanyakan Kepada Owner

❃ 8. Jika Bot Delay Jangan Di Spam Terlebih Dahulu

❃ 9. Kalo Bot Error Berarti Bot Lagi Di Perbaiki Atau Panel Lagi Bermasalah
`
	
  conn.reply(m.chat, teks, m, {
    contextInfo: {
        externalAdReply : {
            showAdAttribution: true,
            mediaType: 1,
            title: 'R U L E S',
            thumbnail: await (await fetch(elainajpg.getRandom())).buffer(),
            renderLargerThumbnail: true,
            mediaUrl: hwaifu.getRandom(),
            sourceId: 'Biar Fotonya Ga Satu',
            sourceUrl: link.gc
        }
    }})
}
handler.help = ['rules']
handler.tags = ['main']
handler.command = /^(rules)$/i

export default handler