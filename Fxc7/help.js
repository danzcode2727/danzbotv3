// menu fitur bot
const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal) => { 
	return `
	
\`\`\`My Instagram\`\`\`
${instagram}

\`\`\`Channel Yt\`\`\`
${yt}

\`\`\`GROUP OFFICIAL DANZBOT\`\`\`
https://chat.whatsapp.com/Hgg0aKOnuY1CPgg1HPRjNR


\`\`\`HARAP BACA NOTE DIBAWAH SEBELUM\`\`\`
\`\`\`MENGGUNAKAN BOT\`\`\`

╭──────「 *REGULATION ${name}* 」
┴
┣⊱  \`\`\`NAMA USER:\`\`\` *${pushname2}*
┣⊱  \`\`\`VERIVICATION:\`\`\` ✅
┣⊱  \`\`\`LIMIT:\`\`\` *${limitt} perhari*
┣⊱  \`\`\`AKTIF:\`\`\` ${kyun(uptime)}
┣⊱  \`\`\`JAM:\`\`\` *${jam} WIB*
┣⊱  \`\`\`TANGGAL:\`\`\` *${tanggal}*
┣⊱  \`\`\`VERSION:\`\`\` *6.5.0*
┣⊱  \`\`\`USER TERDAFTAR:\`\`\` *${user.length} User*
┣⊱  ❌ *SPAM*
┣⊱  ❌ *CALL & VC*
┣⊱  \`\`\`Melanggar??\`\`\` *Banned + Out Group*
┬
╰────────────────────────


╭──────「 *ABOUT ${name}* 」
┴
│➻ *${prefix}report lapor bug*
│➻ *${prefix}info*
│➻ *${prefix}donasi*
│➻ *${prefix}owner*
│➻ *${prefix}speed*
│➻ *${prefix}daftar*
│➻ *${prefix}limit*
│➻ *${prefix}totaluser*
│➻ *${prefix}blocklist*
│➻ *${prefix}banlist*
│➻ *${prefix}premiumlist*
│➻ *${prefix}bahasa*
┬
╰────────────────────────


͏͏͏͏͏͏͏͏͏͏͏͏͏͏╭──────「 *MEDIA DOWNLOADER* 」
┴
│➻ *${prefix}tiktokstalk [username]*
│➻ *${prefix}igstalk [zidan.amd27]*
│➻ *${prefix}instavid [link valid]*
│➻ *${prefix}instaimg [link valid]*
│➻ *${prefix}instastory [username]*
│➻ *${prefix}ssweb url*
│➻ *${prefix}url2img [Url]*
│➻ *${prefix}tiktok*
│➻ *${prefix}fototiktok*
│➻ *${prefix}kbbi*
│➻ *${prefix}wait*
│➻ *${prefix}trendtwit*
│➻ *${prefix}google [berita terkini]*
┬
╰────────────────────────


╭──────「 *CREATOR MENU* 」
┴
│➻ *${prefix}quotemaker [tx/wtrmk/tema]*
│➻ *${prefix}nulis [nama/kelas/text]*
│➻ *${prefix}croman [DANZBOT dan Friend]*
│➻ *${prefix}slide [DANZBOT BOT WA]*
├───────────────────
│➻ *${prefix}tp 1 - 162*
│➻ *${prefix}ep 1 - 216*
│➻ *${prefix}tahta [DANZBOT]*
│➻ *${prefix}cglass [DANZBOT]*
│➻ *${prefix}cstyle [DANZBOT]*
│➻ *${prefix}cgame [DANZBOT]*
│➻ *${prefix}clove [DANZBOT]*
│➻ *${prefix}cparty [DANZBOT]*
│➻ *${prefix}csky [DANZBOT]*
│➻ *${prefix}tts [id Haii]*
│➻ *${prefix}ttp [DANZBOT]*
│➻ *${prefix}cpaper [DANZBOT]*
├───────────────────
│➻ *${prefix}stiker*
│➻ *${prefix}gifstiker*
│➻ *${prefix}toimg*
│➻ *${prefix}img2url*
│➻ *${prefix}tomp3*
│➻ *${prefix}ocr*
┬
╰──────────────────────────


┴
│➻ *${prefix}modeanime [On/Off] _USER PREMIUM_*
│➻ *${prefix}neonime [naruto]*
│➻ *${prefix}naruto*
│➻ *${prefix}minato*
│➻ *${prefix}boruto*
│➻ *${prefix}hinata*
│➻ *${prefix}sakura*
│➻ *${prefix}sasuke*
│➻ *${prefix}toukachan*
│➻ *${prefix}rize*
│➻ *${prefix}akira*
│➻ *${prefix}itori*
│➻ *${prefix}kurumi*
│➻ *${prefix}miku*
│➻ *${prefix}anime*
│➻ *${prefix}animecry*
│➻ *${prefix}animekiss*
┬
╰───────────────────────


╭───────「 *GROUP ONLY* 」
┴
│➻ *${prefix}antilink [On/Off]*
│➻ *${prefix}welcome [On/Off]*
│➻ *${prefix}grup [buka/tutup]*
│➻ *${prefix}ownergrup*
│➻ *${prefix}setpp*
│➻ *${prefix}infogc*
│➻ *${prefix}add [628xxxxxxxxxx]*
│➻ *${prefix}kick [@mentioned]*
│➻ *${prefix}kicktime [@mentioned]*
│➻ *${prefix}promote [@mentioned]*
│➻ *${prefix}demote [@mentioned]*
│➻ *${prefix}setname*
│➻ *${prefix}setdesc*
│➻ *${prefix}linkgrup*
│➻ *${prefix}tagme*
│➻ *${prefix}hidetag*
│➻ *${prefix}tagall*
│➻ *${prefix}mentionall*
│➻ *${prefix}fitnah [@mentioned/isi/balasan]*
│➻ *${prefix}listadmin*
┬
╰────────────────────────


╭───────「 *GROUP ONLY ADMIN* 」
┴
│➻ *${prefix}nsfw [On/Off] _USER PREMIUM_*
│➻ *${prefix}nsfwloli*
│➻ *${prefix}nsfwblowjob*
│➻ *${prefix}nsfwneko*
│➻ *${prefix}nsfwtrap*
│➻ *${prefix}hentai*
│➻ *${prefix}simih [On/Off] _USER PREMIUM_*
│➻ *${prefix}bott [on/off] _USER PREMIUM_*
┬
╰────────────────────────


╭──────「 *OTHERS FUN & GAME* 」
┴
│➻ *${prefix}anjing*
│➻ *${prefix}kucing*
│➻ *${prefix}testime*
│➻ *${prefix}hilih*
│➻ *${prefix}apakah*
│➻ *${prefix}kapankah*
│➻ *${prefix}bisakah*
│➻ *${prefix}rate*
│➻ *${prefix}watak*
│➻ *${prefix}hobby*
│➻ *${prefix}infogempa*
│➻ *${prefix}infonomor*
│➻ *${prefix}quotes*
│➻ *${prefix}truth*
│➻ *${prefix}dare*
│➻ *${prefix}katabijak*
│➻ *${prefix}fakta*
│➻ *${prefix}darkjokes*
│➻ *${prefix}bucin*
│➻ *${prefix}pantun*
│➻ *${prefix}katacinta*
│➻ *${prefix}jadwaltvnow [antv]*
│➻ *${prefix}hekerbucin*
│➻ *${prefix}katailham*
┬
╰────────────────────────


╭──────「 *OTHERS FUN & GAME* 」
┴
│➻ *${prefix}jarak [Banyuwangi/Surabaya]*
│➻ *${prefix}translate [en/Apa kabar?]*
│➻ *${prefix}pasangan [Zidan/Ella]*
│➻ *${prefix}gantengcek [Zidan]*
│➻ *${prefix}cantikcek [Ella]*
│➻ *${prefix}artinama [Zidan]*
│➻ *${prefix}persengay [Alek]*
│➻ *${prefix}pbucin [Zidan]*
│➻ *${prefix}bpfont [Zidan]*
│➻ *${prefix}textstyle [DANZBOT]*
│➻ *${prefix}jadwaltv [antv]*
│➻ *${prefix}lirik [melukis senja]*
│➻ *${prefix}chord [Melukis senja]*
│➻ *${prefix}wiki [Stalin]*
│➻ *${prefix}brainly [pertanyaan]*
│➻ *${prefix}resepmasakan [rawon]*
│➻ *${prefix}map [Banyuwangi]*
│➻ *${prefix}film [Fast and Farious]*
│➻ *${prefix}pinterest gambar kucing*
│➻ *${prefix}infocuaca [Banyuwangi]*
│➻ *${prefix}jamdunia [Banyuwangi]*
│➻ *${prefix}mimpi [Ular]*
│➻ *${prefix}infoalamat [jalan Banyuwangi]*
│➻ *${prefix}playstore [WhatsApp]*
┬
╰───────────────────────────


╭──────「 *OTHERS FUN & GAME* 」
┴
│➻ *${prefix}readmore*
│➻ *${prefix}puisiimg*
│➻ *${prefix}asupan*
│➻ *${prefix}tebakgambar*
│➻ *${prefix}caklontong*
│➻ *${prefix}family100*
│➻ *${prefix}memeindo*
│➻ *${prefix}kalkulator [13*12]*
┬
╰────────────────────────


╭──────「 *OTHERS FUN & GAME* 」
┴
│➻ *${prefix}randomkpop*
┬
╰────────────────────────


╭──────「 *OTHERS FUN & GAME* 」
┴
│➻ *${prefix}jadwalsholat Banyuwangi*
│➻ *${prefix}quran*
│➻ *${prefix}quranlist*
│➻ *${prefix}quransurah 1*
┬
╰────────────────────────


╭──────「 *FIND ME SIR* 」
┴
│➻ *${prefix}becrypt [string]*
│➻ *${prefix}encode64 [string]*
│➻ *${prefix}decode64 [encrypt]*
│➻ *${prefix}encode32 [string?]*
│➻ *${prefix}decode32 [encrypt]*
│➻ *${prefix}encbinary [string]*
│➻ *${prefix}decbinary [encrypt]*
│➻ *${prefix}encoctal [string]*
│➻ *${prefix}decoctal [encrypt]*
│➻ *${prefix}hashidentifier [Encrypt Hash]*
│➻ *${prefix}dorking [dork]*
│➻ *${prefix}pastebin [teks]*
│➻ *${prefix}tinyurl [link]*
│➻ *${prefix}bitly [link]*
┬
╰────────────────────────


╭─────────「 *OWNER ONLY* 」
┴
│➻ *${prefix}addprem [mentioned]*
│➻ *${prefix}removeprem [mentioned]*
│➻ *${prefix}setmemlimit*
│➻ *${prefix}setlimit*
│➻ *${prefix}setreply*
│➻ *${prefix}setprefix*
│➻ *${prefix}setnamebot*
│➻ *${prefix}setppbot*
│➻ *${prefix}bc*
│➻ *${prefix}bcgc*
│➻ *${prefix}ban*
│➻ *${prefix}unban*
│➻ *${prefix}block*
│➻ *${prefix}unblock*
│➻ *${prefix}clearall*
│➻ *${prefix}delete*
│➻ *${prefix}clone*
│➻ *${prefix}getses*
│➻ *${prefix}leave*
┬
╰────────────────────────


╭────────「 *PREMIUM ONLY* 」
┴
│➻ *${prefix}playmp3 [menepi]*
│➻ *${prefix}fb [link video]*
│➻ *${prefix}snack [link snack video]*
│➻ *${prefix}ytmp3 [link yt]*
│➻ *${prefix}ytmp4 [link yt]*
│➻ *${prefix}joox [Monolog Pamungkas]*
│➻ *${prefix}smule [Link Video Smule]*
│➻ *${prefix}cersex*
│➻ *${prefix}indohot*
│➻ *${prefix}randombokep*
│➻ *${prefix}pornhub [stepMoms]*
│➻ *${prefix}xvideos [japan]*
│➻ *${prefix}nekopoi [oni chichi]*
│➻ *${prefix}spamcall [083xxxxxxxxx]*
│➻ *${prefix}spamgmail [contoh@gmail.com]*
┬
╰────────────────────────


╭─────「 *SUPPORT ${name}* 」
┴
│➲ *ZIDAN AHMD*
│➲ *M. JULIANSYAH*
│➲ *ELLA SALSABILA*
│➲ *Mr.XcOde7*
│➲ *MY TEAM FXC7 BOT | Farhan*
│➲ *CONTENT CREATOR BOT WHATSAPP*
┬
╰────────────────────────`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}

