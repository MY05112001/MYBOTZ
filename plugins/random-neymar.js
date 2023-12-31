let handler = async(m, { conn }) => {
  await conn.sendFile(m.chat, pickRandom(global.neymar), 'neymar.jpeg', 'Nih Neymar Nya Kak Done Ya ✅', m)
}
handler.help = ['neymarjr']
handler.tags = ['random']
handler.command = /^(neymarjr)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.neymar = [
"https://telegra.ph/file/64ed80106a881a9390ea5.jpg",
"https://telegra.ph/file/fc8e2eeef047e134a5f3d.jpg",
"https://telegra.ph/file/84a515ee60248b878ea97.jpg",
"https://telegra.ph/file/58e8b413638d570a37db2.jpg",
"https://telegra.ph/file/370ad5bbd1378ef9a841e.jpg",
"https://telegra.ph/file/7279346c52804bc30eecc.jpg",
"https://telegra.ph/file/36855f29d64df7681a56f.jpg",
"https://telegra.ph/file/3662d377410eff2b578ab.jpg",
"https://telegra.ph/file/982864b30c885dd18d594.jpg",
"https://telegra.ph/file/af8e2a61489055c069855.jpg",
"https://telegra.ph/file/fcd8b67b07ca041ce3dc3.jpg",
"https://telegra.ph/file/4751d105749ebd5ba402d.jpg",
"https://telegra.ph/file/946c54885874cb8677e7d.jpg",
"https://telegra.ph/file/c8f3d768f1de8f9a7b1c0.jpg",
"https://telegra.ph/file/7d7cfde0144d6c7e6d2d5.jpg",
"https://telegra.ph/file/b59a1a6a14e8878d98ebc.jpg",
"https://telegra.ph/file/34aac91bd3282e31b06fc.jpg",
"https://telegra.ph/file/7ca96f7e8a91b1eda7ff8.jpg",
"https://telegra.ph/file/86ec2e0547ee7e9b95da2.jpg",
"https://telegra.ph/file/3989bfdc2d0b2f4f3fd93.jpg",
"https://telegra.ph/file/536ad7ea31a29382fd9aa.jpg",
"https://telegra.ph/file/bcd1db047ac2716ecd9f4.jpg",
"https://telegra.ph/file/7bdba40cc8ea27fa8fa03.jpg",
"https://telegra.ph/file/e9df88689ca5afac39e6f.jpg",
"https://telegra.ph/file/785da975d24973466e818.jpg",
"https://telegra.ph/file/47b83c01b44fe5ca83b32.jpg",
"https://telegra.ph/file/3d806898e5b494ae4eb3b.jpg",
"https://telegra.ph/file/41105aa50eaa0020d46e7.jpg",
"https://telegra.ph/file/6a9dfd458307fff12199d.jpg",
"https://telegra.ph/file/ee5428f759f96f2d4bd6b.jpg",
"https://telegra.ph/file/b7845d47338698e0f066e.jpg",
"https://telegra.ph/file/556a4693ebb27e6242190.jpg",
"https://telegra.ph/file/65b9c16621694bd5526ff.jpg",
"https://telegra.ph/file/d66833f42e8343044ac63.jpg",
"https://telegra.ph/file/fb1326d1be60babbeda2d.jpg",
"https://telegra.ph/file/d8a215c46c7fdb51dc46c.jpg",
"https://telegra.ph/file/d4245e607b124ef3dd7bc.jpg",
"https://telegra.ph/file/7a224b9d0f7770e56c2cd.jpg",
"https://telegra.ph/file/d300e5abd6d7f6bacd0dd.jpg",
"https://telegra.ph/file/0f8172e0c1fecebca42f3.png",
"https://telegra.ph/file/8963e9a34a6ae5353f8bd.jpg",
"https://telegra.ph/file/64dd44f58877e59ad26b7.jpg",
"https://telegra.ph/file/28a3a07d2fefbb733fd48.jpg",
"https://telegra.ph/file/681606ffdeeee7a976a71.jpg",
"https://telegra.ph/file/59746b1d30f5cc55e7ac1.jpg",
"https://telegra.ph/file/db6acb3b4689c9ec8c694.jpg",
"https://telegra.ph/file/c7c4b51cab227d7940c5e.jpg",
"https://telegra.ph/file/504c43e9c64aeb19c9c65.jpg",
"https://telegra.ph/file/2a9df7f4733e8742d4411.jpg",
"https://telegra.ph/file/4dfce5406dc648adf8f30.jpg",
"https://telegra.ph/file/182f01b486b3e7adbaed8.jpg",
"https://telegra.ph/file/182f01b486b3e7adbaed8.jpg",
"https://telegra.ph/file/4fd7acbe5b7818df46547.jpg",
"https://telegra.ph/file/dcb4d6c244af6b5f318ac.jpg",
"https://telegra.ph/file/3f482a0c53a6f1c9feaed.jpg",
"https://telegra.ph/file/bbb9742b7e1503499f0dc.jpg",
"https://telegra.ph/file/b394c9ed9a5b57c145079.jpg",
]
