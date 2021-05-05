const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
exports.run = (client, message, args) => {

  let yazıİçeriği = args.slice().join(' ')
  const Mesaj = new MessageEmbed()
    .setColor('RANDOM')
    .setDescription(yazıİçeriği)
message.delete();
message.channel.send(Mesaj)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['embed', 'embedyazı'],
  permLevel: 0
}

exports.help = {
  name: 'yaz'
}