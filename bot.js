const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
const { Client, Util } = require('discord.js');//
const fs = require('fs');//
const db = require('quick.db');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
const ms = require('ms');//
//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`${files.length} komut yüklenecek.`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        log(`Yüklenen komut: ${props.help.name}.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});


client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 5;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//--------------------------------------------------------------------------------------\\

//-------------------------------------OTO-CEVAP----------------------------------------------\\






//---------------------------------------AFK-----------------------------------------------\\



client.on("message" , async msg => {
  
  if(!msg.guild) return;
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
  
  let afk = msg.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
  
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){

       msg.reply(`Etiketlediğiniz Kişi Afk \nSebep : ${sebep}`)
   }
 }
  if(msg.author.id === kisi){

       msg.reply(`Afk'lıktan Çıktınız`)
   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
    msg.member.setNickname(isim)
    
  }
  
});


//------------------------------------------CEZA--------------------------------------------\\

client.on('guildMemberAdd', async(member) => {
let rol = member.guild.roles.cache.find(r => r.name === "Cezalı");
let cezalımı = db.fetch(`cezali_${member.guild.id + member.id}`)
let sürejail = db.fetch(`süreJail_${member.id + member.guild.id}`)
if (!cezalımı) return;
if (cezalımı == "cezali") {
member.roles.add(ayarlar.CezalıRol)
 
member.send("Cezalıyken Sunucudan Çıktığın için Yeniden Cezalı Rolü Verildi!")
 setTimeout(function(){
    // msg.channel.send(`<@${user.id}> Muten açıldı.`)
db.delete(`cezali_${member.guild.id + member.id}`)
    member.send(`<@${member.id}> Cezan açıldı.`)
    member.roles.remove(ayarlar.CezalıRol);
  }, ms(sürejail));
}
})

//--------------------------------------MUTE------------------------------------------------\\

client.on('guildMemberAdd', async(member) => {
let mute = member.guild.roles.cache.find(r => r.name === "Muted");
let mutelimi = db.fetch(`muteli_${member.guild.id + member.id}`)
let süre = db.fetch(`süre_${member.id + member.guild.id}`)
if (!mutelimi) return;
if (mutelimi == "muteli") {
member.roles.add(ayarlar.MuteliRol)
 
member.send("Muteliyken Sunucudan Çıktığın için Yeniden Mutelendin!")
 setTimeout(function(){
    // msg.channel.send(`<@${user.id}> Muten açıldı.`)
db.delete(`muteli_${member.guild.id + member.id}`)
    member.send(`<@${member.id}> Muten açıldı.`)
    member.roles.remove(ayarlar.MuteliRol);
  }, ms(süre));
}
})

//------------------------------------------CEZA--------------------------------------------\\


client.on('guildMemberAdd', async member => {
const data = require('quick.db')
const asd = data.fetch(`${member.guild.id}.jail.${member.id}`)
if(asd) {
let data2 = await data.fetch(`jailrol_${member.guild.id}`)
let rol = member.guild.roles.cache.get(data2)
if(!rol) return;
let kişi = member.guild.members.cache.get(member.id)
kişi.roles.add(rol.id);
kişi.roles.cache.forEach(r => {
kişi.roles.remove(r.id)
data.set(`${member.guild.id}.jail.${kişi.id}.roles.${r.id}`, r.id )})
    data.set(`${member.guild.id}.jail.${kişi.id}`)
  const wasted = new Discord.MessageEmbed()
  .setAuthor(member.user.tag, member.user.avatarURL({ dynamic : true }))
  .setColor(`#54a01c`)
  .setDescription(`Cezadan Kaçamazsın!`)
  .setTimestamp()
    member.send(wasted)
} 
  
  
})

//----------------------------------BOT-DM-KUTUSU-----------------------------------------------\\
client.on("message", msg => {
    var dm = client.channels.cache.get("781886978752380938")
    if(msg.channel.type === "dm") {
    if(msg.author.id === client.user.id) return;
    const botdm = new Discord.MessageEmbed()
    .setTitle(`${client.user.username} Dm`)
    .setTimestamp()
    .setColor("RANDOM")
    .setThumbnail(`${msg.author.avatarURL()}`)
    .addField("Gönderen", msg.author.tag)
    .addField("Gönderen ID", msg.author.id)
    .addField("Gönderilen Mesaj", msg.content)
    
    dm.send(botdm)
    
    }
    if(msg.channel.bot) return;
    });
//-------------------------------------REKLAM-ENGELLEME-----------------------------------------------\\
client.on("message", msg => {
    if(msg.channel.type === "dm") {return}
    if(!db.has(`reklam_${msg.guild.id}`)) return;
           const reklam = ["discord.gg"];
           if (reklam.some(word => msg.content.includes(word))) {
             try {
               if (!msg.member.hasPermission("BAN_MEMBERS")) {
                     msg.delete();
                       return msg.reply('**Bu Sunucuda** `Reklam Engelle`** Aktif Reklam Yapmana İzin Vermem İzin Vermem ? !**').then(msg => msg.delete(3000));
      
    
     msg.delete({timeout:3000});                              
    
               }              
             } catch(err) {
               console.log(err);
             }
           }
       });

