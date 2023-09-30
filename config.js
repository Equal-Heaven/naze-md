/**
   * Create By Dika Ardnt.
   * Recode By Naze Dev
   * Contact Me on wa.me/6282113821188
   * Follow https://github.com/nazedev
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['242068312525']
global.ownernomer = "242068312525"
global.premium = ['242068312525,242064064148']
global.packname = 'ᗰᗩᗪᗴ ᗷY'
global.author = '𝗕𝗥𝗬𝗔𝗡𝗕𝗚'
global.sessionName = 'nazedev'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''

// Setting Mess
global.mess = {
    success: '✅Done',
    admin: 'Vous Devez etre un  Admin du Groupe!',
    botAdmin: 'Seule Bryan peut executer cette commande!',
    premime: 'Cette commande n est utilisable que par Nicolas ou BRYAN ',
    owner: 'Cette fonctionnalité n est disponible que pour BRYAN ',
    group: '*Les fonctionnalités* sont utilisées uniquement pour les groupes!',
    private: 'Les fonctionnalités* sont utilisées uniquement pour *les discussions privé* !',
    bot: 'Cette commande n est disponible que pour le numero du bot',
    wait: '*Chargement...*',
    error: 'Erreur Detecté!',
    errapi: 'Erreur apikey demander !',
    errmor: 'Erreur du *SYSTEME*',
    endLimit: 'Votre limite quotidienne a expiré, la limite sera réinitialisée toutes les 12 heures',
}

// Limit
global.limitawal = {
    premium: "Infinity",
    free: 25
}

// Fake
global.thumb = fs.readFileSync('./media/image/naze.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')

// Url
global.mygit = 'https://github.com/nazedev'
global.myyt = 'https://youtube.com/c/Nazedev'
global.myytv = 'https://youtu.be/FAsL-Jy4qLc'
global.mygc = "https://chat.whatsapp.com/Dm9A0p3YSKrEWOAR5bINPa"

// Engak Ngaruh, Belum Kepasang
global.botname = 'ANONYMOUS'
global.akulaku = 'Bot By ༒卐࿈﻿  ᄂΣᄂᄂӨЦᄃΉΣ  ࿈﻿卐༒'
global.ytname = 'YT NAZE' //Kalo Ngk Punya Yt Ngak Usah Di Ganti


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
