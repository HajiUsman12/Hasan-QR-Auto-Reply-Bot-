const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', (qr) => {
    console.log('📱 Scan this QR code to login:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Bot is ready to chat like HASAN!');
});

const replies = {
    "hi": "Kya hal hy mari jaan",
    "hlo": "aur suna kya hl hy meri jaan♥️ ka",
    "h": "kya hl hy janoo❤️",
    "good morning": "*Good Morning 🌅 janoo*",
    "good night": "*Good Night..🌉*",
    "bye": "*Bye bye....*",
    "by": "by jano",
    "aslam o alykum": "> *walykum salam ❤‍🔥🤌🏻*",
    "assalamualaikum": "Walikunmusalam mari jaan",
    "owner": "*Mr Hasan 🦅*",
    "hasan": "G jano💕",
    "hassan": "G jano💕",
    "sc": "*Yeah Lain Broo Enjoy Karo🌚*",
    "repo": "*Bass Dekhnaye Aye Ho Ya Kia🙈*",
    "hello": "*G ky hl chal meri jan💕*",
    "ok": "*Ok Mere Jaan*",
    "hmm": "> *Hamm.🌚*",
    "lanat": "*Lakhhhhhhhhhh Di Lanat 🙌😂*",
    "uff": "*💋 Hyee*",
    "love": "*Lub you two² 💗😁*",
    "acha": "OK meri jan",
    "thk tou suna": "mayn bhi thek ho jano",
    "kya hal hy": "mayn thek thak ho jano",
    "kya hl hy": "mayn thek thak ho jano",
    "main bhi thk": "kya chl raha hy❤️",
    "hla": "ok jan"
};

client.on('message', msg => {
    const text = msg.body.toLowerCase();
    if (replies[text]) {
        msg.reply(replies[text]);
    }
});