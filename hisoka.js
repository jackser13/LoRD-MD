/**
☘︎Recoded By Lord-official.
☘︎Github https://github.com/Lord-official
**/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, Mimetype ,generateWAMessageFromContent, proto, generateWAMessageContent, relayWAMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
//const acrcloud = require('acrcloud')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')

//quoted
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "120363040549014341@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${pushname}`,
                 "h": ` ${pushname}`,
                 'duration': '99999', 
                 'caption': `${pushname}`,
                 'jpegThumbnail': global.thumb
                        }
                       }
	                  }
//ftick
const lordofc = {
	key : {
                          participant : "0@s.whatsapp.net",
                          remoteJid: "status@broadcast"
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            itemCoun : 404,
                            surface : 404,
                            message: `© LoRD-MD`,
                            orderTitle: 'B',
                            thumbnail: global.thumb, 
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
//tod Link
 const teksnye =[
'https://youtu.be/IiYRFELAC0s',
'https://youtu.be/bNoFWGc1iJ0',
'https://youtu.be/DKm8Fg7dAp0',
'https://youtu.be/PagvjtVfsPk',
'https://youtu.be/CQLgEvxPs2w',
'https://youtu.be/MsLnLxxjzPE',
'https://youtu.be/YkDCqgk-QZY',
'https://youtu.be/RGihGa5eAA8',
'https://youtu.be/YkDCqgk-QZY',
'https://youtu.be/KCOdjVN-x64',
'https://youtu.be/6t_fdHhFrTg',
'https://youtu.be/xzu_ODGpCRs',
'https://youtu.be/Rz1diG58Rhs',
'https://youtu.be/umQDV0UHUsQ',
'https://youtu.be/W3m3yKpMTDg',
'https://youtu.be/jRDJv5lfiH0',
'https://youtu.be/FjdUiHW5JpQ',
'https://youtu.be/i3OgJLwB2lc',
'https://youtu.be/r1_EDhYbsHA',
'https://youtu.be/MsLnLxxjzPE',
'https://youtu.be/JWHV8lPTzPs',
'https://youtu.be/EjVcqMknvUU',
'https://youtu.be/2iCEd94TZ4o',
'https://youtu.be/S8F2L3v10mA',
'https://youtu.be/xvRWA9_18So',
'https://youtu.be/sSynIGIVjUs',
'https://youtu.be/E6NQYmO2qbA',
'https://youtu.be/usY2mQGtpyw',
'https://youtu.be/dMPnLAXAOBY',
'https://youtu.be/b0md2fEIFpg',
'https://youtu.be/e08eDavj0oI',
'https://youtu.be/IYo8iXPCmgQ',
'https://youtu.be/iuHy1fHikVo',
'https://youtu.be/TwbhA23jSsw',
]
let tod = teksnye[Math.floor(Math.random() * (teksnye.length))]

///Button Document
const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await hisoka.prepareMessage(m.chat, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
hisoka.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

// read database
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    settings: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    
	                    // Get Profile Picture User
                try {
                    ppuser = await hisoka.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
       
          //reply
 
	const reply = (teks) => {
	let thumb = global.thumb
            hisoka.sendMessage(m.chat, { text: teks, contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: tod,
    mediaType: 2,
    thumbnail: thumb
     }}
   })
        }
        const replay = (teks) => {
            hisoka.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `ʟᴏʀᴅ-ᴍᴅ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`,"body": `Follow me on instagram`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./lib/lord.jpg`),"sourceUrl": "https://instagram.com/__light__seeker__3?igshid=YmMyMTA2M2Y="}}}, { quoted: lordofc})
        }
	    
        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.users[m.sender]
            if (typeof user !== 'object') global.db.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.chats[m.chat]
            if (typeof chats !== 'object') global.db.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.settings[botNumber]
            if (typeof setting !== 'object') global.db.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	  
        // Push Message To Console && Auto Read
        if (m.message) {
            hisoka.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// write database every 1 minute
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
	// auto set bio
	if (db.settings[botNumber].autobio) {
	    let setting = global.db.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await hisoka.setStatus(`${hisoka.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 𝑨𝒏𝒕𝒊 𝑳𝒊𝒏𝒌 」\n\n𝑌𝑜𝑢 𝐻𝑎𝑣𝑒 𝐵𝑒𝑒𝑛 𝐷𝑒𝑐𝑡𝑒𝑐𝑡𝑒𝑑 𝑆𝑒𝑛𝑑𝑖𝑛𝑔 𝑎 𝐺𝑟𝑜𝑢𝑝 𝐿𝑖𝑛𝑘, 𝑆𝑜𝑟𝑟𝑦 𝑌𝑜𝑢 𝑊𝑖𝑙𝑙 𝐵𝑒 𝐾𝑖𝑐𝑘𝑒𝑑 !`)
        if (!isBotAdmins) return m.reply(`𝐸ℎℎ 𝑏𝑜𝑡 𝑖𝑠 𝑛𝑜𝑡 𝑎𝑑𝑚𝑖𝑛 T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await hisoka.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Uh sorry it didnt happen because you sent the link to this group`)
        if (isAdmins) return m.reply(`𝐸ℎℎ 𝑠𝑜𝑟𝑟𝑦 𝑦𝑜𝑢𝑟𝑒 𝑎𝑑𝑚𝑖𝑛`)
        if (isCreator) return m.reply(`𝐸ℎℎ 𝑠𝑜𝑟𝑟𝑦 𝑦𝑜𝑢𝑟𝑒 𝑚𝑦 𝑜𝑤𝑛𝑒𝑟`)
        hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
      
      
      ///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
hisoka.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
        }        
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    
//delete roof[roof.id].waktu
	    hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Has Afk${text ? ': ' + text : ''}`)
            }
            break	
        
	/* case 'sc': 
    case 'script':{
      buttons = [
                    {buttonId: `menu`, buttonText: {displayText: '𝒎𝒆𝒏𝒖️'}, type: 1},
                     {buttonId: `owner`, buttonText: {displayText: '𝒐𝒘𝒏𝒆𝒓'}, type: 1}
                ]
                let buttonMessage = {
                   image: { url: 'https://telegra.ph/file/f8065d7fc4807a619ac1b.jpg' },
                    caption: `*──「 𝐋𝐨𝐑𝐃-𝐌𝐃 」──*

❑ http://github.com/Lord-official/LoRD-MD

❑ 𝑫𝒐𝒏𝒕 𝑭𝒐𝒓𝒈𝒆𝒕 𝑻𝒐 𝑮𝒊𝒗𝒆 𝑺𝒕𝒂𝒓𝒕 🐦`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
    
        break
    */
    
    case 'sc': 
    case 'script':
    case 'git': {
                let buttons = [
                        { buttonId: 'menu', buttonText: { displayText: '𝑴𝒆𝒏𝒖' }, type: 1 },
                        { buttonId: 'owner', buttonText: { displayText: '𝑶𝒘𝒏𝒆𝒓' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `*──「 𝐋𝐨𝐑𝐃-𝐌𝐃 」──*

❑ http://github.com/Lord-official/LoRD-MD

❑ 𝑫𝒐𝒏𝒕 𝑭𝒐𝒓𝒈𝒆𝒕 𝑻𝒐 𝑮𝒊𝒗𝒆 𝑺𝒕𝒂𝒓𝒕 🐦`, hisoka.user.name, m)

             }
            
            break

                case 'tqto': case 'credits': case 'credit': case 'hehe': {
                anu = `
*𝑩𝑰𝑮 𝑻𝑯𝑨𝑵𝑲𝑺 𝑻𝑶*

𝑫𝒆𝒗𝒊𝒍: 
https://github.com/D-3-V-1-L
𝑫𝒆𝒏𝒊𝒔: 
https://github.com/Whatsden
𝑵𝒆𝒆𝒓𝒂𝒋: 
https://github.com/Neeraj-x0
𝑨𝒋𝒎𝒂𝒍: 
https://github.com/Ajmal-Achu`
                let btn = [{
                                urlButton: {
                                    displayText: '𝑮𝒊𝒕𝒉𝒖𝒃',
                                    url: 'https://github.com/Lord-official'
                                }
                            }, {
                                callButton: {
                                    displayText: '𝑶𝒘𝒏𝒆𝒓 𝑵𝒖𝒎𝒃𝒆𝒓',
                                    phoneNumber: '+919778383987'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑺𝒕𝒂𝒕𝒖𝒔 𝑩𝒐𝒕',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑶𝒘𝒏𝒆𝒓',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑺𝒄𝒓𝒊𝒑𝒕',
                                    id: 'sc'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                     }
            break
		case 'runtime':

replay(`𝑹𝒖𝒏𝒕𝒊𝒎𝒆: ${runtime(process.uptime())}`)
break 
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hisoka.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
     case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break      
            case 'leave': {
                if (!isCreator) throw mess.owner
                await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif has been successfully changed to\n\n𖣘 Packname : ${global.packname}\n𖣘 Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': case 'setpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `   〘 *👥 𝑻𝒂𝒈 𝑨𝒍𝒍* 〙
 
 *Message : ${q ? q : 'empty'}*\n\n`
                for (let mem of participants) {
                teks += `𖣘 @${mem.id.split('@')[0]}\n`
                }
                hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `🐦 *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Enter a Reason for Voting, Example: *${prefix + command} Handsome owner*`
            m.reply(`Vote started!\n\n*${prefix}upvote* - for yes\n*${prefix}devote* - for not\n*${prefix}cekvote* - to check the vote\n*${prefix}hapusvote* - to delete votes`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*𝑹𝒆𝒂𝒔𝒐𝒏:* ${vote[m.chat][0]}

┌〔 𝐔𝐏𝐕𝐎𝐓𝐄 〕
│ 
├ 𝑻𝒐𝒕𝒂𝒍: ${vote[m.chat][1].length}
│
└────

┌〔 𝐃𝐄𝐕𝐎𝐓𝐄 〕
│ 
├ 𝑻𝒐𝒕𝒂𝒍: ${vote[m.chat][2].length}
│ 
└────

*${prefix}hapusvote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            hisoka.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You ve Voted'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 𝐯𝐨𝐭𝐞 」*

*𝑹𝒆𝒂𝒔𝒐𝒏:* ${vote[m.chat][0]}

┌〔 𝐔𝐏𝐕𝐎𝐓𝐄 〕
│ 
├ 𝑻𝒐𝒕𝒂𝒍: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 𝐃𝐄𝐕𝐎𝐓𝐄 〕
│ 
├ 𝑻𝒐𝒕𝒂𝒍: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - to delete votes`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            hisoka.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You ve Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 𝒗𝒐𝒕𝒆 」*

*𝑹𝒆𝒂𝒔𝒐𝒏:* ${vote[m.chat][0]}

┌〔 𝐔𝐏𝐕𝐎𝐓𝐄 〕
│ 
├ 𝑻𝒐𝒕𝒂𝒍: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 𝐃𝐄𝐕𝐎𝐓𝐄 〕
│ 
├ 𝑻𝒐𝒕𝒂𝒍: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - to delete votes`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            hisoka.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `*「 𝒗𝒐𝒕𝒆 」*

*𝑹𝒆𝒂𝒔𝒐𝒏:* ${vote[m.chat][0]}

┌〔 𝐔𝐏𝐕𝐎𝐓𝐄 〕
│ 
├ 𝑻𝒐𝒕𝒂𝒍: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 𝐃𝐄𝐕𝐎𝐓𝐄 〕
│ 
├ 𝑻𝒐𝒕𝒂𝒍: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - to delete votes


©${hisoka.user.id}
`
hisoka.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            m.reply('Successfully Delete Vote Session In This Group')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Successfully Closing Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Successfully Opening Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: '𝑶𝑷𝑬𝑵' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: '𝑪𝑳𝑶𝑺𝑬' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Group`, hisoka.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Successfully Opened Edit Group Info`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Successfully Close Edit Group Info`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: '𝒐𝒑𝒆𝒏' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: '𝒄𝒍𝒐𝒔𝒆' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Edit Info`, hisoka.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].antilink) return m.reply(`Previously Active`)
                db.chats[m.chat].antilink = true
                m.reply(`Antilink Active !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].antilink) return m.reply(`Previously Inactive`)
                db.chats[m.chat].antilink = false
                m.reply(`Antilink Inactive !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: '𝐎𝐍' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: '𝐎𝐅𝐅' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Antilink`, hisoka.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].mute) return m.reply(`Previously Active`)
                db.chats[m.chat].mute = true
                m.reply(`${hisoka.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].mute) return m.reply(`Previously Inactive`)
                db.chats[m.chat].mute = false
                m.reply(`${hisoka.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: '𝐎𝐍' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: '𝐎𝐅𝐅' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mute Bot`, hisoka.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc':  case 'invite': case 'grouplink': {
                if (!m.isGroup) throw mess.group
                let response = await hisoka.groupInviteCode(m.chat)
                hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Enter the enable/disable values'
                if (args[0] === 'enable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'The message was not sent by bot!'
                hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await hisoka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: '𝑆𝑜𝑢𝑟𝑐𝑒 𝐶𝑜𝑑𝑒',
                                    url: 'https://github.com/Lord-official/LoRD-MD'
                                }
                            }, {
                                callButton: {
                                    displayText: '𝑂𝑤𝑛𝑒𝑟 𝑁𝑢𝑚𝑏𝑒𝑟',
                                    phoneNumber: '+919778383087'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝐵𝑜𝑡 𝑆𝑡𝑎𝑡𝑢𝑠',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑂𝑤𝑛𝑒𝑟',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑆𝑐𝑟𝑖𝑝𝑡',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hisoka.send5ButImg(i, txt, hisoka.user.name, global.thumb, btn)
                    }
                m.reply(`Successfully Sending Broadcast To ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Send Broadcast To ${anu.length} Chat\nTimes up ${anu.length * 1.5} second`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: '𝑆𝑜𝑢𝑟𝑐𝑒 𝐶𝑜𝑑𝑒',
                                    url: 'https://github.com/Lord-official/LoRD-MD '
                                }
                            }, {
                                callButton: {
                                    displayText: '𝑂𝑤𝑛𝑒𝑟 𝑁𝑢𝑚𝑏𝑒𝑟',
                                    phoneNumber: '+919778383987'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝐵𝑜𝑡 𝑆𝑡𝑎𝑡𝑢𝑠',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑂𝑤𝑛𝑒𝑟',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑆𝑐𝑟𝑖𝑝𝑡',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hisoka.send5ButImg(yoi, txt, hisoka.user.name, global.thumb, btn)
		}
		m.reply('𝐵𝑟𝑜𝑎𝑑𝑐𝑎𝑠𝑡 𝑆𝑢𝑐𝑐𝑒𝑠𝑠')
            }
            break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Reply Video/Image With Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maximum 10 seconds!')
                let media = await quoted.download()
                let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`
                }
            }
            break
            case 'emojimix': case 'emix':  {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': case 'photo':  {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': case 'audio':{
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': case 'mp3': {
            if (/document/.test(mime)) throw `Send /Reply the Video/Audio you want to use MP3 With Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${hisoka.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': case 'vn': case 'ptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': case 'gif':  {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': case 'url': case 'upload': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'nobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await hisoka.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    hisoka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ 𝑵𝒐 : ${no++}\n🎬 𝑻𝒚𝒑𝒆 : ${i.type}\n🎥 𝑽𝒊𝒅𝒆𝒐 ID : ${i.videoId}\n🍃 𝑻𝒊𝒕𝒍𝒆 : ${i.title}\n 𝑽𝒊𝒘𝒆𝒔 : ${i.views}\n💡 𝑫𝒖𝒓𝒂𝒕𝒊𝒐𝒏 : ${i.timestamp}\n📺 𝑼𝒑𝒍𝒐𝒂𝒅 𝑨𝒕 : ${i.ago}\n📜 𝑨𝒖𝒕𝒉𝒆𝒓 : ${i.author.name}\n🖇️ 𝑼𝒓𝒍 : ${i.url}\n\n─────────────────\n\n`
                }
                hisoka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'gimage': case 'img':{
        if (!text) throw `Example : ${prefix + command} kaori lizard`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: '𝑵𝒆𝒙𝒕⏭️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 IMAGE SEARCH 」-------*
🤠 *𝑸𝒖𝒆𝒓𝒚* : ${text}
🔗 *𝑴𝒆𝒅𝒊𝒂 𝑼𝒓𝒍* : ${images}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break

//Just Testing
case 'find' :{
let acrcloud = require('acrcloud')
let acr = new acrcloud({
	host: 'identify-eu-west-1.acrcloud.com',
	access_key: 'f692756eebf6326010ab8694246d80e7',
	access_secret: 'm2KQYmHdBCthmD7sOTtBExB9089TL7hiAazcUEmb'
})
	try{let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	if (/audio|video/.test(mime)) {
		let media = await q.download()
		let ext = mime.split('/')[1]
		fs.writeFileSync(`./${m.sender}.${ext}`, media)
		let res = await acr.identify(fs.readFileSync(`./${m.sender}.${ext}`))
		let { code, msg } = res.status
		if (code !== 0) throw msg
		let { title, artists, album, genres, release_date } = res.metadata.music[0]
		let txt = `
*𝑻𝒊𝒕𝒍𝒆:* ${title}
*𝑨𝒓𝒕𝒊𝒔𝒕𝒔:* ${artists !== undefined ? artists.map(v => v.name).join(', ') : ''}
*𝑨𝒍𝒃𝒖𝒎:* ${album.name || ''}
*𝑮𝒆𝒏𝒓𝒆𝒔:* ${genres !== undefined ? genres.map(v => v.name).join(', ') : ''}
*𝑹𝒆𝒍𝒆𝒂𝒔𝒆 𝑫𝒂𝒕𝒆:* ${release_date}
`.trim()
		fs.unlinkSync(`./${m.sender}.${ext}`)
		await m.reply(txt)
	} else throw 'Reply audio/video!'
}catch(e){
    m.reply(`${e}`)
  }}
       break
       case 'react':{
  if(!text) throw `Emoji?`
  if(!m.quoted) throw `reply message!`
  hisoka.relayMessage(m.chat, { reactionMessage: {
key: {
 id: m.quoted.id,
 remoteJid: m.chat,
 fromMe: true
 },
 text: text}}, { messageId: m.id })
}
         break

         case 'play':{
  if (!text) throw `Example : play2 Heatwaves`
      let yts = require("yt-search")
      let datai = [];
      let search = await yts(`${text} song`)
      
      let hdata = search.all
      for(let i=11; i<hdata.length; i++){
                   datai.push({
                    "rows": [
                    {
                    "title": `${hdata[i].title}`,
                    description: ``,
                    "rowId": `yta ${hdata[i].url}`
                  }
                ], title: `Duration ${hdata[i].timestamp} ( ${hdata[i].ago} )`})
                   }

let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Matching Songs...`,
                    description: `Select song🐦`,
                    buttonText: "Select",
                    footerText: "LoRD",
                    listType: "SINGLE_SELECT",
                    sections: datai,
          listType: 1
                }
            }), {})
            hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
                
	     case'song': {
                if (!text) throw `Example : ${prefix + command} dusk till dawn`
                let yts = require("yt-search")
                let search = await yts(`${text} song`)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: ' 🔊𝐀𝐮𝐝𝐢𝐨'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: ' 🎥𝐕𝐢𝐝𝐞𝐨'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
🎧 𝑻𝒊𝒕𝒍𝒆 : ${anu.title}
🍃 𝑰𝒅 : ${anu.videoId}
⏲️ 𝒅𝒖𝒓𝒂𝒕𝒊𝒐𝒏 : ${anu.timestamp}
👀 𝑽𝒊𝒆𝒘𝒔 : ${anu.views}
🔮 𝒖𝒑𝒍𝒐𝒂𝒅 𝒂𝒕 : ${anu.ago}
📜 𝒂𝒖𝒕𝒉𝒐𝒓 : ${anu.author.name}
📺 𝒄𝒉𝒂𝒏𝒏𝒆𝒍 : ${anu.author.url}
🖇️ 𝒖𝒓𝒍 : ${anu.url}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': case 'yta': {
	            try {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `🎧 𝑻𝒊𝒕𝒍𝒆: ${media.title}\n📂 𝑭𝒊𝒍𝒆 𝑺𝒊𝒛𝒆: ${media.filesizeF}\n🖇️ 𝒖𝒓𝒍: ${isUrl(text)}\n🍃 𝑹𝒆𝒔𝒐𝒍𝒖𝒕𝒊𝒐𝒏: ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                } catch (e) {
                	m.reply('```' + e + '```')
                }
            }
            break
            case 'ytmp4': case 'video': case 'ytv': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🎥 𝒕𝒊𝒕𝒍𝒆 : ${media.title}\n💾 𝒇𝒊𝒍𝒆 𝒔𝒊𝒛𝒆 : ${media.filesizeF}\n🖇️ 𝒖𝒓𝒍 : ${isUrl(text)}\n🔮 𝒓𝒆𝒔𝒐𝒍𝒖𝒕𝒊𝒐𝒏 : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                hisoka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'wallpaper': {
                if (!text) throw 'Enter Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: '𝐍𝐄𝐗𝐓 𝐈𝐌𝐀𝐆𝐄'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `📜 𝚃𝙸𝚃𝙻𝙴 : ${result.title}\n🍃 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝚈 : ${result.type}\n🔮 𝙳𝙴𝚃𝙰𝙸𝙻 : ${result.source}\n🖇️ 𝙼𝙴𝙳𝙸𝙰 𝚄𝚁𝙻 : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Enter Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '𝐍𝐞𝐱𝐭 𝐈𝐦𝐚𝐠𝐞'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `📜 𝐭𝐢𝐭𝐥𝐞 : ${result.title}\n🍃 𝐬𝐨𝐮𝐫𝐜𝐞 : ${result.source}\n🖇️ 𝐦𝐞𝐝𝐢𝐚 𝐮𝐫𝐥 : ${result.image}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break

	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Enter a Link Query!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '𝐖𝐈𝐓𝐇 𝐖𝐀𝐓𝐄𝐑𝐌𝐀𝐑𝐊'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '𝐀𝐔𝐃𝐈𝐎'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: '𝒑𝒓𝒆𝒔𝒔 𝒕𝒉𝒆 𝒃𝒖𝒕𝒕𝒐𝒏 𝒃𝒆𝒍𝒐𝒘',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Enter Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '𝐍𝐎 𝐖𝐀𝐓𝐄𝐑𝐌𝐀𝐑𝐊'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '𝐀𝐔𝐃𝐈𝐎'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: '𝒑𝒓𝒆𝒔𝒔 𝒕𝒉𝒆 𝒃𝒖𝒕𝒕𝒐𝒏 𝒃𝒆𝒍𝒐𝒘',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'Enter Query Url!'
                replay(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) hisoka.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    hisoka.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Enter Query Links!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `📺 𝐓𝐢𝐭𝐥𝐞 : ${anu.result.title}`}, { quoted: m })
            }
            break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Reply to the audio you want to change with caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `To Command What?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `No hashes`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message You Want To Save In Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
   
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' not listed in the message list`
                hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		m.reply(`Successfully removed '${text}' from message list`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Feature Cannot Be Used For Groups!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: '𝐒𝐓𝐀𝐑𝐓' }, type: 1 }
                ]
                hisoka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nClick Button Below to find a partner\`\`\``, hisoka.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Feature Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '𝐒𝐓𝐀𝐑𝐓' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`You are not in an anonymous session, press the button to find a partner \`\`\``)
                    throw false
                }
                m.reply('𝑶𝒌')
                let other = room.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Feature Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '𝐒𝐓𝐎𝐏' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`You Are Still In An Anonymous Session, Press The Button Below To Stop Your Anonymous Session\`\`\``, hisoka.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '𝐒𝐊𝐈𝐏' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '𝐒𝐓𝐎𝐏' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '𝐒𝐓𝐎𝐏' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Feature Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '𝐒𝐓𝐀𝐑𝐓' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`You are not in an anonymous session, press the button to find a partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '𝐒𝐊𝐈𝐏' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '𝐒𝐓𝐎𝐏' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Successfully Find Partner, now you can send messages\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '𝐒𝐓𝐎𝐏' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Wait Looking For Partners \`\`\``, hisoka.user.name, m)
                }
                break
            }
            
            case 'ping': case 'botstatus': case 'statusbot': {
            reply('Testing speed...')
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
case 'menulist':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `𝑯𝒊 ${pushname} \n𝑻𝒉𝒊𝒔 𝑰𝒔 𝒎𝒆𝒏𝒖`,
                    description: `🐦`,
                    buttonText: "Menu",
                    footerText: "LoRD-MD",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Group Features",
								"rows": [
									{
										"title": "𝑮𝒓𝒐𝒖𝒑 𝑴𝒆𝒏𝒖",
										"description": "",
										"rowId": `groupmenu`
									},
									{
										"title": "𝑪𝒐𝒏𝒗𝒆𝒓𝒕 𝑴𝒆𝒏𝒖",
										"description": "",
										"rowId": `convertmenu`
									},
									{
										"title": "𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅 𝑴𝒆𝒏𝒖",
										"description": "",
										"rowId": `downloadmenu`
									},
									{
										"title": "𝑺𝒆𝒂𝒓𝒄𝒉 𝑴𝒆𝒏𝒖",
										"description": "",
										"rowId": `searchmenu`
									},
										{
											"title": "𝑴𝒂𝒊𝒏 𝑴𝒆𝒏𝒖",
										"description": "",
										"rowId": `mainmenu`
										},
										{
											"title": "𝑫𝒂𝒕𝒂𝑩𝒂𝒔𝒆 𝑴𝒆𝒏𝒖",
										"description": "",
										"rowId": `databasemenu`
										},
										{
											"title": "𝑨𝒏𝒐𝒏𝒚𝒎𝒐𝒖𝒔 𝑴𝒆𝒏𝒖",
										"description": "",
										"rowId": `anonymousmenu`
										},
										{
										"title": "𝑽𝒐𝒊𝒄𝒆 𝑴𝒆𝒏𝒖",
										"description": "",
										"rowId": `voicemenu`
										},
										{
											"title": "𝑶𝒘𝒏𝒆𝒓 𝑴𝒆𝒏𝒖",
										"description": "",
										"rowId": `ownermenu`
										},
										{
											"title": "𝑺𝒐𝒖𝒓𝒄𝒆 𝑪𝒐𝒅𝒆",
										"description": "ʟᴏʀᴅ-ᴍᴅ 𝑔𝑖𝑡",
										"rowId": `sc`
										}
								]
							}
						],
          listType: 1
                }
            }), {})
            hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            const lordser = fs.readFileSync('./src/lord.mp3') //u can change the music in src folder
           hisoka.sendMessage(m.chat, { audio: lordser, mimetype: 'audio/mp4', ptt: true, quoted: fvid })
            }
            break
