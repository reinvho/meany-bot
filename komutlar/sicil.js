const Discord = require("discord.js")
const db = require('quick.db');
exports.run = async(client, message, args) => {    
 if(!message.member.roles.cache.some(r => ["778587245304348692"].includes(r.id))) //
    return message.reply("Bu Komutu Kullanmak İçin Yeterli Yetkin Bulunmamakta !")
  //------------------------------------------------KAYITLAR-----------------------------------------------\\    peepo   
 let adam = message.mentions.users.first()
if(!adam) {
  let cezapuan = db.fetch(`cezaPuan.${message.author.id}`);
  let cezasorgu = db.fetch(`cezasorgu.${message.author.id}`);
  let mutesorgu = db.fetch(`muteSorgu.${message.author.id}`);
  let jailsebep = db.fetch(`jailreason.${message.author.id}`)
  let uyarı = db.fetch(`uyari.${message.author.id}`) 
  
  if(cezapuan === null) cezapuan = "0" 
  if(cezapuan === undefined) cezapuan = "0" 
  if(cezasorgu === null) cezasorgu = "0"
  if(cezasorgu === undefined) cezasorgu = "0"
  if(mutesorgu === null) mutesorgu = "0"
  if(mutesorgu === undefined) mutesorgu = "0"
  if(uyarı === null) uyarı = "0"
  if(uyarı === undefined) uyarı = "0"
  const kaytlar = new Discord.MessageEmbed()
 .setThumbnail(message.author.avatarURL())     
    .setTitle(`${message.author.username|| message.mentions.members.first}`) 
    .setDescription(`• Ceza alma Sayısı: \`${cezasorgu}\`
• Mutelenme Sayısı: \`${mutesorgu}\`
• Uyarılma Sayısı: \`${uyarı}\`
• Toplam Ceza Puanın: \`${cezapuan}\`

`)
    .setColor("0x2f3136")
  return message.channel.send(kaytlar)
};
if(adam) {
 let cezapuan2 = await db.fetch(`cezaPuan.${adam.id}`) 
 let cezasorgu2 = await db.fetch(`cezasorgu.${adam.id}`)
 let mutesorgu2 = db.fetch(`muteSorgu.${adam.id}`); 
 let jailsebep2 = db.fetch(`jailreason.${adam.id}`)
 let uyarı2 = db.fetch(`uyari.${adam.id}`)
  if(cezapuan2 === null) cezapuan2 = "0" 
  if(cezapuan2 === undefined) cezapuan2 = "0" 
  if(cezasorgu2 === null) cezasorgu2 = "0"    
  if(cezasorgu2 === undefined) cezasorgu2 = "0"
  if(mutesorgu2 === null) mutesorgu2 = "0"
  if(mutesorgu2 === undefined) mutesorgu2 = "0"
  if(uyarı2 === null) uyarı2 = "0"
  if(uyarı2 === undefined) uyarı2 = "0"
  const kaytlar2 = new Discord.MessageEmbed()
 .setThumbnail(adam.avatarURL())     
    .setTitle(`${adam.username}`) 
    .setDescription(`• Ceza Alma Sayısı:  \`${cezasorgu2}\`
• Mutelenme Sayısı:  \`${mutesorgu2}\`
• Uyarılma Sayısı: \`${uyarı2}\`
• Toplam Ceza Puanları: \`${cezapuan2}\`

`)
    .setColor("0x2f3136")
  return message.channel.send(kaytlar2)
}}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sicil', 'cv'],
  permLevel: 0,
  kategori: ``
};

exports.help = {
  name: 'sicil',
  description: 'kullancıı sicilini gösterir',
  usage: 'sicil'
};