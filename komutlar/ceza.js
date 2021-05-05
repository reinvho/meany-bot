const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json');
const moment = require('moment')
const prefix = ayarlar.prefix;
module.exports.run = async (client, message, args) => {

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\  
          
if(!message.member.roles.cache.has(ayarlar.CezaYetkilisi) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta.')
  
  const kişi = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
  if(!kişi) return message.channel.send('Ceza Rolü Vermem Gereken Kişiyi Belirt')
  if(kişi.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('Etiketlenen Kullanıcı Sizden Üst/Aynı Pozisyonda.')
  
  
  
    let zaman1 = args[1]
          .replace("sn", "s")
          .replace("dk", "m")
          .replace("sa", "h")
          .replace("gün", "d");
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\ 
 var vakit = zaman1
            .replace("m", " dakika")
            .replace("s", " saniye")
            .replace("h", " saat")
            .replace("d", " d");
        
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\

  db.set(`cezali_${message.guild.id + kişi.id}`, 'cezali')

  db.set(`süreCeza_${message.mentions.users.first().id + message.guild.id}`, zaman1)

  db.add(`cezaPuan.${kişi.id}`, 15)
  
  let cezapuan = db.fetch(`cezaPuan.${kişi.id}`);
  
  db.add(`cezasorgu.${kişi.id}`, 1)
  
  let cezasorgu = db.fetch(`cezasorgu.${kişi.id}`);  
  
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\  
  
  let zaman = args[1]
  if(!args[1]) return message.channel.send('Ne Kadar Süre Duracağını Belirt.')

let sebep = args.join(``).slice(args[1].length+args[0].length)
if(!sebep) return message.channel.send('Bir Sebep Belirt.')
  
  const ceza = new Discord.MessageEmbed()
  .setColor(`RED`)
  .setAuthor(message.author.username, message.author.avatarURL({ dynamic : true }))
  .setDescription(`<@${kişi.id}> (\`${kişi.id}\`) üyesi sunucuda cezalandırıldı.
  
• Yetkili: <@${message.author.id}> (\`${message.author.id}\`)
• Zaman: \`${vakit}\`
• Kanal: \`${message.channel.name}\`

• Sebep: \`${sebep}\``)

  .setFooter(`Ceza Puanı Toplam: ${cezapuan} Oldu`)

  const cezason = new Discord.MessageEmbed()
  .setColor('#54a01c')
  .setAuthor(message.author.username, message.author.avatarURL({ dynamic : true }))
  .setDescription(`<@${kişi.id}> (\`${kişi.id}\`) üyesinin cezası sonlandı.
  
• Yetkili: <@${message.author.id}> (\`${message.author.id}\`)
• Zaman: \`${vakit}\`
• Kanal: \`${message.channel.name}\`

• Sebep: \`${sebep}\``)
  
 
  //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\  
  
  kişi.roles.add(ayarlar.CezalıRol);
    kişi.roles.cache.forEach(r => {
kişi.roles.remove(r.id)
db.set(`${message.guild.id}.ceza.${kişi.id}.roles.${r.id}`, r.id )})
    client.channels.cache.get(ayarlar.CezaKanal).send(ceza)
    message.react('✅')
    setTimeout(async () =>{
    kişi.roles.remove(ayarlar.CezalıRol)
    client.channels.cache.get(ayarlar.CezaKanal).send(cezason)
  }, ms(zaman));
            setTimeout(async () =>{
message.guild.roles.cache.forEach(async r => {
const i = await db.fetch(`${message.guild.id}.ceza.${kişi.id}.roles.${r.id}` )
if(i != r.id)  return ;
if(i){kişi.roles.add(i)}
db.delete(`${message.guild.id}.ceza.${kişi.id}.roles.${r.id}`)
})
              }, ms(zaman));
}

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ceza'],
    permLevel: 0,
}

exports.help = {
      name: "ceza", 
      description: 'ceza verir',
      usage: 'ceza'
}