//--------------------------------------------------------------------------------------------------------\\

//--------------------------------------------------Boost--------------------------------------------------\\
/*const logs = require('discord-logs');
logs(client);

client.on('guildMemberBoost', (member) => {// last#0364
let kanal = client.channels.cache.get('748484637420158996');
kanal.send(`${member.user.tag} kullanıcısı ${member.guild.name} sunucusuna boost bastı!`);
member.send(`${member.guild.name} sunucusuna boost bastığın için teşekkürler! https://media.discordapp.net/attachments/780739227943829504/781153458900041778/3x.gif?width=75&height=75`);
});//peepoV ♥*/
//--------------------------------------------------------------------------------------------------------\\

//----------------------------------------------SİLİNEN-MESAJ-LOG----------------------------------------------------------\\
client.on("messageDelete", async message => {
  if (message.author.bot) {
     return false;
 }

 if (!message.guild) {
     return false;
 }

/* if (message.content == newMessage.content) {
     return false;
 }*/
const fetchedLogs = await message.guild.fetchAuditLogs({
 limit: 1,
 type: "MESSAGE_DELETE"
});
const deletionLog = fetchedLogs.entries.first();
const { executor, target } = deletionLog;
const a = new Discord.MessageEmbed()
 .setTitle("Bir Mesaj Silindi")
 .setColor("RED")
 .addField("Mesaj Sahibi", message.author)
 .addField("Mesajı Silen", `<@${executor.id}>`)
 .addField("Mesajın Bulunduğu Kanal", message.channel.name)
 .addField("Silinen Mesaj", "```" + message.content + "```")
 .setFooter(message.guild.name, message.guild.iconURL())
 .setTimestamp();
message.guild.channels.cache.get("781887253047803934").send(a);
});
//--------------------------------------------------------------------------------------------------------\\

//---------------------------------------------------MESAJ-DÜZENLEME------------------------------------------\\
client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (oldMessage.author.bot) {
     return false;
 }

 if (!oldMessage.guild) {
     return false;
 }

 if (oldMessage.content == newMessage.content) {
     return false;
 }
console.log(oldMessage, newMessage)
const b = new Discord.MessageEmbed()
 .setTitle("Bir Mesaj Düzenlendi")
 .setColor("#54a01c")
 .addField("Mesaj Sahibi", newMessage.author)
 .addField("Mesajın Bulunduğu Kanal", newMessage.channel.name)
 .addField("Mesajın ID'si", newMessage.id)
 .addField("Eski Mesaj", "```" + oldMessage.content + "```")
 .addField("Yeni Mesaj", "```" + newMessage.content + "```")
 .setFooter(newMessage.guild.name, newMessage.guild.iconURL())
 .setTimestamp();
 newMessage.guild.channels.cache.get("781887253047803934").send(b)
});
//--------------------------------------------------------------------------------------------------------   \\

//----------------------------------------------------LOG----------------------------------------------------\

//--------------------------------------------------------------------------------------------------------\\

//-----------------------GİRENE-ROL-VERME----------------------\\    
client.on('guildMemberAdd', member => {// Last
    if(!member.guild.id === '748472859214479400') return;
    if(member.bot) return;
    member.guild.members.cache.get(member.id).roles.add('748473855852544050')
   client.channels.cache.get('801474524842950686').send(`**${member}, isimli kişi giriş yaptı. Ona <@&748473855852544050> isimli rolü verdim.**`)
    })
//--------------------GİRENE-ROL-VERME-UNVERİFİED----------------------\\ 

//-----------------------HOŞ-GELDİN-MESAJI---------------------------\\    

client.on("guildMemberAdd", member => {  
  const kanal = member.guild.channels.cache.find(r => r.id === "781975982587248690");
  const peepo = ""
  let user = client.users.cache.get(member.id);
  require("moment-duration-format");
    const kurulus = new Date().getTime() - user.createdAt.getTime();  
 
  var kontrol;
if (kurulus < 1296000000) kontrol = '**Hesap Durumu: Güvenilir Değil** <a:red:752466107587100682>'
if (kurulus > 1296000000) kontrol = '**Hesap Durumu: Güvenilir Gözüküyor** <a:pvok4:752466104156422187>'
  moment.locale("tr");
    const peepolog = new Discord.MessageEmbed()
    .setAuthor(member.guild.name)
.setDescription("**Hoşgeldin!** <@" + member + "> **Seninle** \`" + member.guild.memberCount + "\` **Kişiyiz.**\n\n**Müsait olduğunda Mülakat Bekleme Odasına Geçip Kaydını Yaptırabilirsin.** \n\n<@&778587245304348692> **seninle ilgilenicektir.** \n\n**Hesabın Oluşturulma Tarihi:** " + moment(member.user.createdAt).format("`YYYY DD MMMM dddd`") +  "\n\n"  + kontrol + "\n\n")
 .setImage("https://i.hizliresim.com/UnFl10.png")
 kanal.send(peepolog)   
   kanal.send(peepo) 
});

//--------------------------------------------------------------------\\  