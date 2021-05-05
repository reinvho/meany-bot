const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

 if(!['839533953626144824'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.reply(`Bu Komut İçin Yetkiniz Bulunmamaktadır.`) 
  
let tag = ""
const kayıtlı = message.guild.roles.cache.find(r => r.id === '839533952964231218')
const kayıtsız = message.guild.roles.cache.find(r => r.id === '839533952943652904')

if(!kayıtlı) return message.reply('Kayıtlı Rolü Ayarlanmamış.') 
if(!kayıtsız) return message.reply('Kayıtsız Rolü Ayarlanmamış.') 
  
let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
if(!member) return message.channel.send('Kimi Kayıt Etmem Gerekiyor ?')
let peepo = message.guild.member(member)
let hex = args[1]
let steam = args[2]
if(!hex) return message.reply('Hex ID Belirt.')
if(!steam) return message.reply('Steam Profil Linki Belirt.')
 
peepo.roles.add(kayıtlı)
peepo.roles.remove(kayıtsız)

db.add(`kayıtSayi.${message.author.id}`, 1)
db.add(`erkekUye.${message.author.id}`, 1)
let erkek = db.get(`erkekUye.${message.author.id}`);
let kayıtlar = db.fetch(`kayıtSayi.${message.author.id}`); 
  
const embed = new Discord.MessageEmbed()
.setTitle(`Kayıt İşlemi Tamamlandı`)
    .addField(`<:peepov2:781220751432613958> **Kayıt Eden** :`, `<@${message.author.id}> Tarafından Kayıt Edildi`) 
    .addField(`<a:peepoSpin:781441831354630174> **Kayıt Edilen** :`, `<@${peepo.user.id}> Kayıt Oldu`)
    .addField(`<a:peepoKissing:781441843069976608> **Verilen Rol** :`, `<@&${kayıtlı.id}> Rolleri Verildi`) 
    .addField(`<:peepoPolice:781441831912734740> **Alınan Ro** :`, `<@&${kayıtsız.id}> Rolleri Alındı`)
    .addField(`<a:clownpeepo:781441843577356292> **Hex ID** :`, "**```" + `${hex}` + "```**" + `Olarak Belirtildi`) 
    .addField(`<:peepoGunHolster:781441838845526016> **Steam Profil Linki** :`, "**```" + `${steam}` + "```**" + `Olarak Belirtildi`) 
    .addField(`<a:peepoShy:781441831605895188> **Yetkili Toplam** :`, "**```" + `${kayıtlar}` + "```**" + `Kayıtlara Sahip.`)

.setFooter(`peepoV | Kayıt Sistemi`)
.setColor('0x54a01c')
client.channels.cache.get('839533955446997009').send(embed)
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['k','w','whitelist'],
    permLevel: 5
};

exports.help = {
    name: 'kayıt',
};
