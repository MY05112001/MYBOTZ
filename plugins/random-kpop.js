import fetch from 'node-fetch';
const handler = async (m, {conn, args, usedPrefix}) => {
  if (args.length == 0) return conn.reply(m.chat, `Usar ${usedPrefix}kpop\nPor favor escribe: ${usedPrefix}kpop [buscar]\nEjemplo:: ${usedPrefix}kpop bts\n\nBusquedas disponibles:\nblackpink, exo, bts`, m);
  if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {
    fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')
        .then((res) => res.text())
        .then((body) => {
          const randomkpop = body.split('\n');
          const randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)];
          conn.sendFile(m.chat, randomkpopx, '', 'Dasar Kpopers', m);
        })
        .catch(() => {
          conn.reply(m.chat, 'Terjadi Kesalahan, Coba Lagi, Jika Kesalahan Berlanjut, Beri Tahu Pembuat Saya', m);
        });
  } else {
    conn.reply(m.chat, `Maaf, pencarian tidak tersedia. ${usedPrefix}Kpop Untuk Melihat Daftar Pencarian Yang Tersedia`, m);
  }
};
handler.help = ['kpop'].map((v) => v + ' <query>');
handler.tags = ['random'];
handler.command = /^(kpop)$/i;
export default handler;
