//=============≠≠==========≠≠=============\\

const { 
WAConnection, 
WAMessageProto, 
MessageOptions,	
WAFlag, 
WANode,	
WAMetric,	
ChatModification, 
DisconectReason, 
MessageTypeProto, 
WALocationMessage,
ReconnectMode, 
WAContextInfo, 
proto,	
ProxyAgent,	
waChatKey, 
MimetypeMap, 
MediaPathMap, 
WAContactMessage, 
WAContactsArrayMessage, 
WAGroupInviteMessage, 
WATextMessage, 
WAMessageContent, 
WAMessage, 
BaileysError, 
WA_MESSAGE_STATUS_TYPE, 
MediaConnInfo,  
URL_REGEX, 
WAUrlInfo, 
WA_DEFAULT_EPHEMERAL, 
WAMediaUpload, 
mentionedJid, 
processTime,	
Browser, 
MessageType, 
Presence, 
WA_MESSAGE_STUB_TYPES, 
Mimetype, 
relayWAMessage,	
Browsers, 
GroupSettingChange 
} = require('@adiwajshing/baileys');
//======================================\\͞⛥

//=============NODES-MODULOS=============\\
const fs = require('fs');
const os = require('os');
const hx = require('hxz-api');
const chalk = require('chalk');
const yts = require('yt-search');
const crypto = require('crypto');
const util = require('util');
const axios = require('axios');
const encodeUrl = require('encodeurl');
const linkfy = require('linkifyjs');
const request = require('request');
const cheerio = require('cheerio');
const ffmpeg = require('fluent-ffmpeg');
const imgbb = require('imgbb-uploader');
const googleImage = require('g-i-s');
const googleIt = require('google-it');
const fetch = require('node-fetch');
const simple = require('./armor/simple.js');
const imageToBase64 = require('image-to-base64');
const thiccysapi = require('textmaker-thiccy');
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
const { exec, spawn, execSync } = require('child_process');
const moment = require('moment-timezone');
const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };
const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const jam = moment.tz('America/Sao_Paulo').format('HH:mm');
const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss');
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
//=======================================\\


//===================≠≠===================\\

const { fetchJson, fetchText, getBase64, createExif } = require('./armor/fetcher');

const { version, bugs } = require('./package.json');

const { fbDown } = require("./armor/fb.js")

const { insert, response } = require('./armor/simi.js');

const { addLimit, getLimit } = require('./armor/js/limit.js');

const { y2mateV, y2mateA, wikiSearch, jagoKata} = require('./armor/y2mate');

const { convertSticker } = require("./armor/swm.js")

const { yta, ytv, igdl, uploadImages, buffer2Stream, ytsr, baseURI, stream2Buffer, noop, cmdy} = require('./armor/ytdl');

const { mediafireDl } = require('./armor/js/mediafire.js');

const { upload, nit} = require('./armor/tourl');

const { webp2gifFile } = require("./armor/js/gif.js");

const { recognize } = require('./armor/js/ocr');

const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./armor/js/banned.js");

const { isFiltered, addFilter } = require('./armor/js/antispam.js');

const { validmove, setGame } = require('./armor/tictactoe');

 //==============≠=========≠============\\


//==========(BLOCK-DE-COMANDOS)========\\

const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos } =  require('./armor/js/addcmd.js');


//============(ANAGRAMA)==============\\

const { palavrasANA, quizanime, quizanimais} = require('./armor/jogo/jogos.js');

//======================================\\


//=========(LEVELS)-(LEVELING)===========\\
const { getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, bayarLimit, limitAdd, addATM, addKoinUser, checkATMuser, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser, confirmATM, cekafk, isAfk, runtime, addafk, getpc, supre } = require('./armor/js/consts.js');

const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./armor/js/tictactoe.js'); // JOGO DA VELHA

// JOGO DA VELHA 

const { WinnerX, WinnerO, Tie, IA, IAmove1, IAalter, priorityC } = require('./tttexp.js');

const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, banner2, banner3, start, info, success, close, temporizador, cmdadd, addMetadata, chyt} = require('./armor/functions.js');

//==============LOGOS-SEM-API==============\\

const { pSmoky, pOuro, pSemi, pFogo, pShadow, pRomantic, pSmoke, pBurnPapper, pNaruto, pLoveMsg,pMsgGrass, pDoubleHeart, pCoffeCup, pCoffe2, pLoveText, pHarryPotter, pAwolfMetal, pCup, pCaptain, pButterfly, pGlitch, pGooglesg, pNeon2, p8Bit, pMadeira, pWooden, pGold, Ttoxic} = require('./armor/js/photooxy');

//===========(JSON-FUNÇÕES)============\\

const adeuscara = JSON.parse(fs.readFileSync('./datab/grupos/adeuscara.json'));

const welcome_group = JSON.parse(fs.readFileSync('./datab/grupos/welcomegp.json'));

const bye_group = JSON.parse(fs.readFileSync('./datab/grupos/byegp.json'));

const welcome_group2 = JSON.parse(fs.readFileSync('./datab/grupos/welcomegp2.json'));

const bye_group2 = JSON.parse(fs.readFileSync('./datab/grupos/byegp2.json'));

const voting = JSON.parse(fs.readFileSync('./armor/voting.json'));

const sotoy = JSON.parse(fs.readFileSync('./armor/sotoy.json'));

const { addVote, delVote } = require('./armor/js/vote');

const { infovotacao } = require('./armor/js/infovotacao.js');

const countMessage = JSON.parse(fs.readFileSync('./datab/grupos/countmsg.json'));

const comandos = JSON.parse(fs.readFileSync('./dono/media/comandos.json'));

const vacilo = JSON.parse(fs.readFileSync('./datab/usuarios/vacilo.json'));

const modobn = JSON.parse(fs.readFileSync('./datab/grupos/brincadeiras.json'));

const nsfw = JSON.parse(fs.readFileSync('./datab/grupos/nsfw.json'));

const antiviewonce = JSON.parse(fs.readFileSync('./datab/grupos/antiviewonce.json'));

const daily = JSON.parse(fs.readFileSync('./datab/usuarios/diario.json'));

const nescessario = JSON.parse(fs.readFileSync('./dono/nescessario.json'));

const welkom = JSON.parse(fs.readFileSync('./datab/grupos/welkom.json'));

const premium = JSON.parse(fs.readFileSync('./datab/usuarios/premium.json'));

const limitst = JSON.parse(fs.readFileSync('./datab/usuarios/limitst.json'));

const limitefll = JSON.parse(fs.readFileSync('./datab/usuarios/flood.json'));

const antiflood = JSON.parse(fs.readFileSync('./datab/usuarios/antiflood.json'));

const Limitest = JSON.parse(fs.readFileSync('./datab/usuarios/limitest.json'));

const samih = JSON.parse(fs.readFileSync('./datab/usuarios/simi.json'));

const samih2 = JSON.parse(fs.readFileSync('./armor/simi.json'));

const _leveling = JSON.parse(fs.readFileSync('./datab/usuarios/leveling.json'));

const _level = JSON.parse(fs.readFileSync('./datab/usuarios/level.json'));

let bancht = JSON.parse(fs.readFileSync('./datab/grupos/banchat.json'));

const anticall = JSON.parse(fs.readFileSync('./datab/usuarios/anticall.json'));

const ban = JSON.parse(fs.readFileSync('./datab/usuarios/banned.json'));

//===========(JS-MENUS)≠===============\\

const { infocontador } = require('./armor/js/infocontador.js');

const { databoton } = require('./armor/js/databoton.js');

const { infobemvindo } = require('./armor/js/infobv.js');

const { infolistanegra } = require('./armor/js/infolistanegra.js');

const { infopalavrao } = require('./armor/js/infopalavrao.js');

const { alteradores } = require('./menus/alteradores.js');

const { infobancarac } = require('./armor/js/infobancarac.js');

const { menu } = require('./menus/menu.js');

const { menuanime } = require('./menus/menuanime.js');

const { menudono } = require('./menus/dono.js');

const { infodono } = require('./menus/infodono.js');

const { adms } = require('./menus/adms.js');

const { efeitos } = require('./menus/efeitos.js');

const { menulogos } = require('./menus/menulogos.js');

const { menuprem } = require('./menus/menuprem.js');

const { brincadeiras } = require('./menus/brincadeiras.js');

const { destrava, destrava2 } = require('./armor/destrava.js');

const { gitdobot } = require('./dono/gitdobot.js');

const { tabela } = require('./armor/js/tabela');

//=======≠======(INFOS)========≠≠========\\
const setting = JSON.parse(fs.readFileSync('./dono/settings.json'))

const logoslink = JSON.parse(fs.readFileSync('./logos/logos.json'))

const { conselhob } = require('./armor/js/conselhob.js');

const { palavras } = require('./armor/js/conselhos.js');

//===========≠(ANTIS-JSONS)≠=============\\

const antilink = JSON.parse(fs.readFileSync('./datab/ants/antilink.json'))

const antifake = JSON.parse(fs.readFileSync('./datab/ants/antifake.json'))

const antilinkhard = JSON.parse(fs.readFileSync('./datab/ants/antilinkhard.json'))

const antiimg = JSON.parse(fs.readFileSync('./datab/ants/antiimg.json'))

const antictt = JSON.parse(fs.readFileSync('./datab/ants/antictt.json'))

const antidoc = JSON.parse(fs.readFileSync('./datab/ants/antidoc.json'))

const tempodf = JSON.parse(fs.readFileSync('./datab/grupos/tempodf.json'))

const rgs = JSON.parse(fs.readFileSync('./datab/usuarios/rgs.json'))

const rgsID = JSON.parse(fs.readFileSync('./datab/usuarios/rgsID.json'))

const antiloc = JSON.parse(fs.readFileSync('./datab/ants/antiloc.json'))

const antipv = JSON.parse(fs.readFileSync('./datab/usuarios/antipv.json'))

const antivid = JSON.parse(fs.readFileSync('./datab/ants/antivideo.json'))

const antiaudio = JSON.parse(fs.readFileSync('./datab/ants/antiaudio.json'))

const palavra = JSON.parse(fs.readFileSync('./datab/grupos/palavras.json'))

const palavrão = JSON.parse(fs.readFileSync('./datab/grupos/palavrão.json'))

//=======≠===============≠==============\\


//==========(JOGO-DA-VELHA)==========\\

//_TIC-TAC-TOE By: Resen
const { ttthelp } = require('./datab/ttt/TTTconfig/ttthelp');

const { tttme } = require('./datab/ttt/TTTconfig/tttme');

var tttset = require('./datab/ttt/TTTconfig/tttset.json');

var esp = require('./datab/ttt/TTTconfig/tttframe.json');



//(NÃO APAGUE: SÃO EXPORTAÇÕES)
prefix = setting.prefix

crtt = nescessario.crtt

cdd = nescessario.cdd

logo = logoslink.logo

logo2 = logoslink.logo2

logo3 = logoslink.logo3

logo4 = logoslink.logo4

logo5 = logoslink.logo5

logo6 = logoslink.logo6

logo7 = logoslink.logo7

logo8 = logoslink.logo8

logo9 = logoslink.logo9

logo10 = logoslink.logo10

logo11 = logoslink.logo11

logo12 = logoslink.logo12

logo13 = logoslink.logo13

NomeDoBot = setting.NomeDoBot

NickDono = setting.NickDono

forwarding = nescessario.forwarding

numerodono = setting.numerodono

imgnazista = nescessario.imgnazista

imggay = nescessario.imggay

imgcorno = nescessario.imgcorno

imggostosa = nescessario.imggostosa

imggostoso = nescessario.imggostoso

imgfeio = nescessario.imgfeio

imggado = nescessario.imggado

imgvesgo = nescessario.imgvesgo

imgbebado = nescessario.imgbebado

fundo1 = nescessario.fundo1

fundo2 = nescessario.fundo2

linklogos = nescessario.linklogos

limitefl = limitefll.limitefl

banChats = nescessario.banChats

dapuhykey = setting.dapuhykey

dono2 = nescessario.dono2

dono3 = nescessario.dono3

dono4 = nescessario.dono4

dono5 = nescessario.dono5

//====================≠≠===============\\

offline = false

numbernye = '0'

blocked = [] 

hitt = []

const vcard = `BEGIN:VCARD\n`
+ `VERSION:3.0\n`
+ `FN:${NickDono}\n`
+ `TEL;type=CELL;type=VOICE;waid=${setting.numerodono}:${setting.numerodono}\n` 
+ `END:VCARD`

const vcardbot = `BEGIN:VCARD\n`
+ `VERSION:3.0\n`
+ `FN:${NomeDoBot}\n`
+ `TEL;type=CELL;type=VOICE;waid=12518682604:12518682604\n` 
+ `END:VCARD`

//=====================================\\


//===========(CONEXÃO-DO-BOT)==============\\

const starts = async (conn = new WAConnection()) => {
conn._maxListeners = 200;
conn.browserDescription = ["AKAME-OFC", "By: ALEATORY", "0.14.1"];
conn.browserDescription.push('AKAME-BOT_OFC','Baileys','Opera');
conn.autoReconnect = ReconnectMode.onconnectionLost || 2
conn.logger.level = 'warn'
console.log(banner3.string)
conn.connectOptions.maxRetries = 99999
conn.on('qr', () => {
console.log(chalk.white(""),chalk.white('Escanear o código acima para iniciar a AKAME-BOT_OFC'))
})

fs.existsSync('./BarBar.json') && conn.loadAuthInfo('./BarBar.json')

conn.on('connecting', () => {
 start('2', '♦️Conectando a AKAME_OFC ...')
})

conn.on('open', () => {
success('2', 'AKAME-BOT_OFC conectado ✓')

console.log(chalk.magenta(""), chalk.keyword("black")("[ INFO ]"), chalk.gray("WA: " + conn.user.phone.wa_version))

console.log(chalk.magenta(""), chalk.keyword("red")("[ INFO ]"), chalk.gray("OS: " + conn.user.phone.os_version))

console.log(chalk.magenta(""), chalk.keyword("black")("[ INFO ]"), chalk.gray("Aparelho: " + conn.user.phone.device_manufacturer))

console.log(chalk.magenta(""), chalk.keyword("red")("[ INFO ]"), chalk.gray("Modelo: " + conn.user.phone.device_model))

console.log(chalk.magenta(""), chalk.keyword("black")("[ INFO ]"), chalk.gray("Build: " + conn.user.phone.os_build_number))

console.log(chalk.magenta(""), chalk.keyword("red")("[ INFO ]"), chalk.gray('Boa sorte\n\n'))
}) 

await conn.connect({
timeoutMs: 30 * 1000
})

fs.writeFileSync('./BarBar.json', JSON.stringify(conn.base64EncodedAuthInfo(), null, '\t'))
conn.on('close', () => {
rc = 'A conexão caiu...'
console.log(color(rc,'red'))
})

//============(FIM-CONEXÃO)=============\\

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}


//===============(BEM VINDO)=============\\

conn.on('group-participants-update', async (anu) => {
  
const mdata = await conn.groupMetadata(anu.jid)  

const groupMetadata = await conn.groupMetadata(anu.jid)

// PEGAR DESCRIÇÃO DO GRUPO

const groupDesc = await groupMetadata.desc

// CONST DO CMD DE BANIR QUEM ESTIVER NA LISTA N

const adeuscara = JSON.parse(fs.readFileSync('./datab/grupos/adeuscara.json'))
const dbackid = []
for(i=0;i<adeuscara.length;++i) dbackid.push(adeuscara[i].groupId)
console.log(anu)
if(dbackid.indexOf(anu.jid) >= 0) {
if (anu.action == 'add'){ 
num = anu.participants[0]
var ind = dbackid.indexOf(anu.jid)
if(adeuscara[ind].actived && adeuscara[ind].number.indexOf(num.split('@')[0]) >= 0) {
await conn.sendMessage(mdata.id, '*Olha quem deu as cara por aqui, sente o poder do ban cabaço*', MessageType.text)
conn.groupRemove(mdata.id, [num])
return
}
}
}
// FIM LISTANEGRA CONST ^


// ANTIFAKE QUE ESTÁ JUNTO COM BEM VINDO 

if(antifake.includes(anu.jid)) {
if (anu.action == 'add'){
num = anu.participants[0]
if(!num.split('@')[0].startsWith(55)) {
conn.sendMessage(mdata.id, '𝐀𝐋𝐕𝚯 𝐅𝜜𝐊𝜮 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐃𝚯✘🩸️', MessageType.text)
setTimeout(async function () {
conn.groupRemove(mdata.id, [num])
}, 1000)
}
}
}
// FIM ANTIFAKE ^

// BEM VINDO COMPLETO 

if(!welkom.includes(anu.jid)) return
try {
const mdata = await conn.groupMetadata(anu.jid)
num = anu.participants[0]
ini_user = conn.contacts[num]
namaewa = ini_user.notify
member = mdata.participants.length  
try {
var ppimg = await conn.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}
try {
ppgp = await conn.getProfilePicture(anu.jid)
} catch {
ppgp = 'https://image.flaticon.com/icons/png/512/124/124034.png'
}

shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgp}`)

const groupIdWelcomed = []
const groupIdBye = []
for(let obj of welcome_group) groupIdWelcomed.push(obj.jid)
for(let obj of bye_group) groupIdBye.push(obj.jid)


const isByed = groupIdBye.indexOf(anu.jid) >= 0 ? true : false

const isWelcomed = (groupIdWelcomed.indexOf(anu.jid) >= 0) ? true : false

if(anu.action === 'add') {
if(isWelcomed) {
var ind = groupIdWelcomed.indexOf(anu.jid)
teks = welcome_group[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', '@'+anu.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.jid)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome(anu.participants[0].split('@')[0], mdata.subject)
}
let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
await fs.writeFileSync(ran, buff)

fs.unlinkSync(ran)
imgbuff = await getBuffer(`https://api-exteam.herokuapp.com/api/welcome?titulo=BEM%20VINDO(A)&nome=${anu.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=BEM VINDO AO GRUPO ${encodeUrl(mdata.subject)}`)
conn.sendMessage(mdata.id, imgbuff, MessageType.image, {
mentions: anu.participants, caption: teks})

} else if(anu.action === 'remove') {
mem = anu.participants[0]
try {
ppimg = await conn.profilePictureUrl(`${mem.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}

if(isByed) {
var ind = groupIdBye.indexOf(anu.jid)
teks = bye_group[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', mem.split('@')[0])
.replace('#numerobot#', conn.user.jid)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye(anu.participants[0].split('@')[0])
}

let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
fs.writeFileSync(ran, buff)

imgbuff = await getBuffer(`https://api-exteam.herokuapp.com/api/goodbye?titulo=ADEUS&nome=${mem.split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo2}&grupo=SAIU DE ${encodeUrl(mdata.subject)}`)
conn.sendMessage(mdata.id, imgbuff, MessageType.image, {
caption: teks, 
mentions: anu.participants})
 fs.unlinkSync(ran)

}
} catch (e) {
console.log(e);
}
})
// FIM ^


// BEM VINDO 2 ( SEM FOTO )

conn.on('group-participants-update', async (anu) => { 
const mdata = await conn.groupMetadata(anu.jid)  
const groupMetadata = await conn.groupMetadata(anu.jid)
const groupDesc = await groupMetadata.desc  
if(!vacilo.includes(anu.jid)) return
try {
const groupIdWelcomed2 = []
const groupIdBye2 = []
for(let obj of welcome_group2) groupIdWelcomed2.push(obj.jid)
for(let obj of bye_group2) groupIdBye2.push(obj.jid)

const isByed2 = groupIdBye2.indexOf(anu.jid) >= 0 ? true : false
const isWelcomed2 = (groupIdWelcomed2.indexOf(anu.jid) >= 0) ? true : false
if(anu.action === 'add') {
if(isWelcomed2) {
var ind = groupIdWelcomed2.indexOf(anu.jid)
teks = welcome_group2[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', '@'+anu.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.jid)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome(anu.participants[0].split('@')[0], mdata.subject)
}
conn.sendMessage(mdata.id, teks, MessageType.text, {mentions: anu.participants})
} else if(anu.action === 'remove') {
mem = anu.participants[0]

if(isByed2) {
var ind = groupIdBye2.indexOf(anu.jid)
teks = bye_group2[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', mem.split('@')[0])
.replace('#numerobot#', conn.user.jid)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye(anu.participants[0].split('@')[0])
}
conn.sendMessage(mdata.id, teks, MessageType.text, {mentions: anu.participants})
 fs.unlinkSync(ran)
}
} catch (e) {
console.log(e);
}
})
// FIM BEM VINDO (2)
    
//=============(BATERIA)==============\\

conn.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt (batteryLevelStr)
battre = batterylevel 
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
console.log(json[2][0][1])
console.log(color('Carga da bateria: ' + batterylevel+'%', "pink"))
})
//==================================\\  


//==========(CHAT-UPDATE)===========\\

conn.on('chat-update', async (info) => {
try {
if (!info.hasNewMessage) return
info = info.messages.all()[0]
if (!info.message) return
info.message = (Object.keys(info.message)[0] === 'ephemeralMessage') ? info.message.ephemeralMessage.message : info.message
if (info.key && info.key.remoteJid == 'status@broadcast') return
if (!info.message) return
m = simple.smsg(conn, info)

global.prefix

global.blocked

const content = JSON.stringify(info.message)
const speed = require('performance-now');
const from = info.key.remoteJid
const type = Object.keys(info.message)[0]
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, contactsArray } = MessageType


//==============(BODY)================\\
body = (type === 'conversation' && info.message.conversation.startsWith(prefix)) ? info.message.conversation : (type == 'imageMessage') && info.message[type].caption.startsWith(prefix) ? info.message[type].caption : (type == 'videoMessage') && info.message[type].caption.startsWith(prefix) ? info.message[type].caption : (type == 'extendedTextMessage') && info.message[type].text.startsWith(prefix) ? info.message[type].text : (type == 'listResponseMessage') && info.message[type].singleSelectReply.selectedRowId ? info.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && info.message[type].selectedButtonId ? info.message[type].selectedButtonId : info.message[type].selectedButtonId && ((info.message[type].fileSha256.toString('base64')) !== null && (info.message[type].fileSha256.toString('base64')) !== undefined) ? (info.message[type].fileSha256.toString('base64')) : ""

//================(BADY)================\\

bady = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId: ''

//=======================================\\



//===============(BUDY)==================\\

budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

//======================================\\

button = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedDisplayText : ''
button = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : ''
listMessage = (type == 'listResponseMessage') ? info.message.listResponseMessage.title : ''

const listmsg = (from, title, desc, list) => { 
po = conn.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Escolha aqui","footerText": "Selecione","listType": 1,"sections": list}}, {})
return conn.relayWAMessage(po, {waitForAck: true})
}
listmes = (type == 'listResponseMessage') ? info.message.listResponseMessage.title : ''

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

//===========(ID DAS FIGUS)===========\\

const figura = Object.keys(info.message)[0] == "stickerMessage" ? info.message.stickerMessage.fileSha256.toString('base64') : ""

//=====================================\\

const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		

const arg = body.substring(body.indexOf(' ') + 1)

const args = body.trim().split(/ +/).slice(1)

const argss = body.split(/ +/g)
const testat = body
const ants = body
const isCmd = body.startsWith(prefix)
const isGroup = from.endsWith('@g.us')
const tescuk = ["0@s.whatsapp.net"]
const q = args.join(' ')
const botNumber = conn.user.jid
const sender = isGroup ? info.participant : info.key.remoteJid
let senderr = info.key.fromMe ? conn.user.jid : info.key.remoteJid.endsWith('@g.us') ? info.participant : info.key.remoteJid

pushname = conn.contacts[sender] != undefined ? conn.contacts[sender].vname || conn.contacts[sender].notify : undefined

const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''

const groupName = isGroup ? groupMetadata.subject : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

//=======================================\\

const numerodono = [`${setting.numerodono}@s.whatsapp.net`, `${nescessario.dono1}@s.whatsapp.net`, `${nescessario.dono2}@s.whatsapp.net`, `${nescessario.dono3}@s.whatsapp.net`, `${nescessario.dono4}@s.whatsapp.net`, `${nescessario.dono5}@s.whatsapp.net`, `${nescessario.dono6}@s.whatsapp.net`]

//============(SORTEIO-CONST)============\\

const { infosorteio } = require('./armor/js/infosorteio.js')

//===========(enviar.espere)=============\\

const { mensagens } = require('./armor/js/aleatoria.js');

const { sortear } = require('./armor/js/aleatoria.js');
const alt = require('./armor/altr.js');

const isCmdy = cmdy.includes(sender) 

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)] 
//========================================\\

enviar = {
espere: `${enviarmen}`,
successo: '️❬ ✔ ❭ Sucesso 🖤',
levelon: '❬ ✔ ❭ *leveling* *ativado*',
leveloff: '❬ X ❭  *leveling* *desativado*',
levelnoton: '❬ X ❭ *leveling não ativado*',
levelnol: '*error* 0 °-°',
error: {
stick: '*falhou, tente novamente ^_^*',
Iv: 'Link invalido ☹️'
},
msg: {
grupo: '[❗] Este comando só pode ser usado em grupos! ❌',
premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
mod: `[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${setting.NickDono}*`,
banido: '❌ Você foi banido de utilizar os comandos, entre em contato com o proprietário pra saber o porque ❌' ,
donosmt: '[❗] Este é um recurso especial para o proprietário ❌',
donosmt2: '[❗] Este é um recurso especial para o proprietário ❌',
adm: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
}
}

//=======(ADMS/DONO/ETC..CONST)========\\

const isBot = info.key.fromMe ? true : false

const SoDono = numerodono.includes(sender) || isBot

const DonoOficial = setting.numerodono.includes(sender) 

const isPremium = premium.includes(sender)

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false || info.key.fromMe

//============(FUNÇÕES)============\\

const isVacilo = isGroup ? vacilo.includes(from) : true

const isVote = isGroup ? voting.includes(from) : false

const isModobn =  isGroup ? modobn.includes(from) : true

const isNsfw =  isGroup ? nsfw.includes(from) : true

const isSimi = isGroup ? samih.includes(from) : false

const isSimi2 = isGroup ? samih2.includes(from) : false

const isBanned = ban.includes(sender)

//===========(ANTIS-PROTEÇÕES)===========\\

const isAntifake = isGroup ? antifake.includes(from) : false

const isAntiCtt = isGroup ? antictt.includes(from) : false

const isAntiLink = isGroup ? antilink.includes(from) : false

const isAntiFlood = isGroup ? antiflood.includes(from) : false	

const isLimitst = isGroup ? Limitest.includes(from) : false	

const isnit = nit.includes(sender) 

const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false

const isAntiAudio = isGroup ? antiaudio.includes(from) : false	
	
const isAntiImg = isGroup ? antiimg.includes(from) : false

const Antidoc = isGroup ? antidoc.includes(from) : false

const Antiloc = isGroup ? antiloc.includes(from) : false

const isAntiVid = isGroup ? antivid.includes(from) : false	

const ischyt = chyt.includes(sender)

const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false	

const isAnticall = (anticall.indexOf('Ativado') >= 0) ? true : false

const isPalavrão = isGroup ? palavrão.includes(from) : false	

const isViewOnce = (type == 'viewOnceMessage')

////////////////////

const isAntiVO = isGroup ? antiviewonce.includes(from) : false

////////////////////

//=======================================\\



//=========(CONSTS-FUNÇÕES)============\\

const isWelkom = isGroup ? welkom.includes(from) : false

const issupre = supre.includes(sender)

const isBotNumero = botNumber.includes(sender)

const isLevelingOn = isGroup ? _leveling.includes(from) : false

const isBanchat = isGroup ? bancht.includes(from) : false	

const isTmp = isGroup ? tempodf.includes(from) : false	

//=====================================\\



//==========(VERIFICADO)===============\\

const selo = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": `${setting.NomeDoBot}`,"title": "hmm" }}}

//=====================================\\


//======(INTELIGENCIA-ARTIFICIAL)========\\

