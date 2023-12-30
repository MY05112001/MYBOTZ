import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
'⋘ 𝑃𝑙𝑒𝑎𝑠𝑒 𝑤𝑎𝑖𝑡...  𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑑𝑎𝑡𝑎... ⋙',
'▒▒▒▒▒▒▒▒▒▒ 0%',
'█▒▒▒▒▒▒▒▒▒ 10%',
'███▒▒▒▒▒▒▒ 30%',
'█████▒▒▒▒▒ 50%',
'███████▒▒▒ 70%',
'█████████▒ 90%',
'██████████ 100%',
'Ｓｕｃｃｅｓｓ...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
ubah menu di bawah!!!
`;
 conn.sendMessage(m.chat, {
      video: { url: "https://telegra.ph/file/c5e857ca966638ef714bc.mp4"},
      gifPlayback: true,
      caption: 'ᴍʏʙᴏᴛᴢ adalah bot WhatsApp yang cerdas dan sangat berguna untuk membantu Anda dalam menjawab pertanyaan dan memberikan solusi yang tepat dalam waktu yang singkat. Dengan kemampuannya yang luas dalam menjawab pertanyaan dan memberikan solusi, ᴍʏʙᴏᴛᴢ dapat membantu Anda dalam berbagai hal seperti, mencari informasi tentang produk atau layanan, mengatur jadwal, dan banyak lagi. ᴍʏʙᴏᴛᴢ juga dapat memberikan jawaban yang akurat dan cepat sehingga Anda tidak perlu lagi menunggu lama untuk mendapatkan jawaban yang Anda butuhkan. Dengan ᴍʏʙᴏᴛᴢ, Anda tidak perlu khawatir tentang kualitas layanan yang diberikan karena bot ini selalu siap memberikan solusi yang terbaik bagi pengguna WhatsApp. Jadi, tunggu apa lagi? Gunakan ᴍʏʙᴏᴛᴢ  sekarang dan nikmati kemudahan serta kenyamanan dalam berinteraksi dengan bot cerdas ini di WhatsApp.
      contextInfo: {
      externalAdReply: {
      title: `© About Me`,
      body: global.author,
      thumbnailUrl: 'https://telegra.ph/file/4751537e832c77df5fff9.jpg',
      sourceUrl: `https://chat.whatsapp.com/BiWNX0Ow0Q4D4OHGQXlMDS`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
              let vn = "./vn/yowaimo.mp3"
      
	conn.sendFile(m.chat, vn, "ehee.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
}
handler.command = /^(about)$/i;

export default handler;