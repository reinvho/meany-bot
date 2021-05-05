const Discord = require('discord.js')
exports.run = (client, message, args) => {
  if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.channel.send(new Discord.MessageEmbed().setTitle('**`Kanalları Yönet` İzni sende yok.**'));

  message.channel.clone().then(channelNuke => {
    let position = message.channel.position;
    channelNuke.setPosition(position);
    const embed = new Discord.MessageEmbed()
    .setDescription("**Kanal Temizlendi**") 
    .setColor('ORANGE')
    .setImage("https://cdn.discordapp.com/emojis/782651834547306497.gif?v=1")
    channelNuke.send(embed)
    message.channel.delete();
  }); 
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "nuke",
  description: "Nuke",
  usage: "nuke"
};