const simih = async (text) => {
	try {
const sami = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=pt`, {method: 'GET'})
const res = await sami.json()
return res.success
} catch {
return 
}
}
 //======================================\\


const getGroup = async function(totalchat){
let grup = []
let a = []
let b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && d.includes('g.us')){
b.push(d)
}
}
for (e of b){
let ingfo = await conn.groupMetadata(e)
grup.push(ingfo)
}
return grup
}  


const isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}	


const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00"){
var tempo = 'Boa madrugada'
                                        } 
if(time2 > "05:30:00"){
var tempo = 'Bom dia'
                                        }
if(time2 > "12:00:00"){
var tempo = 'Boa tarde'
                                        }
if(time2 > "19:00:00"){
var tempo = 'Boa noite'
                                        }

const fotothumb = {text: 'oi', sendEphemeral: true,"externalAdReply": {"title": `Olá: ${pushname}`,"body":`${NickDono} ☠︎︎𝐃𝐎𝐌𝐈𝐍𝐀☠︎︎`,"previewType": "PHOTO","thumbnailUrl": "","thumbnail": fs.readFileSync('./logos/logo2.jpg'),"sourceUrl": `oi https://api.whatsapp.com/send?phone=${setting.numerodono}&text=*opa*%20${NickDono}%20*vim*%20*pela*:${NomeDoBot}`},mentionedJid:[sender]
}

const reply = (ytb) => {
conn.sendMessage(from, ytb, text, {quoted: selo, contextInfo : fotothumb})
}

const sendSticker = (from, filename, info) => {
conn.sendMessage(from, filename, MessageType.sticker, {quoted: info})
}

const sendImage = (ytb) => {
conn.sendMessage(from, ytb, image, {quoted:info})
}


const sendMess = (hehe, ytb) => {
conn.sendMessage(hehe, ytb, text)
}


const mentions = (ytb, memberr, id) => {
(id == null || id == undefined || id == false) ? conn.sendMessage(from, ytb.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : conn.sendMessage(from, ytb.trim(), extendedText, {quoted: info, contextInfo: {"mentionedJid": memberr}})
}
	
const costum = (pesan, tipe, target, target2) => {
conn.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}


const groupIdWelcomed = []	
for(let obj of welcome_group) groupIdWelcomed.push(obj.jid)

const rgsD = []	
for(let obj of rgs) rgsD.push(obj.jid)

const groupIdBye = []
for(let obj of bye_group) groupIdBye.push(obj.jid)

const isWelcomed = (groupIdWelcomed.indexOf(from) >= 0) ? true : false

const isByed = (groupIdBye.indexOf(from) >= 0) ? true : false

const isGps = (rgsD.indexOf(from) >= 0) ? true : false	
	

const groupIdWelcomed2 = []	

for(let obj of welcome_group2) groupIdWelcomed2.push(obj.jid)

const groupIdBye2 = []

for(let obj of bye_group2) groupIdBye2.push(obj.jid)


const isWelcomed2 = (groupIdWelcomed2.indexOf(from) >= 0) ? true : false

const isByed2 = (groupIdBye2.indexOf(from) >= 0) ? true : false	
	
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
await conn.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
conn.sendMessage(from, hasil, type, options).catch(e => {
conn.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Erro ao baixar e enviar mídia_')
console.log(e)
})
})
})
})
}		
	
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
conn.sendMessage(to, media, type, { quoted: info, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}   

/********** ANTI NOME MODIFICADO **********/
function isDoubleByte(str) {
for (let i = 0, n = str.length; i < n; i++) {
if (str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}
		    
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await conn.prepareMessage(from, kma, image, {quoted:selo})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
conn.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
// BOTÃO DE ENVIAR VIDEOS 
const sendButVideo = async (
id, text1, desc1, vid1,
but = [],
options = {}
) => {
kma = vid1;
mhan = await conn.prepareMessage(from, {video: kma});
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5,
 };
conn.sendMessage(id,
buttonMessages,
MessageType.buttonsMessage,
options
);
};
// BOTÃO DE ENVIAR MENSAGEM	
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
conn.sendMessage(
id, buttonMessage,
MessageType.buttonsMessage,
options
);
};
//==============(FUNÇÃO-AFK)=============\\
if (!info.key.remoteJid.endsWith('@g.us') && offline){
if (!info.key.fromMe){
if (isAfk(info.key.remoteJid)) return
addafk(info.key.remoteJid)
heheh = ms(Date.now() - waktuafk) 
conn.sendMessage(info.key.remoteJid,`*Com licença @${setting.numerodono} Atualmente offline!*\n\n*Razão :* ${alasanafk}\n*Desde as :* ${heheh.hours} Hora, ${heheh.minutes} Minuto, ${heheh.seconds} Segundos atrás\n`, MessageType.text,{quoted: info, contextInfo:{ mentionedJid: [`${setting.numerodono}@s.whatsapp.net`]}})
 }
 } 
 
 if (info.key.remoteJid.endsWith('@g.us') && offline) {
 if (!info.key.fromMe){
 if (info.message.extendedTextMessage != undefined){
 if (info.message.extendedTextMessage.contextInfo != undefined){
 if (info.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
 for (let ment of info.message.extendedTextMessage.contextInfo.mentionedJid) {
 if (ment === `${setting.numerodono}@s.whatsapp.net`){
 if (isAfk(info.key.remoteJid)) return
 addafk(info.key.remoteJid)
 heheh = ms(Date.now() - waktuafk)
 conn.sendMessage(info.key.remoteJid,`*Com licença @${setting.numerodono} Atualmente offline!*\n\n*Razão :* ${alasanafk}\n*Desde as :* ${heheh.hours} Horas, ${heheh.minutes} Minutos, ${heheh.seconds} Segundos atrás\n`, MessageType.text,{quoted: info,contextInfo:{ mentionedJid: [`${setting.numerodono}@s.whatsapp.net`]}})
 }
 }
 }
 }
 }
 }
 }
 
//========================================\\
 
 

let userAgent = () => {

os = [

'Macintosh; Intel Mac OS X 10_15_7',

'Macintosh; Intel Mac OS X 10_15_5',

'Macintosh; Intel Mac OS X 10_11_6',

'Macintosh; Intel Mac OS X 10_6_6',

'Macintosh; Intel Mac OS X 10_9_5',

'Macintosh; Intel Mac OS X 10_10_5',

'Macintosh; Intel Mac OS X 10_7_5',

'Macintosh; Intel Mac OS X 10_11_3',

'Macintosh; Intel Mac OS X 10_10_3',

'Macintosh; Intel Mac OS X 10_6_',

'Macintosh; Intel Mac OS X 10_10_2',

'Macintosh; Intel Mac OS X 10_10_3',

'Macintosh; Intel Mac OS X 10_11_5',

'Windows NT 10.0; Win64; x64',

'Windows NT 10.0; WOW64',

'Windows NT 10.0',

];

return `Mozilla/5.0 (${os[Math.floor(Math.random() * os.length)]}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(

Math.random() * 3,

) + 7}.0.${Math.floor(Math.random() * 190) + 4100}.${Math.floor(Math.random() * 50) + 140} Safari/537.36`;

}

function ttaudio(url) {
return new Promise(async (resolve, reject) => {
getDataFirst = await axios.get('https://www.tiktok.com')
newCookie = getDataFirst.headers['set-cookie'].join('')
axios.get(url, {
headers: {
'user-agent': userAgent(),
'Cookie': newCookie
}
})
.then(({ data }) => {
$ = cheerio.load(data)
ttdata = JSON.parse($('script#__NEXT_DATA__').get()[0].children[0].data)
meta = ttdata.props.pageProps.itemInfo.itemStruct
resolve({
status: true,
message: success,
result: {
description: meta.desc,
duration: meta.video.duration,
resolution: meta.video.width + 'x' + meta.video.height,
jpeg_thumb: meta.video.originCover,
gif_thumb: meta.video.dynamicCover,
audio: meta.music.playUrl,
}
})
})
.catch((response) => {
reject({ status: false, message: response })
})
})
}

//BAN CHATS/GRUPOS
if (isBanchat && !isGroupAdmins && !SoDono){
if (!isGroupAdmins && !SoDono) return
if (budy.toLowerCase().startsWith('unbangp')){
if (isCmd && !isBanchat && !isGroupAdmins) return reply(`Este grupo esta banido, ou seja não estou ouvindo ninguém`)
let lfd = bancht.indexOf(from)
bancht.splice(lfd, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
}
}

//=======FUNCIONALIDADE PATENTE=========\\
const nivelAtual = getLevelingLevel(sender)
var patt = 'Iniciante🔹I'
if (nivelAtual === 1) {
patt = 'Iniciante🔹I'
} else if (nivelAtual === 2) {
patt = 'Iniciante🔹II'
} else if (nivelAtual === 3) {
patt = 'Iniciante🔹III'
} else if (nivelAtual === 4) {
patt = 'Iniciante🔹IV'
} else if (nivelAtual === 5) {
patt = 'Iniciante🔹V'
} else if (nivelAtual === 6) {
patt = 'Aprendiz📕I'
} else if (nivelAtual === 7) {
patt = 'Aprendiz📕II'
} else if (nivelAtual === 8) {
patt = 'Aprendiz📕III'
} else if (nivelAtual === 9) {
patt = 'Aprendiz📕IV'
} else if (nivelAtual === 10) {
patt = 'Aprendiz📕V'
} else if (nivelAtual === 11) {
patt = 'Treinamento🔶I'
} else if (nivelAtual === 12) {
patt = 'Treinamento🔶II'
} else if (nivelAtual === 13) {
patt = 'Treinamento🔶III'
} else if (nivelAtual === 14) {
patt = 'Treinamento🔶IV'
} else if (nivelAtual === 15) {
patt = 'Treinamento🔶V'
} else if (nivelAtual === 16) {
patt = 'Formado💠I'
} else if (nivelAtual === 17) {
patt = 'Formado💠II'
} else if (nivelAtual === 18) {
patt = 'Formado💠III'
} else if (nivelAtual === 19) {
patt = 'Formado💠IV'
} else if (nivelAtual === 20) {
patt = 'Formado💠V'
} else if (nivelAtual === 21) {
patt = 'Platina🥏I'
} else if (nivelAtual === 22) {
patt = 'Platina🥏II'
} else if (nivelAtual === 23) {
patt = 'Platina🥏III'
} else if (nivelAtual === 24) {
patt = 'Platina🥏IV'
} else if (nivelAtual === 25) {
patt = 'Platina🥏V'
} else if (nivelAtual === 26) {
patt = 'Bronze🥉I'
} else if (nivelAtual === 27) {
patt = 'Bronze🥉II'
} else if (nivelAtual === 28) {
patt = 'Bronze🥉III'
} else if (nivelAtual === 29) {
patt = 'Bronze🥉IV'
} else if (nivelAtual === 30) {
patt = 'Bronze🥉V'
} else if (nivelAtual === 31) {
patt = 'Prata🥈I'
} else if (nivelAtual === 32) {
patt = 'Prata🥈II'
} else if (nivelAtual === 33) {
patt = 'Prata🥈III'
} else if (nivelAtual === 34) {
patt = 'Prata🥈IV'
} else if (nivelAtual === 35) {
patt = 'Prata🥈V'
} else if (nivelAtual === 36) {
patt = 'Ouro🥇I'
} else if (nivelAtual === 37) {
patt = 'Ouro🥇II'
} else if (nivelAtual === 38) {
patt = 'Ouro🥇III'
} else if (nivelAtual === 39) {
patt = 'Ouro🥇IV'
} else if (nivelAtual === 40) {
patt = 'Ouro🥇V'
} else if (nivelAtual === 41) {
patt = 'Diamante💎I'
} else if (nivelAtual === 42) {
patt = 'Diamante💎II'
} else if (nivelAtual === 43) {   	
patt = 'Diamante💎III'
} else if (nivelAtual === 44) {
patt = 'Diamante💎IV'
} else if (nivelAtual === 45) {
patt = 'Diamante💎V'
} else if (nivelAtual === 46) {
patt = '🔸️Mitico🔮l'
} else if (nivelAtual === 47) {
patt = '🔸️Mitico🔮Il'
} else if (nivelAtual === 48) {
patt = '🔸️Mitico🔮III'
} else if (nivelAtual === 49) {
patt = '🔸️Mitico🔮IV'
} else if (nivelAtual === 50) {
patt = '🔸️Mitico🔮V'
} else if (nivelAtual === 51) {
patt = 'Militar🪖l'
} else if (nivelAtual === 52) {
patt = 'Militar🪖ll'
} else if (nivelAtual === 53) {
patt = 'Militar🪖lll'
} else if (nivelAtual === 54) {
patt = 'Militar🪖lV'
} else if (nivelAtual === 55) {
patt = 'Militar🪖V'
} else if (nivelAtual === 56) {
patt = 'Reconhecimento⚔I'
} else if (nivelAtual === 57) {
patt = 'Reconhecimento⚔II'
} else if (nivelAtual === 58) {
patt = 'Reconhecimento⚔III'
} else if (nivelAtual === 59) {
patt = 'Reconhecimento⚔IV'
} else if (nivelAtual === 60) {
patt = 'Reconhecimento⚔V'
} else if (nivelAtual === 61) {
patt = 'Capitão🗡I'
} else if (nivelAtual === 62) {
patt = 'Capitão🗡II'
} else if (nivelAtual === 63) {
patt = 'Capitão🗡III'
} else if (nivelAtual === 64) {
patt = 'Capitão🗡IV'
} else if (nivelAtual === 65) {
patt = 'Capitão🗡V'
} else if (nivelAtual === 66) {
patt = 'Tenente🏅I'
} else if (nivelAtual === 67) {
patt = 'Tenente🏅II'
} else if (nivelAtual === 68) {
patt = 'Tenente🏅III'
} else if (nivelAtual === 69) {
patt = 'Tenente🏅IV'
} else if (nivelAtual === 70) {
patt = 'Tenente🏅V'
} else if (nivelAtual === 71) {
patt = '🔹️Desafiante🛡I'
} else if (nivelAtual === 72) {
patt = '🔹️Desafiante🛡II'
} else if (nivelAtual === 73) {
patt = '🔹️Desafiante🛡III'
} else if (nivelAtual === 74) {
patt = '🔹️Desafiante🛡IV'
} else if (nivelAtual === 75) {
patt = '🔹️Desafiante🛡V'
} else if (nivelAtual === 76) {
patt = 'Elfo🧝‍♂️🧝I'
} else if (nivelAtual === 77) {
patt = 'Elfo🧝‍♂️🧝II'
} else if (nivelAtual === 78) {
patt = 'Elfo🧝‍♂️🧝III'
} else if (nivelAtual === 79) {
patt = 'Elfo🧝‍♂️🧝IV'
} else if (nivelAtual === 80) {
patt = 'Elfo🧝‍♂️🧝V'
} else if (nivelAtual === 81) {
patt = 'Anão🧝I'
} else if (nivelAtual === 82) {
patt = 'Anão-agiota🧝II'
} else if (nivelAtual === 83) {
patt = 'Anão-militar🧝III'
} else if (nivelAtual === 84) {
patt = 'Anão-hacker🧝IV'
} else if (nivelAtual === 85) {
patt = 'Anão-flooder🧝V'
} else if (nivelAtual === 86) {
patt = 'Agiota🔫I'
} else if (nivelAtual === 87) {
patt = 'Agiota🔫II'
} else if (nivelAtual === 88) {
patt = 'Agiota🔫III'
} else if (nivelAtual === 89) {
patt = 'Agiota🔫IV'
} else if (nivelAtual === 90) {
patt = 'Agiota🔫V'
} else if (nivelAtual === 91) {
patt = 'Feiticeiro🧙‍♂️🧙‍♀️I'
} else if (nivelAtual === 92) {
patt = 'Feiticeiro🧙‍♂️🧙‍♀️II'
} else if (nivelAtual === 93) {
patt = 'Feiticeiro🧙‍♂️🧙‍♀️III'
} else if (nivelAtual === 94) {
patt = 'Feiticeiro🧙‍♂️🧙‍♀️IV'
} else if (nivelAtual === 95) {
patt = 'Feiticeiro🧙‍♂️🧙‍♀️V'
} else if (nivelAtual === 96) {
patt = '💯Lendário⭐I'
} else if (nivelAtual === 97) {
patt = '💯Lendário⭐II'
} else if (nivelAtual === 98) {
patt = '💯Lendário⭐III'
} else if (nivelAtual === 99) {
patt = '💯Lendário⭐IV'
} else if (nivelAtual === 100) {
patt = '💯Lendário⭐V'
} else if (nivelAtual === 101) {
patt = 'Grande_mestre🛐I'
} else if (nivelAtual === 102) {
patt = 'Grande_mestre🛐II'
} else if (nivelAtual === 103) {
patt = 'Grande_mestre🛐III'
} else if (nivelAtual === 104) {
patt = 'Grande_mestre🛐IV'
} else if (nivelAtual === 105) {
patt = 'Grande_mestre🛐V'
} else if (nivelAtual === 106) {
patt = 'Titan🌬I'
} else if (nivelAtual === 107) {
patt = 'Titan🌬II'
} else if (nivelAtual === 108) {
patt = 'Titan🌬III'
} else if (nivelAtual === 109) {
patt = 'Titan🌬IV'
} else if (nivelAtual === 110) {
patt = 'Titan🌬V'
} else if (nivelAtual === 111) {
patt = 'Rei_mago👑🧙‍♂️I'
} else if (nivelAtual === 112) {
patt = 'Rei_mago👑🧙‍♂️II'
} else if (nivelAtual === 113) {
patt = 'Rei_mago👑🧙‍♂️III'
} else if (nivelAtual === 114) {
patt = 'Rei_mago👑🧙‍♂️IV'
} else if (nivelAtual === 115) {
patt = 'Rei_mago👑🧙‍♂️V'
} else if (nivelAtual === 116) {
patt = 'Fênix 🪶I'
} else if (nivelAtual === 117) {
patt = 'Fênix 🪶II'
} else if (nivelAtual === 118) {
patt = 'Fênix 🪶III'
} else if (nivelAtual === 119) {
patt = 'Fênix 🪶IV'
} else if (nivelAtual === 120) {
patt = 'Fênix 🪶V'
} else if (nivelAtual === 121) {
patt = 'Dragon🐲I'
} else if (nivelAtual === 122) {
patt = 'Dragon🐲II'
} else if (nivelAtual === 123) {
patt = 'Dragon🐲III'
} else if (nivelAtual === 124) {
patt = 'Dragon🐲IV'
} else if (nivelAtual === 125) {
patt = 'Dragon🐲V'
} else if (nivelAtual === 126) {
patt = 'Colossal☁️I'
} else if (nivelAtual === 127) {
patt = 'Colossal☁️II'
} else if (nivelAtual === 128) {
patt = 'Colossal☁️III'
} else if (nivelAtual === 129) {
patt = 'Colossal☁️IV'
} else if (nivelAtual === 130) {
patt = 'Colossal☁️V'
} else if (nivelAtual === 131) {
patt = 'Range⚔I'
} else if (nivelAtual === 132) {
patt = 'Range⚔II'
} else if (nivelAtual === 133) {
patt = 'Range⚔III'
} else if (nivelAtual === 134) {
patt = 'Range⚔IV'
} else if (nivelAtual === 135) {
patt = 'Range⚔️V'
} else if (nivelAtual === 136) {
patt = 'Saiadin🧿I'
} else if (nivelAtual === 137) {
patt = 'Saiadin🧿II'
} else if (nivelAtual === 138) {
patt = 'Saiadin🧿III'
} else if (nivelAtual === 139) {
patt = 'Saiadin🧿IV'
} else if (nivelAtual === 140) {
patt = 'Saiadin🧿️V'
} else if (nivelAtual === 141) {
patt = 'WITER🦴I'
} else if (nivelAtual === 142) {
patt = 'WITER🦴II'
} else if (nivelAtual === 143) {
patt = 'WITER🦴III'
} else if (nivelAtual === 144) {
patt = 'WITER🦴IV'
} else if (nivelAtual === 145) {
patt = 'WITER🦴️V'
} else if (nivelAtual === 146) {
patt = '🔰Deus_sama🔰I'
} else if (nivelAtual === 147) {
patt = '🔰Deus_sama🔰II'
} else if (nivelAtual === 148) {
patt = '🔰Deus_sama🔰III'
} else if (nivelAtual === 149) {
patt = '🔰Deus_sama🔰IV'
} else if (nivelAtual >= 150) {
patt = '🔰Deus_sama🔰V'
}
//========================================\\



//==========(FUNÇÃO DE LEVEL)=============\\
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 500
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
await reply(`            ◪ LEVEL UP ◪\n\n├─ ❏ NÚMERO: ${sender.split("@")[0]}.                                                                                       ├─ ❏ *PATENTE*: ${patt}\n├─ ❏ XP: ${getLevelingXp(sender)}\n└─ ❏ LEVEL: ${getLevel} -> ${getLevelingLevel(sender)}`)
}
} catch (err) {
console.error(err)
}
}
//=======================================\\

//=====(FUNÇÃO-CHECAR-LIMIT)====\\
const checkLimit = (sender) => {
let found = false
for (let lmt of _limit) {
if (lmt.id === sender) {
let limitCounts = limitawal - lmt.limit
if (limitCounts <= 0) return conn.sendMessage(from,`[👾] *LIMIT ESGOTADO*\n\n_Nota : para obter mais limit compre usando *${prefix}buylimit* ou suba de nível...`, text,{sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
conn.sendMessage(from, jrpl.limitcount(limitCounts), text, { quoted : info})
found = true
}
}
if (found === false) {
let obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./datab/grupos/limit.json', JSON.stringify(_limit))
conn.sendMessage(from, jrpl.limitcount(limitCounts), text, { quoted : info})
}
} 
							
	//funtion limitado
const isLimit = (sender) =>{ 
if (issupre) {return false;}
let position = false
for (let i of _limit) {
if (i.id === sender) {
let limits = i.limit
if (limits >= limitawal ) {
position = true
conn.sendMessage(from, jrpl.limitend(pushname), text, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
return true
} else {
_limit
position = true
return false
}
}
}
if (position === false) {
const obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./datab/grupos/limit.json',JSON.stringify(_limit))
return false
}
}

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('pronto');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
let media = fs.readFileSync(asw)
conn.sendMessage(to, media, MessageType.sticker,{sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}  


//===================================\\

		//JOGO DO ANAGRAM
if(isGroup && fs.existsSync(`./armor/anagrama-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./armor/anagrama-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
xp = Math.floor(Math.random() * 14) + 3000
if(budy.toUpperCase() == dataAnagrama.original) { conn.sendMessage(from, `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`, MessageType.text, {"mentionedJid": [sender]}), fs.unlinkSync(`./armor/anagrama-${from}.json`)		
addLevelingXp(sender, xp)
recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp*`
reply(recompensa)
		setTimeout(async() => {
fs.writeFileSync(`./armor/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/anagrama-${from}.json`))
conn.sendMessage(from, `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
│➽ DICA: ${dataAnagrama2.dica}
╰────────────────────────
`, MessageType.text) 
}, 5000)
}}

//========================================\\

		//JOGO QUIZ
if(isGroup && fs.existsSync(`./armor/quizanime-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./armor/quizanime-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagrama.original) { 
conn.sendMessage(from, `Parabéns ${pushname} você acertou\n${dataAnagrama.original}\nProximo em 5 segundos...`, MessageType.text, {"mentionedJid": [sender]}), fs.unlinkSync(`./armor/quizanime-${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./armor/quizanime-${from}.json`, `${JSON.stringify(quizanime[Math.floor(Math.random() * quizanime.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/quizanime-${from}.json`))
imagemtexto =`                             「❓Quiz❓」`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await conn.sendMessage(from, wew, image, {quoted: selo, caption: imagemtexto, thumbnail: wew})
}, 5000)
}}


		//JOGO QUIZ
if(isGroup && fs.existsSync(`./armor/quizanim-${from}.json`)){
let dataAnagramaa = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagramaa.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagramaa.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagramaa.original) { 
conn.sendMessage(from, `Parabéns ${pushname} você acertou\n${dataAnagramaa.original}\nProximo em 5 segundos...`, MessageType.text, {"mentionedJid": [sender]}), fs.unlinkSync(`./armor/quizanim-${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./armor/quizanim-${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
imagemtexto =`                             「❓Quiz❓」`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await conn.sendMessage(from, wew, image, {quoted: selo, caption: imagemtexto, thumbnail: wew})
}, 5000)
}}



//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
             
const downloadM = async(save) => {
encmediaa = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: info
encmediaa = isQuotedSticker ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: info
encmediaa = isQuotedAudio ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: info
encmediaa = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: info
encmediaa = JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
if (save) return await conn.downloadAndSaveMediaMessage(encmediaa)
return await conn.downloadMediaMessage(encmediaa)
}



if (isGroup && isViewOnce && isAntiVO) {
let typenya = info.message.viewOnceMessage.message["videoMessage"] ? info.message.viewOnceMessage.message.videoMessage : info.message.viewOnceMessage.message.imageMessage
 typenya["viewOnce"] = false
 typenya["caption"] = `          「 MENSAGEM DO LEK 」\n\n${typenya.caption}`
let peq = info.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: info.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } } :  { key: { fromMe: false, participant: sender, id: info.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true }}}}}
let pe = await conn.prepareMessageFromContent(from, info.message.viewOnceMessage.message,{quoted: peq, contextInfo: selo})
await conn.relayWAMessage(pe)
}

///////////ANTI-SPAM BY ITALU/////////
if (isCmd && isFiltered(sender) && !isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
const ff = {
text : `*「 ❗ 」Flood detectado, espere 5 segundos*`,
contextInfo: {mentionedJid: [sender]}}
return reply(ff)
setTimeout( () => {
conn.groupRemove(from, [sender])
}, 3000)
}
if (isCmd && isFiltered(sender) && isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
const ff1 = {
text : `*「 ❗ 」Flood detectado, espere 5 segundos*`,
contextInfo: {mentionedJid: [sender]}}
return reply(ff1)
setTimeout( () => {
conn.groupRemove(from, [sender])
}, 3000)
}


//////BLOCK CMD///////
//(CREDITOS AO KAUAN GAY)\\
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !isGroupAdmins && !SoDono && getComandoBlock(from).includes(command))return reply('comando blockeado')

////FIMMMMMMMMM/////,

if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCOMANDO\x1b[1;37m]', time, color(command), 'do ', color(sender.split('@')[0]))

if (!isGroup && !isCmd && !info.key.fromMe) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMENSAGEM\x1b[1;37m]', 'do ', color(sender.split('@')[0]))

if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCOMANDO\x1b[1;37m]', time, color(command), 'do ', color(sender.split('@')[0]), 'no gp: ', color(groupName))

if (!isCmd && isGroup && !info.key.fromMe) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMENSAGEM\x1b[1;37m]',  'do ', color(sender.split('@')[0]), 'no gp: ', color(groupName))

//======(JOGO-DA-VELHA)=======(Função)===\\

//////////_FUNÇÕES DO JOGO DA VELHA_//////
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (budy == "Cex") return reply("why");
if (
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
conn.sendMessage(from, chatAccept, MessageType.text, {quoted: info,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net", 
],
},
});
}
} else if (
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou!`);
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
 conn.sendMessage(from,
 `@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`,
 MessageType.text, {quoted: info,
 contextInfo: {
 mentionedJid: [boardnow.X + "@s.whatsapp.net"],
},
}
);
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo termina empatado 😐
`;
reply(chatEqual);
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;
addLevelingXp(winnerJID + "@s.whatsapp.net", abt)

conn.sendMessage(from, chatWon, MessageType.text, {quoted: info,
contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],
},
});
setTimeout( () => {
if (fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
 fs.unlinkSync("./armor/tictactoe/db/" + from + ".json");
 reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
 } else {
console.log(color(time, "red"), color("[ ESPIRADO ]", "magenta"), color('Jogo da velha espirado', "red"));
 }
}, 2000000) //20 minutos
reply(`_*🥳Parabéns @${winnerJID} Você ganhou "${abt}" em xp por ter ganhado o jogo da velha🎉...*_`)      
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
conn.sendMessage(from, chatMove, MessageType.text, {quoted: info,
contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],
},
});
}
} 



//=================================\\


if(isUrl(bady) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins) {
linkgpp = await conn.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return 
if(!isBotGroupAdmins) return reply('O bot Precisa ser ADM para poder remover os delinquentes, então me dê ADM.')  
if(isBot) return 
reply('*Link detectado, porém usuário é admin*')
}

if(isUrl(bady) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins) {
linkgpp = await conn.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
reply('*Link detectado, punindo usuário...*')
kic = `${sender.split("@")[0]}@s.whatsapp.net`
conn.groupRemove(from, [kic])
}

//========(CONTADOR-DE-MENSAGENS)========\\

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.jid)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
jid: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
jid: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
//======================================\\

//===============(AUTO-BAN)=============\\
const dbids = []
for(i=0;i<adeuscara.length;++i) {
dbids.push(adeuscara[i].groupId)
}
const isAdeusCara = (isGroup && dbids.indexOf(from) >= 0) ? true : false

//======================================\\


//============(EVAL-EXECUÇÕES)===========\\

if (budy.startsWith('>')){
if(!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe && !issupre && !ischyt) return
console.log('[', color('EVAL', 'silver'),']', color(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
return reply(JSON.stringify(eval(budy.slice(2)),null,'\t'))
} catch(e) {
reply(`${e}`)
}
}

if (budy.startsWith('=>')){
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe && !issupre && !ischyt) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
  reply(String(e))
}
}


if (body.startsWith('$')) {
if (!q && !SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply('somente meu criador')
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

//======================================\\


//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == MessageType.image) {
if (info.key.fromMe) return
if(isGroupAdmins) return conn.sendMessage(from,'*mensagem proibida detectada, porém é admin logo a punição será anulada*', MessageType.text, {quoted: info})
await conn.sendMessage(from, '*mensagem proibida detectada, banindo...*',  MessageType.text, {quoted: info})
setTimeout(async function () {
conn.groupRemove(from, [sender])
}, 1000)
}

//======(ANTI-VIDEO)========\\
if(isAntiVid && isBotGroupAdmins && type == MessageType.video) {
if(isGroupAdmins) return conn.sendMessage(from,'*mensagem proibida detectada, porém é admin logo a punição será anulada*', MessageType.text, {quoted: info})
await conn.sendMessage(from, '*mensagem proibida detectada, banindo...*', MessageType.text, {quoted: info})
setTimeout(async function () {
conn.groupRemove(from, [sender])
}, 1000)
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == MessageType.audio) {
if(isGroupAdmins) return conn.sendMessage(from,'*mensagem proibida detectada, porém é admin logo a punição será anulada*', MessageType.text, {quoted: info})
await conn.sendMessage(from, '*mensagem proibida detectada, banindo...*', MessageType.text, {quoted: info})
setTimeout(async function () {
conn.groupRemove(from, [sender])
}, 1000)
}
//=======================================\\

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}


//========(ANTI-PV-QUE-BLOQUEIA)======\\
if(isAntiPv && !isGroup && !SoDono && !isPremium){ 
	reply(`*Antipv ativado, você será bloqueado!*\n*Contate o ${NickDono}!pera ai...estou lhe enviando o vcard do meu mestre...*`)
 await sleep (2000)
	conn.sendMessage(sender, {displayname: `${NickDono}`, vcard: vcard}, MessageType.contact,{quoted: selo})
	await sleep(4000)
	conn.blockUser(sender, 'add') 
	return
}
//======================================\\


//=========(ANTIPV-QUE-SÓ-FALA)==========\\

if (!isGroup && !isPremium && !SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe && banChats ===
true) { 
tujuh = fs.readFileSync('./audios/akamepv.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
await sleep(5000) 
reply(`*Dono*:${NickDono}\n*Número*:wa.me/${setting.numerodono}`)}
const atibot = info.isBaileys
if (atibot === true) return
//======================================\\



//==========(ANTI-LIGAÇÃO)===========\\

if(isAnticall){ 
conn.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;  
console.log('bloqueando o '+ callerId)
await sleep(4000)
conn.blockUser(callerId, 'add') 
	return
});	
}
//====================================\\


//==SISTEMA DE VOTAÇÃO: CRÉDITOS: KAUAN==\\
if(isGroup) {
if (budy.toLowerCase() === 'voto'){
let vote = JSON.parse(fs.readFileSync(`./armor/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./armor/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel votar duas vezes', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./armor/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*para*: ${_votes[0].reason}\n*total Votos* : ${vote.length} Votos\n*Duração* : ${_votes[0].durasi} minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
        }  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devoto'){
const vote = JSON.parse(fs.readFileSync(`./armor/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./armor/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel anular um voto', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./armor/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*para*: ${_votes[0].reason}\n*total Votos* : ${vote.length} Vote\n*duração* : ${_votes[0].durasi} minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	
//======================================\\



//_VISUALIZA AS MENSAGENS 
conn.chatRead(from)

//_CONTAGEM DE COMANDOS
if (isCmd) cmdadd()
            
if (isBanned) return
BannedExpired(ban)

if (isCmd && !SoDono && !isCmdy && !isnit && !issupre && !ischyt) addFilter(sender)


switch (figura) {
  
case 'wbtgqCOZbKWotwevvibGbn0WVSuyiBcnJn9D1lC2D/4=':
bla = fs.readFileSync('./audios/encosta.mp3')
conn.sendMessage(from, bla, audio, {quoted:info, mimetype: 'audio/mp4', ptt:true})
break

case 'hzK+wL9Yf8OcJeClP1w/yvq2e+z8fMxE6UTPVbMBAoM=':
bla = fs.readFileSync('./audios/chave.mp3')
conn.sendMessage(from, bla, audio, {quoted:info, mimetype: 'audio/mp4', ptt:true})
break

case 'yBY74SCVIk8HpVBFqaYlEE6lzfeiRw2U3Ne6Hhi+tO0=':
bla = fs.readFileSync('./audios/yamete.mp3')
conn.sendMessage(from, bla, audio, {quoted:info, mimetype: 'audio/mp4', ptt:true})
break

case 'nxa09/NDa42d4NiXFr1GcxkRGSmOcd6kLvbdCkuAPqA=':
bla = fs.readFileSync('./audios/plunderer.mp3')
conn.sendMessage(from, bla, audio, {quoted:info, mimetype: 'audio/mp4', ptt:true})
break

case 'O3d8fdsZH06BI81NGrGkNF/iAv0m5GXrIzoBQXTCkRA=':
bla = fs.readFileSync('./audios/destiny.mp3')
conn.sendMessage(from, bla, audio, {quoted:info, mimetype: 'audio/mp4', ptt:true})
break

case 'xJWEDOXVTrSo2lrM1xjkbpP7X78tQupoNPwd7Yl0aHA=':
bla = fs.readFileSync('./audios/ban.mp3')
conn.sendMessage(from, bla, audio, {quoted:info, mimetype: 'audio/mp4', ptt:true})
break

case 'Imnj4SQ+P9Y8g1BzfQp5K4rGHVP0pmGAnwdRBr9fFDc=':
bla = fs.readFileSync('./audios/loli.mp3')
conn.sendMessage(from, bla, audio, {quoted:info, mimetype: 'audio/mp4', ptt:true})
break

case 'rgp0uwEv+/+nPo1Vy2i2Qd3itivAP7ON3j7NSyR+nA8=':
bla = fs.readFileSync('./audios/auau.mp3')
conn.sendMessage(from, bla, audio, {quoted:info, mimetype: 'audio/mp4', ptt:true})
break
}



//INICIO DE COMANDO DE PREFIXO
switch(command) {
  
//=========(-MENUS-DE-CMDS-)========\\
case 'menubasico':
case 'comandos':
const mnt = fs.readFileSync('audios/menucmd.mp3')
conn.sendMessage(from, mnt, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
numerodn = setting.numerodono 
const horr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const datt = moment.tz('America/Sao_Paulo').format('DD/MM/YY');  
img = (`${logo}`)
wew = await getBuffer(img)
gbutsan = [
  {buttonId:`${prefix}cttdono`, buttonText: {displayText: `<𝐕𝐂𝐀𝐑𝐃:${NickDono}>`}, type: 1},{buttonId:`${prefix}heroku`, buttonText: {displayText: '︎✍︎𝐇𝐄𝐑𝐎𝐊𝐔☢︎︎'}, type: 1},{buttonId:`${prefix}preço`, buttonText: {displayText: '$𝐓𝐚𝐛𝐞𝐥𝐚 𝐝𝐞 𝐏𝐫𝐞𝐜̧𝐨$'}, type: 1}]
mhan = await conn.prepareMessage(from, wew, image,{quoted: selo})
 varbut = {
imageMessage: mhan.message.imageMessage,
contentText:menu(prefix, horr, datt,  numerodn, NickDono),
footerText: `${NomeDoBot}`,
buttons: gbutsan,
headerType: 4
}
await conn.sendMessage(from, varbut, MessageType.buttonsMessage)
break

case 'blarp':

buffer = await getBuffer (`https://telegra.ph/file/7fec315258cbf9e26b281.mp4`)
sendButVideo(from,`Texto do menu`,'_*texto transparente*_', buffer, [{buttonId:`.owner`,buttonText: {displayText: 'Dono'}, type: 1}], {quoted:selo});
break

case 'menu':
let blarp = info.key.fromMe ? conn.user.jid : info.key.remoteJid.endsWith('@g.us') ? info.participant : info.key.remoteJid
named = conn.contacts[blarp] != undefined ? conn.contacts[blarp].vname || conn.contacts[blarp].notify : undefined
numerodno = setting.numerodono 
const horaa= moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const dattaa = moment.tz('America/Sao_Paulo').format('DD/MM/YY');  
const nicklevel = getLevelingLevel(sender)
const nickxp = getLevelingXp(sender);
const teste123 = speed();
const teste1 = speed() - teste123
uptime = process.uptime()
  buffer = await getBuffer(`${logo12}`)
sendButImage(from,`
┏┉✯┉━═『アカメ』═━┉✯┉┓
║が斬る𝐌𝐄𝐍𝐔/𝐁𝐀𝐒𝐈𝐂𝐎が斬る
┗┉✯┉━═『アカメ』═━┉✯┉┛
║𝐒𝐭𝐚𝐭𝐮𝐬/𝐁𝐨𝐭 : 𝗢𝗡[ϟᨖϟ]
┏┉✯┉━═『アカメ』═━┉✯┉┓
║が斬る𝐑𝐄𝐒𝐔𝐌𝐎/𝐌𝐄𝐍𝐔が斬る
┗┉✯┉━═『アカメ』═━┉✯┉┛
║aki está todos meus menus 
║⏤͟͟͞͞⿻͜͡ ✑${prefix}menu
║⏤͟͟͞͞⿻͜͡ ✑${prefix}menuadm
║⏤͟͟͞͞⿻͜͡ ✑${prefix}menuotaku
║⏤͟͟͞͞⿻͜͡ ✑${prefix}dono
║⏤͟͟͞͞⿻͜͡ ✑${prefix}infoajuda
║⏤͟͟͞͞⿻͜͡ ✑${prefix}help
║⏤͟͟͞͞⿻͜͡ ✑${prefix}menulogos
║⏤͟͟͞͞⿻͜͡ ✑${prefix}brincadeiras
║⏤͟͟͞͞⿻͜͡ ✑${prefix}alteradores
┏┉✯┉━═『アカメ』═━┉✯┉┓
║が斬る𝐒𝐏𝐄𝐄𝐃/𝐏𝐈𝐍𝐆が斬る
┗┉✯┉━═『アカメ』═━┉✯┉┛
║SPEED: *${teste1.toFixed(4)} _SEGUNDOS_*
║TIPO DO BOT: *TERMUX*
║TEMPO DE ATIVIDADE DO BOT
║RESULTADO : *${kyun(uptime)}*
┗┉✯┉━═『アカメ』═━┉✯┉┛
┏┉✯┉━═『アカメ』═━┉✯┉┓
║が斬る𝐈𝐍𝐅𝐎/𝐆𝐑𝐔𝐏𝐎が斬る
┗┉✯┉━═『アカメ』═━┉✯┉┛
*NOME* : ${groupName}\n*MEMBRO* 
${groupMembers.length}\n*ADMIN* 
${groupAdmins.length}\n*DESCRIÇÃO* : 
${groupDesc}
┗┉✯┉━═『アカメ』═━┉✯┉┛`,`
┏┉✯┉━═『アカメ』═━┉✯┉┓
║⏤͟͟͞͞♦️𝗣𝗿𝗲𝗳𝗶𝘅𝗼: ⟪•  ${prefix}  •⟫
║⏤͟͟͞͞👤𝗼𝗹𝗮́ : ⟪${named}⟫
║⏤͟͟͞͞📞𝗧𝗲𝗹𝗲𝗳𝗼𝗻𝗲 : ${sender.split("@s.whatsapp.net")[0]}
║⏤͟͟͞͞🏆𝗫𝗣 : ${nickxp}
║⏤͟͟͞💎𝗟𝗲𝘃𝗲𝗹 : ${nicklevel}
║⏤͟͟͞͞☪️𝗣𝗮𝘁𝗲𝗻𝘁𝗲 : ${patt}
║⏤͟͟͞͞⌚𝗛𝗼𝗿𝗮 : ${horaa} 
║⏤͟͟͞͞📅𝗗𝗮𝘁𝗮 : ${dattaa}
┗┉✯┉━═『アカメ』═━┉✯┉┛`,buffer,
[{buttonId:`${prefix}lista`, buttonText: {displayText: '⏤͟͟͞͞𝐌𝐄𝐍𝐔𝐒/𝐋𝐈𝐒𝐓𝐀⛥'}, type: 1}]);
break

case 'lista':
listMsg = {

 buttonText: '𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐌𝐄𝐍𝐔𝐒',
 
 footerText: `${NomeDoBot}`,
 
 description: '𝐌𝐄𝐍𝐔/𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒',

 sections: [

                     {
 rows: [
 
{
"title": "꧁𝗠𝗘𝗡𝗨꧂",
"rowId": `${prefix}menubasico` 
                           },
{
"title": "꧁𝗠𝗘𝗡𝗨𝗔𝗗𝗠꧂",
"rowId": `${prefix}menuadm`
                           },                 
{
"title": `꧁𝗠𝗘𝗡𝗨 𝗗𝗢 ➪${NickDono}꧂`,
"rowId": `${prefix}menudono`
                           },                                     
{
"title":  '꧁𝗠𝗘𝗡𝗨𝗢𝗧𝗔𝗞𝗨꧂',
"rowId": `${prefix}menuotaku`
                           },

{
"title":  `꧁𝗗𝗢𝗡𝗢:${NickDono}꧂`,
"rowId": `${prefix}dono`
                           },

{
"title":  '꧁𝗜𝗡𝗙𝗢/𝗔𝗝𝗨𝗗𝗔꧂',
"rowId": `${prefix}infoajuda`
                           },

{
"title":  '꧁𝗛𝗘𝗟𝗣꧂',
"rowId": `${prefix}help`
                           },

{
"title":  '꧁𝗕𝗥𝗜𝗡𝗖𝗔𝗗𝗘𝗜𝗥𝗔𝗦꧂',
"rowId": `${prefix}brincadeiras`
                           },

{
"title":  '꧁𝗔𝗟𝗧𝗘𝗥𝗔𝗗𝗢𝗥𝗘𝗦꧂',
"rowId": `${prefix}alteradores`
                           },

{
"title":  `<𝗩𝗖𝗔𝗥𝗗:${NickDono}>`,
"rowId": `${prefix}cttdono`
                           },

{
"title":  `<𝗩𝗖𝗔𝗥𝗗:${NomeDoBot}>`,
"rowId": `${prefix}cttdobot`
                           },

                        ]
                    }],
 listType: 1
}

conn.sendMessage(from, listMsg, MessageType.listMessage, {quoted: selo});
break

case 'logos':
case 'menulogo':
case 'menulogos':  
wew = await getBuffer(`${logo}`) 
await conn.sendMessage(from, wew, image, {quoted: selo, caption: menulogos(prefix)})
break 

case 'menuanime':
case 'menuotaku':  
wew = await getBuffer(`${logo10}`) 
await conn.sendMessage(from, wew, image, {quoted: selo, caption: menuanime(prefix)})
break 

case 'menuadm':
case 'menuadma':
case 'adm':  
if (!SoDono)
if (!isGroupAdmins) return reply ('só pode os adms saber ler não?')
const bla = fs.readFileSync('audios/admin.mp3')
conn.sendMessage(from, bla, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
img = (`${logo2}`)
wew = await getBuffer(img) 
gbutsan = [
  {buttonId:`${prefix}menudono`, buttonText: {displayText: '𝕄𝕖𝕟𝕦𝔻𝕠𝕟𝕠'}, type: 1}]
mhan = await conn.sendMessage(from, wew, image,{quoted: selo, caption: adms(prefix)})
break 

case 'menudono':
case 'donomenu':  
if(!SoDono) return reply('Só Dono pode utilizar este comando')
wew = await getBuffer(`${logo11}`) 
mhan = await conn.sendMessage(from, wew,  MessageType.video, {mimetype: 'video/gif', quoted: selo, caption: menudono(prefix)})
break

case 'programador': 
buffer = await getBuffer(`${logo2}`)
sendButImage(from,`𝐀𝐪𝐮𝐢 𝐝𝐞𝐢𝐱𝐨 𝐂𝐓𝐓 𝐝𝐨 𝐦𝐞𝐮 𝐃𝐎𝐍𝐎`,
`𝐒𝐞 𝐪𝐮𝐢𝐬𝐞𝐫 𝐩𝐨𝐝𝐞 𝐚𝐭𝐞́ 𝐬𝐞 𝐢𝐧𝐬𝐜𝐫𝐞𝐯𝐞𝐫 𝐧𝐨 𝐜𝐚𝐧𝐚𝐥 𝐝𝐨 𝐜𝐫𝐢𝐚𝐝𝐨𝐫 𝐩𝐫𝐚 𝐟𝐢𝐜𝐚𝐫 𝐩𝐨𝐫 𝐝𝐞𝐧𝐭𝐫𝐨 𝐝𝐚𝐬 𝐚𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐜̧𝐨̃𝐞𝐬`, buffer,
[{buttonId:`${prefix}yt`, buttonText: {displayText: '𝐂𝐀𝐍𝐀𝐋 𝐃𝐎 𝐂𝐑𝐈𝐀𝐃𝐎𝐑'}, type: 1},
{buttonId:`${prefix} cttdono`, buttonText: {displayText: '𝐂𝐓𝐓 𝐃𝐎𝐍𝐎'}, type: 1}]);
break

case 'owner':
case 'odono':
case 'dono':  
numerodn = setting.numerodono 
wew = await getBuffer(`${logo4}`) 
await conn.sendMessage(from, wew,  MessageType.video, {mimetype: 'video/gif', quoted: selo, caption: menudono(prefix)})
break
 
case 'yt':
reply(`https://youtube.com/channel/UCa0_EVxukGIkE2mHJB4Ml_A\n𝐒𝐞 𝐢𝐧𝐬𝐜𝐫𝐞𝐯𝐞𝐫 𝐥𝐚́ 𝐩𝐫𝐚 𝐟𝐨𝐫𝐭𝐚𝐥𝐞𝐜𝐞𝐫 𝐨 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐚𝐝𝐨𝐫:${NickDono}`)
break

case 'efeitosimg':
case 'efeitos':  
case 'efeitoimg':
case 'efeitosmarcar':  
wew = await getBuffer(`${logo5}`) 
await conn.sendMessage(from, wew, image, {quoted: selo, caption: efeitos(prefix)})
break 

case 'dex':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
sd = args.join(" ")
reply(enviar.espere)
sad = await getBuffer(`https://api-alc.herokuapp.com/api/textpro/demon?texto=${sd}&apikey=ConfuMods`)
await conn.sendMessage(from, sad, image, {quoted: info, thumbnail: null})
break

case 'alteradores':  
wew = await getBuffer(`${logo6}`) 
await conn.sendMessage(from, wew, image, {quoted: selo, caption: alteradores(prefix)})
break 

case 'brincadeiras':
case 'brincadeira':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)  
wew = await getBuffer(`${logo}`) 
await conn.sendMessage(from, wew, image, {quoted: selo, caption: brincadeiras(prefix)})
break 

case 'menupremium':
case 'menuprem':
await conn.sendMessage(from, menuprem(prefix), text, {quoted: selo})
break 

case 'destrava':
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
await conn.sendMessage(from, destrava(prefix), text, {quoted: info})
break 

case 'seradm':
if (!SoDono) return reply(`Só o ${NickDono}`)
reply(`Ok @${sender.split('@')[0]} você agora e adm.`)
setTimeout( () => {
conn.groupMakeAdmin(from, [sender])
}, 0)
break

case 'javoltoadm':
if(!q) return reply(`𝐒𝐞𝐥𝐞𝐜𝐢𝐨𝐧𝐚𝐫✔︎:*\n𝐬=𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬\n𝐦=𝐦𝐢𝐧𝐮𝐭𝐨\n𝐡=𝐇𝐨𝐫𝐚\n\n✫𝐄𝐱𝐞𝐦𝐩𝐥𝐨✫\n10 s`)
if (!SoDono) return reply (`só restrições meu parceiro só pode o ${NickDono}`)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
conn.updatePresence(from, Presence.composing) 
if (args[1]=="s") {var timer = args[0]+"000"
} else if (args[1]=="m") {var timer = args[0]+"0000"
} else if (args[1]=="h") {var timer = args[0]+"00000"} 
else {return reply("𝐒𝐞𝐥𝐞𝐜𝐢𝐨𝐧𝐚𝐫✔︎:*\n𝐬=𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬\n𝐦=𝐦𝐢𝐧𝐮𝐭𝐨\n𝐡=𝐇𝐨𝐫𝐚\n\n✫𝐄𝐱𝐞𝐦𝐩𝐥𝐨✫\n10 s")}
conn.groupRemove(from, [sender])
setTimeout( () => {
var nomor = info.participant
const close = {
text: `𝐂𝐚𝐥𝐦𝐚𝐫 𝐚𝐢 𝐠𝐚𝐥𝐞𝐫𝐚 𝐨${NickDono} 𝐒𝐚𝐢𝐮, 𝐦𝐚𝐢𝐬 𝐣𝐚́ 𝐯𝐨𝐥𝐭𝐚𝐫`,
contextInfo: { mentionedJid: [nomor] }
}
reply(close)
conn.groupAdd(from, [sender]);
}, timer)
await sleep (10000)
conn.groupMakeAdmin(from, [sender]);
break

case 'rebaixardn':
if (!SoDono) return reply(`Só o ${NickDono}`)
reply(`Ok @${sender.split('@')[0]} você acabar de ser rebaixado.`)
setTimeout( () => {
conn.groupDemoteAdmin(from, [sender])
}, 0)
break

case 'convite':
case 'joinlink':
case 'accept':
case 'aceitar':
if (args.length == 0) return reply(`Digite o link do grupo
Exemplo: (${prefix}joinlink/accept/convite/aceitar) https://chat.whatsapp.com/JOdlhLSDQEHC9dRBbmT5xf`)
var codeInvite = body.slice(9).split('https://chat.whatsapp.com/')[1]
if (!codeInvite) return reply('certifique-se de que o link está correto! ')                 
if (args.length > 300) return conn.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: info})
var nomor = info.participant
descr = `[CONVITE]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nLink: ${body.slice(9)}`
chumbo = [{
buttonId:`${prefix}entrarlink ${body.slice(9)}`, buttonText: {displayText: '✅ ADD BOT GRUPO ✅'}, type: 1},{buttonId:`${prefix}negarconvite ${sender.split("@s.whatsapp.net")[0]}`,buttonText:{displayText:'🚫 NEGAR CONVITE 🚫'}, type:1}
]
carioca = {
contentText: `${descr}`, 
contextInfo: {mentionedJid: [sender]},
footerText: `${NomeDoBot}`, 
buttons: chumbo, 
headerType: 1
}

conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, carioca, MessageType.buttonsMessage, {quoted: info})
break

case 'entrarlink':
case 'entrar':
if (!SoDono && !isCmdy && !isnit && !info.key.fromMe) return reply(enviar.msg.ownerB)
if(!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Cade o Link de Convite Mano?')
try{
await conn.acceptInvite (`${q.slice([26])}`)
reply('Entrei no Grupo')
} catch {
reply('Não foi possível entrar no grupo')
}
break

case 'negarconvite':
if (!SoDono && !isCmdy && !isnit && !info.key.fromMe) return reply(enviar.msg.ownerB)
try{
teks1 = `🚫Seu Convite Para o Grupo Foi Negado🚫`
var options = {
text: teks1, 
contextInfo: {mentionedJid: [sender]}, 
}

conn.sendMessage(`${q}@s.whatsapp.net`, options, text, {quoted: info})
} catch {
reply('Erro ao Enviar a Msg')
}
break

case 'diablo':
case 'leave':
if (!isGroup) return
if (!SoDono) return reply(`só aceito ordens do ${NickDono}`)
tujuh = fs.readFileSync('./audios/tchauzinho.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
diablo = fs.readFileSync('./logos/sair.webp')
conn.sendMessage(from, diablo, sticker)
setTimeout( () => {
conn.groupLeave(from)
}, 6000)
break

case 'diablo/akame':
if (!SoDono) return reply(`só aceito ordens do ${NickDono}`)
if (!isBotGroupAdmins) return reply('Preciso de adm pra isso')
reply(`*Adeus pessoal eu:${NomeDoBot},eo meu Mestre ${NickDono} temos que ir*`)
setTimeout( () => {
conn.groupRemove(from, [sender])
}, 3000),
await sleep (5000)
tujuh = fs.readFileSync('./audios/vez.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
setTimeout( () => {
conn.groupLeave(from)
}, 7000)
break

case 'sayonara':
case 'adios':
if (!SoDono) return
if (!isBotGroupAdmins) return reply('Preciso de adm pra isso')
reply(`sayonara ${NickDono}`)
setTimeout( () => {
conn.groupRemove(from, [sender])
}, 8000)
break

case 'nick':
  return reply (`${NickDono}`)
break

case 'voltar':
if (!isGroup) return 
if (!isGroupAdmins && !info.key.fromMe) return 
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Mencione alguém que ja saiu!')
if (info.message.extendedTextMessage === null || info.message.extendedTextMessage === undefined) return;
if (info.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = info.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.length > 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
conn.groupAdd(from, M_exe)
} else {
conn.groupAdd(from, [exe1[0]])
}
} else {
exe1 = info.message.extendedTextMessage.contextInfo.participant
conn.groupAdd(from, [exe1])
}
break

case 'javolto':
if(!q) return reply(`𝐒𝐞𝐥𝐞𝐜𝐢𝐨𝐧𝐚𝐫✔︎:*\n𝐬=𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬\n𝐦=𝐦𝐢𝐧𝐮𝐭𝐨\n𝐡=𝐇𝐨𝐫𝐚\n\n✫𝐄𝐱𝐞𝐦𝐩𝐥𝐨✫\n10 s`)
if (!SoDono) return reply (`só restrições meu parceiro só pode o ${NickDono}`)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
conn.updatePresence(from, Presence.composing) 
if (args[1]=="s") {var timer = args[0]+"000"
} else if (args[1]=="m") {var timer = args[0]+"0000"
} else if (args[1]=="h") {var timer = args[0]+"00000"} 
else {return reply("𝐒𝐞𝐥𝐞𝐜𝐢𝐨𝐧𝐚𝐫✔︎:*\n𝐬=𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬\n𝐦=𝐦𝐢𝐧𝐮𝐭𝐨\n𝐡=𝐇𝐨𝐫𝐚\n\n✫𝐄𝐱𝐞𝐦𝐩𝐥𝐨✫\n10 s")}
conn.groupRemove(from, [sender])
setTimeout( () => {
var nomor = info.participant
const close = {
text: `𝐂𝐚𝐥𝐦𝐚𝐫 𝐚𝐢 𝐠𝐚𝐥𝐞𝐫𝐚 𝐨${NickDono} 𝐒𝐚𝐢𝐮, 𝐦𝐚𝐢𝐬 𝐣𝐚́ 𝐯𝐨𝐥𝐭𝐚𝐫`,
contextInfo: { mentionedJid: [nomor] }
}
reply(close)
conn.groupAdd(from, [sender]);
}, timer)
break

case 'fotoperfil':
hakai = reply(`*já enviei no seu pv patrão...sua foto de perfil*`)
try {
ppimg = await conn.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const diablinho = body.slice(5)
diabloz = (`*Ai está,sua foto de perfil*`)
pegarimg = await getBuffer(ppimg)
conn.sendMessage(sender, pegarimg, MessageType.image, {caption: diabloz, quoted: info},`${diablinho}`)
await conn.sendMessage(hakai, pegarimg, {quoted:selo})
break

case 'perfil':
try {
ppimg = await conn.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
var conselho = palavras[Math.floor(Math.random() * palavras.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const asLvl = getLevelingLevel(sender)
const ssXp = getLevelingXp(sender)
const dptr = `     「 🔥 ~_*PERFIL*_~ 🌈 」
🗒 *Nome* : *${pushname}*
🪀 *Número* : @${sender.split("@")[0]}
🐂 *Nível gado* : *${nivelgador}${nivelgado2r}%*
📱 *Seu Célular* : ${info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅'}
😈 *Nível puta* : *${putar}${putar2}%*
😋 *Nível de gostosura* : *${gostosurar}${gostosurar2}%*
🍼 *Valor do programa* : *R$${programa}*

➻ *~_CONSELHO_~* :
${conselho}`
daftarimg = await getBuffer(ppimg)
conn.sendMessage(from, daftarimg , MessageType.image, {caption: dptr, quoted: selo})
break

case 'loliv':
       case 'lolivid':
       case 'lolivideo':
              reply('enviando loli video...')
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break

case 'frases':
case 'frase':
try {
ppimg = await conn.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
hehe = await fetchJson(`https://www.luc4rio-rest-api.tk/api/aleatorios/frases`)
if (hehe.error) return reply(hehe.error)
ccg =
`
  ‣ Author: ${hehe.Author}
 
  ‣ Criador: ${hehe.Criador}
 
  ‣ Frase: 
 
  ${hehe.Frase}\n`
daftarimg = await getBuffer(ppimg)
await conn.sendMessage(from, daftarimg, image, {quoted:info, caption: ccg})
break

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]   
jr = `${tempo} ${pushname} 

Conselhos Bíblico para você: 

- ${conselhosb} 

> Bot: ${NomeDoBot}
> Grupo: ${groupName}`
await conn.sendMessage(from, jr, text, {quoted:info, contextInfo: {"mentionedJid": jr}})
break

case 'tabela':
await conn.sendMessage(from, tabela(prefix), text, {quoted: selo})
break 

case 'destrava2':
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
await conn.sendMessage(from, destrava2 (prefix), text, {quoted: info})
break 

case 'infovotação':
case 'infovotacao':  
await conn.sendMessage(from, infovotacao(prefix), text, {quoted: selo})
break

case 'install':  
buffer = await getBuffer(`${logo9}`)
sendButImage(from,`𝐄𝐬𝐭𝐚 𝐩𝐫𝐞𝐩𝐚𝐫𝐚𝐝𝐨 𝐩𝐫𝐚 𝐛𝐚𝐢𝐱𝐚𝐫 𝐚 𝐀𝐊𝐀𝐌𝐄2.0?𝐪𝐮𝐚𝐥𝐪𝐮𝐞𝐫 𝐝𝐮́𝐯𝐢𝐝𝐚 𝐜𝐨𝐧𝐬𝐮𝐥𝐭𝐞:\nwa.me/${setting.numerodono}`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix} manual`, buttonText: {displayText: '𝐌𝐀𝐍𝐔𝐀𝐋 𝐀𝐊𝐀𝐌𝐄2.0'}, type: 1}
,{buttonId: `${prefix}gitdobot`, buttonText: {displayText: '⚠︎𝐆𝐈𝐓 𝐁𝐎𝐓⚠︎'}, type:1},
{buttonId: `${prefix}zarchive`, buttonText: {displayText: '𝐙𝐀𝐑𝐂𝐇𝐈𝐕𝐄_𝐏𝐑𝐎💎'}, type:1}
]);
break;

case 'cript':
case 'criptografar':
  return reply(`𝐨𝐥𝐚́ 𝐯𝐜 𝐯𝐞𝐢𝐨 𝐚𝐩𝐫𝐞𝐧𝐝𝐞𝐫 𝐨 𝐪𝐮𝐞 𝐞́ 𝐜𝐫𝐢𝐩𝐭𝐨𝐠𝐫𝐚𝐟𝐚𝐜̧𝐚̃𝐨 𝐧𝐞́? 𝐦𝐚𝐢𝐬 𝐚𝐟𝐢𝐧𝐚𝐥 𝐩𝐫𝐚 𝐪𝐮𝐞 𝐬𝐞𝐫𝐯𝐞 𝐜𝐫𝐢𝐩𝐭 𝐨𝐮 𝐜𝐫𝐢𝐩𝐭𝐨𝐠𝐫𝐚𝐟𝐚𝐜̧𝐚̃𝐨? 1°𝐦𝐞𝐧𝐭𝐞 𝐢𝐬𝐬𝐨 𝐬𝐞𝐫𝐯𝐞 𝐩𝐚𝐫𝐚 𝐪𝐮𝐞 𝐕𝐂 𝐜𝐫𝐢𝐩𝐭 𝐬𝐮𝐚 𝐢𝐧𝐝𝐞𝐱 𝐩𝐚𝐫𝐚 𝐪𝐮𝐞 𝐚𝐬 𝐩𝐞𝐬𝐬𝐨𝐚𝐬 𝐧𝐚̃𝐨 𝐩𝐨𝐬𝐬𝐚𝐦 𝐫𝐨𝐮𝐛𝐚𝐫 𝐬𝐮𝐚 𝐢𝐝𝐞𝐢𝐚 𝐨𝐮 "𝐤𝐢𝐛𝐚𝐫" 𝐦𝐚𝐢𝐬 𝐜𝐨𝐦𝐨 𝐜𝐫𝐢𝐩𝐭𝐨𝐠𝐫𝐚𝐟𝐨?𝐧𝐨 𝐬𝐢𝐭𝐞 ('https://obfuscator.io/')\n 𝐓𝐔𝐓𝐎𝐑𝐈𝐀𝐋:\n('https://youtu.be/W8X0oGko-xI')\n𝐂𝐚𝐬𝐨 𝐯𝐜 𝐝𝐞𝐬𝐞𝐣𝐞 𝐞𝐬𝐬𝐞 𝐁𝐨𝐭 𝐧𝐞𝐠𝐨𝐜𝐢𝐞 𝐜𝐨𝐦 𝐨 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐚𝐝𝐨𝐫 𝐝𝐢𝐠𝐢𝐭𝐚𝐧𝐝𝐨: ${prefix}preço\n
  ${NomeDoBot}`)
  break

case 'instruções':
case 'manual':
cmdo = reply(`
⚠︎𝐎𝐁𝐒⚠︎:o Termux que deve ser utilizado pra instalação do seu bot deve ser o do mediafire pois o da play store não prestar, obs: 1° mais como saber se o termux é da play?ou não?\n
o sinal de cifrão\n
termux da play:$
termux do mediafire:-$\n
𝐏𝐫𝐨𝐧𝐭𝐨 𝐣𝐚́ 𝐪𝐮𝐞 𝐯𝐜 𝐚𝐩𝐫𝐞𝐧𝐝𝐞𝐮 𝐨 𝐛𝐚́𝐬𝐢𝐜𝐨 𝐯𝐚𝐦𝐨𝐬 𝐜𝐨𝐦𝐞𝐜̧𝐚𝐫?\n
 𝐀𝐢 𝐞𝐬𝐭𝐚́ 𝐚𝐬 𝐢𝐧𝐬𝐭𝐫𝐮𝐜̧𝐨̃𝐞𝐬 𝐪𝐮𝐚𝐥𝐪𝐮𝐞𝐫 𝐃𝐮́𝐯𝐢𝐝𝐚  𝐜𝐨𝐧𝐬𝐮𝐥𝐭𝐞 𝐨 𝐦𝐞𝐮 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐚𝐝𝐨𝐫:\n
wa.me/+12514406419

(1)-Abra o termux e cole isso:

pkg upgrade -y && pkg update -y && pkg install git -y && pkg install nodejs -y && pkg install nodejs-lts -y

(2)-Quando acabar cole isso no termux:

termux-setup-storage

(3)-extraiar o bot para sua memória internar e dps cole isso no termux:
 
cd /sdcard/NOMEDAPASTADOBOT

✫𝐏𝐫𝐨𝐧𝐭𝐨 𝐯𝐜 𝐚𝐠𝐨𝐫𝐚 𝐣𝐚́ 𝐭𝐞𝐦 𝐬𝐞𝐮 𝐛𝐨𝐭 

☠︎︎𝐩𝐚𝐫𝐚 𝐥𝐢𝐠𝐚𝐫:sh start.sh

${NomeDoBot} 𝐁𝐘:𝐃𝐈𝐀𝐁𝐋𝐎`)
break


case 'infobemvindo':
case 'infobv':  
await conn.sendMessage(from, infobemvindo(prefix), text, {quoted: selo})
break

case 'idiomas':
case 'idioma':
txt = `  
IDIOMAS DO GTTS 

EXEMPLO :

${prefix}gtts pt (falar)

o PT que coloquei, é a linguagem, então pode por no lugar as 2 letras que define a linguagem, iguais os exemplos e os idiomas abaixo.

'af': 'Afrikaans',
  'sq': 'Albanian',
  'ar': 'Arabic',
  'hy': 'Armenian',
  'ca': 'Catalan',
  'zh': 'Chinese',
  'zh-cn': 'Chinese (Mandarin/China)',
  'zh-tw': 'Chinese (Mandarin/Taiwan)',
  'zh-yue': 'Chinese (Cantonese)',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'nl': 'Dutch',
  'en': 'English',
  'en-au': 'English (Australia)',
  'en-uk': 'English (United Kingdom)',
  'en-us': 'English (United States)',
  'eo': 'Esperanto',
  'fi': 'Finnish',
  'fr': 'French',
  'de': 'German',
  'el': 'Greek',
  'ht': 'Haitian Creole',
  'hi': 'Hindi',
  'hu': 'Hungarian',
  'is': 'Icelandic',
  'id': 'Indonesian',
  'it': 'Italian',
  'ja': 'Japanese',
  'ko': 'Korean',
  'la': 'Latin',
  'lv': 'Latvian',
  'mk': 'Macedonian',
  'no': 'Norwegian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'pt-br': 'Portuguese (Brazil)',
  'ro': 'Romanian',
  'ru': 'Russian',
  'sr': 'Serbian',
  'sk': 'Slovak',
  'es': 'Spanish',
  'es-es': 'Spanish (Spain)',
  'es-us': 'Spanish (United States)',
  'sw': 'Swahili',
  'sv': 'Swedish',
  'ta': 'Tamil',
  'th': 'Thai',
  'tr': 'Turkish',
  'vi': 'Vietnamese',
  'cy': 'Welsh'
 
 🔥${setting.NomeDoBot}🔥`
conn.sendMessage(from, txt, text, {quoted: selo})
break

case 'infocontador':
await conn.sendMessage(from, infocontador(prefix), text, {quoted: selo})
break

case 'databoton':
await conn.sendMessage(from, databoton(prefix), text, {quoted: selo})
break

case 'infolistanegra':
await conn.sendMessage(from, infolistanegra(prefix), text, {quoted: selo})
break

case 'infopalavrão':
case 'infopalavrao':
await conn.sendMessage(from, infopalavrao(prefix), text, {quoted: selo})
break

case 'infobancarac':
await conn.sendMessage(from, infobancarac(prefix), text, {quoted: selo})
break

case 'gitbtt':
await conn.sendMessage(from, gitdobot(prefix), text, {quoted: selo})
break

case 'infobot':
case 'infoajuda':
sendButMessage(from,`
   ${NomeDoBot}

🄼🄴🄽🅄🅳︎🅴︎🄰🄹🅄🄳🄰

⏤͟͟͞͞⛥𝐨𝐥𝐚́ 𝐬𝐨𝐮 𝐚 𝐀𝐤𝐚𝐦𝐞, 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐠𝐞𝐦 𝐝𝐨 𝐚𝐧𝐢𝐦𝐞: 𝑨𝒌𝒂𝒎𝒆 𝒈𝒂 𝑲𝒊𝒍𝒍 𝐦𝐞𝐮 𝐢𝐧𝐭𝐮𝐢𝐭𝐨 𝐞 𝐝𝐞 𝐬𝐞𝐫𝐯𝐢𝐫 𝐦𝐞𝐮 𝐝𝐨𝐧𝐨, 𝐬𝐞 𝐝𝐢𝐯𝐞𝐫𝐭𝐢𝐫 𝐞𝐦 𝐠𝐫𝐮𝐩𝐨𝐬 𝐞𝐭𝐜...𝐚𝐠𝐨𝐫𝐚 𝐩𝐫𝐚 𝐪 𝐞𝐮 𝐬𝐢𝐫𝐯𝐨 𝐬𝐨𝐮 𝐮𝐦𝐚 𝐛𝐨𝐭 𝐦𝐮𝐥𝐭𝐢 𝐭𝐚𝐫𝐞𝐟𝐚𝐬 𝐝𝐨 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐚𝐝𝐚 𝐩𝐞𝐥𝐨:
 wa.me/+12514406419

☠︎︎𝐎𝐪 𝐞𝐮 𝐜𝐨𝐧𝐬𝐢𝐠𝐨 𝐟𝐚𝐳𝐞𝐫? 𝐜𝐨𝐦𝐨 𝐞𝐮 𝐝𝐢𝐬𝐬𝐞 𝐬𝐨𝐮 𝐮𝐦𝐚 𝐛𝐨𝐭 𝐦𝐮𝐥𝐭𝐢𝐭𝐚𝐫𝐞𝐟𝐚𝐬  𝐩𝐨𝐬𝐬𝐨 𝐜𝐫𝐢𝐚𝐫 𝐩𝐨𝐫 𝐞𝐱𝐞𝐦𝐩𝐥𝐨 𝐟𝐢𝐠𝐬,𝐛𝐚𝐢𝐱𝐚𝐫,𝐦𝐮́𝐬𝐢𝐜𝐚𝐬,𝐯𝐢̨𝐝𝐞𝐨𝐬,𝐩𝐮𝐱𝐚𝐫 𝐢𝐩,𝐜𝐞𝐩 𝐨𝐮 𝐩𝐫𝐨𝐭𝐞𝐠𝐞𝐫 𝐬𝐞𝐮 𝐠𝐫𝐮𝐩𝐨...𝐩𝐫𝐚 𝐩𝐨𝐝𝐞𝐫 𝐮𝐭𝐢𝐥𝐢𝐳𝐚𝐫 𝐦𝐞𝐮𝐬 𝐦𝐞𝐧𝐮𝐬 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐢𝐠𝐢𝐭𝐞 "${prefix}menu/${prefix}help"...𝐩𝐫𝐨𝐧𝐭𝐨 𝐣𝐚́ 𝐪 𝐯𝐜 𝐬𝐚𝐛𝐞 𝐚𝐬 𝐜𝐨𝐢𝐬𝐚𝐬 𝐛𝐚́𝐬𝐢𝐜𝐚𝐬 𝐯𝐚𝐦𝐨𝐬 𝐩𝐫𝐚 𝐨𝐪 𝐫𝐞𝐚𝐥𝐦𝐞𝐧𝐭𝐞 𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐬𝐚𝐫᭄

𓆩ꪶ🅸︎🅽︎🅵︎🅾︎🄼🄴🄽🅄ꫂ𓆪

⏤͟͟͞͞✗𝚖𝚎𝚗𝚞𝚊𝚍𝚖: 𝐬𝐚̃𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐬,𝐬𝐞𝐫𝐯𝐞 𝐩𝐚𝐫𝐚 𝐚𝐮𝐱𝐢𝐥𝐢𝐚𝐫 𝐨𝐬 𝐚𝐝𝐦 𝐞𝐱𝐞𝐦𝐩𝐥𝐨 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐬𝐞𝐫𝐯𝐞 𝐜𝐨𝐦𝐨 𝐞𝐱𝐞𝐦𝐩𝐥𝐨: 𝐚𝐛𝐫𝐢𝐫 𝐞 𝐟𝐞𝐜𝐡𝐚𝐫𝐠𝐩𝐬(${prefix}grupo a/${prefix}grupo f)
𝐦𝐚𝐫𝐜𝐚𝐫(${prefix}marcar)
𝐩𝐞𝐠𝐚𝐫 𝐨 𝐥𝐢𝐧𝐤 𝐝𝐨 𝐠𝐫𝐮𝐩𝐨(${prefix}linkgp) 
𝐛𝐚𝐧𝐢𝐫 𝐮𝐦 𝐚𝐥𝐯𝐨(${prefix}ban: marque a mensagem do alvo)

⏤͟͟͞͞✗𝚖𝚎𝚗𝚞𝚏𝚒𝚐:𝐨 𝐦𝐞𝐧𝐮 𝐝𝐞 𝐟𝐢𝐠 𝐞 𝐮𝐦 𝐦𝐞𝐧𝐮 𝐞𝐦 𝐪𝐮𝐞 𝐯𝐜 𝐜𝐫𝐢𝐚𝐫 𝐬𝐮𝐚𝐬 𝐟𝐢𝐠 𝐚𝐭𝐫𝐚𝐯𝐞𝐬 𝐝𝐞 𝐟𝐨𝐭𝐨𝐬 𝐨𝐮 𝐯𝐢̨𝐝𝐞𝐨𝐬.
𝐜𝐨𝐦𝐨 𝐜𝐫𝐢𝐚𝐫 𝐞𝐱𝐞𝐦𝐩𝐥𝐨:(${prefix}s,${prefix}sticker,${prefix}fsticker)𝐛𝐚𝐬𝐭𝐚𝐫 𝐯𝐜 𝐦𝐚𝐫𝐜𝐚𝐫 𝐚 𝐟𝐨𝐭𝐨 𝐨𝐮 𝐨 𝐯𝐢̨𝐝𝐞𝐨 𝐨𝐛𝐬:𝐧𝐞𝐜𝐞𝐬𝐬𝐚́𝐫𝐢𝐨 𝐮𝐦 𝐯𝐢𝐝𝐞𝐨 𝐪 𝐧𝐨 𝐦𝐚́𝐱𝐢𝐦𝐨 𝐭𝐞𝐧𝐡𝐚 10 𝐬𝐞𝐠 /𝐚𝐭𝐭𝐩: 𝐦𝐚𝐢𝐬 𝐨𝐪 𝐞 𝐚𝐭𝐭𝐩? 𝐎 𝐚𝐭𝐭𝐩 𝐬𝐞𝐫𝐯𝐞𝐫 𝐩𝐚𝐫𝐚 𝐪 𝐯𝐜 𝐜𝐫𝐢𝐚𝐫 𝐟𝐢𝐠 𝐜𝐨𝐦 𝐨 𝐧𝐨𝐦𝐞 𝐨𝐮 𝐭𝐞𝐱𝐭 𝐪 𝐯𝐜 𝐝𝐞𝐬𝐞𝐣𝐚𝐫 𝐜𝐨𝐦𝐨 𝐬𝐞 𝐮𝐭𝐢𝐥𝐢𝐳𝐚𝐫 𝐨 𝐚𝐭𝐭𝐩 
𝐞𝐱𝐞𝐦𝐩𝐥𝐨:(${prefix}attp "text")

⏤͟͟͞͞✗𝚖𝚎𝚗𝚞 𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊:𝐧𝐞𝐬𝐬𝐞 𝐦𝐞𝐧𝐮 𝐯𝐜 𝐩𝐨𝐝𝐞 𝐛𝐚𝐢𝐱𝐚𝐫(audiomp3,vídeos, hentai,img e etc)𝐜𝐨𝐦𝐨 𝐬𝐞 𝐮𝐭𝐢𝐥𝐢𝐳𝐚𝐫 𝐞𝐱𝐞𝐦𝐩𝐥𝐨𝐬:
𝐩𝐥𝐚𝐲𝐦𝐩3 𝐨𝐮 𝐚𝐮𝐝𝐢𝐨(${prefix}play "text")
𝐩𝐥𝐚𝐲𝐦𝐩4 𝐨𝐮 𝐯𝐢𝐝𝐞𝐨(${prefix}playmp4 "text")
𝐡𝐞𝐧𝐭𝐚𝐢(${prefix}hentai)𝐢𝐫𝐚́ 𝐠𝐞𝐫𝐚𝐫 𝐮𝐦𝐚 𝐢𝐦𝐠 𝐡𝐞𝐧𝐭𝐚𝐢 😈
𝐢𝐦𝐠(${prefix}img "text")𝐢𝐫𝐚́ 𝐩𝐞𝐬𝐪𝐮𝐢𝐬𝐚𝐫 𝐚 𝐢𝐦𝐠 𝐪𝐮𝐞 𝐯𝐜 𝐝𝐞𝐬𝐞𝐣𝐚𝐫.

⏤͟͟͞͞✗𝚖𝚎𝚗𝚞 𝚋𝚛𝚒𝚗𝚌𝚊𝚍𝚎𝚒𝚛𝚊𝚜:𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐩𝐚𝐫𝐚 𝐳𝐨𝐚𝐫 𝐬𝐞𝐮𝐬 𝐚𝐦𝐢𝐠𝐨𝐬 𝐞 𝐦𝐢𝐧𝐢 𝐣𝐨𝐠𝐨𝐬 
𝐞𝐱𝐞𝐦𝐩𝐥𝐨 𝐝𝐞 𝐣𝐨𝐠𝐨𝐬:(ppt,jogo da velha,anagrama e etc...)

⏤͟͟͞͞✗𝚖𝚎𝚗𝚞 𝚊𝚕𝚝𝚎𝚛𝚊𝚍𝚘𝚛𝚎𝚜:𝐮𝐬𝐞 𝐞𝐬𝐬𝐞 𝐦𝐞𝐧𝐮 𝐜𝐨𝐦 𝐛𝐚𝐬𝐞 𝐞𝐦 𝐞𝐝𝐢𝐭𝐚𝐫 𝐯𝐢𝐝𝐞𝐨𝐬,𝐚𝐮𝐝𝐢𝐨𝐬 𝐞 𝐟𝐨𝐭𝐨𝐬. (reverter,estourar, afinar)

𝐁𝐞𝐦 𝐚𝐤𝐢 𝐭𝐞𝐫𝐦𝐢𝐧𝐚𝐫 𝐚 𝐦𝐢𝐧𝐡𝐚 𝐚𝐣𝐮𝐝𝐚𝐫 𝐞𝐬𝐩𝐞𝐫𝐨 𝐪 𝐯𝐜 𝐬𝐞 𝐝𝐢𝐯𝐢𝐫𝐭𝐚𝐫
𓆩ꪶ🆂︎🄴🅽︎🄿🅰︎🄸ꫂ𓆪. 
𝐂𝐚𝐬𝐨 𝐚𝐢𝐧𝐝𝐚 𝐭𝐞𝐧𝐡𝐚 𝐚𝐥𝐠𝐮𝐦𝐚 𝐝𝐮́𝐯𝐢𝐝𝐚 𝐞𝐧𝐭𝐫𝐞 𝐞𝐦 𝐜𝐨𝐧𝐭𝐚𝐭𝐨 𝐜𝐨𝐦 𝐦𝐞𝐮 𝐜𝐡𝐞𝐟𝐞(${prefix}infodono)

✰𝐀𝐬𝐬:
${NickDono}
                ⬇️𝐏𝐑𝐎𝐒𝐒𝐈𝐆𝐀⬇️`, 
`${NomeDoBot}`, 
[{buttonId:`${prefix}menu`, buttonText: {displayText:`OK  ${NomeDoBot}`}, type: 1}]);
break

case 'git':
case 'gitdobot':
case 'gitbot':  
buffer = await getBuffer(`${logo3}`)
sendButImage(from,`𝐆𝐈𝐓 𝐀𝐊𝐀𝐌𝐄-𝐁𝐎𝐓_𝐎𝐅𝐂\n 𝐍𝐚̃𝐨 𝐩𝐞𝐫𝐜𝐚 𝐚𝐬 𝐚𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐜𝐨̃𝐞𝐬: (https://youtube.com/channel/UCa0_EVxukGIkE2mHJB4Ml_A )\n𝐂𝐑𝐄𝐃𝐈𝐓𝐎𝐒 𝐁𝐘 𝐃𝐈𝐀𝐁𝐋𝐎`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix}termuxx`, buttonText: {displayText: '🌀 𝐓𝐞𝐫𝐦𝐮𝐱 0.117 🌀'}, type: 1},
{buttonId: `${prefix}acodee`, buttonText: {displayText: '⚡ 𝐀𝐜𝐨𝐝𝐞 1.2.143 ⚡'}, type:1},
{buttonId: `${prefix}Akamee`, buttonText: {displayText: '☆𝐀𝐊𝐀𝐌𝐄2.1𝐙𝐈𝐏'}, type:1}]);
break;

//========(FUNÇÕES-PREMIUM-AQUI)=======\\

case 'termuxx':
reply('*Enviando o termux. versão 0.117*')
vartermux = 'https://www.mediafire.com/file/plyu1fbkc9hpss4/Termux_117.apk/file'
const term = await mediafireDl(vartermux)
sendFileFromUrl(term[0].link, document, {mimetype: term[0].mime, filename: term[0].nama, quoted: info})
break

case 'apkale':
reply('https://www.mediafire.com/file/tvto6h42cy2669d/ALEATORY_BOT_1.0.apk/file')
break

case 'akamee':
reply('*Enviando já a 𝐀𝐊𝐀𝐌𝐄2.1*')
Akame = 'https://www.mediafire.com/file/c4qocf8j94240e5/AKAME-BOT2.1.zip/file'
const akam = await mediafireDl(Akame)
sendFileFromUrl(akam[0].link, document, {mimetype: akam[0].mime, filename: akam[0].nama, quoted: info})
break

case 'imune1':
reply('*Enviando já:*\n「 𝟏𝟎𝐊 𖫢 𝐁𝐈𝐒𝐇𝐎𝐏 」 [Azul]')
imune1 = 'https://www.mediafire.com/file/xx6oe3jkj6rd1w6/10K Bishop [Azul].apk/file'
const imunshop = await mediafireDl(imune1)
sendFileFromUrl(imunshop[0].link, document, {mimetype: imunshop[0].mime, filename: imunshop[0].nama, quoted: info})
break  

case 'acodee':
reply('*Enviando o Acode. versão 1.2.143*')
varacode = 'https://www.mediafire.com/file/39o3dijk4tqyk2f/Acode_base.apk/file'
const acod = await mediafireDl(varacode)
sendFileFromUrl(acod[0].link, document, {mimetype: acod[0].mime, filename: acod[0].nama, quoted: info})
break

case 'zarchive':
reply('*Enviando o zarchive versão pro💎*')
zarchi = 'https://www.mediafire.com/file/1zoqguo9x5zkapx/ZArchiver_Pro_base.apk/file'
const arquiv = await mediafireDl(zarchi)
sendFileFromUrl(arquiv[0].link, document, {mimetype: arquiv[0].mime, filename: arquiv[0].nama, quoted: info})
break

case 'metadinhas':
case 'metadinha': 
if(!isPremium) return reply(enviar.msg.premium)
reply(enviar.espere)
couple = await fetchJson(`https://api.dapuhy.xyz/api/randomimage/couple?apikey=dappakntlll`)
metadinha1 = await getBuffer(couple.result.pria)
await conn.sendMessage(from, metadinha1, image, {quoted: info})
metadinha2 = await getBuffer(couple.result.wanita)
await conn.sendMessage(from, metadinha2, image, {quoted: info})
break

case 'ler': 
case 'ocr':   
case 'lerfoto':  
if(!isPremium) return reply(enviar.msg.premium)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const media = await conn.downloadAndSaveMediaMessage(encmedia)
reply(enviar.espere)
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply('Somente fotos!')
}
break

case 'premiumlist':
if(!isPremium) return reply(enviar.msg.premium)   
tkks = '╭────*「 *PREMIUM USER👑* 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰──────*「 *${setting.NomeDoBot}* 」*────`
await conn.sendMessage(from, tkks.trim(), extendedText, {quoted: info, contextInfo: {"mentionedJid": premium}})
break

case 'delete':
case 'del':
case 'd':  
if (!isPremium && !SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe && !isGroupAdmins) return reply(enviar.msg.premium)
if (!isGroup)return reply(enviar.msg.grupo)
try {
await conn.deleteMessage(from, {id: info.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
} catch {
reply('Só é possível deletar mensagens minhas')
}
break

case 'getquoted':
case 'getinfo':  
case 'get':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'gerarcpf':
if(!isPremium) return reply(enviar.msg.premium)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
await conn.sendMessage(from, `CPF gerado com sucesso : ${cpf}`, text, {quoted: info})
break



case 'placa':
if(!isPremium) return reply(enviar.msg.premium)  
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 54330235`)
query = args.join(" ")
get_result = await fetchJson(`http://api.ifindconsultas.tk/?token=2d6de38e-6c92-485e-bacb-db64139f8a02&placa=${query}`)
x = get_result
k = `CPF : ${x.cpf}
NOME: ${x.nome}
PLACA : ${x.placa}
CHASSI : ${x.chassi}
RENAVAM : ${x.renavam}
CIDADE : ${x.cidade}
UF : ${x.uf}
CATEGORIA : ${x.categoria}
COMBUSTÍVEL : ${x.combustivel}`
reply(k)
break 

case 'ddd':
if(!isPremium) return reply(enviar.msg.premium)
if (args.length < 1) return reply(`Use ${prefix + command} 81`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
conn.sendMessage(from, dddlist, text, {quoted: info})	
break

case 'covid':
blarp = await fetchJson(`https://akame-api.herokuapp.com/api/consulta/covidbr?apikey=TK4P2vjJ`)

blarp = blarp.resultado

rsd = `Confirmados: ${blarp.confirmados}\n`
rsd += `Mortos: ${blarp.mortos}\n`
rsd += `Recuperados: ${blarp.recuperados}\n`
rsd += `Dados Atualizados: ${blarp.dados_atualizado}`
reply(rsd)
break

case 'encurtalink':
if(!isPremium) return reply(enviar.msg.premium)
if(args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://youtube.com/c/aleatoryconteudos`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
await limitAdd(sender)
break

case 'ip':
txt = args.join(" ")
if(txt.length < 2) return reply('Cadê o IP?, digita ae')
hack = await fetchJson(`https://akame-api.herokuapp.com/api/consulta/ip?ip=${txt}&apikey=ay9OWA6P`)

hack = hack.resultado

rsd = `𝐂𝐎𝐍𝐒𝐔𝐋𝐓𝐀 𝐃𝐄 𝐈𝐏`
rsd += `\n\n𝐈𝐩: ${hack.ip}\n`
rsd += `𝐓𝐢𝐩𝐨: ${hack.tipo}\n`
rsd += `𝐂𝐨𝐧𝐭𝐢𝐧𝐞𝐧𝐭𝐞: ${hack.continente}\n`
rsd += `𝐂𝐨𝐧𝐭𝐢𝐧𝐞𝐧𝐭𝐞 𝐒𝐢𝐠𝐥𝐚: ${hack.continente_sigla}\n`
rsd += `𝐏𝐚𝐢́𝐬: ${hack.país}\n`
rsd += `𝐏𝐚𝐢́𝐬 𝐒𝐢𝐠𝐥𝐚: ${hack.paÍs_sigla}\n`
rsd += `𝐂𝐚𝐩𝐢𝐭𝐚𝐥: ${hack.capital}\n`
rsd += `𝐃𝐃𝐃: ${hack.ddd}\n`
rsd += `𝐏𝐚𝐢́𝐬𝐞𝐬 𝐕𝐢𝐳𝐢𝐧𝐡𝐨𝐬: ${hack.países_vizinhos}\n`
rsd += `𝐂𝐢𝐝𝐚𝐝𝐞: ${hack.cidade}\n`
rsd += `𝐑𝐞𝐠𝐢𝐚̃𝐨: ${hack.região}\n`
rsd += `𝐋𝐚𝐭𝐢𝐭𝐮𝐝𝐞: ${hack.latitude}\n`
rsd += `𝐋𝐨𝐧𝐠𝐢𝐭𝐮𝐝𝐞: ${hack.longitude}\n`
rsd += `𝐀𝐒𝐍: ${hack.asn}\n`
rsd += `𝐎𝐫𝐠𝐚̃𝐨: ${hack.orgão}\n`
rsd += `𝐈𝐒𝐏: ${hack.isp}\n`
rsd += `𝐅𝐮𝐬𝐨 𝐇𝐨𝐫𝐚́𝐫𝐢𝐨: ${hack.fuso_horário}\n`
rsd += `𝐌𝐨𝐞𝐝𝐚: ${hack.moeda}\n`
rsd += `𝐌𝐨𝐞𝐝𝐚 𝐜𝐨́𝐝: ${hack.moeda_code}\n`
rsd += `𝐒𝐢𝐦𝐛𝐨𝐥𝐨 𝐝𝐚 𝐌𝐨𝐞𝐝𝐚: ${hack.símbolo_da_moeda}\n`

rsd +=`\n𝐁𝐘:${NomeDoBot}`
reply(rsd)
break

case 'cep':
if(!isPremium) return reply(enviar.msg.premium)  
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 54330235`)
query = args.join(" ")
get_result = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/tools/cep?apikey=apiteam&cep=${query}`)
x = get_result.resultado
k = `𝐜𝐞𝐩 : ${x.cep}
𝐋𝐨𝐠𝐫𝐚𝐝𝐨𝐮𝐫𝐨: ${x.logradouro}
𝐁𝐚𝐢𝐫𝐫𝐨 : ${x.bairro}
𝐋𝐨𝐜𝐚𝐥𝐢𝐝𝐚𝐝𝐞 : ${x.localidade}
𝐔𝐟 : ${x.uf}
𝐈𝐁𝐆𝐄 : ${x.ibge}
𝐆𝐈𝐀 : ${x.gia}
𝐃𝐃𝐃 : ${x.ddd}
𝐒𝐢𝐚𝐟𝐢 : ${x.siafi}`
reply(k)
break 

//===========(ADMS-FUNÇÕES-AKI)=========\\

case 'calculadora':
case 'calcular':  
case 'calc':
teks = args.join(" ")
if(!body.includes('1') && !body.includes('2') && !body.includes('3') && !body.includes('4') && !body.includes('5') && !body.includes('6') && !body.includes('7') && !body.includes('8') && !body.includes('9') && !body.includes('10')) return reply('KD O NÚMERO?') 
console.log('[', color('EVAL', 'silver'),']', color(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
return reply(JSON.stringify(eval(`${teks}`),null,'\t'))
break 

case 'status':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins && !SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.adm)
statuszada =
`╭╼╼╾❲ S T A T U S ❳╼╼╾╮
│
│➱ Antiaudio: ${isAntiAudio? '🅞︎🅝︎' : 'Ⓞ︎Ⓕ︎Ⓕ︎'}
│➱ Antidocumento: ${Antidoc ? '🅞︎🅝︎' : 'Ⓞ︎Ⓕ︎Ⓕ︎'}
│➱ Antifake: ${isAntifake ? '🅞︎🅝︎' : 'Ⓞ︎Ⓕ︎Ⓕ︎'}
│➱ Antiimg: ${isAntiImg? '🅞︎🅝︎' : 'Ⓞ︎Ⓕ︎Ⓕ︎'}
│➱ Antilink: ${isAntiLink ? '🅞︎🅝︎' : 'Ⓞ︎Ⓕ︎Ⓕ︎'}
│➱ Antiligação: ${isAnticall ? '🅞︎🅝︎' : 'Ⓞ︎Ⓕ︎Ⓕ︎'}
│➱ AntiPv-Block: ${isAntiPv ? '🅞︎🅝︎' : 'Ⓞ︎Ⓕ︎Ⓕ︎'}
│➱ AntilinkHard: ${isAntiLinkHard ? '🅞︎🅝︎' : 'Ⓞ︎Ⓕ︎Ⓕ︎'}
│➱ LimiteCaracteres: ${isAntiFlood ? '🅞︎🅝︎' : 'Ⓞ︎Ⓕ︎Ⓕ︎'}
│➱ AntiPalavrão: ${isPalavrão ? '🅞︎🅝︎' : 'Ⓞ︎Ⓕ︎Ⓕ︎'}
│➱ Antivideo: ${isAntiVid ? '🅞︎🅝︎' : 'Ⓞ︎Ⓕ︎Ⓕ︎'}
│➱ AntiLocalização: ${Antiloc ? '🅞︎🅝︎' : 'Ⓞ︎Ⓕ︎Ⓕ︎'}
│➱ Ativiewonce: ${isAntiVO ? '🅞︎🅝︎' : 'Ⓞ︎Ⓕ︎Ⓕ︎'}
│➱ Bemvindo: ${isWelkom ? '🅞︎🅝︎' : 'Ⓞ︎Ⓕ︎Ⓕ︎'}
│➱ Simih: ${isSimi ? '🅞︎🅝︎' : 'Ⓞ︎Ⓕ︎Ⓕ︎'}
│➱ Modo brincadeira: ${isModobn ? '🅞︎🅝︎' : 'Ⓞ︎Ⓕ︎Ⓕ︎'}
│
╰╼╾❲ ${NomeDoBot} ❳╼╾╯`,

wew = await getBuffer(`${logo}`)
conn.sendMessage(from, wew, image, {caption: statuszada, thumbnail: null})
break

case 'nomegp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
blat = args.join(" ")
conn.groupUpdateSubject(from, `${blat}`)
conn.sendMessage(from, 'Sucesso, alterou o nome do grupo', text, {quoted: info})
break

case 'descgp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.adm)
blabla = args.join(" ")
conn.groupUpdateDescription(from, `${blabla}`)
conn.sendMessage(from, 'Sucesso, alterou a descrição do grupo', text, {quoted: info})
break

case 'setfotogp':
case 'fotogp':  
addFilter(from)
if (!isGroup) return reply('Só pode ser utilizado em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser ADM')
if (!isBotGroupAdmins) return reply('O bot Precisa ser ADM')
if (!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
const ftgp = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: info
const medipp = await conn.downloadAndSaveMediaMessage(ftgp)
await conn.updateProfilePicture(from, medipp)
reply(`Foto do grupo alterada com sucesso`) 
break

case 'atividade':
case 'atividades':  
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(enviar.msg.adm)
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
teks = `*Atividade dos membros do grupo:*\n\n`
mem = []
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.jid) >=0) {
var indnum = numbersIds.indexOf(obj.jid)
teks += `*• Membro:* @${countMessage[ind].numbers[indnum].jid.split('@')[0]}\n*• Comandos:* ${countMessage[ind].numbers[indnum].cmd_messages}\n*• Mensagens:* ${countMessage[ind].numbers[indnum].messages}\n\n----------------------------------\n\n`
} else {
teks += `*• Membro:* @${obj.jid.split('@')[0]}\n*• Comandos:* 0\n*• Mensagens:* 0\n\n----------------------------------\n\n`
}
mem.push(obj.jid)
}
conn.sendMessage(from, teks, extendedText, {quoted: info, contextInfo:{mentionedJid: mem}})
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'linkgp':
case 'linkgroup':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
linkgc = await conn.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'promover':
if (!isGroup) return reply(enviar.msg.group)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
const dlptu = body.slice(10)
if (dlptu.length > 14)return reply(`Exemplo : ${prefix}promover @55439220420`) 
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
ytb = 'Promovido com sucesso\n'
for (let _ of mentioned) {
ytb += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
conn.groupRemove(from, mentioned)
} else {
mentions(`Ok, chefe. esse(a) aqui: @${mentioned[0].split('@')[0]} agora é admin do grupo!`, mentioned, true)
conn.groupMakeAdmin(from, mentioned)
}
pao = fs.readFileSync('./audios/promover.mp3')
conn.sendMessage(from, pao, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
break

case 'rebaixar':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
const dlp = body.slice(15)
if (dlp.length >= 15)return reply(`Exemplo : ${prefix}rebaixar @55439220420`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
ytb = 'Rebaixado com sucesso\n'
for (let _ of mentioned) {
ytb += `@${_.split('@')[0]}\n`
}
mentions(ytb, mentioned, true)
await conn.groupRemove(from, mentioned)
} else {
mentions(`Ok, chefe. esse(a) aqui: @${mentioned[0].split('@')[0]} perdeu o adm com sucesso!`, mentioned, true)
await conn.groupDemoteAdmin(from, mentioned)
}
pao = fs.readFileSync('./audios/rebaixar.mp3')
conn.sendMessage(from, pao, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
break

case 'grupo': 
if (!isGroup) return reply(`SÓ EM GRUPO`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMININASTROR`)
if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
if (args[0] === 'a') {
reply(`*GRUPO ABERTO COM SUCESSO*`)
await conn.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'f') {
reply(`*GRUPO FECHADO COM SUCESSO*`)
await conn.groupSettingChange(from, GroupSettingChange.messageSend, true)
}				 
break 

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins)return reply(enviar.msg.adm)
conn.updatePresence(from, Presence.composing)
ppUrl = await conn.getProfilePicture(from)
buffer = await getBuffer(ppUrl)
conn.sendMessage(from, buffer, image, {quoted: info, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`, thumbnail: null})
break 

case 'hidetag':
try {
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
var value = body.slice(9)
var group = await conn.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: info
}
conn.sendMessage(from, options, text)
} catch {
reply('Error, tente novamente...')
}
break

case 'totag':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if ((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
file = await conn.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await conn.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: info
}
ini_buffer = fs.readFileSync(file)
conn.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
encmediau = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
file = await conn.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await conn.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: info
}
ini_buffer = fs.readFileSync(file)
conn.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !info.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
file = await conn.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await conn.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4', duration: 999999999,
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: info
}
ini_buffer = fs.readFileSync(file)
conn.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
 } else if ((isMedia && !info.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
file = await conn.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await conn.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/gif',
contextInfo: { mentionedJid: mem },
quoted: info
}
ini_buffer = fs.readFileSync(file)
conn.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else if ((isMedia && !info.message.videoMessage || isQuotedDocument) && args.length == 0) {
encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
file = await conn.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await conn.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'text/plain',
contextInfo: { mentionedJid: mem },
quoted: info
}
ini_buffer = fs.readFileSync(file)
conn.sendMessage(from, ini_buffer, document, options)
fs.unlinkSync(file)
}  else if ((isMedia && !info.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
file = await conn.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await conn.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4', duration: 999999999,
contextInfo: { mentionedJid: mem },
quoted: info
}
ini_buffer = fs.readFileSync(file)
conn.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + command}`)
}
break

case 'marcar':{
if (!isGroup) return
conn.updatePresence(from, Presence.composing)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
tujuh = fs.readFileSync('./audios/marcar.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
}
members_id = []
jrp = (args.length > 1) ? body.slice(8).trim() : ''
jrp += '\n\n'
for (let mem of groupMembers) {
jrp += `*⪧* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
} await sleep (5000)
mentions(jrp, members_id, true)
break

case 'marcar2':
members_id = []
ytb = (args.length > 1) ? body.slice(9).trim() : ''
ytb += '\n\n'
for (let mem of groupMembers) {
ytb += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
} 
break

case 'kick':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
const dltp = body.slice(6)
if (dltp.length > 14)return reply(`Exemplo : ${prefix}kick @55439220420`) 
tujuh = fs.readFileSync('./audios/kick.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o alvo que você quer remover do grupo!') 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Esse ai ja foi kkkk :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
conn.groupRemove(from, mentioned)
} else { 
  await sleep(5000)
mentions(`Alvo removido com sucesso  : @${mentioned[0].split('@')[0]}`, mentioned, true)
conn.groupRemove(from, mentioned)
}
break

case 'ban':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar. msg.Badmin)
if (info.message.extendedTextMessage === null || info.message.extendedTextMessage === undefined) {
tujuh = fs.readFileSync('./audios/ban1.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
} if(info.message.extendedTextMessage.contextInfo.participant == setting.numerodono) return reply('Não posso remover meu dono.')
if (info.message.extendedTextMessage.contextInfo.participant == botNumber) return reply('C acha que sou besta?, vou me remover não.')
setTimeout(function() {}, 2000);
if (info.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = info.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.length > 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
conn.groupRemove(from, M_exe)
} else {
conn.groupRemove(from, [exe1[0]])
}
} else {
exe1 = info.message.extendedTextMessage.contextInfo.participant
conn.groupRemove(from, [exe1])
}
pao = fs.readFileSync('./audios/ban2.mp3')
conn.sendMessage(from, pao, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
break

case 'add':
try {
if (!isGroup) return enviar("Somente em grupos!")
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return enviar("Não hmmmm")  
if (!isBotGroupAdmins) return enviar(`Tornar bot como administrador de grupo!`)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
response = await dark.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return enviar('O alvo já está no grupo!')
if(inv[0].code == 403) return enviar('Erro, conta privada do usuário')
if(inv[0].code == 408) return enviar('Erro, usuário acabou de sair')
if(inv[0].code == 401) return enviar('Erro, porque o bot está bloqueado pelo alvo ')
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
response = await dark.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return enviar('O alvo já está no grupo! ')
if(inv[0].code == 403) return enviar('Falhou, porque em privado ')
if(inv[0].code == 408) return enviar('Falha, porque o alvo acabou de sair ')
if(inv[0].code == 401) return enviar('Falha, porque o bot está bloqueado pelo alvo ')
}
} catch {
return 
}
break


//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'apresentar':
case 'apr':  
info = `Bem vindo(a) ao grupo : ${groupName}


👾 •𝑬𝑵𝑻𝑹𝑶𝑼 𝑺𝑬 𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•
📸 •F𝜣T𝜣
👻 •N𝜣ME
📌 •CID∆DE
🗓️ •ID∆DE
⚠️ •LEI∆ ∆S REGR∆S D𝜣 GRUP𝜣

*APROVEITE O GRUPO!*`
conn.sendMessage(from, info, text, {quoted: selo})
break

case 'papof':
case 'regraspp':  
info = `*【᥀·࣭ᨘ࣪⚠️ENTR❍̸U? TERΔ 5 MIN⏰ PΔRΔR SE 
ΔPRESENTΔR🔥 ❍̸U SERΔ 【❌REM❍VID❍❌】*
                 ──╌╌╌┈⊰★⊱┈╌╌╌┈─
                  
              𝙏𝘼𝙂𝙎➭᜔ׂ࠭ ⁸₈⁸ | 𝟖𝟖𝟖 | 𝟠𝟠𝟠 | ེི⁸⁸⁸*

❌ ENTROU NO 
GRUPO INTERAJA, NÃO PRECISAMOS DE ENFEITES,INATIVOS SERAO REMOVIDOS ❌* 

/﹋\
<,︻╦╤─ ҉ - -----💥 
/﹋\ 🅴 🅱🅴🅼 🆅🅸🅽🅳🅾 🆂🅴🆄🆂 🅵🅸🅻🅷🅾🆂 🅳🅰 🅿🆄🆃🅰`
conn.sendMessage(from, info, text, {quoted: selo})
break

case 'bateria':
reply('《 Aguarde, esta informação é apenas para saber a porcentagem da bateria do celular do Bot 》')  
anu = await getBuffer(`https://eruakorl.sirv.com/Bot%20dudinha/bateria3.jpg?text.0.text=${battre}&text.0.position.gravity=center&text.0.size=15&text.0.color=e8fd23&text.0.opacity=61&text.0.font.family=Orbitron&text.0.background.opacity=74`)
conn.sendMessage(from, anu, image, {quoted: { key: { participant: `0@s.whatsapp.net`, ...{}}, message: { "imageMessage": { "caption": `${battre}%🔋`,}}}})
break

case 'autoban':
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
var ind = dbids.indexOf(from)
if(isAdeusCara) {
adeuscara[ind].actived = true
} else {
adeuscara.push({
groupId: from,
actived: true,
number: []
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Ativou com sucesso o recurso de autoban neste grupo✔️`)
} else if (Number(args[0]) === 0) {
var ind = dbids.indexOf(from)						
if(isAdeusCara) {
adeuscara[ind].actived = false
} else {
adeuscara.push({
groupId: from,
actived: false,
number: []
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Desativou com sucesso o recurso de autoban neste grupo✔️`)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'listban':
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins) return reply(enviar.msg.adm)
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar 😡:*\n'
for(i=0;i<adeuscara[ind].number.length;++i) {
teks += `➤ *${adeuscara[ind].number[i]}*\n`
}
teks += '*Esses ai vou descer meu martelo do ban 🥵*'
reply(teks)
break  

case 'addautorm':
case 'addautoban':
case 'listanegra':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
var ind = dbids.indexOf(from)
if(isAdeusCara) {
var numind = adeuscara[ind].number.indexOf(args[0])
if(numind >= 0) return reply('*Esse Número ja esta incluso*')
adeuscara[ind].number.push(args[0])
} else {
adeuscara.push({
groupId: from,
actived: false,
number: [args[0]]
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número adicionado a lista de autoban*`)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
var numind = adeuscara[ind].number.indexOf(args[0])
if(numind < 0) return reply('*Esse número não está incluso*')
adeuscara[ind].number.splice(numind, 1)
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número removido a lista de autoban*`)
break

case 'banghost':
case 'banghosts':  
if(!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) >= 0) {
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.jid) >=0) { 
var indnum = numbersIds.indexOf(obj.jid)
if(countMessage[ind].numbers[indnum].messages <= args[0]) {
if(groupAdmins.includes(obj.jid)) {
mentions(`@${obj.jid} ta liberado da inspeção por ser admin`, [obj.jid], true)
} else {
conn.groupRemove(from, [obj.jid])
}
}
} else {
if(groupAdmins.includes(obj.jid)) {
mentions(`@${obj.jid} ta liberado da inspeção por ser admin`, [obj.jid], true)
} else {
conn.groupRemove(from, [obj.jid])
}
}
}
}
break

case 'setprefix':
if (args.length < 1) return
if (!SoDono && !isCmdy && !isnit && !info.key.fromMe) return reply('*só aceito ordens do meu mestre!*')
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: *${prefix}*`)
break

case 'nickdono':
if (args.length < 1) return
if (!SoDono && !isCmdy && !isnit && !info.key.fromMe) return reply('*só aceito ordens do meu mestre!*')
NickDono = args[0]
setting.NickDono = NickDono
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
akameezinha = reply(`O NickDono foi alterado com sucesso para: *${NickDono}*`)
conn.sendMessage(from, akameezinha, {
quoted: info})
break

case 'numerodono':
if (args.length < 1) return
if (!SoDono && !isCmdy && !isnit && !info.key.fromMe) return reply('*só aceito ordens do meu mestre!*')
setting.numerodono = args[0]
setting.numerodono = setting.numerodono
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O Número do Dono foi alterado com sucesso para: *${setting.numerodono}*`)
break

case 'nomedobot':
case 'nomebot':
if (args.length < 1) return
if (!SoDono && !isCmdy && !isnit && !info.key.fromMe) return reply('*só aceito ordens do meu mestre!*')
NomeDoBot = args[0]
setting.NomeDoBot = NomeDoBot
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O Nome do bot foi alterado com sucesso para: *${NomeDoBot}*`)
break

case 'fotomenu':
case 'fundomenu':
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage && !isQuotedVideo) return reply("Marque uma imagem ou vídeo")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
owgi = await conn.downloadMediaMessage(boij)
res = await upload(owgi)
logoslink.logo = logo
logo = res
fs.writeFileSync('./logos/logos.json', JSON.stringify(logoslink, null, '\t'))
reply(`A foto do menu foi alterada com sucesso para: ${logo}`)
} else {
reply(`Mande uma imagem/vídeo com a legenda ${prefix + command}`)
}
break

case 'setprefixs':
if (args.length < 1) return
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break

case 'nomegp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
await conn.groupUpdateSubject(from, `${body.slice(9)}`)
await conn.sendMessage(from, 'Sucesso, alterou o nome do grupo', text, {quoted: info})
break

case 'fotobot':
conn.updatePresence(from, Presence.composing)
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
enmedia = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(enmedia)
await conn.updateProfilePicture(botNumber, media)
reply('Obrigado pelo novo perfil😗')
break

case 'clonar':
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt) return reply('Você quem é o proprietário?')
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await conn.getProfilePicture(id)
buffer = await getBuffer(pp)
conn.updateProfilePicture(botNumber, buffer)
mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
}
break

case 'leveling':
if (!isGroup) return reply('Só em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser adm')
if (args.length < 1) return reply('Ative pressione 1, Desativar pressione 0')
if (Number(args[0]) === 1) {
if (isLevelingOn) return reply('*O recurso de nível já estava ativo antes*')
_leveling.push(from)
fs.writeFileSync('./datab/usuarios/leveling.json', JSON.stringify(_leveling))
reply(enviar.levelon) 
} else if (Number(args[0]) === 0) {
if (!isLevelingOn) return reply(`O recurso de level já está Desativado neste grupo.`)
_leveling.splice(from, 1)
fs.writeFileSync('./datab/usuarios/leveling.json', JSON.stringify(_leveling))
reply(enviar.leveloff)
} else {
reply('「* Adicionar parâmetro 1 ou 0 ')
}
break

case 'level':
if (!isLevelingOn) return reply(`*O recurso de level está Desativado, para ativar consulte algum adm e mande ele digitar : ${prefix}leveling 1`)
if (!isGroup) return reply(enviar.msg.grupo)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return reply(enviar.levelnol)
sem = sender.replace('@s.whatsapp.net','')
                resul = `     
┏┉┉━═『✯✯✯✯✯』═━┉┉┓
⎊           𖠌𝙻𝙴𝚅𝙴𝙻𝙸𝙽𝙶𖠌                                                                                                
┗┉┉━═『✯✯✯✯✯』═━┉┉┛
║│⿻͜͡ ✑❲𝙽𝚘𝚖𝚎❳: ${pushname}
║│
║│⿻͜͡ ✑ ❲𝙽𝚞́𝚖𝚎𝚛𝚘❳: ${sender.split("@s.whatsapp.net")[0]} 
║│
║│⿻͜͡ ✑ ❲𝚇ᴘ❳: ${userXp}
║│
║│⿻͜͡ ✑ ❲𝙻ᴇᴠᴇʟ❳ : ${userLevel}
║│
║│⿻͜͡ ✑ ❲𝙿ᴀᴛᴇɴᴛᴇ❳ : ${patt}
║╰──────────────┓
║➪𝐁𝐲: ${NickDono}        
┗══━®[✯✯✯✯✯✯]©━══━┛`
await conn.sendMessage(from, resul, text, { quoted: info})
.catch(async (err) => {
console.error(err)
await reply(`Error!\n${err}`)
})
break

case 'transmissão':
case 'transmitir2':  
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply('Quem é Você?')
anu = await conn.chats.all()
if (isMedia && !info.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
buff = await conn.downloadMediaMessage(encmedia)
for (let _ of anu) {
conn.sendMessage(_.jid, buff, image, {caption: `[ TRANSMISSÃO ]\n\n${body.slice(13)}`})
}
reply('Transmissão enviada')
} else if (isMedia && !info.message.audioMessage || isQuotedAudio) {
encmediaa = isQuotedAudio ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: info
buff = await conn.downloadMediaMessage(encmediaa)
for (let _ of anu) {
conn.sendMessage(_.jid, buff, audio, {caption: `[ TRANSMISSÃO DE AUDIO ]\n\n${body.slice(13)}`})
}
reply('Transmissão enviada')
} else if (isMedia && !info.message.stickerMessage || isQuotedSticker) {
encmediaa = isQuotedSticker ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: info
buff = await conn.downloadMediaMessage(encmediaa)
for (let _ of anu) {
conn.sendMessage(_.jid, buff, sticker, {caption: `[ TRANSMISSÃO DE STICKER ]\n\n${body.slice(13)}`})
}
reply('Transmissão enviada')
} else if (isMedia && !info.message.videoMessage || isQuotedVideo) {
encmediaa = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: info
buff = await conn.downloadMediaMessage(encmediaa)
for (let _ of anu) {
conn.sendMessage(_.jid, buff, video, {caption: `[ TRANSMISSÃO DE VIDEO ]\n\n${body.slice(13)}`})
}
reply('Transmissao enviada')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ *TRANSMISSÃO* ]\n\n${body.slice(13)}`)
}
reply('Transmissão enviada')
}
break

case 'bukatime':
case 'opentime':
case 'abrirgpt': 
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
conn.updatePresence(from, Presence.composing) 
if (args[1]=="s") {var timer = args[0]+"000"
} else if (args[1]=="m") {var timer = args[0]+"0000"
} else if (args[1]=="h") {var timer = args[0]+"00000"
} else {return reply("𝐒𝐞𝐥𝐞𝐜𝐢𝐨𝐧𝐚𝐫✔︎:*\n𝐬=𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬\n𝐦=𝐦𝐢𝐧𝐮𝐭𝐨\n𝐡=𝐇𝐨𝐫𝐚\n\n✫𝐄𝐱𝐞𝐦𝐩𝐥𝐨✫\n10 s")}setTimeout( () => {
var nomor = info.participant
const open = {
text: `𖣘𝐍𝐚 𝐡𝐨𝐫𝐚𖣘 𝙶𝚛𝚞𝚙𝚘 𝚊𝚋𝚎𝚛𝚝𝚘 𝚙𝚎𝚕𝚘 𝙰𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛 @${nomor.split("@s.whatsapp.net")[0]}\n𝙰𝚐𝚘𝚛𝚊 *𝐌𝐞𝐦𝐛𝐫𝐨𝐬* 𝚙𝚘𝚍𝚎 𝚎𝚗𝚟𝚒𝚊𝚛 𝚖𝚎𝚗𝚜𝚊𝚐𝚎𝚗𝚜`,
contextInfo: { mentionedJid: [nomor] }
}
conn.groupSettingChange (from, GroupSettingChange.messageSend, false);
reply(open)
}, timer)
break

case 'fechargpt':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
conn.updatePresence(from, Presence.composing) 
if (args[1]=="s") {var timer = args[0]+"000"
} else if (args[1]=="m") {var timer = args[0]+"0000"
} else if (args[1]=="h") {var timer = args[0]+"00000"
} else {return reply("𝐒𝐞𝐥𝐞𝐜𝐢𝐨𝐧𝐚𝐫✔︎:*\n𝐬=𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬\n𝐦=𝐦𝐢𝐧𝐮𝐭𝐨\n𝐡=𝐇𝐨𝐫𝐚\n\n✫𝐄𝐱𝐞𝐦𝐩𝐥𝐨✫\n10 s")}
setTimeout( () => {
var nomor = info.participant
const close = {
text: `𝙶𝚛𝚞𝚙𝚘 𝚏𝚎𝚌𝚑𝚊𝚍𝚘 𝚙𝚎𝚕𝚘 𝙰𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛 @${nomor.split("@s.whatsapp.net")[0]}\n𝚊𝚐𝚘𝚛𝚊 ☠︎𝐀𝐩𝐞𝐧𝐚𝐬 𝐀𝐝𝐦𝐢𝐧 𝚙𝚘𝚍𝚎 𝚎𝚗𝚟𝚒𝚊𝚛 𝚖𝚎𝚗𝚜𝚊𝚐𝚎𝚗𝚜`,
contextInfo: { mentionedJid: [nomor] }
}
conn.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
}, timer)
break

case 'transmitir':
if(!budy.includes("-")) return reply(`Defina pra que tipo de público você deseja enviar, por exemplo: ${prefix + command} -pvs bla bla fala oq quer, -pvs = privados / -gps = grupos / -all = para todos / boa sorte..`)
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt) return reply('Quem é Você, você não é meu dono 😂?')
if (args.length < 1) return reply('.......')
anu = await conn.chats.all()
bahh = conn.chats.array.filter(v => v.jid.endsWith('g.us'))
bahhh = conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
if(args[0].toLowerCase() === '-all'){
if (isMedia && !info.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
buff = await conn.downloadMediaMessage(encmedia)
for (i = 0; i < anu.length; i++) {
conn.sendMessage(anu[i].jid, buff, image, {caption: `[ TRANSMIÇÃO DE MY DONO ]\n\n${body.slice(16)}`})
}
reply(`transmição foi enviada a ${bahh.length} grupos e ah ${bahhh.length} pvs`)
} else {
for (i = 0; i < anu.length; i++) {
sendMess(anu[i].jid, `[ TRANSMISSÃO DO MY DONO ]\n\n${body.slice(16)}`)
}
reply(`transmição foi enviada a ${bahh.length} grupos e ah ${bahhh.length} pvs`)
}
}else if(args[0].toLowerCase() === '-pvs'){
if (isMedia && !info.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
buff = await conn.downloadMediaMessage(encmedia)
for (i = 0; i < bahhh.length; i++) {
conn.sendMessage(bahhh[i].jid, buff, image, {caption: `[ TRANSMIÇÃO DE MY DONO ]\n\n${body.slice(16)}`})
}
reply(`transmição foi enviada para ${bahhh.length} pvs`)
} else {
for (i = 0; i < bahhh.length; i++) {
sendMess(bahhh[i].jid, `[ TRANSMISSÃO DE MY DONO ]\n\n${body.slice(16)}`)
}
reply(`transmição foi enviada a ${bahhh.length} pvs`)
}
} else if(args[0].toLowerCase() === '-gps'){
if (isMedia && !info.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
buff = await conn.downloadMediaMessage(encmedia)
for (i = 0; i < bahh.length; i++) {
conn.sendMessage(bahh[i].jid, buff, image, {caption: `[ TRANSMIÇÃO DE MY DONO ]\n\n${body.slice(16)}`})
}
reply(`transmição foi enviada a ${bahh.length} grupos`)
} else {
for (i = 0; i < bahh.length; i++) {
sendMess(bahh[i].jid, `[ TRANSMISSÃO DE MY DONO ]\n\n${body.slice(16)}`)
}
reply(`transmição foi enviada a ${bahh.length} grupos`)
}
}
break

case 'bcgp':
case 'bcgc':  
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('.......')
fgp = await groupMembers
var nomor = info.participant
if (isMedia && !info.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
buff = await conn.downloadMediaMessage(encmedia)
for (let _ of fgp) {
conn.sendMessage(_.jid, buff, image, {caption: `*「 TRANSMISSÃO 」*\n\nGrupo: ${groupName}\n Número: wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`})
}
reply('')
} else {
for (let _ of fgp) {
sendMess(_.jid, `*「 TRANSMISSÃO 」*\n\nGrupo : ${groupName}\n Número : wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`)
}
reply('Grupo de transmissão bem-sucedido')
} 
break

case 'dono1':
if (args.length < 1) return
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
dono1 = body.slice(8)
nescessario.dono1 = dono1
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono1}`)
break

case 'dono2':
if (args.length < 1) return
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
dono2 = body.slice(8)
nescessario.dono2 = dono2
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
break

case 'dono3':
if (args.length < 1) return
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
dono3 = body.slice(8)
nescessario.dono3 = dono3
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
break

case 'dono4':
if (args.length < 1) return
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
dono4 = body.slice(8)
nescessario.dono4 = dono4
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
break

case 'dono5':
if (args.length < 1) return
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
dono5 = body.slice(8)
nescessario.dono5 = dono5
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
break

case 'dono6':
if (args.length < 1) return
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
dono6 = body.slice(8)
nescessario.dono6 = dono6
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono6}`)
break

