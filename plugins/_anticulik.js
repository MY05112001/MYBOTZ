import fs from 'fs'
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `Hai Kak, Ingin Sewa Bot?, Silahkan Di Pilih Mau Yang Mana'


❏──「 *Sewa Bot* 」
│ • *5 Hari:* 3K
│ • *1 Minggu:* 5K
│ • *2 Minggu:* 10K
│ • *3 Minggu:* 15K
│ • *1 Bulan+1 User Premium:* 20K 
│ • *Lebih Dari Sebulan?* *Chat Owner Aja*
│──「 *Khusus Premium* 」
│ • *1 Bulan* 15K
┠──「 *Pembayaran* 」
│ • *Dana:* 0896-2800-7295
❏──────────────๑


Terima Kasih Yang Sudah Sewa Bot Saya
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler
