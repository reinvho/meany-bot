const Discord = require("discord.js");
const peepo = "<@&748473981799104582>"


exports.run = (client, message, args) => {
  const rexus = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle('Sunucu Bakımda!')
    .setDescription("[**Sunucu Açılınca Tekrar Giriş Yapabilirsiniz.**](https://www.peepov.co)")
    .setFooter("peepoV | Bakımda")
    .setImage("https://media.discordapp.net/attachments/452773208496799774/782675306354835456/ezgif.com-video-to-gif_6.gif?width=450&height=254")
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
  name: "bakım",
  description: "",
  usage: "bakım"
};