case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos':
p = `[ Lista de donos do bot ${setting.NomeDoBot} ] 

Dono Oficial do bot: ${setting.numerodono}

- [ 1 ] ${nescessario.dono1}\n- [ 2 ] ${nescessario.dono2}\n- [ 3 ] ${nescessario.dono3}\n- [ 4 ] ${nescessario.dono4}\n- [ 5 ] ${nescessario.dono5}\n- [ 6 ] ${nescessario.dono6} `
reply(p)
break

case 'online':
case 'onlines':  
case 'listonline': 
case 'listonlines':  
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(conn.chats.get(ido).presences), conn.user.jid]
conn.sendMessage(from, '𝒍𝒊𝒔𝒕𝒂 𝒅𝒆 𝒖𝒔𝒖𝒂𝒓𝒊𝒐𝒔 𝒐𝒏𝒍𝒊𝒏𝒆𝒔:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
 quoted: info,
 contextInfo: {
 mentionedJid: online
}
})
break

case 'admins':
case 'listadmins':  
case 'listaadmins':   
if (!isGroup) return reply(enviar.msg.grupo)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'ausente': 
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(`Você não e o wa.me/${setting.NumeroDono} so ele pode usar esse comando kkkk`)
offline = true
waktuafk = Date.now()
anuu = args.join(" ") ? args.join(" ") : 'ativar'
alasanafk = anuu
anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B2673620DD5947E63E3ABE663F263", 'participant': `${setting.numerodono}@s.whatsapp.net`, 'remoteJid': `${from}`, 'quotedMessage': {"imageMessage": {"caption": `OFFLINE`, 'jpegThumbnail': await getBuffer(`${linklogos}`)}}}}
await conn.sendMessage(from, `[❗] AGORA EU ESTOU OFFLINE`,MessageType.text,anu)
await limitAdd(sender)
break 

case 'ativo':
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(`Você não e o wa.me/${setting.numerodono} so ele pode usar esse comando kkkk`)
offline = false
anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B2673620DD5947E63E3ABE663F263", 'participant': `${setting.numerodono}@s.whatsapp.net`, 'remoteJid': `${from}`, 'quotedMessage': {"imageMessage": {"caption": `ONLINE`, 'jpegThumbnail': await getBuffer(`${linklogos}`)}}}}
await conn.sendMessage(from, `[❗] AGORA ESTOU ONLINE`,MessageType.text,anu)
await limitAdd(sender)
break   

case 'serpremium':
case 'serprem':  
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
premium.push(`${setting.numerodono}@s.whatsapp.net`)
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
reply(`Pronto ${setting.numerodono} você foi adicionado na lista premium.`)
break

case 'resetarl':
case 'rvlimite':  
if (!SoDono && !info.key.fromMe) return reply(enviar.msg.donosmt)
limitst.push([])
fs.writeFileSync('./datab/usuarios/limitst.json', JSON.stringify(limitst))
reply(`Pronto o limite de hoje foi resetado, podem fazer sticker até 10 por hoje`)
break

case 'addpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.push(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
susp = `👑@${mentioned[0].split('@')[0]} foi adicionado à lista de usuários premium com sucesso👑`
mentions(`${susp}`, mentioned, true)   
break 

case 'delpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.splice(`${mentioned}`, 1)
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
susp = `✖@${mentioned[0].split('@')[0]} foi removido da lista de usuários premium✖`
mentions(`${susp}`, mentioned, true)   
break 

case 'limpar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, clear , MessageType.text, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
break

case 'clearchat':
case 'limparchat':  
case 'limparmsg':  
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
anu = await conn.chats.all()
list_chat = await conn.chats.all()
for (let chat of list_chat) {
await conn.modifyChat(chat.jid, "delete", {includeStarred: false})
}
reply("Chat limpo")
break

case 'addpalavra':
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
const bw = body.slice(12)
palavra.push(bw)
fs.writeFileSync('./datab/grupos/palavras.json', JSON.stringify(palavra))
reply('Palavrão adicionado com sucesso!')
await limitAdd(sender)
break

case 'delpalavra':
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
let dbw = body.slice(12)
palavra.splice(dbw)
fs.writeFileSync('./datab/grupos/palavras.json', JSON.stringify(palavra))
reply('Palavrão removido da lista com sucesso!')
await limitAdd(sender)
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
let lbw = `Esta é a lista de palavrão\nTotal : ${palavra.length}\n`
for (let i of palavra) {
lbw += `➸ ${i.replace(palavra)}\n`
}
await reply(lbw)
await limitAdd(sender)
break 

case 'mensagens':  
if(args.length < 1) return reply('*Escreva a mensagem que deseja com /o horário que deseja soltar todo dia*')
teks = args.join(' ')
teks1 = teks.split("/")[0];
teks2 = teks.split("/")[1];
if(isGps) {
var ind = rgsD.indexOf(from)
rgs[ind].mensg = teks1
rgs[ind].horario = teks2
fs.writeFileSync('./datab/usuarios/rgs.json', JSON.stringify(rgs, null, 2) + '\n')
reply('*Mensagem de horário criada com sucesso..*')
} else {
var json = {
jid: from,
mensg: teks1, 
horario: teks2
}
rgs.push(json)
fs.writeFileSync('./datab/usuarios/rgs.json', JSON.stringify(rgs, null, 2) + '\n')
reply('*Mensagem de horário criada com sucesso*')
}
break

case 'legendabv':  
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelcomed) {
var ind = groupIdWelcomed.indexOf(from)
welcome_group[ind].msg = teks
fs.writeFileSync('./datab/grupos/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
reply('*Mensagem de boas vindas alteradas com sucesso!*')
} else {
var json = {
jid: from,
msg: teks
}
welcome_group.push(json)
fs.writeFileSync('./datab/grupos/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
reply('*Mensagem de boas vindas criada com sucesso!*')
}
break

case 'legendasaiu':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este tipo de Comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isByed) {
var ind = groupIdBye.indexOf(from)
bye_group[ind].msg = teks
fs.writeFileSync('./datab/grupos/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
reply('*Mensagem de saída alteradas com sucesso!*')
} else {
var json = {
jid: from,
msg: teks
}
bye_group.push(json)
fs.writeFileSync('./datab/grupos/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
reply('*Mensagem de saída criada com sucesso!*')
}
break

case 'legendabv2':  
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelcomed2) {
var ind = groupIdWelcomed2.indexOf(from)
welcome_group2[ind].msg = teks
fs.writeFileSync('./datab/grupos/welcomegp2.json', JSON.stringify(welcome_group2, null, 2) + '\n')
reply('*Mensagem de boas vindas2 alteradas com sucesso!*')
} else {
var json = {
jid: from,
msg: teks
}
welcome_group2.push(json)
fs.writeFileSync('./datab/grupos/welcomegp2.json', JSON.stringify(welcome_group2, null, 2) + '\n')
reply('*Mensagem de boas vindas2 criada com sucesso!*')
}
break

case 'legendasaiu2':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este tipo de Comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(14)
if(isByed) {
var ind = groupIdBye.indexOf(from)
bye_group2[ind].msg = teks
fs.writeFileSync('./datab/grupos/byegp2.json', JSON.stringify(bye_group2, null, 2) + '\n')
reply('*Mensagem de saída2 alteradas com sucesso!*')
} else {
var json = {
jid: from,
msg: teks
}
bye_group2.push(json)
fs.writeFileSync('./datab/grupos/byegp2.json', JSON.stringify(bye_group2, null, 2) + '\n')
reply('*Mensagem de saída2 criada com sucesso!*')
}
break

case 'fundobemvindo':
case 'fundobv':  
if (!SoDono && !isCmdy && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
owgi = await conn.downloadMediaMessage(boij)
res = await upload(owgi)
fundo1 = res
nescessario.fundo1 = fundo1
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
}
break

case 'fundosaiu':
if (!SoDono && !isCmdy && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
owgi = await conn.downloadMediaMessage(boij)
res = await upload(owgi)
fundo2 = res
nescessario.fundo2 = fundo2
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
}
break

case "antiviewonce":
case "antiview":
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
if (!isGroup) return reply(`[📍] SOMENTE EM GRUPOS`)
if (args[0] == "1") {
if (isAntiVO) return reply("*Já está ativado!!*");
antiviewonce.push(from);
fs.writeFileSync("./datab/grupos/antiviewonce.json", JSON.stringify(antiviewonce));
reply("*Anti visualização unica foi ativado neste grupo!*");
} else if (args[0] == "0") {
let akuu = antiviewonce.indexOf(from)
if (!isAntiVO) return reply('*Já está desativado*')
antiviewonce.splice(akuu, 1)
fs.writeFileSync("./datab/grupos/antiviewonce.json", JSON.stringify(antiviewonce));
reply("*Anti visualização unica foi desativado neste grupo!*");
} else {
reply('*1 para ativar, 0 para desativar*')
}
break

case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
try {
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAnticall) return reply('Ja esta ativo')
anticall.push('Ativado')
fs.writeFileSync('./datab/usuarios/anticall.json', JSON.stringify(anticall))
reply('Ativou com sucesso o recurso de antiligação no bot✔️')
} else if (Number(args[0]) === 0) {
if (!isAnticall) return reply('Ja esta Desativado')  
fs.writeFileSync('./datab/usuarios/anticall.json', JSON.stringify([]))
reply('Desativou com sucesso o recurso de antiligação no bot✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Falha ao ativar')
}
break

case 'antipvon':
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe ) return await reply('Apenas Meu Dono')
if (banChats) return await reply('já está ativo o modo antipv')
banChats = true
nescessario.banChats = banChats
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await conn.sendMessage(from, "*Sucesso alterado para modo antipv, pv não poderá ser utilizado" , text)
break

case 'antipvoff':
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return await reply('Apenas meu dono o owner')
if (!banChats) return await reply('Nao estava ativado ainda')
banChats = false
nescessario.banChats = banChats
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await conn.sendMessage(from, "*Sucesso modo antipv desligado, pv liberado.", text)
break

case 'antipv':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!SoDono) return reply(`Apenas dono pode ativar/desativar essa função..`)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiPv) return reply('Ja esta ativo')
antipv.push('Ativado')
fs.writeFileSync('./datab/usuarios/antipv.json', JSON.stringify(antipv))
reply('🌀 Ativou com sucesso o recurso de Anti Privado 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiPv) return reply('Ja esta Desativado')
pesquisar = 'Ativado'
processo = antipv.indexOf(pesquisar)
while(processo >= 0){
antipv.splice(processo, 1)
processo = antipv.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/antipv.json', JSON.stringify(welkom))
reply('‼️ Desativou com sucesso o recurso De ANTIPV✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'block':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'unblock':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   
break

case 'blocklist':
conn.updatePresence(from, Presence.composing) 
jrc = 'ESTA É A LISTA DE NÚMEROS BLOQUEADOS :\n'
for (let benn of ban) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${ban.length}`
conn.sendMessage(from, jrc.trim(), extendedText, {quoted: info, contextInfo: {"mentionedJid": ban}})
break

case 'acess':
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
teks = body.slice(7)
exec(teks, (err, stdout) => {
if (err) return conn.sendMessage(from, `root@ALEOFC-BOT:~ ${err}`, text, {quoted: info})
if (stdout) {
conn.sendMessage(from, stdout, text)
}
})
break

case 'bangp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (isBanchat) return reply(`Este grupo ja está banido`)
bancht.push(from)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo banido com sucesso`)
break

case 'unbangp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
let cur = bancht.indexOf(from)
bancht.splice(cur, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
break

case 'limitec':
if(!SoDono && !isCmdy && !isnit && !ischyt) return reply(enviar.msg.donosmt)
if (args.length < 1) return
if (!setTimeout && !info.key.fromMe) return reply(enviar.msg.donosmt)
limitefl = args.join(" ")
limitefll.limitefl = limitefl
fs.writeFileSync('./datab/usuarios/flood.json', JSON.stringify(limitefll, null, '\t'))
reply(`${limitefl} foi adicionado como limite de antiflood `)
break

case 'execut':
if(!SoDono && !isCmdy && !isnit && !issupre && !ischyt) return
try{
return eval(`(async() => { ${args.join(' ')}})()`)
}catch (e) {
reply(`${e}`)
}
break


case 'exec':
if(!SoDono && !isCmdy && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'speed':
case 'ping':
const timestamp = speed();
const latensi = speed() - timestamp
await conn.updatePresence(from, Presence.composing)
uptime = process.uptime()
await conn.sendMessage(from, 
`SPEED: *${latensi.toFixed(4)} _SEGUNDO_*
TIPO DO BOT: *TERMUX*
*O BOT ESTEVE ATIVO POR*
*${kyun(uptime)}*`, text, { quoted: info})
break

case 'gtts':
if (args.length < 1) return conn.sendMessage(from, '', text, {quoted: info})
const gtts = require('./armor/gtts')(args[0])
if (args.length < 2) return conn.sendMessage(from, 'Falta colocar o código do idioma!', text, {quoted: info})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 500
? reply('Para reduzir spam o máximo de letras permitidas são 500!')
: gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
if (err) return reply('Falha')
conn.sendMessage(from, buffer, audio, {quoted: info, ptt:true})
fs.unlinkSync(rano)
})
})
break

case 'tagme':
const tagme = {
text: `@${sender.split("@")[0]} ✔️`, contextInfo: {mentionedJid: [sender]}
}
await conn.sendMessage(from, tagme, text)
break

case 'blockcmd':
if(!SoDono && !isCmdy && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está blockeado')
addComandos(from, args[0])
reply(`O comando ${args[0]} Foi blockeado`)
break

case 'unblockcmd':
if(!SoDono && !isCmdy && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0]))return reply('Este comando já está  desbloqueado')
deleteComandos(from, args[0])
reply(`O comando ${args[0]} Foi desblockeado`)
break

case 'listacomandos':
tkks = '╭─*「 *COMANDOS BLOCK* 」\n'
for (let V of getComandoBlock(from)) {
tkks += `│+  ${V}\n`
}
tkks += `│+ Total : ${getComandoBlock(from).length}\n╰──────*「 *${NomeDoBot}* 」*────`
await conn.sendMessage(from, tkks.trim(), extendedText, {quoted: info})
break

case 'avalie':
const avalie = body.slice(8)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return conn.sendMessage(from, 'Máximo 400 caracteres', msgType.text, {quoted: info})
var nomor = info.participant
tdptls = `[ Avaliação ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`
var options = {
text: tdptls,
contextInfo: {
mentionedJid: [sender]
},
}
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, options, text, {quoted: info})
reply("mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
break

case 'bug':
pao = fs.readFileSync('./audios/bug2.mp3')
await conn.sendMessage(from, pao, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})  
const bug = body.slice(5)
if (args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if (args.length >= 800) return conn.sendMessage(from, 'Máximo 800 caracteres', msgType.text, {quoted: info})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
var options = {
text: teks1,
contextInfo: {
mentionedJid: [sender]
},
}
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, options, text, {quoted: info})
reply("mensagem enviada ao meu dono, se enviar muitas mensagens repetida por zoueiras, você sera banido de utilizar os comandos do bot.")
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if (args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if (args.length >= 800) return conn.sendMessage(from, 'Máximo 800 caracteres', msgType.text, {quoted: info})
var nomor = info.participant
sug = `[ Sugestões ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${sugestao}`
var options = {
text: sug,
contextInfo: {
mentionedJid: [sender]
},
}
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, options, text, {quoted: info})
reply("mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break

//==========(BAIXAR/PESQUISAS)==========\\

case 'mediafire':
if (args.length < 1) return reply('Digite o link do arquivo que deseja buscar no Mediafire')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Link invalido')
reply(enviar.espere)
teks = args.join(' ')
const resm = await mediafireDl(teks)
result = `*「  MEDIAFIRE DOWNLOAD  」*

*Nome :* ${resm[0].nama}
*Tamanho :* ${resm[0].size}
*Link :* ${resm[0].link}`
reply(result)
sendFileFromUrl(resm[0].link, document, {mimetype: resm[0].mime, filename: resm[0].nama, quoted: info})
break

case 'pinterest': 
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} azul`)
reply(enviar.espere)
pin = await hx.pinterest(q)
ac = pin[Math.floor(Math.random() * pin.length)]
buffer = await getBuffer(ac)
sendButImage(from,`𝐏𝐫𝐞𝐬𝐬𝐢𝐨𝐧𝐞 (𝐩𝐫𝐨́𝐱𝐢𝐦𝐨) 𝐩𝐚𝐫𝐚 𝐚 𝐩𝐫𝐨́𝐱𝐢𝐦𝐚 𝐢𝐦𝐚𝐠𝐞𝐦`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command + q}`, buttonText: {displayText: '𝐩𝐫𝐨́𝐱𝐢𝐦𝐨 ▶️'}, type: 1}]);
break

case 'videourl':
case 'videopralink':
case 'gerarlink':  
case 'geralink':    
case 'imgpralink':   
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
reply(enviar.espere)
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
owgi = await conn.downloadMediaMessage(boij)
res = await upload(owgi)
reply(res)
} else {
reply(`Mande uma imagem/vídeo com a legenda ${prefix + command}`)
}
} catch {
reply('Error, não foi possível efetuar o comando')
}
break

case 'google':
if (!q) return reply(enviar.wrongFormat)
ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=966a90a8125c4862b276f23068b56fd6&url=https://google.com/search?q=${q}`)
reply(enviar.espere)
if(q == undefined || q == ' ') return reply(`*Resultado da pesquisa : ${q}*`)
googleIt({ 'query': q }).then(results => {
vars = `_*Resultado da pesquisa : ${q}*_\n`
for (let i = 0; i < results.length; i++) {
vars +=  `\n═════════════════\n\n*Título:* ${results[i].title}\n\n*Descrição:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
conn.sendMessage(from, ss, image, {caption: vars, quoted : info})
}).catch(e => {
console.log(e)
reply(`${e}`)
})
break

case 'printsite':
case 'print':
txt = args.join(" ")
if(txt.length < 8) return reply(`Digite qual site você deseja tirar o print, por Exemplo: ${prefix}printsite Google.com`)
reply(enviar.espere)
printp = await fetchJson(`https://kauan-ofc.herokuapp.com/api/ssweb2?url=${txt}`)
printimg = await getBuffer(printp.link)
conn.sendMessage(from, printimg, image, {quoted: info})
break

case 'ytsearch':
if (args.length < 1) return reply('Cade o txt?')
const srch = args[0];
try {
var aramas = await yts(srch);
} catch {
return await conn.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Titulo: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n________________________\n\n'
});
ytresult += `${setting.NomeDoBot}`
await conn.sendMessage(from, tbuff, image, {thumbnail: await getBuffer(`${logo}`), quoted: info, caption: ytresult})
break 

case 'facebook':
case 'facemp4':  
case 'fb':
teks = args[0]
reply(enviar.espere)
res = await fbDown(teks).catch(e => {
reply(`${e}`)
})
a = res[0]
result = `「 *Facebook Downloader* 」
• *Título:* ${a.judul}
• *Fonte :* ${a.source}
• *Tamanho :* ${a.size}
• *Qualidade :* ${a.quality}
• *Modelo :* ${a.type}
• *Nome do arquivo :* ${a.judul}.${a.type}`
sendFileFromUrl(a.thumb, image, {caption: result, quoted: info})
sendFileFromUrl(a.link, video, {mimetype: 'video/mp4',quoted: info})
await limitAdd(sender)
break

case 'ytmp4':
txt = args.join(" ")
if(txt.length < 7) return reply('Você deve pegar o link do YouTube gerado pelo ytsearch ou do próprio YouTube mesmo, e usar com esse comando, e ele enviará seu video')
reply(enviar.espere)
blap = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytmp4?url=${txt}&apikey=ale203`)

blap = blap.resultado

blatxt = `Título : ${blap.titulo}\n`
blatxt += `Canal : ${blap.canal}\n`
blatxt += `Publicado : ${blap.publicado}\n`
blatxt += `Visualizações : ${blap.visu}`

blaimg = await getBuffer(blap.thumb)
conn.sendMessage(from, blaimg, image, {quoted:info, caption: blatxt})
blaaudio = await getBuffer(blap.url)
conn.sendMessage(from, blaaudio, video, {quoted: info, mimetype: 'video/mp4'})
break

case 'ytmp3':
txt = args.join(" ")
if(txt.length < 7) return reply('Você deve pegar o link do YouTube gerado pelo ytsearch ou do próprio YouTube mesmo, e usar com esse comando, e ele enviará seu áudio / música')
reply(enviar.espere)
blap = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytmp4?url=${txt}&apikey=ale203`)

blap = blap.resultado

blatxt = `Título : ${blap.titulo}\n`
blatxt += `Canal : ${blap.canal}\n`
blatxt += `Publicado : ${blap.publicado}\n`
blatxt += `Visualizações : ${blap.visu}`

blaimg = await getBuffer(blap.thumb)
conn.sendMessage(from, blaimg, image, {quoted:info, caption: blatxt})
blaaudio = await getBuffer(blap.url)
conn.sendMessage(from, blaaudio, audio, {quoted: info, mimetype: 'audio/mp4'})
break


case 'ytmp3v2':
if (args.length === 0) return reply(`Use assim :  *${prefix + command} Link do YouTube, através do comando ${prefix}ytsearch*`)
try {
reply(enviar.espere)
yta(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesizeF) >= 30000) return sendMediaURL(from, thumb, `*Dados obtidos com sucesso!*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Para tamanhos superiores a 30 MB, é apresentado na forma de um link_`)
captions = `*「 YOUTUBE MP3 」*\n\n*Titulo* : ${title}\n*Ext* : mp3\n*Tamanho* : ${filesizeF}\n\n_Enviando o áudio..._`
sendMediaURL(from, thumb, captions)
sendMediaURL(from, dl_link).catch(() => reply(enviar.error.api))
})
})
} catch (err) {
reply(enviar.error.api)
}
await limitAdd(sender)
break 

case 'jooxplay':
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Musica Sad`)
query = args.join(" ")
reply(enviar.espere)
get_result = await fetchJson(`https://pencarikode.xyz/download/joox?search=${query}&apikey=pais`)
get_result = get_result.result
ini_mn1k = `Titulo : ${get_result.judul}\n`
ini_mn1k += `Duração : ${get_result.duration}\n`
thumbnail = await getBuffer(get_result.img_url)
await conn.sendMessage(from, thumbnail, image, {quoted: info, caption: ini_mn1k })
get_audio = await getBuffer(get_result.mp3_url)
await conn.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.judul}.mp3`, quoted: info, thumbnail: null})
break

case 'tiktok':
link = args.join(' ')
if (!link) return reply('Ops, insira o link de um video do tiktok.')
axios.get(`http://api-exteam.herokuapp.com/api/download/tiktok?link=${link}&apikey=aleofc`)
.then( async post => {
s_video = await getBuffer(post.data.result.video)
conn.sendMessage(from, s_video, video, {quoted: info})
})
break

case 'playstore':
if(!q) return reply('Digite um nome de um app que deseja pesquisar.')
let play = await hx.playstore(q);
let store = "❉─────────────────────❉\n"
for (let i of play) {
store += `\n*「 _PLAY STORE_ 」*\n
- 📄 *Nome* : ${i.name}
- 🌀 *Link* : ${i.link}\n
- 🤵🏻 *desenvolvedor* : ${i.developer}
- 📤 *Desenvolvedor link* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(store)
break

case 'igstalk':
if(args.length < 1) return reply('Cadê o nome?')
usur = args.join(" ")
teste = await fetchJson(`https://pencarikode.xyz/stalk/instagram?username=${usur}&apikey=pais`)
teste = teste.result.user
corno = `Nome : ${teste.username}\n`
corno += `PK : ${teste.pk}\n`
testebf = await getBuffer(`${teste.profile_pic_url}`)
await conn.sendMessage(from, testebf, image, {quoted:info, caption: `${corno}`})
break

case 'celular':
if (!q) return reply(`Qual celular você está procurando?`)
teks = args.join(' ')
anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${q}`)
const busca_celular = 
`
📝 Titulo: ${anu.judul}
❗Última atualização: ${anu.rilis}
📱 Tamanho do celular: ${anu.ukuran}
⚡ Tipo: ${anu.type}
🗃️ Armazenamento: ${anu.storage}
📴 Tela: ${anu.display}
📳 Polegada: ${anu.inchi}
🔰 Resolução da câmera: ${anu.pixel}
📲 Resolução do video: ${anu.videoPixel}
💭 Ram do celular: ${anu.ram}
👤 Hardware do celular: ${anu.chipset}
⚠️ Bateria: ${anu.batrai}
🔋 Tipo da bateria: ${anu.merek_batre}`
 wew = fs.readFileSync('./logos/logo2.jpg')
await conn.sendMessage(from, wew, image, {quoted: info, thumbnail:null, caption: `${busca_celular}`})
break



case 'play':
try {
playz = args.join(' ')
if(!playz) return reply('Cade o nome da música/Video?')
reply('espere um pouco enquanto seu pedido é pesquisado')
blast = await fetchJson(`https://aleatoryapi.herokuapp.com/api/playmp4?q=${playz}&apikey=ale203`) 
blast = blast.resultado
img = await getBuffer(blast.thumb)
buffer = await getBuffer(`${logo13}`)
sendButImage(from,`𝐂𝐨𝐦𝐨 𝐝𝐞𝐬𝐞𝐣𝐚𝐫 𝐬𝐞𝐮 𝐩𝐥𝐚𝐲?`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix}play2 ${q}`, buttonText: {displayText:' NTdVOZ/MP3 '}, type: 1},
{buttonId:`${prefix}playmp4 ${q}`, buttonText: {displayText: ' ▷MP4/VÍDEO▷ '}, type: 1}]);
} catch (err) {
reply(String(err))
}
break

case'play3':
try {
if (q.length < 1) return reply(`*Digite o nome da música que deseja baixar*\n*Exemplo: ${prefix + command} hungria nao troco*`)
reply(enviar.espere)
if (!q.endsWith("-doc")){
res = await yts(`${q}`).catch(e => {
reply('_[ ! ] O erro de consulta inserido não existe_')
})

let thumbInfo = `
「  *🎧P L A Y  M U S I C🎧*  」

*Título:* ${res.all[0].title}
*Duração:* ${res.all[0].timestamp}
*Upload:* ${res.all[0].ago}
*Visualizações :* ${res.all[0].views}
*Canal:* ${res.all[0].author.name}
*Link do Canal:* ${res.all[0].author.url}
*Link do Vídeo:* https://youtu.be/${res.all[0].videoId}`
sendFileFromUrl(res.all[0].image, image, {quoted: info, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Erro ao entrar no Y2mate Web * Tente repetir*_')
})
sendFileFromUrl(res[0].link, audio, {quoted: info, mimetype: 'audio/mp4', filename: res[0].output})
}
if (q.endsWith("-doc")){
const tec = q.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] O erro de consulta inserido não existe_')
})
let thumbInfo = `
「  *🎧P L A Y  M U S I C🎧*  」

*Título:* ${res.all[0].title}
*Duração:* ${res.all[0].timestamp}
*Upload:* ${res.all[0].ago}
*Visualizações :* ${res.all[0].views}
*Canal:* ${res.all[0].author.name}
*Link do Canal:* ${res.all[0].author.url}
*Link do Vídeo:* https://youtu.be/${res.all[0].videoId}`
sendFileFromUrl(res.all[0].image, image, {quoted: info, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Erro ao entrar no Y2mate Web * Tente repetir*_')
})
sendFileFromUrl(res[0].link, document, {quoted: info, mimetype: 'audio/mp3', filename: res[0].output})
}
} catch {
try {
reply('Tive um problema em exetuar o play normal, então executarei o play2, ok?, desculpe o atraso.')
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${q}&apikey=AriaGanzTzy`)
if (anu.error) return reply(anu.error) 
infomp3 = `*Título:* ${anu.result.title}\n*Fonte:* ${anu.result.source}\n*Tamanho:* ${anu.result.size}`
lagu = await getBuffer(anu.result.url_audio)
conn.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: info, thumbnail: null})	
} catch {
aramas = await yts(q);
aramat = aramas.all 
var mulaikah = aramat[0].url							
console.log(color('[YT PLAY MÚSICA]', 'magenta'), color(`PROCURANDO A MÚSICA NO YT`, 'yellow')) 
 try {
 yta(mulaikah)
 .then((res) => {
 const { dl_link, thumb, title, filesizeF, filesize } = res
 axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
 .then(async (a) => {
 if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*「 TOCAR MÚSICA 」*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho do arquivo* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`)
const captions = `*「 TOCAR MÚSICA 」*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply('error'))
})                
})
} catch (err) {
reply(err)
}
}
}
break

case 'play2':
playzin = args.join(' ')
blap = await fetchJson(`https://aleatoryapi.herokuapp.com/api/play?q=${playzin}&apikey=ale203`) 
pla = `✍️𝐓𝐈𝐓𝐔𝐋𝐎: *${blap.titulo}*\n`
pla += `👥𝐕𝐢𝐬𝐮𝐚𝐥𝐢𝐳𝐚𝐜̧𝐨̃𝐞𝐬: *${blap.visu}*\n`
pla += `▶️𝐏𝐔𝐁𝐋𝐈𝐂𝐀𝐃𝐎: *${blap.publicado}*\n\n`
pla += `🎵𝗘𝗡𝗩𝗜𝗔𝗡𝗗𝗢 𝗢 𝗔𝗨𝗗𝗜𝗢, 𝗩𝗔𝗜 𝗗𝗘𝗠𝗢𝗥𝗔𝗥 𝗨𝗠 𝗣𝗢𝗨𝗖𝗢..🎶`
img = await getBuffer(blap.thumb)
conn.sendMessage(from, img, image, {quoted: selo, caption: pla})
aud = await getBuffer(blap.url)
conn.sendMessage(from, aud, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
break

case 'play3':
playzin = args.join(' ')
if (!playzin)return reply(`*Digite o nome da música que deseja baixar*\n*Exemplo: ${prefix + command} hungria nao troco*`)
blarp = await fetchJson(`https://akame-api.herokuapp.com/api/ytmp3?=${playzin}link=apikey=mL9QcxAO`)
pla = `Titulo: ${blarp.titulo}`
pla += `Tamanho: ${blarp.tamanho}`
pla += `Visualizações: ${blarp.views}`
pla += `Likes: ${blarp.likes}`
img = await getBuffer(blarp.link_image)
conn.sendMessage(from, img, image, {quoted: info, caption: pla})
aud = await getBuffer(blarp.link_musica)
conn.sendMessage(from, aud, audio, {quoted: info, mimetype: 'audio/mp4'})
break

case 'play3':      
reply(enviar.espere)
res = await yts(q)
rus = await y2mateA(`${res.all[0].url}`)
ras = await y2mateV(`${res.all[0].url}`)
imagenya = await getBuffer(res.all[0].image)
let oki = `    
Judul : ${res.all[0].title}
Ditonton : ${res.all[0].views}
Durasi : ${res.all[0].timestamp}
File Audio : ${rus[0].size}
File Video : ${ras[0].size}`

halogaes = await conn.prepareMessage(from, imagenya, image)
tombol = [
  {buttonId: `${prefix}playmp333 ${res.all[0].url}`, buttonText: {displayText: `ᴀᴜᴅɪᴏ`}, type: 1},
  {buttonId: `${prefix}playmp444 ${res.all[0].url}`, buttonText: {displayText: `ᴠɪᴅɪᴏ`}, type: 1}
]
gbuttonan = {
imageMessage: halogaes.message.imageMessage,
contentText: oki,
footerText: `© SrJosiOfc`,
buttons: tombol,
headerType: 4
}
conn.sendMessage(from, gbuttonan, MessageType.buttonsMessage,{
 	contextInfo: { forwardingScore: 1000000, isForwarded: forwarding}
})
break

case 'playmp444':
if (args.length === 0) return reply(`*${prefix}playmp4 [linkYt]*`)
let okek = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!okek) return reply(enviar.error.Iv)
reply("*Baixando...*")   
try {
ytv(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 500000) return reply("Não é possível baixar porque o arquivo excede o limite")
sendMediaURL(from, dl_link).catch(() => reply(enviar.Iv)) 
limitAdd(sender, limit)
})		
})
} catch (err) {
reply(enviar.error.Iv)
}
break

case 'playmp333':
if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
let like = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!like) return reply(enviar.error.Iv)
try {
reply("*Downloading...*")   
yta(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 200000) return reply("Não é possível baixar porque o arquivo excede o limite")
sendMediaURL(from, dl_link).catch(() => reply(enviar.error.api))
})
})
} catch (err) {
reply(enviar.error.api)
}
break

case 'play7': 
if (args.length < 1) return reply(`Exemplo : ${prefix + command} Plutão`)	
testeki = args.join(" ")
reply(enviar.espere)
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp3?query=${testeki}&apikey=apiteam`)
if (anu.error) return reply(anu.error) 
lagu = await getBuffer(anu.url)
buffer = await getBuffer(anu.thumb)
testekkzu = `💎 Título: ${anu.titulo}\n👾Canal: ${anu.canal}\n📥 Views: ${anu.views}\n📝 Data: ${anu.data}`
conn.sendMessage(from, buffer, image, {quoted: info, thumbnail:null, caption: `${testekkzu}`})		
conn.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: info})
break

case 'play4': 
if (args.length < 2) return reply(`Exemplo : ${prefix + command} música sad, tem que conter 2 palavra `)	
testeki = args.join(" ")
reply(enviar.espere)
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/play/audio?video=${testeki}`)
if (anu.error) return reply(anu.error) 
lagu = await getBuffer(anu.Link_De_Download)
buffer = await getBuffer(anu.Imagem_Do_Video)
testekkzu = `💎 Título: ${anu.Titulo_Encontrado}\n👾Tamanho: ${anu.Tamanho_Do_Video}\n📥 Duração: ${anu.Duracao_Do_Video}\n📝 Link: ${anu.Link_Do_Video}`
conn.sendMessage(from, buffer, image, {quoted: info, thumbnail:null, caption: `${testekkzu}`})		
conn.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: info})
break

case 'play5':
try{
if (!q) return reply(`Exemplo : ${prefix + command} musica`)
reply(`Espere estou a procurar sua musica🎧`)
res = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${q}`)
thumbnfo = `*Resultado Encontrado*
               
📜 Título : ${res.result.title}
🌐 Data : ${res.result.published}
🎞️ Views : ${res.result.views}
⚖️ Duração : ${res.duration}
🎥 Video Yt : ${res.url}`

buttons = [{buttonId:`${prefix}playmp4 ${res.urlyt}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}mp3 ${res.result.url}`,buttonText:{displayText:'🎵AUDIO'},type:1}]

imageMessage = (await conn.prepareMessageMedia({url: res.result.thumb},'imageMessage',{thumbnail: fs.readFileSync('./logos/logo2.jpg')})).imageMessage

buttonsMessage = {
contentText: thumbnfo,
footerText:'```Alea 4.2```',
imageMessage,
buttons,
headerType:4
}
inibut = await conn.prepareMessageFromContent(from,{buttonsMessage},{})
conn.relayWAMessage(inibut)
}catch (e){
reply(`desculpe mas não achei eua musica`)
console.log(e)
}
break

case 'mp3':
if(!q) return reply('?')
reply(`Espere estou a baixar sua musica🎧🎧`)
res = await getBuffer(`${q}`).catch(e => {
reply('_[ ! ] Erro [ ! ]_')
})
conn.sendMessage(from, res, audio,{mimetype: 'audio/mp4',quoted:info, thumbnail: null})
break

case 'playmp4':
try {
playz = args.join(' ')
if(!playz) return reply('Cade o nome da música/Video?')
reply(enviar.espere)
blast = await fetchJson(`https://aleatoryapi.herokuapp.com/api/playmp4?q=${playz}&apikey=ale203`) 
blast = blast.resultado
pla = `✍️𝐓𝐈𝐓𝐔𝐋𝐎: *${blast.titulo}*\n`
pla += `👥𝐕𝐢𝐬𝐮𝐚𝐥𝐢𝐳𝐚𝐜̧𝐨̃𝐞𝐬: *${blast.visu}*\n`
pla += `▶️𝐏𝐔𝐁𝐋𝐈𝐂𝐀𝐃𝐎: *${blast.publicado}*\n\n`
pla += `*Enviando o video, OK📲?*`
img = await getBuffer(blast.thumb)
conn.sendMessage(from, img, image, {quoted: info, caption: `${pla}`})
audiobla = await getBuffer(blast.url)
conn.sendMessage(from, audiobla, video, {quoted: info, mimetype: 'video/mp4'})
} catch (e){
reply(`desculpe mas não achei o que você quer.`)
console.log(e)
}
break



///////////HENTAIS///////////



