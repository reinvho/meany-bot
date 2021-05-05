const { MessageEmbed } = require("discord.js");
// module.exports.onLoad = (client) => {}
module.exports.run = (client, message, args) => {
  
  //if(!['ROL ID'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(`Başarısız !`).setDescription(`Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta <a:no:776484326215909427> \n \`u!ban @Etiket Sebep\` `))


  let tag = "";
  const booster = message.guild.roles.cache.get("752275694058471435").members.size
  const whitelist = message.guild.roles.cache.get("748473981799104582").members.size
  const nowhitelist = message.guild.roles.cache.get("748473855852544050").members.size
  const girebilir = message.guild.roles.cache.get("781457534342660116").members.size
  const yetkili = message.guild.roles.cache.get("778587245304348692").members.size
  const online = message.guild.members.cache.filter(u => u.presence.status != "offline").size
  const toplam = message.guild.memberCount
  const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 

  const embed = new MessageEmbed()
  .setTimestamp()
  .setColor('RANDOM')
  .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
  message.delete();
  message.channel.send(embed.setDescription(`**Toplam Üye  ・ ${toplam}
  Aktif Üye ・ ${online}
  Booster Üye ・${booster}
  Whitelist Üye ・${whitelist}
  Girebilir Üye ・${girebilir}
  Toplam Yetkili ・${yetkili}
  No Whitelist Üye ・${nowhitelist}
  Sesteki Üye ・${ses}**`));
};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say"],
  permLvl: 0,
}

  exports.help = {
  name: 'say',
  description: 'sayar',
  usage: 'say'
}

//peepoV