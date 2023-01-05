let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let imgr = flaaa.getRandom()
let text = `*SYARAT & KETENTUAN*
    

📮 S&K
1. Follow Dulu Instagram gw nizarrrahman.f_ dan nai_developer
2. Kirim Ss bukti Dah Follow 
3. Jangan di per jual belikan
4. Chat Owner untuk meminta sc
• Jika ada eror di sc hub https://wa.me/6281386945391

--------Thanks to ✨---------
Allah SWT
My parents
All Friends
My Team
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Script di sini', url: 'https://wa.me/6281386945391?text=Assalamualaikum+bang+minta+sc'}},
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
