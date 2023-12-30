let badwordRegex = /anj|anjing|njing|ajg|babi|ibab|ngentot|lonte|kimak|kimax|klimak|kontol|memek|tete|tetek|peju|mani|muncrat|payudara|mr.p|puki|anjir|anjay|njir|anjir|lu|lo|gua|gue|kau|kimak|bangsat|bts anjing|bts babi|ngocok|ngewe|tolol|tlol|lesbi|lesbian|gay|homo|genjot|nenen|bot anjing|bot ajg|bot anj|perkosa|pemerkosaan/i // tambahin sendiri
export async function before(m, { isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return 
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)
    if (chat.antiBadword && isBadword && m.isGroup) {
        user.warning += 1
        m.reply(`${user.warning >= 5 ? '*📮 Warning Kamu Sudah Mencapai 5 Maka Kamu Akan Dikick!*' : '*📮 Kata Kata Toxic Terdeteksi*'}

あ Warning: ${user.warning} / 5

[❗] Jika warning mencapai 5 Kamu akan dikeluarkan dari group

“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).`)
        if (user.warning >= 5) {
            user.warning = 0
            conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
    return !0
}