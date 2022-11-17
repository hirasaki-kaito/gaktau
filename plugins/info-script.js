let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let imgr = flaaa.getRandom()
let text = `*SYARAT & KETENTUAN*
    

📮 S&K
1. Buy bg mumer kok pm owner aja😅
2. Jangan lupa follow instagram
3. Jangan salah gunakan script ini
• Jika ada eror di sc hub https://wa.me/6281553838607

--------Thanks to ✨---------
Allah SWT
My parents
All Friends
All Contributors
All Creator Bot
Adiwajshing
Nurutomo
BochilGaming`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Script di sini', url: 'https://wa.me/6281553838607'}},
]
let tm = {
text: text,
footer: global.bottime,
templateButtons: templateButtons,
image: `${imgr + 'Script'}`,
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc'] 
 handler.tags = ['info'] 
 handler.command = /^(s(ourcode|c))$/i 
  
 export default handler