case 'nekos':
  if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}playboy 1`)
buffer = await getBuffer(`https://www.luc4rio-rest-api.tk/api/hentai/neko`)
sendButImage(from,`🔥𝐂𝐨𝐦𝐚𝐧𝐝𝐨 +18\n🔞𝐁𝐲:${NickDono}`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: 'ꨄ︎𝐏𝐫𝐨́𝐱𝐢𝐦𝐨シ︎'}, type: 1}]);
break

case 'boquete':
  if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}playboy 1`)
buffer = await getBuffer(`https://www.luc4rio-rest-api.tk/api/hentai/boquete`)
sendButImage(from,`🔥𝐂𝐨𝐦𝐚𝐧𝐝𝐨 +18\n🔞𝐁𝐲:${NickDono}`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: 'ꨄ︎𝐏𝐫𝐨́𝐱𝐢𝐦𝐨シ'}, type: 1}]);
break

case 'oculos': 
case 'óculos':
  if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}playboy 1`)
buffer = await getBuffer(`https://www.luc4rio-rest-api.tk/api/hentai/kuni`)
sendButImage(from,`🔥𝐂𝐨𝐦𝐚𝐧𝐝𝐨 +18\n🔞𝐁𝐲:${NickDono}`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: 'ꨄ︎𝐏𝐫𝐨́𝐱𝐢𝐦𝐨シ'}, type: 1}]);
break

case 'cosplayhentai':
try {
let apikey = 'momonga';
let apiResult = await fetchJson('https://momonga-api.herokuapp.com/hentai/cosplay?apikey=' + apikey);
if (apiResult.error) return reply (apiResult.error);
let mandarImagem = await getBuffer(apiResult.result);
sendButImage(from,`🔥𝐂𝐨𝐦𝐚𝐧𝐝𝐨 +18\n🔞𝐁𝐲:${NickDono}`,
`${NomeDoBot}`, mandarImagem,
[{buttonId:`${prefix + command}`, buttonText: {displayText: 'ꨄ︎𝐏𝐫𝐨́𝐱𝐢𝐦𝐨シ'}, type: 1}]);
} catch(e) {
console.log(e); reply(e);
}
break

case 'packh':
case 'packhentai':
reply (`@${sender.split("@s.whatsapp.net")[0]} *,ꨄ︎hentai enviando com sucesso no seu PV...*`)
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/hentai`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/yuri`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/yuri`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/yuri`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/yuri`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/yuri`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/yuri`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/yuri`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/yuri`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/yuri`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/yuri`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/yuri`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/yuri`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/yuri`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/yuri`)
conn.sendMessage(sender, buffer, image, { caption: '',quoted: selo})
break

case 'yuri':
case 'hentai':
  if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}playboy 1`)
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/${command}`)
sendButImage(from,`🔥𝐂𝐨𝐦𝐚𝐧𝐝𝐨 +18\n🔞𝐁𝐲:${NickDono}`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: 'ꨄ︎𝐏𝐫𝐨́𝐱𝐢𝐦𝐨シ'}, type: 1}]);
break

case'hentai2':
  if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}playboy 1`)
buffer = await getBuffer(`https://akame-api.herokuapp.com/api/hentai/hentai?apikey=TK4P2vjJ`)
sendButImage(from,`🔥𝐂𝐨𝐦𝐚𝐧𝐝𝐨 +18\n🔞?𝐁𝐲${NickDono}`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: 'ꨄ︎𝐏𝐫𝐨́𝐱𝐢𝐦𝐨シ'}, type: 1}]);
break

case 'trap':
  if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}playboy 1`)
buffer = await getBuffer(`https://h4ck3rs404-api.herokuapp.com/api/nsfw/Trap?apikey=404Api`)
sendButImage(from,`🔥𝐂𝐨𝐦𝐚𝐧𝐝𝐨 +18\n🔞𝐁𝐲:${NickDono}`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: 'ꨄ︎𝐏𝐫𝐨́𝐱𝐢𝐦𝐨シ'}, type: 1}]);
break

case 'tits':
  if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}playboy 1`)
buffer = await getBuffer(`https://h4ck3rs404-api.herokuapp.com/api/nsfw/Tits?apikey=404Api`)
sendButImage(from,`🔥𝐂𝐨𝐦𝐚𝐧𝐝𝐨 +18\n🔞𝐁𝐲:${NickDono}`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: 'ꨄ︎𝐏𝐫𝐨́𝐱𝐢𝐦𝐨シ'}, type: 1}]);
break

case 'uniform':
  if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}playboy 1`)
buffer = await getBuffer(`https://h4ck3rs404-api.herokuapp.com/api/nsfw/Uniform?apikey=404Api`)
sendButImage(from,`🔥𝐂𝐨𝐦𝐚𝐧𝐝𝐨 +18\n🔞𝐁𝐲:${NickDono}`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: 'ꨄ︎𝐏𝐫𝐨́𝐱𝐢𝐦𝐨シ'}, type: 1}]);
break

case 'gangbang':
  if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}playboy 1`)
buffer = await getBuffer(`https://h4ck3rs404-api.herokuapp.com/api/nsfw/GangBang?apikey=404Api`)
sendButImage(from,`🔥𝐂𝐨𝐦𝐚𝐧𝐝𝐨 +18\n🔞𝐁𝐲:${NickDono}`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: 'ꨄ︎𝐏𝐫𝐨́𝐱𝐢𝐦𝐨シ'}, type: 1}]);
break

case 'fox':
  if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}playboy 1`)
buffer = await getBuffer(`https://h4ck3rs404-api.herokuapp.com/api/nsfw/Foxgirl?apikey=404Api`)
sendButImage(from,`🔥𝐂𝐨𝐦𝐚𝐧𝐝𝐨 +18\n🔞𝐁𝐲:${NickDono}`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: 'ꨄ︎𝐏𝐫𝐨́𝐱𝐢𝐦𝐨シ'}, type: 1}]);
break

case 'cum':
  if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}playboy 1`)
buffer = await getBuffer(`https://h4ck3rs404-api.herokuapp.com/api/nsfw/Cum?apikey=404Api`)
sendButImage(from,`🔥𝐂𝐨𝐦𝐚𝐧𝐝𝐨 +18\n🔞𝐁𝐲:${NickDono}`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: 'ꨄ︎𝐏𝐫𝐨́𝐱𝐢𝐦𝐨シ'}, type: 1}]);
break

case 'tentaculo': 
case 'tentaculos':
  if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}playboy 1`)
buffer = await getBuffer(`https://h4ck3rs404-api.herokuapp.com/api/nsfw/Tentacles?apikey=404Api`)
sendButImage(from,`🔥𝐂𝐨𝐦𝐚𝐧𝐝𝐨 +18\n🔞𝐁𝐲:${NickDono}`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: 'ꨄ︎𝐏𝐫𝐨́𝐱𝐢𝐦𝐨シ'}, type: 1}]);
break

/////////////(PINTEREST)\\\\\\\\\\\\\\\\

case 'waifu': 
pin = await hx.pinterest('waifu')
ac = pin[Math.floor(Math.random() * pin.length)]
buffer = await getBuffer(ac)
sendButImage(from,`𝐏𝐫𝐞𝐬𝐬𝐢𝐨𝐧𝐞  *'𝐏𝐫𝐨́𝐱𝐢𝐦𝐨'* 𝐩𝐚𝐫𝐚 ➪𝐩𝐫𝐨́𝐱𝐢𝐦𝐚 𝐢𝐦𝐚𝐠𝐞𝐦`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: '𝐏𝐫𝐨́𝐱𝐢𝐦𝐨☕︎'}, type: 1}]);
break

case 'loli': 
pin = await hx.pinterest('loli')
ac = pin[Math.floor(Math.random() * pin.length)]
buffer = await getBuffer(ac)
sendButImage(from,`𝐏𝐫𝐞𝐬𝐬𝐢𝐨𝐧𝐞  *'𝐏𝐫𝐨́𝐱𝐢𝐦𝐨'* 𝐩𝐚𝐫𝐚 ➪𝐩𝐫𝐨́𝐱𝐢𝐦𝐚 𝐢𝐦𝐚𝐠𝐞𝐦`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: '𝐏𝐫𝐨́𝐱𝐢𝐦𝐨☕︎'}, type: 1}]);
break

case 'cosplay': 
pin = await hx.pinterest('cosplay')
ac = pin[Math.floor(Math.random() * pin.length)]
buffer = await getBuffer(ac)
sendButImage(from,`𝐏𝐫𝐞𝐬𝐬𝐢𝐨𝐧𝐞  *'𝐏𝐫𝐨́𝐱𝐢𝐦𝐨'* 𝐩𝐚𝐫𝐚 ➪𝐩𝐫𝐨́𝐱𝐢𝐦𝐚 𝐢𝐦𝐚𝐠𝐞𝐦`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: '𝐏𝐫𝐨́𝐱𝐢𝐦𝐨☕︎'}, type: 1}]);
break

case 'neko':
pin = await hx.pinterest('neko')
ac = pin[Math.floor(Math.random() * pin.length)]
buffer = await getBuffer(ac)
sendButImage(from,`𝐏𝐫𝐞𝐬𝐬𝐢𝐨𝐧𝐞  *'𝐏𝐫𝐨́𝐱𝐢𝐦𝐨'* 𝐩𝐚𝐫𝐚 ➪𝐩𝐫𝐨́𝐱𝐢𝐦𝐚 𝐢𝐦𝐚𝐠𝐞𝐦`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: '𝐏𝐫𝐨́𝐱𝐢𝐦𝐨☕︎'}, type: 1}]);
break

case 'nagatoro':
pin = await hx.pinterest('nagatoro')
ac = pin[Math.floor(Math.random() * pin.length)]
buffer = await getBuffer(ac)
sendButImage(from,`𝐏𝐫𝐞𝐬𝐬𝐢𝐨𝐧𝐞  *'𝐏𝐫𝐨́𝐱𝐢𝐦𝐨'* 𝐩𝐚𝐫𝐚 ➪𝐩𝐫𝐨́𝐱𝐢𝐦𝐚 𝐢𝐦𝐚𝐠𝐞𝐦`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: '𝐏𝐫𝐨́𝐱𝐢𝐦𝐨☕︎'}, type: 1}]);
break

case 'komi':
pin = await hx.pinterest('komi')
ac = pin[Math.floor(Math.random() * pin.length)]
buffer = await getBuffer(ac)
sendButImage(from,`𝐏𝐫𝐞𝐬𝐬𝐢𝐨𝐧𝐞  *'𝐏𝐫𝐨́𝐱𝐢𝐦𝐨'* 𝐩𝐚𝐫𝐚 ➪𝐩𝐫𝐨́𝐱𝐢𝐦𝐚 𝐢𝐦𝐚𝐠𝐞𝐦`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: '𝐏𝐫𝐨́𝐱𝐢𝐦𝐨☕︎'}, type: 1}]);
break

case 'yuno':
pin = await hx.pinterest('yuno gasai')
ac = pin[Math.floor(Math.random() * pin.length)]
buffer = await getBuffer(ac)
sendButImage(from,`𝐏𝐫𝐞𝐬𝐬𝐢𝐨𝐧𝐞  *'𝐏𝐫𝐨́𝐱𝐢𝐦𝐨'* 𝐩𝐚𝐫𝐚 ➪𝐩𝐫𝐨́𝐱𝐢𝐦𝐚 𝐢𝐦𝐚𝐠𝐞𝐦`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: '𝐏𝐫𝐨́𝐱𝐢𝐦𝐨☕︎'}, type: 1}]);
break

case 'akame':
pin = await hx.pinterest('akame')
ac = pin[Math.floor(Math.random() * pin.length)]
buffer = await getBuffer(ac)
sendButImage(from,`𝐏𝐫𝐞𝐬𝐬𝐢𝐨𝐧𝐞  *'𝐏𝐫𝐨́𝐱𝐢𝐦𝐨'* 𝐩𝐚𝐫𝐚 ➪𝐩𝐫𝐨́𝐱𝐢𝐦𝐚 𝐢𝐦𝐚𝐠𝐞𝐦`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: '𝐏𝐫𝐨́𝐱𝐢𝐦𝐨☕︎'}, type: 1}]);
break

case 'itsuki':
pin = await hx.pinterest('itsuki')
ac = pin[Math.floor(Math.random() * pin.length)]
buffer = await getBuffer(ac)
sendButImage(from,`𝐏𝐫𝐞𝐬𝐬𝐢𝐨𝐧𝐞  *'𝐏𝐫𝐨́𝐱𝐢𝐦𝐨'* 𝐩𝐚𝐫𝐚 ➪𝐩𝐫𝐨́𝐱𝐢𝐦𝐚 𝐢𝐦𝐚𝐠𝐞𝐦`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: '𝐏𝐫𝐨́𝐱𝐢𝐦𝐨☕︎'}, type: 1}]);
break

case 'chizuru':
pin = await hx.pinterest('chizuru')
ac = pin[Math.floor(Math.random() * pin.length)]
buffer = await getBuffer(ac)
sendButImage(from,`𝐏𝐫𝐞𝐬𝐬𝐢𝐨𝐧𝐞  *'𝐏𝐫𝐨́𝐱𝐢𝐦𝐨'* 𝐩𝐚𝐫𝐚 ➪𝐩𝐫𝐨́𝐱𝐢𝐦𝐚 𝐢𝐦𝐚𝐠𝐞𝐦`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: '𝐏𝐫𝐨́𝐱𝐢𝐦𝐨☕︎'}, type: 1}]);
break

case 'hinata':
pin = await hx.pinterest('hinata')
ac = pin[Math.floor(Math.random() * pin.length)]
buffer = await getBuffer(ac)
sendButImage(from,`𝐏𝐫𝐞𝐬𝐬𝐢𝐨𝐧𝐞  *'𝐏𝐫𝐨́𝐱𝐢𝐦𝐨'* 𝐩𝐚𝐫𝐚 ➪𝐩𝐫𝐨́𝐱𝐢𝐦𝐚 𝐢𝐦𝐚𝐠𝐞𝐦`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: '𝐏𝐫𝐨́𝐱𝐢𝐦𝐨☕︎'}, type: 1}]);
break

case 'sakura':
pin = await hx.pinterest('sakura')
ac = pin[Math.floor(Math.random() * pin.length)]
buffer = await getBuffer(ac)
sendButImage(from,`𝐏𝐫𝐞𝐬𝐬𝐢𝐨𝐧𝐞  *'𝐏𝐫𝐨́𝐱𝐢𝐦𝐨'* 𝐩𝐚𝐫𝐚 ➪𝐩𝐫𝐨́𝐱𝐢𝐦𝐚 𝐢𝐦𝐚𝐠𝐞𝐦`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: '𝐏𝐫𝐨́𝐱𝐢𝐦𝐨☕︎'}, type: 1}]);
break

case 'esdeath':
pin = await hx.pinterest('esdeath')
ac = pin[Math.floor(Math.random() * pin.length)]
buffer = await getBuffer(ac)
sendButImage(from,`𝐏𝐫𝐞𝐬𝐬𝐢𝐨𝐧𝐞  *'𝐏𝐫𝐨́𝐱𝐢𝐦𝐨'* 𝐩𝐚𝐫𝐚 ➪𝐩𝐫𝐨́𝐱𝐢𝐦𝐚 𝐢𝐦𝐚𝐠𝐞𝐦`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix + command}`, buttonText: {displayText: '𝐏𝐫𝐨́𝐱𝐢𝐦𝐨☕︎'}, type: 1}]);
break
//============(CASE-BEM-VINDO/E ETC..)=========\\

case 'bemvindo':
case 'welcome':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Ja esta ativo')
welkom.push(from)
fs.writeFileSync('./datab/grupos/welkom.json', JSON.stringify(welkom))
reply('🌀 Ativou com sucesso o recurso de bem vindo neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isWelkom) return reply('Ja esta Desativado')
pesquisar = from
processo = welkom.indexOf(pesquisar)
while(processo >= 0){
welkom.splice(processo, 1)
processo = welkom.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/welkom.json', JSON.stringify(welkom))
reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'tempomsg':
if(!SoDono) return reply('Só o Dono pode ativar esse recurso.')
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isTmp) return reply('Ja esta ativo')
tempodf.push(from)
fs.writeFileSync('./datab/grupos/tempodf.json', JSON.stringify(tempodf))
reply('🌀 Ativou com sucesso o recurso  📝')
} else if (Number(args[0]) === 0) {
if (!isTmp) return reply('Ja esta Desativado')
pesquisar = from
processo = tempodf.indexOf(pesquisar)
while(processo >= 0){
rgs.splice(processo, 1)
processo = tempodf.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/tempodf.json', JSON.stringify(tempodf))
reply('‼️ Desativou com sucesso o recurso✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

//=====================================\\



//=================(ANTS)=================\\

case 'antictt':
case 'anticontato':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiCtt) return reply('Ja esta ativo')
antictt.push(from)
fs.writeFileSync('./datab/ants/antictt.json', JSON.stringify(antictt))
reply('🌀 Ativou com sucesso o recurso de anticontato neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiCtt) return reply('Ja esta Desativado')
pesquisar = from
processo = antictt.indexOf(pesquisar)
while(processo >= 0){
antictt.splice(processo, 1)
processo = antictt.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antictt.json', JSON.stringify(antictt))
reply('‼️ Desativou com sucesso o recurso de anticontato neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antifake':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntifake) return reply('Ja esta ativo')
antifake.push(from)
fs.writeFileSync('./datab/ants/antifake.json', JSON.stringify(antifake))
reply('🌀 Ativou com sucesso o recurso de antifake neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntifake) return reply('Ja esta Desativado')
pesquisar = from
processo = antifake.indexOf(pesquisar)
while(processo >= 0){
antifake.splice(processo, 1)
processo = antifake.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antifake.json', JSON.stringify(antifake))
reply('‼️ Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiloc':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
if(Antiloc) return reply('Já está Ativo.')
antiloc.push(from)
fs.writeFileSync('./datab/ants/antiloc.json', JSON.stringify(antiloc))
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if (Number(args[0]) === 0) {
if(!Antiloc) return reply('Já está Desativado.')
antiloc.splice(from, 1)
fs.writeFileSync('./datab/ants/antiloc.json', JSON.stringify(antiloc))
rpely('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antidocumento':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
antidoc.push(from)
fs.writeFileSync('./datab/ants/antidoc.json', JSON.stringify(antidoc))
reply('Ativou com sucesso o recurso de anti documento neste grupo✔️')
} else if (Number(args[0]) === 0) {
antidoc.splice(from, 1)
fs.writeFileSync('./datab/ants/antidoc.json', JSON.stringify(antidoc))
reply('Desativou com sucesso o recurso de antidocumento neste grupo✔️')
 } else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antiimg':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiImg) return reply('Já Esta ativo')
antiimg.push(from)
fs.writeFileSync('./datab/ants/antiimg.json', JSON.stringify(antiimg))
reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiImg) return reply('Ja esta Desativado.')
antiimg.splice(from, 1)
fs.writeFileSync('./datab/ants/antiimg.json', JSON.stringify(antiimg))
reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antivideo':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiVid) return reply('Ja esta ativo')
antivid.push(from)
fs.writeFileSync('./datab/ants/antivideo.json', JSON.stringify(antivid))
reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiVid) return reply('Ja esta Desativado')
antivid.splice(from, 1)
fs.writeFileSync('./datab/ants/antivideo.json', JSON.stringify(antivid))
reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiaudio':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiAudio) return reply('Ja esta ativo')
antiaudio.push(from)
fs.writeFileSync('./datab/ants/antiaudio.json', JSON.stringify(antiaudio))
reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiAudio) return reply('Ja esta Desativado')  
antiaudio.splice(from, 1)
fs.writeFileSync('./datab/ants/antiaudio.json', JSON.stringify(antiaudio))
reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'limitecaracteres':
case 'limiteflood':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar. msg.Badmin)
if (args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if (Number(args[0]) === 1) {
if (isAntiFlood) return reply(`🌀 O recurso limite de caracteres até ${limitefl} já está ativo no grupo 🌀`)
antiflood.push(from)
fs.writeFileSync('./datab/usuarios/antiflood.json', JSON.stringify(antiflood))
reply(`✔️ O recurso limite de caracteres ${limitefl} foi ativado nesse grupo📝`)
} else if (Number(args[0]) === 0) {
 if (!isAntiFlood) return reply('✔️ O recurso limite de caracteres não está ativado no grupo 📝')
let position = false
Object.keys(antiflood).forEach((i) => {
if (antiflood[i] === from) {
position = i
}
})
if (position !== false) {
antiflood.splice(position, 1)
fs.writeFileSync('./datab/usuarios/antiflood.json', JSON.stringify(antiflood))
}
reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'limitesticker':
case 'limitest':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar. msg.Badmin)
if (args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if (Number(args[0]) === 1) {
if (isAntiFlood) return reply(`🌀 O recurso limite de caracteres até ${limitefl} já está ativo no grupo 🌀`)
antiflood.push(from)
fs.writeFileSync('./datab/usuarios/antiflood.json', JSON.stringify(antiflood))
reply(`✔️ O recurso limite de caracteres ${limitefl} foi ativado nesse grupo📝`)
} else if (Number(args[0]) === 0) {
 if (!isAntiFlood) return reply('✔️ O recurso limite de caracteres não está ativado no grupo 📝')
let position = false
Object.keys(Limitest).forEach((i) => {
if (Limitest[i] === from) {
position = i
}
})
if (position !== false) {
Limitest.splice(position, 1)
fs.writeFileSync('./datab/usuarios/limitest.json', JSON.stringify(Limitest))
}
reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'antilink':
buffer = await getBuffer(`${logo}`)
sendButImage(from,`ฅ^•ﻌ•^ฅ𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞➪`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix}nsjsj 1`, buttonText: {displayText: 'ATIVAR ✅'}, type: 1},
{buttonId: `${prefix}nsjsj 0`, buttonText: {displayText: 'DESATIVAR ❌'}, type:1}]
);
break;

case 'nsjsj':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiLink) return reply('Ja esta ativo')
antilink.push(from)
fs.writeFileSync('./datab/ants/antilink.json', JSON.stringify(antilink))
reply('🌀 Ativou com sucesso o recurso de antilink neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiLink) return reply('Ja esta Desativado')
pesquisar = from
processo = antilink.indexOf(pesquisar)
while(processo >= 0){
antilink.splice(processo, 1)
processo = antilink.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antilink.json', JSON.stringify(antilink))
reply('‼️ Desativou com sucesso o recurso de antilink neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antipalavrão':
case 'antipalavrao':  
if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`[❗] O PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
if (args.length < 1) return reply(`[❗] 1 / 0, Exemplo ${prefix + command} 1`)
if (Number(args[0]) === 1) {
if (isPalavrão) return reply('*Já esta ativado...*')
palavrão.push(from)
fs.writeFileSync('./datab/grupos/palavrão.json', JSON.stringify(palavrão))
reply(`[❗] anti palavrão ativado`)
} else if (Number(args[0]) === 0) {
if (!isPalavrão) return reply('*Já esta Desativado...*')  
palavrão.splice(from, 1)
fs.writeFileSync('./datab/grupos/palavrão.json', JSON.stringify(palavrão))
reply(`[❗] anti palavrão desativado...`)
} else {
reply(`[❗] 1 / 0, Exemplo ${prefix + command} 0`)
}
await limitAdd(sender)
break

case 'antilinkhard':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiLinkHard) return reply('Ja esta ativo')
antilinkhard.push(from)
fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
reply('🌀 Ativou com sucesso o recurso de antilink hardcore neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiLinkHard) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkhard.indexOf(pesquisar)
while(processo >= 0){
antilinkhard.splice(processo, 1)
processo = antilinkhard.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
reply('‼️ Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'vacilo':
case 'bemvindo2':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
reply(`Devo Lembrar que você deve determinar a legenda desse grupo, após ativar essa função, a legenda funciona por grupo, se deseja saber mais informações sobre, digite ${prefix}infobemvindo`)
if (Number(args[0]) === 1) {
if (isVacilo) return reply('❎O recurso já está ativado no grupo❎')
vacilo.push(from)
fs.writeFileSync('./datab/usuarios/vacilo.json', JSON.stringify(vacilo))
reply('✅O recurso foi ativado✅')
} else if (Number(args[0]) === 0) {
if (!isVacilo) return reply('❎O recurso não está ativado no grupo❎')
let position = false
Object.keys(vacilo).forEach((i) => {
if (vacilo[i] === from) {
position = i
}
})
if (position !== false) {
vacilo.splice(position, 1)
fs.writeFileSync('./datab/usuarios/vacilo.json', JSON.stringify(vacilo))
}
reply('❌O recurso foi desativado❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

//==========(Sticker-Stickers)===========\\

case 'emoji':
case 'semoji':
if(!q) return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
emot = q.split('/')[0]
jemot = q.split('/')[1]
if(jemot == 'apple'){
idemot = 0
}
else if(jemot == 'google'){
idemot = 1
}
else if(jemot == 'samsung'){
idemot = 2
}
else if(jemot == 'microsoft'){
idemot = 3
}
else if(jemot == 'whatsapp'){
idemot = 4
}
else if(jemot == 'twitter'){
idemot = 5
}
else if(jemot == 'facebook'){
idemot = 6
}
else if(jemot == 'joypixels'){
idemot = 7
}
else if(jemot == 'openmoji'){
idemot = 8
}
else if(jemot == 'emojidex'){
idemot = 9
}
else if(jemot == 'lg'){
idemot = 10
}
else if(jemot == 'htc'){
idemot = 11
}
else if(!jemot){
idemot = 4
}
else{
return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
}
reply(enviar.espere)
if(idemot == undefined) return
emoji.get(emot)
.then(emoji => {
console.log(emoji.images[idemot]);
sendStickerFromUrl(from,emoji.images[idemot].url, selo)
})
break

case 'rename':
if (!isQuotedSticker) return reply('Marque uma figurinha...')  
var namaPackss = q.substring(0, q.indexOf('/') - 0)
var authorPackss = q.substring(q.lastIndexOf('/') + 1)
texto = body.slice(7)
if (isDoubleByte(texto)) return reply('[ !  ] Não é permitido letras modificadas nem emojis!!')
reply(enviar.espere)
stiker_wm = JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
dlstiker_wm = await conn.downloadAndSaveMediaMessage(stiker_wm)
stickerpackid = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2"
packname = namaPackss;
author = authorPackss;
exif321 = getRandom('.exif')
exifst = getRandom('.webp')
googlelink = ` `;
applelink = ` `;
json = {"sticker-pack-id": stickerpackid, "sticker-pack-name": packname, "sticker-pack-publisher": author, "android-app-store-link": googlelink, "ios-app-store-link": applelink}
len = JSON.stringify(json).length
f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
aaa = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
if (len > 256) {
len = len - 256
aaa.unshift(0x01)
} else {
aaa.unshift(0x00)
}
fff = Buffer.from(aaa)
ffff = Buffer.from(JSON.stringify(json))
if (len < 16) {
len = len.toString(16)
len = "0" + len
} else {
len = len.toString(16)
}
ff = Buffer.from(len, "hex")
wm = Buffer.concat([f, ff, fff, ffff])
fs.writeFile(exif321, wm, function(err) {
if (err) return console.log(err);
exec(`webpmux -set exif ${exif321} undefined.webp -o ${exifst}`, (err) => {
if (err) return console.log(err);
conn.sendMessage(from, fs.readFileSync(exifst), sticker, {quoted: info})
fs.unlinkSync(exifst)
fs.unlinkSync(exif321)
fs.unlinkSync('undefined.webp')
})
});
break

case 'sc':
case 'c':  
case 'csticker':  
case 'cstiker':  
case 'stcirculo':
case 'circlesticker':  
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
base64 = await conn.downloadMediaMessage(post)
reply(enviar.espere)
link = await upload(base64)
ranp = getRandom('.gif')
rano = getRandom('.webp')
ini_buffer = `https://api-exteam.herokuapp.com/api/circle?img=${link}`
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
buff = fs.readFileSync(rano)
conn.sendMessage(from, buff, sticker, { quoted: info})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'fstiker': 
case 'fsticker':
case 'f':
await limitAdd(sender)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
conn.sendMessage(from, buffer, sticker, {quoted: info})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && info.message.videoMessage.seconds < 10 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply(enviar.espere) 
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
conn.sendMessage(from, buffer, sticker, {quoted: info})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 9 segundos)`)
}
break 

case 'st':
case 'sticker':
case 's':
var a = `AKAME-BOT_OFC`
var b = `${setting.numerodono}`
if (isMedia && !info.message.videoMessage || isQuotedImage ) {
const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
 media = await conn.downloadAndSaveMediaMessage(encmedia)
 await createExif(a,b)
 out = getRandom('.webp')
 ffmpeg(media)
 .on('error', (e) => {
 console.log(e)
 conn.sendMessage(from, 'Há um erro', 'conversação', { quoted: info })
 fs.unlinkSync(media)
 })
 .on('end', () => {
 _out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./armor/sticker/data.exif', out, '-o', _out])
.on('exit', () => {
conn.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: info })
fs.unlinkSync(out)
fs.unlinkSync(_out)
fs.unlinkSync(media)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(160,iw)':min'(160,ih)':force_original_aspect_ratio=decrease,fps=15, pad=160:160:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(out) 
} else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
 const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const media = await conn.downloadAndSaveMediaMessage(encmedia)
var a = `AKAME-BOT_OFC`
var b = `${setting.numerodono}`
await createExif(a,b)
out = getRandom('.webp')
ffmpeg(media)
.on('error', (e) => {
console.log(e)
conn.sendMessage(from, 'Há um erro', 'conversação', { quoted: info })
fs.unlinkSync(media)
})
.on('end', () => {
_out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./armor/sticker/data.exif', out, '-o', _out])
.on('exit', () => {
conn.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: info })
fs.unlinkSync(out)
fs.unlinkSync(_out)
fs.unlinkSync(media)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(160,iw)':min'(160,ih)':force_original_aspect_ratio=decrease,fps=15, pad=160:160:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(out)       
} else {
reply(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 10 segundos)`)
}
await limitAdd(sender)
break


case 'st2':
case 'sticker2':
case's2':
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const media = await conn.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply(enviar.espere)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot','ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(enviar.stick)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, buffer, sticker, {quoted: info})
fs.unlinkSync(rano)
})
} else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const media = await conn.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot', 'ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, buffer, sticker, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

case 'toimg':
if (!isQuotedSticker) return reply('{ ❗ } *Marque a figurinha*')
reply(enviar.espere)
encmedia = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`❌ Falha ao converter adesivos em imagens, não converto gifs, pra converter gif é o seguinte, marque a figurinha com o comando : ${prefix}togif ❌`)
buffer = fs.readFileSync(ran)
conn.sendMessage(from, buffer, image, {quoted: info, caption: `Ai está senhor`})
fs.unlinkSync(ran)
})
break

case 'togif':
if (!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
if ((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const mediaaa = await conn.downloadAndSaveMediaMessage(encmediaaa)
reply(enviar.espere)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
await conn.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: info, caption: '✅'})
fs.unlinkSync(mediaaa)
}
break

//=============(LOGOS)=============\\
//[API-DAPUHY]\\
//(Folhas-1-6)\\
case 'folha':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
var txt = encodeURI(body.slice(7))
reply(enviar.espere)
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nulis?text=${txt}&apikey=${dapuhykey}`)
await conn.sendMessage(from, anu, image, {quoted: info, thumbnail: null})
break	

case 'folha2':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
var txt = encodeURI(body.slice())
reply(enviar.espere)
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nuliskanan?text=${txt}&apikey=${dapuhykey}`)
await conn.sendMessage(from, anu, image, {quoted: info, thumbnail: null})
break	

case 'folha3':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
var txt = encodeURI(body.slice())
reply(enviar.espere)
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nuliskiri?text=${txt}&apikey=${dapuhykey}`)
await conn.sendMessage(from, anu, image, {quoted: info, thumbnail: null})
break	

case 'folha4':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
var txt = encodeURI(body.slice())
reply(enviar.espere)
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/foliokanan?text=${txt}&apikey=${dapuhykey}`)
await conn.sendMessage(from, anu, image, {quoted: info, thumbnail: null})
break	

case 'folha5':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
var txt = encodeURI(body.slice())
reply(enviar.espere)
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/foliokiri?text=${txt}&apikey=${dapuhykey}`)
await conn.sendMessage(from, anu, image, {quoted: info, thumbnail: null})
break
//========================================\\

case 'neondevil':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
sd = args.join(" ")
reply(enviar.espere)
sad = await getBuffer(`https://dapuhy-api.herokuapp.com/api/textpro/neondevil?text=${sd}&apikey=${dapuhykey}`)
await conn.sendMessage(from, sad, image, {quoted: info, thumbnail: null})
break 

case 'show':
if(args.length < 2) return reply(`Exemplo: ${prefix + command} Sad/Tenso/Demais`)
txt = body.slice(6)
jro = txt.split("/")[0];
jru = txt.split("/")[1];
jrp = txt.split("/")[2];
reply(enviar.espere)
tyd = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photofunia/retrowave?text1=${jro}&text2=${jru}&text3=${jrp}&apikey=${dapuhykey}`, {method: 'get'})
await conn.sendMessage(from, tyd, image, {quoted: info, thumbnail: null})
break 

case 'bracelet':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
lvc = body.slice(10)
reply(enviar.espere)
lop = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photofunia/bracelet?text=${lvc}&apikey=${dapuhykey}`, {method: 'get'})
await conn.sendMessage(from, lop, image, {quoted: info, thumbnail: null})
break
//==========(FIM-DAPUHY-LOGOS)==========\\




//======================================\\

//==========(PLAQUINHAS-LOGOS)===========\\

case 'plaq': //by zanga 
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}playboy 1`)
if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
conn.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selo, thumbnail: null, caption: ' *Plaquinha feita 🅞︎🅝︎* '})
break

case 'plaq2': //by zanga 
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}playboy 1`)
if (args.length < 1) return reply(`${prefix}plaq2 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${teks}`)
await conn.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selo, thumbnail: null, caption: ' *Plaquinha feita 🅞︎🅝︎* '})
break

case 'plaq3': //by zanga
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}playboy 1`)
if (args.length < 1) return reply(`${prefix}plaq3 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${teks}&text.0.outline.blur=63`)
await conn.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selo, thumbnail: null, caption: ' *Plaquinha feita 🅞︎🅝︎* '})
break

case 'plaq4':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}playboy 1`)
if (args.length < 1) return reply(`${prefix}plaq7 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`) //api
plaq = ` *Plaquinha feita 🅞︎🅝︎* `
await conn.sendMessage(from, buffer, image, {caption: plaq, quoted: selo, thumbnail: null, sendEphemeral:true})
break

case 'plaq5':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}playboy 1`)
if (args.length < 1) return reply(`${prefix}plaq10 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${teks}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
await conn.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selo, thumbnail: null, caption: ' *Plaquinha feita 🅞︎🅝︎* '})
break

case 'plaq4off': //by zanga
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq4 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(2).jpeg?profile=Zanga%204.0&text.0.text=${teks}`)
await conn.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selo, thumbnail: null, caption: ' *Plaquinha feita 🅞︎🅝︎* '})
break

case 'placaloli':
if (!q) return reply(enviar.wrongFormat)
reply('Aguarde..')
lod = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
sendStickerFromUrl(from, lod.message, enviar.success)
await limitAdd(sender)
break 

//=======================================\\





//=========(API-Team-Of-LOGOS)==========\\
case 'thunder':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
vd = body.slice(9)
reply(enviar.espere)
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/thunder?apikey=apiteam&texto=${vd}`)
buffer = await getBuffer(anu.resultado)
await conn.sendMessage(from, buffer, image, {quoted: info, thumbnail: null})
break

case 'thunderv2':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
teks = body.slice(11)
reply(enviar.espere)
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/thunderv2?apikey=apiteam&texto=${teks}`)
buffer = await getBuffer(anu.resultado)
await conn.sendMessage(from, buffer, image, {quoted: info, thumbnail: null})
break

case 'transformer':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
tv = body.slice(13)
reply(enviar.espere)
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/transformer?apikey=apiteam&texto=${tv}`)
buffer = await getBuffer(anu.resultado)
await conn.sendMessage(from, buffer, image, {quoted: info, thumbnail: null})
break