// info bot 
const bottt = (prefix) => {
return `
\`\`\`Untuk Sekarang Bot Hanya Bisa Digunakan Di Group.. Karena\`\`\` *KUOTA MAHAL*\n\n *Mohon Pengertiannya bebs ^_^*

Jika Bot Ini Ada Di Grup Anda Admin Grup Suruh Aktifkan Bot Dengan Cara ${prefix}bott aktif
`
}
exports.bottt = bottt
// donasi menu
const donasi = (name) => { 
	return `       
┏━━━━━━━━━━━━━━━━━━━━
┃          𝗗𝗢𝗡𝗔𝗦𝗜  
┣━━━━━━━━━━━━━━━━━━━━
┣━⊱ *DONASI KUY :))* ❉⊰━━✿
┃  
┣━⊱ *DANA*
┣⊱ 0896-8661-0207
┣━⊱ *PULSA TRI*
┣⊱ 0896-8661-0207
┣━⊱ *Shopee Pay*
┣⊱ 8930-8968-6610-207
┃
┣━━━━━━━━━━━━━━━━━━━━
┃  *BOT BY ${name}*
┗━━━━━━━━━━━━━━━━━━━━
Note:
 النَّارَ ولو بشقِّ تمرةٍ ، فمن لم يجِدْ فبكلمةٍ طيِّبةٍ\n_“jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimah thayyibah” [HR. Bukhari 6539, Muslim 1016]_
 
Kalo Sudah Donasi Silahkan Invit Di Group Kalian ^_^

Makasih:)

Untuk Kelangsungan Hidup Bot Karna Kuota Mahal:'
`
}
exports.donasi = donasi

// bahasa list
const bahasa = (prefix) => {
return `
List Bahasa Untuk Command *${prefix}tts*

  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitend = (pushname2) => {
        return`*maaf ${pushname2} limit hari ini habis*\n*limit di reset setiap jam 12:00 WIB TENGAH MALAM*`
}

const limitcount = (limitCounts) => {
        return`
Limit Kamu: ${limitCounts}
`
}

exports.limitend = limitend
exports.limitcount = limitcount