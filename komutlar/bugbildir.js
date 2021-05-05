const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.MessageEmbed()
.setDescription('Kullanım: p!bug <Bug>'));
const embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription('Bug Bildirildi!')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`**${message.author.tag}** adlı kullanıcının bildirdiği **Bug** :`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Bug", type)
.setThumbnail(message.author.avatarURL())
message.delete();
client.channels.cache.get('783366894438187008').send(embed2); //peepoV
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'bug',
  description: 'Bug Bildirirsiniz..',
  usage: 'bug <Bug>'
};