case 'grafity':
if(args.length < 2) return reply(`Exemplo: ${prefix + command} sad/demais`)
txt = body.slice(9)
teks1 = txt.split("/")[0];
teks2 = txt.split("/")[1];
reply(enviar.espere)
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/graffiti?apikey=apiteam&texto1=${teks1}&texto2=${teks2}`)
buffer = await getBuffer(anu.resultado)
await conn.sendMessage(from, buffer, image, {quoted: info, thumbnail: null})
break
//========(FIM-Team-Of-LOGOS)==========\\



//============(LOGOS-SEM-API)===========\\
case 'demon':	
case 'demongreen':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'metalfire':	
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere) 
thiccysapi.textpro("https://textpro.me/hot-metal-text-effect-843.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'thunder':	
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere) 
thiccysapi.textpro("https://textpro.me/create-thunder-text-effect-online-881.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'neongreen':	
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/green-neon-text-effect-874.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'neontxt':	
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/free-advanced-glow-text-effect-873.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'rainbow':	
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'ice':	
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/ice-cold-text-effect-862.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'lapis':	
case 'lápis':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'gameov': 
case 'gameover':   
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case '3dstone':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'fiction':	
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'wall':
case 'break':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/break-wall-text-effect-871.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'blood':	
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'joker':	
case 'jokerlogo':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-logo-joker-online-934.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'demon':	
case 'demongreen':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'natal':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'asfalto':	
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/road-warning-text-effect-878.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
 } catch(err) { 
console.log(err)
} 
});
break

case 'neon3d':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'neon':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'ossos':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/skeleton-text-effect-online-929.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'jeans':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/denim-text-effect-online-919.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'metalblue':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/glossy-blue-metal-text-effect-967.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'carbon':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/glossy-carbon-text-effect-965.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'pink':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/holographic-3d-text-effect-975.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'style':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/1917-style-text-effect-online-980.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'vidro':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/dropwater-text-effect-872.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'areia':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'neve':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/xmas-cards-3d-online-942.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'neon3':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'nuvem':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'horror':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/horror-blood-text-effect-online-883.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'matrix':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/matrix-style-text-effect-online-884.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'transformer':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'berry':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'luxury':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'colaq':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'thunderv2':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'demonfire':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'neondevil':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'cattxt':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'glitch2': 
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad/sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html",[ `${texto1}`, `${texto2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break 

case 'grafity': 
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad/sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",[ `${texto1}`, `${texto2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break 

case 'steel': 
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad/sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/3d-steel-text-effect-877.html",[ `${texto1}`, `${texto2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break 

case 'marvel': 
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad/sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",[ `${texto1}`, `${texto2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'escudo': 
case 'america':   
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad/sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html",[ `${texto1}`, `${texto2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'pornhub':
if (args.length < 1) return reply(`*Exemplo: ${prefix + command} Akame&bot*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(enviar.espere)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/pornhub?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
conn.sendMessage(from, pornhub, image, {caption: `*pronto cara*`, quoted: info})
break

case 'stone': 
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad/sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-a-stone-text-effect-online-982.html",[ `${texto1}`, `${texto2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'space':
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad/Sad
tem que ter a / senão não vai.`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html",[ `${texto1}`, `${texto2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'halloween':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/halloween-fire-text-effect-940.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'lava':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/lava-text-effect-online-914.html",`${q}`,
["Developer"], ["Phaticusthiccy"]).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'toxic':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
thiccysapi.textpro("https://textpro.me/toxic-text-effect-online-901.html",`${q}`,
["Developer"], ["Phaticusthiccy"]).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: info})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'gold':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pGold(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'romantic':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pRomantic(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'wooden':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pWooden(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'madeira':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pMadeira(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'coffe2':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pCoffe2(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'neon2':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pNeon2(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case '8bit':
if (args.length < 1) return reply('onde está o texto?')
tdp = body.slice(6)
if(tdp.length < 5) return reply(`Utilize assim ${prefix + command} sad/sad`) 
p8Bit(args.join(' ').split('/')[0], args.join(' ').split('/')[1])
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'love':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pLoveMsg(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'coffe':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pCoffeCup(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'neon2':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pNeon2(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'copo':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pCup(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'glitch':
tdp = body.slice(8)
if(tdp.length < 5) return reply(`Utilize assim ${prefix + command} sad/sad`) 
pGlitch(args.join(' ').split('/')[0], args.join(' ').split('/')[1])
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'googlesg':
case 'googlelogo': 
tdt = args.join(" ")
if(tdt.length < 7) return reply(`Utilize assim ${prefix + command} sad/sad/sad`) 
pGooglesg(args.join(' ').split('/')[0], args.join(' ').split('/')[1], args.join(' ').split('/')[2])
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'butterfly':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pButterfly(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'fire':
frp = body.slice(6)
if (frp.length < 3) return reply(`onde está o texto?, Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
pFogo(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'shadow':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pShadow(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'grass':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pMsgGrass(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'narutologo':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pNaruto(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'metalgold':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pOuro(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break 

case 'cemiterio':
case 'cemitério': 
if (!q) return reply('onde está o texto?')
pSemi(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break 

case 'papel':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pBurnPapper(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break 

case 'lobometal':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pAwolfMetal(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break 

case 'harryp':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pHarryPotter(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break 

//========(SORTEIO-VOTAR-CASES)=========\\

case 'delvote':
case 'delvoto':  
if(!info.key.remoteJid) return
delVote(from)
reply('votação deletada com sucesso')
break

case 'votar':
case 'votacao': 
case 'votação': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!budy.includes("/")) return reply(`Cade a /, exemplo ${prefix}votação @marca/Ele é total gay/ 1`)
if(!q) return reply('*Votação*\n\n'+ prefix+ 'votar @tag marcar / pergunta  / 1 (1 = 1 Minuto)')
if (info.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || info.message.extendedTextMessage.contextInfo == null) {
let id = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
split = args.join(' ').replace('@', '').split('/')
if(!Number(split[2])) return reply('cade os minutos eim?\n\n1 = 1 Minuto')
await mentions('Vote ' +'@'+ id.split('@')[0]+' para' +'\n\n' + `voto = ✅\ndevoto = ❌\n\npergunta: ${split[1]}`,[id],true)
addVote(from,split[1],split[0],split[2],reply)
}
break

case 'infosorteio':
case 'helpsorteio':  
await conn.sendMessage(from, infosorteio(prefix), text, {quoted: selo})
break

case 'sorteio':
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
d = []
teks = `🎉Parabéns, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🔥፝⃟  ➣ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'sorteionumero':
case 'sorteionumeros':  
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')  
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$`)
var numerossrt = sortear[Math.floor(Math.random() * sortear.length)] 
d = []
teks =  `🎉Parabéns ao número do sortudo, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
teks += `🔥፝⃟  ➣ ${numerossrt}\n`
d.push(numerossrt)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
//======================================\\



//==========(TTPS/ATTP/TTM)============\\

case 'attp':
try {
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Sad`)
reply(enviar.espere)
buffer = await getBuffer(`http://api-exteam.herokuapp.com/api/fun/attp?apikey=aleofc&text=${encodeURI(q)}`)
await conn.sendMessage(from, buffer, sticker, { quoted: info})
} catch {
try {
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
await conn.sendMessage(from, buffer, sticker, { quoted: info})
} catch {
reply('ERROR, ALGUM PROBLEMA NA API, EU ACHO.. ')
}
}
break
case 'ttp':
reply(enviar.espere)
string = args.join(' ') || 'Texto indefinido'
post = `https://api-exteam.herokuapp.com/api/fun/ttp?apikey=aleofc&text=${string}`
webp = await getBuffer(post)
link = await upload(webp)
sendStickerFromUrl(from, post)
break
case 'attp2':		
case 'attp3': 
case 'attp4':
case 'attp5': 
case 'attp6':  
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Sad`)
reply(enviar.espere)
url = await getBuffer(`http://brizas-api.herokuapp.com/ttp/${command}?apikey=lzdomina&text=${encodeURI(q)}`)
await conn.sendMessage(from, url, sticker, {quoted: info})
break	


//======================================\\


//========(ANIME-COMANDOS)=====\\

case 'wallpaperanime':
console.log(color('[JR]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(enviar.espere)
teks = `wallpaper anime celular hd`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: info, caption: `${teks}`, thumbnail: getBuffer(`${linklogos}`)})
}
}
await limitAdd(sender)
break

//==============================\\



//===(ZOUEIRAS/BRINCADEIRAS/HUMOR)===\\

case 'playboy':
case 'boy':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isNsfw) return reply('O modo +18 já está ativo')
nsfw.push(from)
fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`🅞︎🅝︎Ativado com sucesso o modo ꨄ︎𝓟𝓵𝓪𝔂 𝓑𝓸𝔂 no grupo\`\`\` *${groupMetadata.subject}*`)
} else if (Number(args[0]) === 0) {
if (!isNsfw) return reply('O modo nsfw já está Desativado')  
nsfw.splice(from, 1)
fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`🅞︎🅝︎Modo ꨄ︎𝓟𝓵𝓪𝔂 𝓑𝓸𝔂   desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break 

case 'modobrincadeira':
case 'modobrincadeiras':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isModobn) return reply('o modobrincadeira já está ativo')
modobn.push(from)
fs.writeFileSync('./datab/grupos/brincadeiras.json', JSON.stringify(modobn))
reply(`\`\`\`🅞︎🅝︎Ativado com sucesso o modobrincadeiras no grupo\`\`\` *${groupMetadata.subject}*`)
} else if (Number(args[0]) === 0) {
if (!isModobn) return reply('o modobrincadeira já está Desativado')  
modobn.splice(from, 1)
fs.writeFileSync('./datab/grupos/brincadeiras.json', JSON.stringify(modobn))
reply(`\`\`\`🅞︎🅝︎Modo brincadeiras desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break 

case 'nick':
case 'gerarnick':
case 'fazernick':
nick = args.join(' ')
if(!nick) return reply('Escreva o Nick ou nome que você quer personalizar.')
axios.get(`https://aleatoryapi.herokuapp.com/api/fazernick?nome=${nick}&apikey=ale203`)
.then(dados => {
const emoji = `🩸`
nicks = dados.data
txt = '⛥Nicks Gerados Com Sucesso⛥!\n'
for (let i = 0; i < nicks.length; i++) {
txt += `${emoji} ${nicks[i]}\n`
}
txt += `\n\n${NomeDoBot}`
reply(`${txt.trim()}`)})
break

case 'chance':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
conn.updatePresence(from, Presence.composing)
var avb = body.slice(7)
if (args.length < 1) return conn.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do luuck ser gay`, text, {quoted: info})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(8)}\n\né de... ${random}%`
await conn.sendMessage(from, hasil, text, {quoted: info, contextInfo: {mentionedJid: [sender]}
})
break

case 'gay':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
rate = body.slice(5)
reply(' ❰ Pesquisando a sua ficha de gay : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imggay}`)
zxzz = 
await conn.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
feio = random
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 2 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 3 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 4 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não?🧐'} else if (boiola > 51) {bo = 'você é gay🙈'
}
await conn.sendMessage(from, wew, image, { quoted: info, caption: '  O quanto você é gay? \n\n 「 '+rate+' 」Você é: ❰ '+random+'% ❱ gay 🏳️‍🌈\n\n '+bo+' ', thumbnail:null})
}, 7000)
break

case 'feio':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
rate = body.slice(6)
reply(' ❰ Pesquisando a sua ficha de feio : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imgfeio}`)
zxzz = 
await conn.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
feio = random
if (feio < 20 ) {bo = 'É não é feio'} else if (feio == 21 ) {bo = '+/- feio'} else if (feio == 23 ) {bo = '+/- feio'} else if (feio == 24 ) {bo = '+/- feio'} else if (feio == 25 ) {bo = '+/- feio'} else if (feio == 26 ) {bo = '+/- feio'} else if (feio == 27 ) {bo = '+/- feio'} else if (feio == 2 ) {bo = '+/- feio'} else if (feio == 29 ) {bo = '+/- feio'} else if (feio == 30 ) {bo = '+/- feio'} else if (feio == 31 ) {bo = 'Ainda tá na média'} else if (feio == 32 ) {bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 33 ) {bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 34 ) {bo = 'É fein, mas tem baum coração'} else if (feio == 35 ) {bo = 'Tá na média, mas não deixa de ser feii'} else if (feio == 36 ) {bo = 'Bonitin mas é feio com orgulho'} else if (feio == 37 ) {bo = 'Feio e preguiçoso(a), vai se arrumar praga feia'} else if (feio == 3 ) {bo = 'tenho '} else if (feio == 39 ) {bo = 'Feio, mas um banho E se arrumar, deve resolver'} else if (feio == 40 ) {bo = 'FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if (feio == 41 ) {bo = 'você é Feio, mas é legal, continue assim'} else if (feio == 42 ) {bo = 'Nada que uma maquiagem e se arrumar, que não resolva 🥴'} else if (feio == 43 ) {bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if (feio == 44 ) {bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if (feio == 45 ) {bo = 'você é feio, mas tem bom gosto'} else if (feio == 46 ) {bo = 'Feio mas tem muitos amigos'} else if (feio == 47 ) {bo = 'Feio mas tem lábia pra pegar várias novinha'} else if (feio == 4 ) {bo = 'Feio e ainda não sabe se vestir, vixi'} else if (feio == 49 ) {bo = 'Feiooo'} else if (feio == 50 ) {bo = 'você é Feio, mas não se encherga 🧐'} else if (feio > 51) {bo = 'você é Feio demais 🙈'} 

await conn.sendMessage(from, wew, image, { quoted: info, caption: '  O quanto você é feio? \n\n 「 '+rate+' 」Você é: ❰ '+random+'% ❱ feio\n\n '+bo+' ' })
 }, 7000)
break 

case 'matar':
case 'mata':  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer matar')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de matar o(a) @${mentioned[0].split('@')[0]} ✗🩸` 
const jrpp = fs.readFileSync('./logos/matar.mp4')
await conn.sendMessage(from, jrpp,  MessageType.video, {mimetype: 'video/gif', quoted: info, caption: susp})
break 

case 'corno':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
rate = body.slice(7)
reply(' ❰ Pesquisando a ficha de corno : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imgcorno}`)
zxzz = 
await conn.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, wew, image, { quoted: info, caption: '  O quanto você é corno? \n\n 「 '+rate+' 」Você é: ❰ '+random+'% ❱  corno 🐃'})
}, 7000)
break

case 'vesgo':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
rate = body.slice(7)
reply(' ❰ Pesquisando a ficha de vesgo : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imgvesgo}`)
zxzz = 
await conn.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, wew, image, { quoted: info, caption: 'O quanto você é vesgo? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  Vesgo 🙄😆'})
}, 7000)
break 

case 'gimage':
case 'googleimage':
case 'img':
if (args.length < 1) return reply('O que você deseja procurar?')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(enviar.espere)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random = gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: info, caption: `*Resultados da pesquisa de : * ${teks}`})
}
}
await limitAdd(sender)
break


case 'bebado':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
rate = body.slice(7)
reply(' ❰ Pesquisando a ficha de bebado : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imgbebado}`)
zxzz = 
await conn.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, wew, image, { quoted: info, caption: 'O quanto você é bebado? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱ Bêbado 🤢🥵🥴'})
}, 7000)
break 

case 'gado':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
rate = body.slice(6)
reply(' ❰ Pesquisando a ficha de gado : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imggado}`)
zxzz = 
await conn.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, wew, image, { quoted: info, caption: 'O quanto você é gado? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  gado 🐂'})
}, 7000)
break 

case 'gostoso':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
rate = body.slice(9)
reply(' ❰ Pesquisando a sua ficha de gostoso : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imggostoso}`)
zxzz = 
await conn.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, wew, image, { quoted: info, caption: '  O quanto você é gostoso? 😏\n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱ gostoso 😝', Mimetype: 'video/gif'})
}, 7000)
break 

case 'gostosa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
rate = body.slice(9)
reply(' ❰ Pesquisando a sua ficha de gostosa : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imggostosa}`)
zxzz = 
await conn.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, wew, image, { quoted: info, caption: 'O quanto você é gostosa? 😏\n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  gostosa 😳'})
}, 7000)
break

case 'beijo':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque alguém que vc quer da um beijo')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você deu um beijo gostoso na(o) @${mentioned[0].split('@')[0]} 😁👉👈❤` 
wew = fs.readFileSync('./logos/beijo.mp4')
await conn.sendMessage(from, wew, video, {mimetype: 'video/gif', quoted: info, caption: susp})
break

case 'peteleco':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá um peteleco')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um peteleco na testa de @${mentioned[0].split('@')[0]} ` 
const jrq = fs.readFileSync('./logos/peteleco.mp4')
await conn.sendMessage(from, jrq,  MessageType.video, {mimetype: 'video/gif', quoted: info, caption: susp})
break

case 'wiki':
  susp = `𝐎𝐥𝐚́ @${sender.split("@s.whatsapp.net")[0]}𝐯𝐢𝐦 𝐭𝐫𝐚𝐳𝐞𝐫 𝐩𝐫𝐚 𝐯𝐜 𝐦𝐢𝐧𝐡𝐚 𝐰𝐢𝐤𝐢 𝐛𝐚́𝐬𝐢𝐜𝐚:\n
  ➪𝐌𝐞𝐮 𝐧𝐨𝐦𝐞:𝐀𝐊𝐀𝐌𝐄\n
COR DOS OLHOS:Vermelho\n
COR DO CABELO:Preto\n
TIPO SANGUÍNEO:A\n
INFORMAÇÕES FAMÍLIA:
Kurome (irmã)
Gozuki (pai adotivo)Wave (cunhado)\n

STATUS:Viva\n
FACÇÕES:Night Raid (ex membro)\n
TEIGU:Murasame (destruída)
SHINGU Kiriichimonji (anteriormente)` 
black = fs.readFileSync('./logos/akame.mp4')
await conn.sendMessage(from, black,  MessageType.video, {mimetype: 'video/gif', quoted: selo, caption: susp})
break

case 'abraço':
case 'abraçar':  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá um abraço')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `parabéns campeão vc acabou de ganhar um abraço  @${mentioned[0].split('@')[0]} ❤️` 
const jrpt = fs.readFileSync('./logos/abraço.mp4')
await conn.sendMessage(from, jrpt,  MessageType.video, {mimetype: 'video/gif', quoted: info, caption: susp})
break

case 'dogolpe':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
if (args.length < 1) return await conn.sendMessage(from, 'coloca um nome', text, {quoted: info})
pkt = body.slice(9)
await conn.updatePresence(from, Presence.composing)
random = `${Math.floor(Math.random() * 100)}`
jpr = `*GOLPISTA ENCONTRADO👉🏻*\n\n*GOLPISTA* : *${args[0]}*\n*PORCENTAGEM DO GOLPE* : ${random}%😂\n\nEle(a) gosta de ferir sentimentos 😢`
reply(jpr)
break

case 'shipo':
teks = args.join(" ")
if(teks.length < 10) return reply('Marque uma pessoa do grupo para encontrar o par dela')
membrr = []
const suamae111 = groupMembers
const suamae211 = groupMembers
const teupai111 = suamae111[Math.floor(Math.random() * suamae111.length)]
const teupai211 = suamae211[Math.floor(Math.random() * suamae211.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shiptedd = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1 = @${teupai111.jid.split('@')[0]}\n && 2 = ${teks} com uma porcentagem de: ${shiptedd}`
membrr.push(teupai111.jid)
membrr.push(teupai211.jid)
mentions(jet, membrr, true)
break

case 'casal':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
membr = []
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @${teupai11.jid.split('@')[0]}\ne esse\n2= @${teupai21.jid.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
membr.push(teupai11.jid)
membr.push(teupai21.jid)
mentions(jet, membr, true)
break

case 'nazista':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
rate = body.slice(9)
reply(' ❰ Pesquisando a sua ficha de nazista : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imgnazista}`)
zxzz = 
await conn.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, wew, image, { quoted: info, caption: 'O quanto você é nazista? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  nazista 卐'})
}, 7000)
break 

case 'rankativo':
case 'rankativos':  
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 3) return reply('Necessita do registro de 3 usuarios')
countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
mentioned_jid = []
boardi = '🔥፝⃟    Ranking dos membros mais ativos:\n\n'
try {
for (let i = 0; i < 5; i++) {
if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 3) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`	
else if (i == 4) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`			
				
mentioned_jid.push(countMessage[ind].numbers[i].jid)
} 
mentions(boardi, mentioned_jid, true)
} catch (err) {
			console.log(err)
await conn.sendMessage(from, `É necessário 5 jogadores para se construir um ranking`, text, {quoted: info})
}
break

case 'checkativo':
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja puxar a atividade')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(numbersIds.indexOf(mentioned[0]) >= 0) {
var indnum = numbersIds.indexOf(mentioned[0])
mentions(`𖣘⃟ᗒ Consulta das atividade de\n𖣘⃟ᗒ @${mentioned[0].split('@')[0]} no grupo\n𖣘⃟ᗒ Mensagens: ${countMessage[ind].numbers[indnum].messages}\n𖣘⃟ᗒ Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}`, mentioned, true)
}
else {
mentions(`⋆⃟ۣۜ᭪➣ Consulta da atividade de ⋆⃟ۣۜ᭪➣ @${mentioned[0].split('@')[0]} no grupo\n⋆⃟ۣۜ᭪➣ Mensagens: 0\n⋆⃟ۣۜ᭪➣ Comandos dados: 0`, mentioned, true)
}
break

case 'listabt'://case by: Bielzinho-Bot
if (!SoDono && !isCmdy && !isnit && !info.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```')
tdtpt = await conn.chats.all()
dpy = await getpc(tdtpt)
sdpt = `*L I S T A  D E  B A T E - P A P O S*\n*Total de Chats* : ${dpy.length}\n\n`
for(let i=0; i<dpy.length; i++){
conts = info.key.fromMe ? info.user.jid : conn.contacts[dpy[i]] || {notify: jid.replace(/@.+/, '')}
nomes = conn.contacts[dpy[i]] != undefined ? conn.contacts[dpy[i]].vname || conn.contacts[dpy[i]].notify : undefined
sdpt += `• *Nome* : ${nomes}\n• *Tag* : @${dpy[i].split("@")[0]}\n• *Wame* : wa.me//${dpy[i].split("@")[0]}\n\n----------------------------------\n\n`
}
mentions( sdpt, dpy, true)
break 

case 'listagp': //case by: Bielzinho-Bot
if (!SoDono && !isCmdy && !isnit && !info.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```')
tdufg = await conn.chats.all()
ingfoo = await getGroup(tdufg)
teks1 = `*L I S T A  D E  G R U P O S*\n*Total de Grupos* : ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
teks1 += `• *Nome do Grupo* : ${ingfoo[i].subject}\n• *Id do Grupo* : ${ingfoo[i].id}\n• *Criado* : ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n• *Total de Membros* : ${ingfoo[i].participants.length}\n\n`
}
reply(teks1)
break

case 'ranklevel':
case 'rl':
case 'rank':
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = '    🏆《 Rank Niveis 》🏆\n\n'
let nom = 0
try {
for (let i = 0; i < 10; i++) {
nom++
leaderboardlvl += `
┏ ✘🌖 ${setting.NomeDoBot} 🌘✘┓
┃•────•───────•───•
┣❲🏆❳ [${nom}] ϟ➠ ${_level[i].jid.replace('@s.whatsapp.net', '')}
┣❲🏆❳「xp」: ϟ${_level[i].xp}
┣❲🏆❳「Level」 :ϟ➠ ${_level[i].level}
┗ ──────「★」──────┚\n`

}
leaderboardlvl += `×•-•-•⟮ 🏆Ranking Level🏆⟯•-•-•×`
conn.sendMessage(from, leaderboardlvl, text, {sendEphemeral: true, quoted: selo})
} catch (err) {
console.error(err)
await reply(`Deve conter 10 pessoas com level, e o leveling deve está ativado para que aconteça a evolução de level dos membros, após as interações`)
}
break

case 'rankgay':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
try{
d = []
ret = '🏳️‍🌈 Rank dos mais gays\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🏳️‍🌈❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankgado':
case 'rankgados':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
try{
d = []
ret = '🐂🐂 Rank dos mais gados do grupo \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🐂❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankcorno':
case 'rankcornos':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
var porcentagemcorno = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `O chifre desse ai bate na lua ksksksk`]
const porcentagemc = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcentag = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcent = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcl = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const prg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
ytb = `
Esses são os cornos do grupo ${groupName}\n@${cornos1.jid.split('@')[0]}\nCom uma porcentagem de ${porcent}\n@${cornos2.jid.split('@')[0]}\nCom uma porcentagem de ${porcentag}\n@${cornos3.jid.split('@')[0]}\nCom uma porcentagem de ${porcl}\n@${cornos4.jid.split('@')[0]}\nCom uma porcentagem de ${porg}\n@${cornos5.jid.split('@')[0]}\nCom uma porcentagem de ${prg}\n\n⚡ ${setting.NomeDoBot} ⚡`
membr.push(cornos1.jid)
membr.push(cornos2.jid)
membr.push(cornos3.jid)
membr.push(cornos4.jid)
membr.push(cornos5.jid)
mentions(ytb, membr, true)
break

case 'rankgostosos':
case 'rankgostoso':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
member = []
const p01 = groupMembers
const p02 = groupMembers
const p03 = groupMembers
const p04 = groupMembers
const p05 = groupMembers
const o01 = p01[Math.floor(Math.random() * p01.length)]
const o02 = p02[Math.floor(Math.random() * p02.length)]
const o03 = p03[Math.floor(Math.random() * p03.length)]
const o04 = p04[Math.floor(Math.random() * p04.length)]
const o05 = p05[Math.floor(Math.random() * p05.length)]
luy = `
Parados!🤚🤚\n\n1=🤚🤭@${o01.jid.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o02.jid.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o03.jid.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o04.jid.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o05.jid.split('@')[0]}🤚🤭\n\n\nMulta por serem gostosos dms😳 pague pena trabalhando em nossa agência de modelos 😊 by: ${NomeDoBot}`
member.push(o01.jid)
member.push(o02.jid)
member.push(o03.jid)
member.push(o04.jid)
member.push(o05.jid)
mentions(luy, member, true)
break

case 'rankgostosas':
case 'rankgostosa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
member = []
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
luy = `
Paradas!🤚🤚\n\n1=🤚🤭@${o1.jid.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.jid.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.jid.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.jid.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.jid.split('@')[0]}🤚🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
member.push(o1.jid)
member.push(o2.jid)
member.push(o3.jid)
member.push(o4.jid)
member.push(o5.jid)
mentions(luy, member, true)
break

case 'ranknazista':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
try{
if(!isGroup) return reply(enviar.msg.grupo)
d = []
teks = '💂‍♂️Rank dos mais nazistas do gp\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `💂‍♂️❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankotakus':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
membr = []
const otaku1 = groupMembers
const otaku2 = groupMembers
const otaku3 = groupMembers
const otaku4 = groupMembers
const otaku5 = groupMembers
const otaku6 = groupMembers
const otaku7 = groupMembers
const otaku = groupMembers
const otaku9 = groupMembers
const otaku10 = groupMembers
const otakus1 = otaku1[Math.floor(Math.random() * otaku1.length)]
const otakus2 = otaku2[Math.floor(Math.random() * otaku2.length)]
const otakus3 = otaku3[Math.floor(Math.random() * otaku3.length)]
const otakus4 = otaku4[Math.floor(Math.random() * otaku4.length)]
const otakus5 = otaku5[Math.floor(Math.random() * otaku5.length)]
const otakus6 = otaku6[Math.floor(Math.random() * otaku6.length)]
const otakus7 = otaku7[Math.floor(Math.random() * otaku7.length)]
const otakus = otaku[Math.floor(Math.random() * otaku.length)]
const otakus9 = otaku9[Math.floor(Math.random() * otaku9.length)]
const otakus10 = otaku10[Math.floor(Math.random() * otaku10.length)]
ytb = `esses são os otakus fedidos do grupo\n@${otakus1.jid.split('@')[0]}\n@${otakus2.jid.split('@')[0]}\n@${otakus3.jid.split('@')[0]}\n@${otakus4.jid.split('@')[0]}\n@${otakus5.jid.split('@')[0]}\n@${otakus6.jid.split('@')[0]}\n@${otakus7.jid.split('@')[0]}\n@${otakus.jid.split('@')[0]}\n@${otakus9.jid.split('@')[0]}\n@${otakus10.jid.split('@')[0]}\n\n⚡ ${setting.NomeDoBot} ⚡`
membr.push(otakus1.jid)
membr.push(otakus2.jid)
membr.push(otakus3.jid)
membr.push(otakus4.jid)
membr.push(otakus5.jid)
membr.push(otakus6.jid)
membr.push(otakus7.jid)
membr.push(otakus.jid)
membr.push(otakus9.jid)
membr.push(otakus10.jid)
mentions(ytb, membr, true)
break

case 'rankpau':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
membr = []
const pauz1 = groupMembers
const pauz2 = groupMembers
const pauz3 = groupMembers
const pauz4 = groupMembers
const pauz5 = groupMembers
const paus1 = pauz1[Math.floor(Math.random() * pauz1.length)]
const paus2 = pauz2[Math.floor(Math.random() * pauz2.length)]
const paus3 = pauz3[Math.floor(Math.random() * pauz3.length)]
const paus4 = pauz4[Math.floor(Math.random() * pauz4.length)]
const paus5 = pauz5[Math.floor(Math.random() * pauz5.length)]
var pcpau1 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau2 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau3 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau4 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau5 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
const pc1 = pcpau1[Math.floor(Math.random() * pcpau1.length)]
const pc2 = pcpau2[Math.floor(Math.random() * pcpau2.length)]
const pc3 = pcpau3[Math.floor(Math.random() * pcpau3.length)]
const pc4 = pcpau4[Math.floor(Math.random() * pcpau4.length)]
const pc5 = pcpau5[Math.floor(Math.random() * pcpau5.length)]
pdr = `Esses são os caras com o menor e maior pau do Grupo\n${groupName}\n\n@${paus1.jid.split('@')[0]}\n${pc1}\n@${paus2.jid.split('@')[0]}\n${pc2}\n@${paus3.jid.split('@')[0]}\n${pc3}\n@${paus4.jid.split('@')[0]}\n${pc4}\n@${paus5.jid.split('@')[0]}\n${pc5}\n\n ${setting.NomeDoBot}`
membr.push(paus1.jid)
membr.push(paus2.jid)
membr.push(paus3.jid)
membr.push(paus4.jid)
membr.push(paus5.jid)
mentions(pdr, membr, true)
break 

case 'jogodavelha':
if(!isGroup) return reply('comando apenas para grupos')
if (fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
[❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
conn.sendMessage(from, chatMove, MessageType.text, {quoted: info,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
if (argss.length === 1)
return reply(`*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix + command} @membro do gp*`);
const boardnow = setGame(`${from}`);
console.log(`Start Tictactore ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace("@s.whatsapp.net",
"")} _está te desafiando para uma partida de jogo da velha..._
_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._
     `;
conn.sendMessage(from, strChat, MessageType.text, {quoted: info,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'rv': 
if (!isGroupAdmins) return reply(`Fale com algum adm para resetar o jogo, digite ${prefix}admins pra acordar esses vagaba`)
if (fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./armor/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case "ppt":
if (args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota") {
var tes = "A vitória é do BOT"
}
if (vit == "empate") {
var tes = "O jogo terminou em empate"
}
reply(`${NomeDoBot} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break

case 'cassino':
conn.updatePresence(from, Presence.composing) //CASSINO
 const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		
const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Você ganhou!!!"
} else {
var Vitória = "Você perdeu..."
}
	const cassino = `
┏━━━━❪🎰❫━━━━
┣► ${somtoy2}◄┛
┗━━━━❪💰❫━━━━

*${Vitória}*`
reply(cassino)
if (Vitória == "Você ganhou!!!") {
reply('Parabéns')
}
await limitAdd(sender)
break

case 'quizanime':
case 'quiz':  
if(!isGroup) return reply('Comando apenas para grupos')
const animequiz = Math.floor(Math.random() * quizanime.length)
if(!isGroupAdmins) return reply('Comando apenas para admins')
if(args.length == 0) return reply('use 1 para ativar o jogo do quizanime\npara desativar use quizanime 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./armor/quizanime-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/quizanime-${from}.json`))
imagemtexto =`                             「❓Quiz❓」`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await conn.sendMessage(from, wew, image, {quoted: selo, caption: imagemtexto, thumbnail: wew})
} else {
fs.writeFileSync(`./armor/quizanime-${from}.json`, `${JSON.stringify(quizanime[animequiz])}`)

imagemtexto =`                             「❓Quiz❓」`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await conn.sendMessage(from, wew, image, {quoted: selo, caption: imagemtexto, thumbnail: wew})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./armor/quizanime-${from}.json`)) return reply('Não tem como desativar o jogo pôs ele não foi ativado')
fs.unlinkSync(`./armor/quizanime-${from}.json`)
reply("Desativado com sucesso")
}
await limitAdd(sender)
break

case 'quizanimais':
if(!isGroup) return reply('Comando apenas para grupos')
const animaisquiz = Math.floor(Math.random() * quizanimais.length)
if(!isGroupAdmins) return reply('Comando apenas para admins')
if(args.length == 0) return reply('use 1 para ativar o jogo \npara desativar use quizanimais 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./armor/quizanim-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
imagemtexto =`                             「❓Quiz❓」`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await conn.sendMessage(from, wew, image, {quoted: selo, caption: imagemtexto, thumbnail: wew})
} else {
fs.writeFileSync(`./armor/quizanim-${from}.json`, `${JSON.stringify(quizanimais[animaisquiz])}`)
imagemtexto =`                             「❓Quiz❓」`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await conn.sendMessage(from, wew, image, {quoted: selo, caption: imagemtexto, thumbnail: wew})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./armor/quizanim-${from}.json`)) return reply('Não tem como desativar o jogo pôs ele não foi ativado')
fs.unlinkSync(`./armor/quizanim-${from}.json`)
reply("Desativado com sucesso")
}
await limitAdd(sender)
break

case 'anagrama':
if(!isGroup) return reply('comando apenas para grupos')
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(!isGroupAdmins) return reply('comando apenas para admins')
if(args.length == 0) return reply('use 1 para ativar o jogo do anagrama\npara desativar use anagrama 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./armor/anagrama-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/anagrama-${from}.json`))
reply(`o jogo já foi iniciado neste grupo:
palavra: ${dataAnagrama2.embaralhada}
dica: ${dataAnagrama2.dica}
`)} else {
fs.writeFileSync(`./armor/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
conn.sendMessage(from, `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
│➽ DICA: ${palavrasANA[anaaleatorio].dica}
╰────────────────────────
`,MessageType.text)
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./armor/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./armor/anagrama-${from}.json`)
reply("desativado com sucesso")
}
await limitAdd(sender)
break

case 'revelaranime':
case 'revelaanime':  
if (!isGroupAdmins) return reply('somente adms')
let dataAnagrama = JSON.parse(fs.readFileSync(`./armor/quizanime-${from}.json`))
reply (`${dataAnagrama.original}`)
break

case 'revelaranimal':
case 'revelaanimal':  
if (!isGroupAdmins) return reply('somente adms')
let dataAnagramaa = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
reply (`${dataAnagramaa.original}`)
break

//=======(FIM-BRINCADEIRAS-JOGOS)========\\



//=(CASE-SIMIH-INTELIGÊNCIA-ARTIFICIAL)=\\

case 'simi':
if(isSimi) return reply('Desativado')
sduy = args.join(" ")
data = await fetchJson(`https://api.simsimi.net/v2/?text=${sduy}&lc=pt`, {method: 'get'})
simi = `${data.success}`  
reply(simi)
break

case 'simih':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi) return reply('O modo Simi está ativo')
samih.push(from)
fs.writeFileSync('./datab/usuarios/simi.json', JSON.stringify(samih))
reply('Ativado com sucesso o modo simi neste grupo 😗')
} else if (Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
samih.splice(from, 1)
fs.writeFileSync('./datab/usuarios/simi.json', JSON.stringify(samih))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

case 'simih2':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi2) return reply('O modo Simi está ativo')
samih2.push(from)
fs.writeFileSync('./armor/simi.json', JSON.stringify(samih2))
reply('Ativado com sucesso o modo simi neste grupo 😗, Este simih2 ele aprende as respostas e perguntas das pessoas, conforme vai falando, por isso, só recomendo utilizar ele no termux, pois no site ou lugar diferente do termux que você utilizar, ele não vai armazenar os dados nescessarios')
} else if (Number(args[0]) === 0) {
if(!isSimi2) return reply('Já está Desativado.')
samih2.splice(from, 1)
fs.writeFileSync('./armor/simi.json', JSON.stringify(samih2))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

//========================================\\


//==(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)===\\

case 'bot':
const soundft = fs.readFileSync('audios/qviado.mp3')
await conn.sendMessage(from, soundft, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
break

case 'preço':  
buffer = await getBuffer(`${logo9}`)
sendButImage(from,`40R$ 𝐁𝐎𝐓 𝐝𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐨𝐠𝐫𝐚𝐟𝐚𝐝𝐨\n20R$ 𝐚𝐥𝐮𝐠𝐨 𝐏𝐨𝐫 1 𝐦𝐞̂𝐬\n5R$ 𝐚𝐥𝐮𝐠𝐨 𝐩𝐨𝐫 1 𝐬𝐞𝐦𝐚𝐧𝐚\n
𝐄𝐧𝐭𝐫𝐞 𝐞𝐦 𝐜𝐨𝐧𝐭𝐚𝐭𝐨 𝐜𝐨𝐦 𝐦𝐞𝐮 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐚𝐝𝐨𝐫:
wa.me/12514406419`,
`${NickDono}`, buffer,
[{buttonId:`${prefix}wiki`, buttonText: {displayText: `${NomeDoBot}`}, type: 1},
{buttonId:`${prefix}yt`, buttonText: {displayText: `𝐂𝐚𝐧𝐚𝐥 𝐝𝐨➪${NickDono}✔︎`}, type: 1}]);
break;

case 'heroku':
  return reply (`

𝗢𝗹𝗮́ @${sender.split("@s.whatsapp.net")[0]} 𝗮𝗸𝗶 𝗲𝘀𝘁𝗮́ 𝗼 𝘁𝘂𝘁𝗼𝗿𝗶𝗮𝗹 𝗱𝗲 𝗵𝗼𝘀𝗽𝗲𝗱𝗮𝗿 𝘀𝗲𝘂 𝗕𝗢𝗧 𝗻𝗼 𝗵𝗲𝗿𝗼𝗸𝘂:

@𝐃𝐢𝐚𝐛𝐥𝐨 𝐓𝐮𝐭𝐨𝐫𝐢𝐚𝐢𝐬

(1)- De tudo : entra no site : 

('heroku.com')

E cadastra assim como qualquer site de cadastro, coisa básica 

Coloca qualquer coisa lá, seu e-mail, precisa ser válido pra confirmar. 


E após criar a conta e ir na parte de baixo concordar com os termos, você vai em Create New APP, lá no início, = criar um novo app

Coloque qualquer nome em letra menuscula. 

Após criar 

Você vai no lado direito última opção, um ícone de engrenagem, você clica lá 

Aí você vai um pouco pra baixo e vai ter um nome 

Add buildpack 

Você clica lá e clica no botão nodejs e clica em save changes = Salvar alterações

Aí você vai fazer o mesmo procedimento, clicar no add buildpack novamente e colocar esses 3 link na barra de escrita :


https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest

------------------------------

https://github.com/clhuang/heroku-buildpack-webp-binaries.git

------------------------------

https://github.com/pathwaysmedical/heroku-buildpack-tesseract

-------------------------------

Cole um link desse por 1, sem espaço no final, com atenção para não errar, e save changes novamente, salvar, e após isso, vamos para os próximos passo. 


-------------------------------------------


[ 2 ] - Se não deu os comandos básicos do termux, cole dessa maneira no termux :

pkg upgrade -y && pkg update -y && pkg install python -y && pkg install nodejs-lts -y && pkg install nodejs -y && pkg install git -y && pkg install ffmpeg -y && pkg install wget -y 


- Pronto já colou?, no processo vai pausar umas 3 vezes 

- No finalzin vai ter escrito : [DEFAULT=?] 

- É só da enter... 


- Pronto agora vamos pra os comandos de hospedar no heroku


------------------------------------------

Já deu os comandos básicos.

agora vamos para o primeiro comando que é responsável de conectar o site com o bot, conexão do qrcode e etc.. 


Cole isso lá :

npm i -g npm@6 && npm i heroku -g


Colou?, vai demorar um pouquinho

Então quando terminar, Digita isso.


heroku login

Não saia do termux, vai carregar um negócio, e você simplesmente dá enter.

Aí vai escolher um navegador para acessar, e você acessa o navegador que criou a conta e fez login, caso desconectou, só fazer login novamente.

Volta no termux, e cola esses 2 comandos: 

git config --global user.email "blablablabla@gmail.com" 

git config --global user.name "blabla" 

Não precisa alterar nada não. 

Pronto, já foi embora a pior parte. 


--------------------------------------------

Após conectado, voltando ao termux, se errou qualquer coisa anterior, não precisa fechar o termux, pois ele não armazena Error, o que errou já passou.

--------------------------------------------

Vamos lá. 

Primeiro comando :


termux-setup-storage


Este comando serve para permitir acesso ao armazenamento interno do seu celular: = storage 

-----------------------------------

Segundo comando : 

Acessar a pasta do seu bot 

cd /sdcard/nome da pasta do seu bot

Ou se tiver na pasta do download

cd /sdcard/download/nome da pasta do seu bot



---(SE VOCÊ USA MEU BOT, IGNORA ESSA PARTE)---
No caso, se você não está utilizando meu bot, você simplesmente 
Vai precisar criar um arquivo dentro da pasta do bot, chamado 

Procfile 

Ele é o responsável por iniciar o bot no site através do botão, então pra criar, você dá esses comandos 

nano Procfile 

E cola isso isso dentro 

worker: node index.js

Se for index, *claro*

Pra salvar, é simplesmente assim, pressiona o volume de menos do celular, aperta a letra X, depois Y, e aperta enter


Lembrando também, que se o package.json do seu bot tiver desatualizado não funcionará, pois é através dele que instala os módulos nescessario pra o funcionamento do bot e dos comandos, caso teja desatualizado você deve conversar com o criador do bot pra ti ajudar.
--------------(FINAL DE IGNORAR)------------


Agora se você usa meu bot, e já tem a pasta instalada, apenas digita esses comandos de início :

cd /sdcard/NOMEDAPASTADOBOT


Depois :

rm -rf .git

-------------------------------------------

(1) Comando : 

git init

(2) Comando : 

heroku git:remote -a nome-do-APP 

que você criou lá no site, o nome do aplicativo, você coloca ali. 

Depois : 

(3) Comando:

git add . 

Pra alguns celulares demora bastante kkk

(4) Comando :

git commit -am "blabla" 

(5) Comando: 

git push heroku master


Pronto, vai carregar bastante coisa, e o bot vai ser lançado pro site, e já vai tá ok. 

-----------------------------------------

Agora pra ligar é simples, vai no site novamente, de início, abaixo do botão 

OPEN APP segunda opção, vai na opção de ligar, tem um lápis pequeno, clica 

Liga o botão, e aperta confirmar 

E pronto, boa sorte, caso não esteja funcionando, você editou algo errado no bot, consequentemente, ele não funcionará.


 //======================================\\

Se quiser atualizar o bot para o site, se você efetuou alguma edição, são simples mente esses comandos 


 cd /sdcard/NOMEDAPASTADOBOT

 git add . 

 git commit -am "ajajaj" 

 git push heroku master

 //=====================================\\

                         
\n ${NomeDoBot}`)



//=======================================\\


//=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\

case 'videocontrario':
case 'reversevid':
if (!isQuotedVideo) return reply('Marque um vídeo')
reply(enviar.espere)
encmedia = JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: info })
fs.unlinkSync(ran)
})
break 