case 'allmenu': {
  	anu = `
      𝐀𝐋𝐋 𝐌𝐄𝐍𝐔
  
  *𝑮𝑹𝑶𝑼𝑷 𝑴𝑬𝑵𝑼*
𑁍 ${prefix}𝑙𝑖𝑛𝑘𝑔𝑟𝑜𝑢𝑝
𑁍 ${prefix}𝑠𝑒𝑡𝑝𝑝𝑔𝑐[𝒊𝒎𝒂𝒈𝒆]
𑁍 ${prefix}𝑠𝑒𝑡𝑛𝑎𝑚𝑒 [𝒕𝒆𝒙𝒕]
𑁍 ${prefix}𝑠𝑒𝑡𝑑𝑒𝑠𝑐 [𝒕𝒆𝒙𝒕]
𑁍 ${prefix}𝑔𝑟𝑜𝑝 [𝒐𝒑𝒕𝒊𝒐𝒏]
𑁍 ${prefix}𝑒𝑑𝑖𝑡𝑖𝑛𝑓𝑜 [𝒐𝒑𝒕𝒊𝒐𝒏]
𑁍 ${prefix}𝑎𝑑𝑑 @𝒖𝒔𝒆𝒓
𑁍 ${prefix}𝑘𝑖𝑐𝑘 @𝒖𝒔𝒆𝒓
𑁍 ${prefix}ℎ𝑖𝑑𝑒𝑡𝑎𝑔 [𝒕𝒆𝒙𝒕]
𑁍 ${prefix}𝑡𝑎𝑔𝑎𝑙𝑙 [𝒕𝒆𝒙𝒕]
𑁍 ${prefix}𝑎𝑛𝑡𝑖𝑙𝑖𝑛𝑘 [𝒐𝒏/𝒐𝒇𝒇]
𑁍 ${prefix}𝑚𝑢𝑡𝑒 [𝒐𝒏/𝒐𝒇𝒇]
𑁍 ${prefix}𝑝𝑟𝑜𝑚𝑜𝑡𝑒 @𝒖𝒔𝒆𝒓
𑁍 ${prefix}𝑑𝑒𝑚𝑜𝑡𝑒 @𝒖𝒔𝒆𝒓
𑁍 ${prefix}𝑣𝑜𝑡𝑒 [𝒕𝒆𝒙𝒕]
𑁍 ${prefix}𝑑𝑒𝑣𝑜𝑡𝑒
𑁍 ${prefix}𝑢𝑝𝑣𝑜𝑡𝑒
𑁍 ${prefix}𝑐𝑒𝑘𝑣𝑜𝑡𝑒

     *𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫𝑬𝑹*    
𑁍 ${prefix}𝑝𝑙𝑎𝑦 [𝒒𝒖𝒆𝒓𝒚]
𑁍 ${prefix}𝑡𝑖𝑘𝑡𝑜𝑘𝑛𝑜𝑤𝑚 [𝒖𝒓𝒍]
𑁍 ${prefix}𝑡𝑖𝑘𝑡𝑜𝑘𝑤𝑚 [𝒖𝒓𝒍]
𑁍 ${prefix}𝑡𝑖𝑘𝑡𝑜𝑘𝑚𝑝3 [𝒖𝒓𝒍]
𑁍 ${prefix}𝑖𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚 [𝒖𝒓𝒍]
𑁍 ${prefix}𝑓𝑎𝑐𝑒𝑏𝑜𝑜𝑘 [𝒖𝒓𝒍]
𑁍 ${prefix}𝑦𝑡𝑚𝑝3 [𝒖𝒓𝒍]
𑁍 ${prefix}𝑦𝑡𝑚𝑝4 [𝒖𝒓𝒍]
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
     *𝑺𝑬𝑨𝑹𝑪𝑯 𝑴𝑬𝑵𝑼*
𑁍 ${prefix}𝑦𝑡𝑠 [𝒒𝒖𝒆𝒓𝒚]
𑁍 ${prefix}𝑔𝑜𝑜𝑔𝑙𝑒 [𝒒𝒖𝒆𝒓𝒚]
𑁍 ${prefix}𝑔𝑖𝑚𝑎𝑔𝑒 [𝒒𝒖𝒆𝒓𝒚]
𑁍 ${prefix}𝑤𝑎𝑙𝑙𝑝𝑎𝑝𝑒𝑟 [𝒒𝒖𝒆𝒓𝒚]
𑁍 ${prefix}𝑤𝑖𝑘𝑖𝑚𝑒𝑑𝑖𝑎 [𝒒𝒖𝒆𝒓𝒚]
𑁍 ${prefix}𝑦𝑡𝑠𝑒𝑎𝑟??ℎ [𝒒𝒖𝒆𝒓𝒚]
𑁍 ${prefix}𝑟𝑖𝑛𝑔𝑡𝑜𝑛𝑒 [𝒒𝒖𝒆𝒓𝒚]

      *𝑪𝑶𝑵𝑽𝑬𝑹𝑻 𝑴𝑬𝑵𝑼*
𑁍 ${prefix}𝑡𝑜𝑖𝑚𝑎𝑔𝑒
𑁍 ${prefix}𝑟𝑒𝑚𝑜𝑣𝑒𝑏𝑔
𑁍 ${prefix}𝑠𝑡𝑖𝑐𝑘𝑒𝑟
𑁍 ${prefix}𝑒𝑚𝑜𝑗𝑖𝑚𝑖𝑥
𑁍 ${prefix}𝑡𝑜𝑣𝑖𝑑𝑒𝑜
𑁍 ${prefix}𝑡𝑜𝑔𝑖𝑓
𑁍 ${prefix}𝑡𝑜𝑢𝑟𝑙
𑁍 ${prefix}𝑡𝑜𝑣𝑛
𑁍 ${prefix}𝑡𝑜𝑚𝑝3
𑁍 ${prefix}𝑡𝑜𝑎𝑢𝑑𝑖𝑜
𑁍 ${prefix}𝑠𝑡𝑦𝑙𝑒𝑡𝑒𝑥𝑡

     *𝑴𝑨𝑰𝑵 𝑴𝑬𝑵𝑼*
𑁍 ${prefix}𝑝𝑖𝑛𝑔
𑁍 ${prefix}𝑜𝑤𝑛𝑒𝑟
𑁍 ${prefix}𝑚𝑒𝑛𝑢 / ${prefix}ℎ𝑒𝑙𝑝 / ${prefix}?
𑁍 ${prefix}𝑑𝑒𝑙𝑒𝑡𝑒
𑁍 ${prefix}𝑖𝑛𝑓𝑜𝑐ℎ𝑎𝑡
𑁍 ${prefix}𝑙𝑖𝑠𝑡𝑔𝑐
𑁍 ${prefix}𝑙𝑖𝑠𝑡𝑜𝑛𝑙𝑖𝑛𝑒

     *𝑫𝑨𝑻𝑨𝑩𝑨𝑺𝑬 𝑴𝑬𝑵𝑼*
𑁍 ${prefix}𝑠𝑒𝑡𝑐𝑚𝑑
𑁍 ${prefix}𝑙𝑖𝑠𝑡𝑐𝑚𝑑
𑁍 ${prefix}𝑑𝑒𝑙𝑐𝑚𝑑
𑁍 ${prefix}𝑎𝑑𝑑𝑚𝑠𝑔
𑁍 ${prefix}𝑙𝑖𝑠𝑡𝑚𝑠𝑔
𑁍 ${prefix}𝑔𝑒𝑡𝑚𝑠𝑔
𑁍 ${prefix}𝑑𝑒𝑙𝑚𝑠𝑔

     *𝑨𝑵𝑶𝑵𝒀𝑴𝑶𝑼𝑺 𝑵𝑬𝑵𝑼*
𑁍 ${prefix}𝑎𝑛𝑜𝑛𝑦𝑚𝑜𝑢𝑠
𑁍 ${prefix}𝑠𝑡𝑎𝑟𝑡
𑁍 ${prefix}𝑛𝑒𝑥𝑡
𑁍 ${prefix}𝑘𝑒𝑙𝑢𝑎𝑟
𑁍 ${prefix}𝑠𝑒𝑛𝑑𝑘𝑜𝑛𝑡𝑎𝑘

     *𝑽𝑶𝑰𝑪𝑬 𝑪𝑯𝑨𝑵𝑮𝑬𝑹*
𑁍 ${prefix}𝑏𝑎𝑠𝑠
𑁍 ${prefix}𝑏𝑙𝑜𝑤𝑛
𑁍 ${prefix}𝑑𝑒𝑒𝑝
𑁍 ${prefix}𝑒𝑎𝑟𝑟𝑎𝑝𝑒
𑁍 ${prefix}𝑓𝑎𝑠𝑡
𑁍 ${prefix}𝑓𝑎𝑡
𑁍 ${prefix}𝑛𝑖𝑔ℎ𝑡𝑐𝑜𝑟𝑒
𑁍 ${prefix}𝑟𝑒𝑣𝑒𝑟𝑠𝑒
𑁍 ${prefix}𝑟𝑜𝑏𝑜𝑡
𑁍 ${prefix}𝑠𝑙𝑜𝑤
𑁍 ${prefix}𝑡𝑢𝑝𝑎𝑖

     *𝑶𝑾𝑵𝑬𝑹 𝑴𝑬𝑵𝑼*
𑁍 ${prefix}𝑐ℎ𝑎𝑡 [𝒐𝒑𝒕𝒊𝒐𝒏]
𑁍 ${prefix}𝑗𝑜𝑖𝑛 [𝒍𝒊𝒏𝒌]
𑁍 ${prefix}𝑙𝑒𝑎𝑣𝑒
𑁍 ${prefix}𝑏𝑙𝑜𝑐𝑘 @𝒖𝒔𝒆𝒓
𑁍 ${prefix}𝑢𝑛𝑏𝑙𝑜𝑐𝑘 @𝒖𝒔𝒆𝒓
𑁍 ${prefix}𝑏𝑐𝑔𝑟𝑜𝑢𝑝 [𝒕𝒆𝒙𝒕]
𑁍 ${prefix}𝑠𝑒𝑡𝑏𝑜𝑡𝑝𝑝 [𝒊𝒎𝒂𝒈𝒆]
𑁍 ${prefix}𝑠𝑒𝑡𝑒𝑥𝑖𝑓`
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                          //  locationMessage: {
                       //     jpegThumbnail: fs.readFileSync('./lib/lord.jpg')},
                            hydratedFooterText: `LoRD-MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑',
                                    url: 'https://wa.me/919778383987'
                                }
                            }, {
                                urlButton: {
                                    displayText: '𝒊𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎',
                                    url: 'https://instagram.com/__light__seeker__3?igshid=YmMyMTA2M2Y='
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

            case 'owner': case 'creator': {
                hisoka.sendContact(m.chat, global.owner, lordofc)
                
            }
            break

          case 'menu': case 'help': case '?': {
                anu = `
      𝐋𝐨𝐑𝐃-𝐌𝐃
 
✘ 𝑽𝒆𝒓𝒔𝒊𝒐𝒏: 0.0.1

✘ 𝑳𝒊𝒃𝒓𝒂𝒓𝒚: Baileys-MD

✘ 𝑴𝒐𝒅𝒆: Public

✘ 𝑹𝒖𝒏𝒕𝒊𝒎𝒆: ${runtime(process.uptime())}
`


                let btn = [{
                                urlButton: {
                                    displayText: '𝑮𝒊𝒕𝒉𝒖𝒃',
                                    url: 'https://github.com/Lord-official'
                                }
                            }, {
                                urlButton: {
                                    displayText: '𝑰𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎',
                                    url: 'https://instagram.com/__light__seeker__3?igshid=YmMyMTA2M2Y='
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑳𝒊𝒔𝒕 𝑴𝒆𝒏𝒖',
                                    id: 'menulist'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑨𝒍𝒍 𝒎𝒆𝒏𝒖',
                                    id: 'allmenu'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑪𝒓𝒆𝒅𝒊𝒕𝒔',
                                    id: 'hehe'
                                }
                            }]
          
                      hisoka.send5ButImg(m.chat, anu, global.watermark, global.thumb, btn)
                
                       
                     }
            break
case 'groupmenu': {
	            anu = `
  *𝑮𝑹𝑶𝑼𝑷 𝑴𝑬𝑵𝑼*
𑁍 ${prefix}𝑙𝑖𝑛𝑘𝑔𝑟𝑜𝑢𝑝
𑁍 ${prefix}𝑠𝑒𝑡𝑝𝑝𝑔𝑐[𝒊𝒎𝒂𝒈𝒆]
𑁍 ${prefix}𝑠𝑒𝑡𝑛𝑎𝑚𝑒 [𝒕𝒆𝒙𝒕]
𑁍 ${prefix}𝑠𝑒𝑡𝑑𝑒𝑠𝑐 [𝒕𝒆𝒙𝒕]
𑁍 ${prefix}𝑔𝑟𝑜𝑝 [𝒐𝒑𝒕𝒊𝒐𝒏]
𑁍 ${prefix}𝑒𝑑𝑖𝑡𝑖𝑛𝑓𝑜 [𝒐𝒑𝒕𝒊𝒐𝒏]
𑁍 ${prefix}𝑎𝑑𝑑 @𝒖𝒔𝒆𝒓
𑁍 ${prefix}𝑘𝑖𝑐𝑘 @𝒖𝒔𝒆𝒓
𑁍 ${prefix}ℎ𝑖𝑑𝑒𝑡𝑎𝑔 [𝒕𝒆𝒙𝒕]
𑁍 ${prefix}𝑡𝑎𝑔𝑎𝑙𝑙 [𝒕𝒆𝒙𝒕]
𑁍 ${prefix}𝑎𝑛𝑡𝑖𝑙𝑖𝑛𝑘 [𝒐𝒏/𝒐𝒇𝒇]
𑁍 ${prefix}𝑚𝑢𝑡𝑒 [𝒐𝒏/𝒐𝒇𝒇]
𑁍 ${prefix}𝑝𝑟𝑜𝑚𝑜𝑡𝑒 @𝒖𝒔𝒆𝒓
𑁍 ${prefix}𝑑𝑒𝑚𝑜𝑡𝑒 @𝒖𝒔𝒆𝒓
𑁍 ${prefix}𝑣𝑜𝑡𝑒 [𝒕𝒆𝒙𝒕]
𑁍 ${prefix}𝑑𝑒𝑣𝑜𝑡𝑒
𑁍 ${prefix}𝑢𝑝𝑣𝑜𝑡𝑒
𑁍 ${prefix}𝑐𝑒𝑘𝑣𝑜𝑡𝑒
  `
  reply(anu)
  }
  break
  
case 'downloadmenu': {
	okemenu = `
*𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫𝑬𝑹*    
𑁍 ${prefix}𝑝𝑙𝑎𝑦 [𝒒𝒖𝒆𝒓𝒚]
𑁍 ${prefix}𝑡𝑖𝑘𝑡𝑜𝑘𝑛𝑜𝑤𝑚 [𝒖𝒓𝒍]
𑁍 ${prefix}𝑡𝑖𝑘𝑡𝑜𝑘𝑤𝑚 [𝒖𝒓𝒍]
𑁍 ${prefix}𝑡𝑖𝑘𝑡𝑜𝑘𝑚𝑝3 [𝒖𝒓𝒍]
𑁍 ${prefix}𝑖𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚 [𝒖𝒓𝒍]
𑁍 ${prefix}𝑓𝑎𝑐𝑒𝑏𝑜𝑜𝑘 [𝒖𝒓𝒍]
𑁍 ${prefix}𝑦𝑡𝑚𝑝3 [𝒖𝒓𝒍]
𑁍 ${prefix}𝑦𝑡𝑚𝑝4 [𝒖𝒓𝒍]
  `
  reply(okemenu)
   }
            break 
            case 'searchmenu': {
            	anu = `
*𝑺𝑬𝑨𝑹𝑪𝑯 𝑴𝑬𝑵𝑼*
𑁍 ${prefix}𝑦𝑡𝑠 [𝒒𝒖𝒆𝒓𝒚]
𑁍 ${prefix}𝑔𝑜𝑜𝑔𝑙𝑒 [𝒒𝒖𝒆𝒓𝒚]
𑁍 ${prefix}𝑔𝑖𝑚𝑎𝑔𝑒 [𝒒𝒖𝒆𝒓𝒚]
𑁍 ${prefix}𝑤𝑎𝑙𝑙𝑝𝑎𝑝𝑒𝑟 [𝒒𝒖𝒆𝒓𝒚]
𑁍 ${prefix}𝑤𝑖𝑘𝑖𝑚𝑒𝑑𝑖𝑎 [𝒒𝒖𝒆𝒓𝒚]
𑁍 ${prefix}𝑦𝑡𝑠𝑒𝑎𝑟??ℎ [𝒒𝒖𝒆𝒓𝒚]
𑁍 ${prefix}𝑟𝑖𝑛𝑔𝑡𝑜𝑛𝑒 [𝒒𝒖𝒆𝒓𝒚]
  `
  reply(anu)
            }
break
case 'convertmenu': {
	anu = `
*𝑪𝑶𝑵𝑽𝑬𝑹𝑻 𝑴𝑬𝑵𝑼*
𑁍 ${prefix}𝑡𝑜𝑖𝑚𝑎𝑔𝑒
𑁍 ${prefix}𝑟𝑒𝑚𝑜𝑣𝑒𝑏𝑔
𑁍 ${prefix}𝑠𝑡𝑖𝑐𝑘𝑒𝑟
𑁍 ${prefix}𝑒𝑚𝑜𝑗𝑖𝑚𝑖𝑥
𑁍 ${prefix}𝑡𝑜𝑣𝑖𝑑𝑒𝑜
𑁍 ${prefix}𝑡𝑜𝑔𝑖𝑓
𑁍 ${prefix}𝑡𝑜𝑢𝑟𝑙
𑁍 ${prefix}𝑡𝑜𝑣𝑛
𑁍 ${prefix}𝑡𝑜𝑚𝑝3
𑁍 ${prefix}𝑡𝑜𝑎𝑢𝑑𝑖𝑜
𑁍 ${prefix}𝑠𝑡𝑦𝑙𝑒𝑡𝑒𝑥𝑡
  `
  reply(anu)
            }
break
case 'mainmenu': {
	anu = `
*𝑴𝑨𝑰𝑵 𝑴𝑬𝑵𝑼*
𑁍 ${prefix}𝑝𝑖𝑛𝑔
𑁍 ${prefix}𝑜𝑤𝑛𝑒𝑟
𑁍 ${prefix}𝑚𝑒𝑛𝑢 / ${prefix}ℎ𝑒𝑙𝑝 / ${prefix}?
𑁍 ${prefix}𝑑𝑒𝑙𝑒𝑡𝑒
𑁍 ${prefix}𝑖𝑛𝑓𝑜𝑐ℎ𝑎𝑡
𑁍 ${prefix}𝑙𝑖𝑠𝑡𝑔𝑐
𑁍 ${prefix}𝑙𝑖𝑠𝑡𝑜𝑛𝑙𝑖𝑛𝑒
  `
  reply(anu)
            }
break
case 'databasemenu': {
	anu = `
 *𝑫𝑨𝑻𝑨𝑩𝑨𝑺𝑬 𝑴𝑬𝑵𝑼*
𑁍 ${prefix}𝑠𝑒𝑡𝑐𝑚𝑑
𑁍 ${prefix}𝑙𝑖𝑠𝑡𝑐𝑚𝑑
𑁍 ${prefix}𝑑𝑒𝑙𝑐𝑚𝑑
𑁍 ${prefix}𝑎𝑑𝑑𝑚𝑠𝑔
𑁍 ${prefix}𝑙𝑖𝑠𝑡𝑚𝑠𝑔
𑁍 ${prefix}𝑔𝑒𝑡𝑚𝑠𝑔
𑁍 ${prefix}𝑑𝑒𝑙𝑚𝑠𝑔
`
reply(anu)
            }
break
case 'anonymousmenu': {
	anu = `
*𝑨𝑵𝑶𝑵𝒀𝑴𝑶𝑼𝑺 𝑵𝑬𝑵𝑼*
𑁍 ${prefix}𝑎𝑛𝑜𝑛𝑦𝑚𝑜𝑢𝑠
𑁍 ${prefix}𝑠𝑡𝑎𝑟𝑡
𑁍 ${prefix}𝑛𝑒𝑥𝑡
𑁍 ${prefix}𝑘𝑒𝑙𝑢𝑎𝑟
𑁍 ${prefix}𝑠𝑒𝑛𝑑𝑘𝑜𝑛𝑡𝑎𝑘`
reply(anu)
            }
break
case 'voicemenu': {
	anu = `
*𝑽𝑶𝑰𝑪𝑬 𝑪𝑯𝑨𝑵𝑮𝑬𝑹*
𑁍 ${prefix}𝑏𝑎𝑠𝑠
𑁍 ${prefix}𝑏𝑙𝑜𝑤𝑛
𑁍 ${prefix}𝑑𝑒𝑒𝑝
𑁍 ${prefix}𝑒𝑎𝑟𝑟𝑎𝑝𝑒
𑁍 ${prefix}𝑓𝑎𝑠𝑡
𑁍 ${prefix}𝑓𝑎𝑡
𑁍 ${prefix}𝑛𝑖𝑔ℎ𝑡𝑐𝑜𝑟𝑒
𑁍 ${prefix}𝑟𝑒𝑣𝑒𝑟𝑠𝑒
𑁍 ${prefix}𝑟𝑜𝑏𝑜𝑡
𑁍 ${prefix}𝑠𝑙𝑜𝑤
𑁍 ${prefix}𝑡𝑢𝑝𝑎𝑖`
  reply(anu)
            }
break
case 'ownermenu': {
	anu = `
 *𝑶𝑾𝑵𝑬𝑹 𝑴𝑬𝑵𝑼*
𑁍 ${prefix}𝑐ℎ𝑎𝑡 [𝒐𝒑𝒕𝒊𝒐𝒏]
𑁍 ${prefix}𝑗𝑜𝑖𝑛 [𝒍𝒊𝒏𝒌]
𑁍 ${prefix}𝑙𝑒𝑎𝑣𝑒
𑁍 ${prefix}𝑏𝑙𝑜𝑐𝑘 @𝒖𝒔𝒆𝒓
𑁍 ${prefix}𝑢𝑛𝑏𝑙𝑜𝑐𝑘 @𝒖𝒔𝒆𝒓
𑁍 ${prefix}𝑏𝑐𝑔𝑟𝑜𝑢𝑝 [𝒕𝒆𝒙𝒕]
𑁍 ${prefix}𝑠𝑒𝑡𝑏𝑜𝑡𝑝𝑝 [𝒊𝒎𝒂𝒈𝒆]
𑁍 ${prefix}𝑠𝑒𝑡𝑒𝑥𝑖𝑓
  `
  reply(anu)
            }
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
