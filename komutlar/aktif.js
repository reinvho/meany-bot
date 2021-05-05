const Discord = require("discord.js");
const peepo = ""


exports.run = (client, message, args) => {
  const rexus = new Discord.MessageEmbed()
    .setColor("#00a8e0")
    .setTitle('Sunucu Aktif!')
    .setDescription("[Sunucu ip: 193.31.118.100 | TS3: peepov](https://www.peepov.co)")
    .setFooter("peepoV | Aktif")
    .setImage("https://media.discordapp.net/attachments/780739227943829504/782616394096574464/ezgif.com-video-to-gif_5.gif?width=450&height=254")
    message.channel.send("<@&748473981799104582>")
    message.delete();
  message.channel.send(rexus);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: "aktif",
  description: "",
  usage: "aktif"
};