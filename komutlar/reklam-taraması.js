const db = require('quick.db')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
  
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);

const members = message.guild.members.cache.filter(member => member.user.presence.game && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.presence.game.name));
const memberss = message.guild.members.cache.filter(member => member.user.username && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.username));

const embed = new Discord.MessageEmbed()

.setTitle('Reklam Taraması')

.setColor("#0x54a01c")

.addField('Oynuyor Mesajı Reklam İçeren Kullanıcılar', members.map(member => `${member} = ${member.user.presence.game.name}`).join("\n") || "Kimsenin oynuyor mesajı reklam içermiyor.")
.addField('Kullanıcı Adı Reklam İçeren Kullanıcılar', memberss.map(member => `${member} = ${member.user.username}`).join("\n") || "Kimsenin kullanıcı adı reklam içermiyor.")

message.channel.send(embed)
}

    
      
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rtara', 'reklam-ara', 'reklamara', 'reklamtaraması'],
  permLevel: 0
};

exports.help = {
  name: 'rtara', 
  description: "Reklam Taraması Yapar",
  usage: 'peepoV'
};