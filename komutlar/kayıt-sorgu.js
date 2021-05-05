const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.some(r => ["778587245304348692"].includes(r.id)) && (!message.member.hasPermission("ADMINISTRATOR")))
    return message.reply("Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta.")
 
 let kullanıcı = message.mentions.users.first()
    
 
if(!kullanıcı) {

let kayıtlar = db.fetch(`kayıtSayi.${message.author.id}`); 
if(kayıtlar === null) kayıtlar = "0"
if(kayıtlar === undefined) kayıtlar = "0"
  
const sorgu1 = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL ({ dynamic: true}))
.setAuthor(message.author.username, message.author.avatarURL)
.setDescription(`★ Toplam Kayıtların: \`${kayıtlar}\``)
.setFooter(`peepoV`) 
 return message.channel.send(sorgu1)
};
  
if(kullanıcı) {  
let kayıtlar1 = db.fetch(`kayıtSayi.${kullanıcı.id}`); 
if(kayıtlar1 === null) kayıtlar1 = "0"
if(kayıtlar1 === undefined) kayıtlar1 = "0"
  
const sorgu2 = new Discord.MessageEmbed()
.setThumbnail(kullanıcı.avatarURL ({ dynamic: true})) 
.setAuthor(`${kullanıcı.username}`)
.setDescription(`★ Toplam Kayıtların: \`${kayıtlar1}\``)
.setFooter(`peepoV`) 
 return message.channel.send(sorgu2)
  
};
  
  };

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["stat", "kayıtlar", "kayıt-sorgu"],
    permLvl: 0,
}
  
exports.help = {  
  name: "stat"
}