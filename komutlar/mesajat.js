const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.member.roles.has("753264809038053416") && !message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bunu Sadece Botun Sahibi Kullanabilir');
      
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('⚠ Uyarı ⚠', 'Bu  komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Ne göndereceğimi yazarmısın.');
  if (message.mentions.users.size < 1) return message.reply('Kime Mesaj atacağımı yazarmısın.').catch(console.error);
  message.delete();
  message.reply('Mesajını Gönderdim.')
  const embed = new Discord.RichEmbed()
  .setColor('62fd00')
  .setTitle(`**Başvurunuz Onaylandı!**`)
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pm','öm'],
  permlevel: 4
};

exports.help = {
  name: 'mesajat',
  description: 'Bir kullanÄ±cÄ±ya Ã¶zel mesaj yollar.',
  usage: 'mesajat'
};