case 'cttdono':
listMsg = {

 buttonText: `<𝗩𝗖𝗔𝗥𝗗𝗦:${NickDono}>`,
 
 footerText: `${NomeDoBot}`,

description: '𝗔𝗶 𝗲𝘀𝘁𝗮́ 𝗮𝘀 𝗼𝗽𝗰̧𝗼̄𝗲𝘀 𝗱𝗲 𝘃𝗰𝗮𝗿𝗱 𝗱𝗼 𝗺𝗲𝘂 𝗗𝗼𝗻𝗼 𝘃𝗶𝗮 (𝗣𝗩/𝗚𝗥𝗨𝗣𝗢)',

 sections: [

                     {
 rows: [
 

{
"title":  `<𝗩𝗖𝗔𝗥𝗗:${NickDono}>`,
"rowId": `${prefix}cttdonogroup`
                           },

{
"title":  `<𝗩𝗖𝗔𝗥𝗗/𝗣𝗩:${NickDono}>`,
"rowId": `${prefix}cttdonopv`
                           },

                        ]
                    }],
 listType: 1
}

conn.sendMessage(from, listMsg, MessageType.listMessage, {quoted: selo});
break

case 'cttdonogroup':
 Dono = await conn.sendMessage(from, {displayname: `${NickDono}`, vcard: vcard}, MessageType.contact,{quoted: selo}, 'contactsArrayMessage',)
conn.sendMessage(from,`@${sender.split("@")[0]}
シ︎𝐚𝐢 𝐞𝐬𝐭𝐚́ 𝐟𝐝𝐩𝐭\n☠︎︎𝐃𝐎𝐍𝐎☠︎︎
𝐍𝐢𝐜𝐤/𝐍𝐨𝐦𝐞:${NickDono}
𝐍𝐮́𝐦𝐞𝐫𝐨:wa.me/${setting.numerodono}`,text,{quoted: Dono})
break

case 'cttdonopv':
closep = reply(`@${sender.split("@s.whatsapp.net")[0]} *,fique tranquilo vcard:${NickDono} enviando com sucesso no seu PV...*`)
akameee = conn.sendMessage(sender, {displayname: `${NickDono}`, vcard: vcard}, MessageType.contact,{quoted: selo})
await conn.sendMessage(closep, akameee, {quoted:selo})
break

case 'cttdobot':
closep = reply(`@${sender.split("@s.whatsapp.net")[0]} *,fique tranquilo vcard:${NomeDoBot} enviando com sucesso no seu PV...*`)
const diablod = body.slice(5)
akameee = conn.sendMessage(sender,{displayname: `${NomeDoBot}`, vcard: vcardbot}, MessageType.contact,{quoted: selo},`${diablod}`,)
await conn.sendMessage(closep, akameee, {quoted:selo})
break

case 'help':  
let bla1 = info.key.fromMe ? conn.user.jid : info.key.remoteJid.endsWith('@g.us') ? info.participant : info.key.remoteJid
name = conn.contacts[bla1] != undefined ? conn.contacts[bla1].vname || conn.contacts[bla1].notify : undefined
buffer = await getBuffer(`${logo7}`)
sendButImage(from,`𝐒𝐄𝐉𝐀 𝐁𝐕:\n @${bla1.split("@s.whatsapp.net")[0]}\n𝐍𝐢𝐂𝐊/𝐍𝐎𝐌𝐄:${name}\n𝐀𝐊𝐀𝐌𝐄-𝐁𝐎𝐓_𝐎𝐅𝐂`,
`${NomeDoBot}`, buffer,
[{buttonId:`${prefix}install`, buttonText: {displayText: '𝐈𝐧𝐬𝐭𝐚𝐥𝐚𝐜̧𝐚̃𝐨 𝐝𝐨 𝐁𝐎𝐓'}, type: 1},
{buttonId:`${prefix}menu`, buttonText: {displayText: '⏤͟͟͞͞𝐌𝐞𝐧𝐮'}, type: 1},
{buttonId:`${prefix}grupoinfo`, buttonText: {displayText: '➪𝐈𝐧𝐟𝐨𝐠𝐫𝐮𝐩𝐨'}, type: 1}]);
break;

case 'videolento':
case 'slowvid':  
if (!isQuotedVideo) return reply('Marque um vídeo')
reply(enviar.espere) 
encmedia = JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: info })
fs.unlinkSync(ran)
})
break

case 'videorapido':
case 'fastvid':  
if (!isQuotedVideo) return reply('Marque um vídeo')
reply(enviar.espere)
encmedia = JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: info })
fs.unlinkSync(ran)
})		
break

case 'grave2':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await conn.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: info})
fs.unlinkSync(ran)
})
break

case 'grave':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
low = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await conn.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: info})
fs.unlinkSync(ran)
})
break

case 'adolesc':
case 'vozmenino':  
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
encmedia = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: info})
fs.unlinkSync(ran)
})
break  

case 'tomp3':
conn.updatePresence(from, Presence.composing) 
if (!isQuotedVideo) return reply('Marque o video pfv')
reply(enviar.espere)
encmedia = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
buffer = fs.readFileSync(ran)
conn.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: info})
fs.unlinkSync(ran)
})
break

case 'bass3':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
ass = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await conn.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: info})
fs.unlinkSync(ran)
})
break

case 'bass': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
ass = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await conn.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: info})
fs.unlinkSync(ran)
})
break

case 'bass2': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
encmedia = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: info})
fs.unlinkSync(ran)
})
break

case 'estourar': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
ass = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await conn.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: info})
fs.unlinkSync(ran)
})
break

case 'fast':
case 'audiorapido':  
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
encmedia = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: info})
fs.unlinkSync(ran)
})
break

case 'esquilo':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
pai = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await conn.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: info})
fs.unlinkSync(ran)
})
break

case 'audiolento': 
case 'slow':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
low = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await conn.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: info})
fs.unlinkSync(ran)
})
break

//=========(FIM-ALTERAR-AUDIO)===========\\


//=======(JOGO-DA-VELHA-COM-MAQUINA)=======\\

//_JOGO DA VELHA By: Resen
//INICIO DO JOGO DA VELHA ❌ ⭕ 🔲
case 'ttt':
const limitrl = getLimit(sender, daily)
if (!isGroup) {
reply(enviar.espere)
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)

} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = info
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`O jogo começou!!!\nModo: ${tttset.tttdifficulty}`, text, tescuk, crtt)
conn.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
conn.sendMessage(from,`Caso não saiba como jogar digite: ${prefix}ttthelp`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 12000) //2 minutos
addLimit(sender, daily)
}
break

case 'ttthelp':
conn.sendMessage(from, ttthelp(prefix), text)
break

case 'tttme':
if (!isGroup) return reply('SÓ EM GRUPO')
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
conn.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted: info})
break

case 'tttrank':
if (!isGroup) return reply('Só grupo')
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await conn.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: info})
}
break

case 'jogar' :
tttset.playertest = sender
if (!isGroup) {
reply(enviar.espere)
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}jogar a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'a2':
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'b1':
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break

case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break

case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break

case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break

}
conn.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
conn.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break

case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break

case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break

case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break

}	
conn.sendMessage(from, `🎉🎉 VITÓRIA DO ${setting.NamaBot} 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
} else {
conn.sendMessage(from, `🎉🎉 VITÓRIA DO ${setting.NamaBot} 🎉🎉`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
conn.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
conn.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break

//==========(EFEITOS-MARCAR)==========\\

case 'petmak':
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`https://api-gdr2.herokuapp.com/api/petpet?url=${link}`)
conn.sendMessage(from, postt, video, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break
case 'triggered':
if(!isQuotedImage) return reply("Marque uma imagem")
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
owgi = await conn.downloadMediaMessage(boij)
res = await upload(owgi)
post = await fetchJson(`http://api-exteam.herokuapp.com/api/upload/telegra?url=http://api-exteam.herokuapp.com/api/triggered?img=${res}&apikey=aleofc`)
sendStickerFromUrl(from, post, sticker, {quoted:info})
} else {
reply('error')
}
break

case 'rip':  
case 'morto':  
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`http://api-exteam.herokuapp.com/api/rip?img=${link}`)
conn.sendMessage(from, postt, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break

case 'lgbt':  
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`https://aleatoryapi.herokuapp.com/canvas/lgbt?url=${link}&apikey=ale203`)
conn.sendMessage(from, postt, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break


case 'comunismo':  
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
base64 = await conn.downloadMediaMessage(post)
reply(enviar.espere)
link = await upload(base64)
postt = await getBuffer(`http://api-exteam.herokuapp.com/api/comunismo?img=${link}`)
conn.sendMessage(from, postt, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break

case 'trash':
case 'lixo':  
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
base64 = await conn.downloadMediaMessage(post)
reply(enviar.espere)
link = await upload(base64)
postt = await getBuffer(`http://api-exteam.herokuapp.com/api/trash?img=${link}`)
conn.sendMessage(from, postt, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break

case 'preso':
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`https://aleatoryapi.herokuapp.com/canvas/jail?url=${link}&apikey=ale203`)
conn.sendMessage(from, postt, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break

case 'legenda':
gh = body.slice(9)           
var top = gh.split('/')[0]
var bottom = gh.split('/')[1]
if(!gh.includes("/")) return reply(`Cade a / mano?\nExemplo: ${prefix + command} Sad/Demais`)  
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedSticker)) {
post = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${link}`)
conn.sendMessage(from, postt, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break

case 'zombie':
case 'zumbi':  
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
jrd = await fetchJson(`https://jonaz-api-v2.herokuapp.com/zombie?url=${link}`)
zumb = await getBuffer(jrd.result)
conn.sendMessage(from, zumb, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch {
reply('ERROR, DESCULPE.')
}
break

case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':    
addFilter(from)
if (isMedia && !info.message.videoMessage || isQuotedImage) {
const encmedia1 = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
const dlfile1 = await conn.downloadMediaMessage(encmedia1)
const bas641 = `data:image/jpeg;base64,${dlfile1.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `Aleatory Ofc`
sd = `⏤͟͟͞͞Criado por↓     AKAME-BOT_OFC✗`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap1 = await convertSticker(bas641, `${dua}`, `${satu}`)
var st = new Buffer.from(mantap1, 'base64');
conn.sendMessage(from, st, sticker, {quoted: info})
} else if ((isMedia && info.message.videoMessage.fileLength < 10000000 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
const encmedia2 = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
const media2 = await conn.downloadAndSaveMediaMessage(encmedia2, `./armor/sticker/${sender}`)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `Aleatory Bot Oficial`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `Aleatory`
const Nombre2 = `${satu}` 
const author101 = `${dua}`
exif.create(Nombre2, author101, `stickwm_${sender}`)
reply(enviar.espere)
await ffmpeg(`${media2}`)
.inputFormat(media2.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`❎ Error : ${err}`)
fs.unlinkSync(media2)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❎ Falha, no momento da conversão de ${type} em adesivo`)
})
.on('end', function () {
console.log('✅ Listo')
exec(`webpmux -set exif ./armor/sticker/stickwm_${sender}.exif ./armor/sticker/${sender}.webp -o ./armor/sticker/${sender}.webp`, async (error) => {
if (error) return reply('error')
sendSticker(from, fs.readFileSync(`./armor/sticker/${sender}.webp`), info)
fs.unlinkSync(media2)
fs.unlinkSync(`./armor/sticker/${sender}.webp`)
fs.unlinkSync(`./armor/sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decre
ase,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./armor/sticker/${sender}.webp`)
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
bre

case 'borrar':
case 'figuborrada':
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`https://api-gdr2.herokuapp.com/api/pixelate?img=${link}`)
conn.sendMessage(from, postt, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break

case 'drip':
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`http://api-exteam.herokuapp.com/api/dripp?img=${link}`)
conn.sendMessage(from, postt, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break

case 'merda':
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`http://api-exteam.herokuapp.com/api/shit?img=${link}`)
conn.sendMessage(from, postt, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break

case 'hitler':
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`http://api-exteam.herokuapp.com/api/hitler?img=${link}`)
conn.sendMessage(from, postt, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break

case 'deletef':
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`https://api-gdr2.herokuapp.com/api/deletarCanvas?img=${link}`)
conn.sendMessage(from, postt, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break

case 'arma':
case 'figuarma':
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`https://api-exteam.herokuapp.com/api/gun?img=${link}`)
conn.sendMessage(from, postt, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break

case 'wanted':
case 'procurado':
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`https://api-exteam.herokuapp.com/api/gun?img=${link}`)
conn.sendMessage(from, postt, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break

case 'gtav':
case 'gta-v':
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`http://api-exteam.herokuapp.com/api/photooxy/foto?tema=gtav&text=${link}&apikey=aleofc`)
altr = await getBuffer(postt.result)
conn.sendMessage(from, altr, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break

case 'cadernoft':
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`http://api-exteam.herokuapp.com/api/photooxy/foto?tema=passbook&text=${link}&apikey=aleofc`)
altr = await getBuffer(postt.result)
conn.sendMessage(from, altr, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break

case '2armas':
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await fetchJson(`http://api-exteam.herokuapp.com/api/photooxy/foto?tema=cross-gun&text=${link}&apikey=aleofc`)
altr = await getBuffer(postt.result)
conn.sendMessage(from, altr, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break

case 'papelcortado':
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await fetchJson(`http://api-exteam.herokuapp.com/api/photooxy/foto?tema=paper-tearing&text=${link}&apikey=aleofc`)
altr = await getBuffer(postt.result)
conn.sendMessage(from, altr, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break

case 'coração':
case 'coracao':  
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await fetchJson(`http://api-exteam.herokuapp.com/api/photooxy/foto?tema=heart-dish&text=${link}&apikey=aleofc`)
altr = await getBuffer(postt.result)
conn.sendMessage(from, altr, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break

case 'cubom':  
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await fetchJson(`http://api-exteam.herokuapp.com/api/photooxy/foto?tema=cube-magic-four&text=${link}&apikey=aleofc`)
altr = await getBuffer(postt.result)
conn.sendMessage(from, altr, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break

case 'pokebola':  
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await fetchJson(`http://api-exteam.herokuapp.com/api/photooxy/foto?tema=pokebola&text=${link}&apikey=aleofc`)
altr = await getBuffer(postt.result)
conn.sendMessage(from, altr, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break

case 'natalfoto':  
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
reply(enviar.espere)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
jrep = await fetchJson(`http://api-exteam.herokuapp.com/api/photooxy/foto?tema=beautiful-pine&text=${link}&apikey=aleofc`)
altr = await getBuffer(jrep.result)
conn.sendMessage(from, altr, image, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
break

case 'calunia':
k = `${body.slice(10)}`
txt1 = k.split("/")[0];
txt2 = k.split("/")[1];
txt3 = k.split("/")[2];
if(!k.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} @marca-a-pessoa/Fala algo como fosse ele/Reação : nossaa..`)
 conn.sendMessage(from, `${txt3}`,text,{quoted:{    key: {fromMe: false,participant: `${txt1}@s.whatsapp.net`,},message: { "extendedTextMessage": {"text": `${txt2}`,"title": `Hmm`}}}})
 break

//=======(FIM-EFEITOS-MARCAR)=========\\

default:

//===(CRÉDITOS : ALEATORY CONTEÚDOS)==\\

if(isBotGroupAdmins && isAntiCtt && type === 'contactMessage') {
if(isGroupAdmins) return conn.sendMessage(from, 'Contato detectado, você é adm, então não irei ti remover', text, {quoted: info})
await conn.sendMessage(from, 'Contato detectado, Adeus seu meliante', text, {quoted: info})
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
conn.groupRemove(from, [Kic]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}

if (contactsArray.includes(type)){
if (!isAntiCtt) return
if (isGroupAdmins) return reply(`hummmm contato`) 
reply(`contato detectado, somos muito severo em essas situações, então terei que ti remover, se não for trava, entre em contato com algum adm.`)
conn.groupSettingChange(from, GroupSettingChange.messageSend, true)	
setTimeout(() =>{
conn.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
conn.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 000)
reply(`${destrava}`)
reply(`${destrava}`)
reply(`${destrava}`)
}

if (budy.length >= limitefl) { 
if(!isAntiFlood) return
if(isAntiFlood && isGroupAdmins && isBotGroupAdmins && isPremium) {
if(isBot) return 
reply('*Link detectado, porém usuário é admin*')
} else {
if(SoDono) return
if(isGroupAdmins) return
if(isPremium) return
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`  
setTimeout( () => {
if(!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe && !isGroupAdmins) return reply('Muitas características enviadas, eu afirmo que pode ser trava, por precauções, eu irei remover.')
console.log(color('deram Spam','red'))
}, 100)
setTimeout( () => {
conn.groupRemove(from, [Kic]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}, 1000)
setTimeout( () => {
}, 0)
}	
}

//INICIO DE COMANDOS SEM PREFIXO
switch(testat){
}


if (budy.includes("bot corno") || (budy.includes("Bot corno"))){
await conn.updatePresence(from, Presence.composing)
reply("Corno é você, seu animal")
}

if (budy.includes("adivinha meu celular") || (budy.includes("Adivinha meu celular") || (budy.includes("Adivinha Meu celular") || (budy.includes("Adivinha Meu Celular") || (budy.includes("bot qual meu celular")))) )){
adivinha = info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅';
await conn.sendMessage(from, adivinha, text, {quoted: info})
}

if(messagesC.includes('exec')) {
if(!SoDono && !isCmdy && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
}

if (messagesC == "corno"){
conn.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./audios/corno.mp3');
await conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
}

if(budy.includes("bom dia") || budy.includes("Bom dia") || budy.includes("BOM DIA") || budy.includes("bom dia")) {
if (SoDono) {
conn.updatePresence(from, Presence.composing)
reply(`Bom dia mestre:${NickDono} vc está bem? qualquer coisa consulte o ${prefix}menu`)
} else if (!isGroup) {
conn.updatePresence(from, Presence.composing)
blabla = fs.readFileSync('./logos/bomdia.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
tujuh = fs.readFileSync('./audios/bomdia.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
} else {
  await sleep (3000)
conn.updatePresence(from, Presence.composing)
blabla = fs.readFileSync('./logos/bomdia.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
tujuh = fs.readFileSync('./audios/bomdia.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
} 
}

if (budy.includes("boa tarde") || (budy.includes("Boa tarde"))){
if (!isGroup) return
conn.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./audios/boatarde.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes('boa noite') || (budy.includes('Boa noite'))){
if (!isGroup) return
conn.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./audios/boanoite.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes('pica') || budy.includes('meu pau') || budy.includes('rola') || (budy.includes('Pika'))){
if (!isGroup) return
conn.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./audios/pau.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
}


if (budy.includes("Bug") || (budy.includes('Bugada'))){
if (!isGroup) return
conn.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./audios/bug2.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes('Sexo?') || (budy.includes('Seqsu?'))){
if (!isGroup) return
conn.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./audios/risadamaligna.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
}

if(budy.includes("glub glub") || budy.includes("Glub glub") || budy.includes("Glub Glub") || budy.includes("glub glub")) {
if (!isGroup) return
conn.updatePresence(from, Presence.composing)
blabla = fs.readFileSync('./logos/glub.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
}

if (budy.includes('interessante') || (budy.includes('Interessante'))){
if (!isGroup) return
conn.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./audios/interessante.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
}

if(budy.includes("te amo") || budy.includes("Te amo") || budy.includes("TE AMO") || budy.includes("te amo")) {
if (!isGroup) return
conn.updatePresence(from, Presence.composing)
blabla = fs.readFileSync('./logos/teamo.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
tujuh = fs.readFileSync('./audios/teamo.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes('bang bang') || (budy.includes('Bang Bang'))){
if (!isGroup) return
conn.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./audios/bang.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
}

if(budy.includes("cachorra") || budy.includes("Cachorra") || budy.includes("CACHORRA") || budy.includes("cachorra")) {
blabla = fs.readFileSync('./logos/vadia.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
}

if (budy.includes('vagabunda') || (budy.includes('Vagabunda'))){
if (!isGroup) return
conn.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./audios/vagabunda.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
}

if(budy.includes("BOT") || budy.includes("Bot") || budy.includes("BOOT") || budy.includes("Boot")) {
if (SoDono) {
blabla = fs.readFileSync('./logos/bot.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
} else {
  tujuh = fs.readFileSync('./audios/bot.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
}
}

if (budy.includes('porra') || (budy.includes('Porra'))){
if (!isGroup) return
conn.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./audios/porra.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes('meu amor') || (budy.includes('Meu amor'))){
if (!isGroup) return
conn.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./audios/beijo.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
}

if(budy.includes("vadia") || budy.includes("Vadia") || budy.includes("VADIA") || budy.includes("vadia")) {
tujuh = fs.readFileSync('./audios/vadia.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
blabla = fs.readFileSync('./logos/vadia2.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
}

if(budy.includes("tudo bem") || budy.includes("Tudo bem") || budy.includes("TUDO BEM") || budy.includes("tudo bem")) {
blabla = fs.readFileSync('./logos/bem.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
await sleep(2000) 
tujuh = fs.readFileSync('./audios/bem.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
}

if(budy.includes("bot chato") || budy.includes("Bot chato") || budy.includes(" Sua chata") || budy.includes("Chata") || budy.includes("BOT CHATO") || budy.includes("chata")) {
tujuh = fs.readFileSync('./audios/chato.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
blabla = fs.readFileSync('./logos/chato.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
}

if(budy.includes("puta") || budy.includes("Puta") || budy.includes("PUTA") || budy.includes("fdpt")) {
blabla = fs.readFileSync('./logos/puta.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
}

if(budy.includes("Akame")) {
blabla = fs.readFileSync('./logos/akame.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
}

if(budy.includes("fofa") || budy.includes("Fofa") || budy.includes("FOFA") || budy.includes("fofa")) {
blabla = fs.readFileSync('./logos/fofa.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
await sleep(2000) 
conn.updatePresence(from, Presence.composing)
reply("NÃO ME CHAMAR DE FOFA POR FAVOR,vc que e Fofo(a)")
}

if(budy.includes("estou bem") || budy.includes("Estou bem") || budy.includes("ESTOU BEM") || budy.includes("tô bem")) {
blabla = fs.readFileSync('./logos/qbom.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
}

if(budy.includes("AKAME") ||  budy.includes("AKAME")) {
blabla = fs.readFileSync('./logos/akameporra.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
}

if(budy.includes("nada não") || budy.includes("né nada não") || budy.includes("NÉ NADA NÃO") || budy.includes("nada n")) {
blabla = fs.readFileSync('./logos/teodeio.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
await sleep(2000) 
conn.updatePresence(from, Presence.composing)
reply("ENTÃO PARA DE ME CHAMAR PORRA")
}

if(budy.includes("estou triste") || budy.includes("Estou triste") || budy.includes("ESTOU TRISTE") || budy.includes("eu estou triste")) {
blabla = fs.readFileSync('./logos/triste.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
await sleep(4000) 
conn.updatePresence(from, Presence.composing)
reply("POIS BEM N FIQUE ASSIM,OUVE ESSA MÚSICA PRA TE ALEGRAR")
tujuh = fs.readFileSync('./audios/sozinho.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
}

if(budy.includes("Ara ara") || budy.includes("ARA ARA") || budy.includes("ara ara")) {
tujuh = fs.readFileSync('./audios/AraAra.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
}

if(budy.includes("hentai") || budy.includes("Hentai") || budy.includes("HENTAI") || budy.includes("hentai")) {
blabla = fs.readFileSync('./logos/hentai.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
}

if(budy.includes("gostosa") || budy.includes("Gostosa") || budy.includes("GOSTOSA") || budy.includes("Totosa")){
if (SoDono) {
tujuh = fs.readFileSync('./audios/gostosa.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
blabla = fs.readFileSync('./logos/gostosamestre.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
} else if (!isGroupAdmins) {
conn.updatePresence(from, Presence.composing)
blabla = fs.readFileSync('./logos/gostosa.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
} else {
tujuh = fs.readFileSync('./audios/gostosa1.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
} 
}

if(budy.includes("au au") || budy.includes("Au au") || budy.includes("AU AU") || budy.includes("Auuu")) {
tujuh = fs.readFileSync('./audios/auau.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
blabla = fs.readFileSync('./logos/auau.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
}

if(budy.includes("vamos namorar") || budy.includes("Vamos namorar") || budy.includes("namorar cmg") || budy.includes("que namorar comigo") ||  budy.includes("Quer namorar cmg") ||
 budy.includes("Namorar cmg")) {
if (SoDono) {
conn.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./audios/gracinha.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
} else {
  conn.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./audios/possibilidade.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
await sleep(5000) 
reply(`Mais prefiro o ${NickDono} msm,me desculpa aí, quem sabe na próxima?`)
sleep(7000)
blabla = fs.readFileSync('./logos/diablo.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
}
}

if(budy.includes("mesmo") || budy.includes("n me diga") || budy.includes("E MESMO") || budy.includes("Não me diga") || budy.includes("E mesmo") || budy.includes("NÃO ME DIGA")) {
tujuh = fs.readFileSync('./audios/mesmo.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
}

if(budy.includes("Qual e seu prefixo") || budy.includes("qual e seu prefixo") || budy.includes("Akame seu prefixo") || budy.includes("Prefixo")) { 
await conn.updatePresence(from, Presence.composing)
reply(`Aki está meu prefixo: ⟪•  ${prefix}  •⟫`)
}

if(budy.includes("Dono da akamezinha") || budy.includes("dono da akame") || budy.includes("Dono da akame") || budy.includes("dono da akamezinha")) { 
blabla = fs.readFileSync('./logos/fofa.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
await conn.sendMessage(from, {displayname: `${NickDono}`, vcard: vcard}, MessageType.contact,{quoted: selo}, 'contactsArrayMessage',)
reply(`*Ai está o ctt do meu dono...*`)
}

if(budy.includes("Criatura") || budy.includes("criatura") || budy.includes("CRIATURA") || budy.includes("criatura")) { 
try {
ppimg = await conn.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
pegarimg = await getBuffer(ppimg)
conn.sendMessage(from, pegarimg, MessageType.image, {quoted: info})
await sleep (2000)
tujuh = fs.readFileSync('./audios/criatura.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
await conn.sendMessage (pegarimg, tujuh, {quoted: info})
}
//==============(ANTILINK)===============\\

switch(ants){
} 

 //=========[--ANTI PALAVRÃO --]==========\\
if (isGroup && isPalavrão) { //CREDITOS TIAGO
 if (palavra.includes(messagesC)) {
 if (!isGroupAdmins) {
 try { 
 conn.sendMessage(from, `SEM PALAVRÃO!! 😠!!`, text , {quoted : info})       
setTimeout( () => {
conn.groupRemove(from, [sender])
}, 2000)
reply("2")
setTimeout( () => {
conn.updatePresence(from, Presence.composing)
reply("1")
}, 1000)
setTimeout( () => {
conn.updatePresence(from, Presence.composing)
conn.sendMessage(from, `*「 🗣️ANTI PALAVRÃO🗣️ 」*\nVocê será banido do gp, Na proxima tenha ética ao falar!!`, text , {quoted : info})           							
}, 0)
} catch { conn.sendMessage(from, `InFelizmente, não sou um administrador, entt não posso te banir!!`, text , {quoted : info}) }
} else {
return reply(`VOCÊ PODE ${pushname} 😇`)
}
}
}
//=======================================\\

if(isAntiLink) { 
if(!isBotGroupAdmins) return reply('O bot Precisa ser ADM para poder remover os delinquentes, então me dê ADM.')
if(budy.includes("https://") || (budy.includes(".net") || (budy.includes(".com" ) || (budy.includes("//s.kwai.app/") || (budy.includes("//vm.tiktok") || (budy.includes("www.") || (budy.includes("chat.whatsapp") || (budy.includes(".xml") || (budy.includes("youtube.com") || (budy.includes("//t.me/") || (budy.includes(".css")))))))))))) {
linkgpp = await conn.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
if (!isGroup) return
if (isGroupAdmins) return reply(`*Vc é admin do gp,fica tranquilo que não irei te banir.*`)
conn.updatePresence(from, Presence.composing)
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
}, 1100)
setTimeout( () => {
conn.groupRemove(from, [Kic]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}, 1000)
}
}
//========================================\\

if (document.includes(type)){
if (!Antidoc) return
if (!botNumber) return
if (isGroupAdmins) return reply(`hummmm documento`)     
reply(`Não permitimos envio de documentos no grupo, por questões de segurança de travas e etc..., então por conta disso, terei que ti remover, qualquer dúvida,entre em contato com algum adm.`)
conn.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
conn.groupRemove(from, [sender])
}, 1000)
setTimeout( () => {
conn.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 2000)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, clear , MessageType.text, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
}

if (location.includes(type)){
if (!Antiloc) return
if (isGroupAdmins) return reply(`hummmm localização `)   
reply(`localização detectada, somos severos nessa questão, então terei que remover você, qualquer dúvida, entre em contato com algum adm.`)
conn.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
conn.groupRemove(from, [sender])
}, 1000)
setTimeout( () => {
conn.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 2000)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, clear , MessageType.text, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
}


//================(SIMIH-2)=================\\

if (isSimi2 && !isCmd && isGroup) {
if (type == 'conversation' || type == 'extendedTextMessage') {
if (info.key.fromMe) return
if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
insert(type, info)
const sami = await response(budy)

if (sami) conn.sendMessage(from, sami, MessageType.text, {quoted: info, thumbnail: fs.readFileSync('./logos/logo2.jpg', 'base64')});
}
}


 //===============(SIMIH-1)===============\\
    
if (isGroup && isSimi && budy != undefined) {
console.log(budy)
muehe = await simih(budy)
console.log(muehe)
reply(muehe)
} else {
console.log(color('[ERROR]','red'), 'eita bixo comando não registrado de', color(sender.split('@')[0]))
				
}

//========================================\\

if (isCmd) {
if (SoDono) {
tujuh = fs.readFileSync('./audios/mestre.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
} else if (isGroupAdmins) {
blabla = fs.readFileSync('./logos/foto.webp')
conn.sendMessage(from, blabla, sticker, {quoted: info})
} else if(isCmd) {
tujuh = fs.readFileSync('./audios/iscmd.mp3');
conn.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
}
}

//========================================\\

}
} catch (err) { 
e = String(err)
if (!e.includes ("this.isZero" || !e.match
("jid is not defined"))){
const time_error = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
console.log(color (time_error, "yellow"), color ("[ ERRO ]", "aqua"), color (e,
'red'))
}
}
})
}
starts()