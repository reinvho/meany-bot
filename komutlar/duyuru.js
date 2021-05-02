const Discord = require("discord.js");


exports.run = function(client, message) {
 
 if (!message.member.hasPermission("ADMINISTRATOR")) return;
  const harun = new Discord.RichEmbed()
    .setColor(0x4262BA)
    .setDescription("**Vist Roleplay**")
    .setTimestamp()
    .setImage(
      `https://cdn.discordapp.com/attachments/781962768743137280/782730150780338206/vistrp_duyuru.png`
    );
  message.delete();
  message.channel.send(harun);
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["2nahan"],
  permLevel: 0
};

exports.help = {
  name: "duyuru",
  description: "duyuru",
  usage: "duyuru"
};
