const Discord = require('discord.js')
const data = require('quick.db')

exports.run = async (client, message, args) => {
let prefix = ''// botun prefixi

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`Yetkin yok.`)
if(!args[0]) return   message.channel.send({embed:{description:`Sistemi kullanmak için, ${prefix}uyarı ekle/sil/bilgi komutlarını kullanın.`,color:0xFF0000}}).then(msg => msg.delete(10000));


if(args[0] === 'ekle') {
let kullanıcı = message.mentions.users.first()
if(!args[1])return message.channel.send({embed:{description:`Bir kullanıcıyı etiketlemelisin`,color:0xff0000}}).then(msg => msg.delete(10000));
  
if(!kullanıcı) return message.channel.send({embed:{description:`${args[1]}, kullanıcısını sunucuda bulamıyorum.`,color:0xff0000}}).then(msg => msg.delete(10000));
  
if(kullanıcı.bot) return message.channel.send({embed:{description:`Botları uyaramam.`,color:0xff0000}}).then(msg => msg.delete(10000));
  
if(kullanıcı.id === message.author.id) return message.channel.send({embed:{description:`Kendini uyaramazsın.`,color:0xff0000}}).then(msg => msg.delete(10000));
  
let reason = args.slice(2).join(' ')

data.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, +1)
const syı = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

if(!reason) {
await message.channel.send({embed:{description:`${kullanıcı}, uyarıldı!\nToplam uyarı sayısı: ${syı}`,color:0xff0000}}).then(msg => msg.delete(10000));
await kullanıcı.send({embed:{description:`${kullanıcı}, merhaba! ${message.guild.name} sunucusunda sebepsiz bir şekilde uyarıldın. Dikkatli ol!`,color:0xff0000}}).then(msg => msg.delete(10000));
return}

if(reason) {
await message.channel.send({embed:{description:`${kullanıcı}, uyarıldı!\nToplam uyarı sayısı: ${syı}`,color:0xff0000}}).then(msg => msg.delete(10000));
await kullanıcı.send({embed:{description:`${kullanıcı}, merhaba! ${message.guild.name} sunucusunda sebepsiz bir şekilde uyarıldın. Dikkatli ol!`,color:0xff0000}}).then(msg => msg.delete(10000)); 
return} }

if(args[0] === 'sil') {
let kullanıcı = message.mentions.users.first()
if(!args[1]) return message.channel.send({embed:{description:`Bir kişiyi etiketlemelisin.`,color:0xff0000}}).then(msg => msg.delete(10000));
if(!kullanıcı) return message.channel.send({embed:{description:`${args[1]}, kullanıcısını sunucuda bulamıyorum..`,color:0xff0000}}).then(msg => msg.delete(10000));
if(kullanıcı.id === message.author.id) return message.channel.send({embed:{description:`Kendi uyarını silemezsin!`,color:0xff0000}}).then(msg => msg.delete(10000));

let sayı = args[2]
if(!sayı) return message.channel.send({embed:{description:`Silinecek uyarı sayısını yazmadın!`,color:0xff0000}}).then(msg => msg.delete(10000));
if(isNaN(sayı)) return message.channel.send({embed:{description:`Silinecek uyarı sayısını yazmadın!`,color:0xff0000}}).then(msg => msg.delete(10000));
if(sayı === '0') return message.channel.send({embed:{description:`Lütfen daha yüksek bir rakam belirt!`,color:0xff0000}}).then(msg => msg.delete(10000));
const syı2 = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
if(syı2 < sayı) return message.channel.send({embed:{description:`${kullanıcı}, kullanıcısının uyarı sayısı: ${syı2}! Sadece bu kadar silebilirsin.`,color:0xff0000}}).then(msg => msg.delete(10000));

data.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, -sayı)
const syı = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
await message.channel.send({embed:{description:`${kullanıcı}, uyarısı silindi!\nToplam uyarı sayısı: ${syı ? syı : '0'}`,color:0xff0000}}).then(msg => msg.delete(10000));
await kullanıcı.send(`${kullanıcı}, merhaba! ${message.guild.name} sunucusunda uyarın silindi. Daha dikkatli ol!`) }

if(args[0] === 'bilgi') {
let kullanıcı = message.mentions.users.first()
if(!args[1]) return message.channel.send({embed:{description:`Bir kişiyi etiketlemelisin.`,color:0xff0000}}).then(msg => msg.delete(10000));
if(!kullanıcı) return message.channel.send({embed:{description:`${args[1]}, kullanıcısını sunucuda bulamıyorum..`,color:0xff0000}}).then(msg => msg.delete(10000));

const syı2 = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
if(!syı2) return message.channel.send({embed:{description:`${kullanıcı}, kullanıcısının hiç uyarısı yok.`,color:0xff0000}}).then(msg => msg.delete(10000));
await message.channel.send({embed:{description:`${kullanıcı}:\nToplam uyarı sayısı: ${syı2 ? syı2 : '0'}`,color:0xff0000}}).then(msg => msg.delete(10000)); }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['uyari','uyarı'],
  permLevel: 0
};

exports.help = {
  name: 'uyar',
  description: 'Bir üyeyi uyarır.',
  usage: 'uyar <@kullanıcı>'
};