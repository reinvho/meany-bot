const Discord = require("discord.js");
const peepo = ""


exports.run = (client, message, args) => {
  const rexus = new Discord.MessageEmbed()
    .setColor("#00a8e0")
    .setTitle('Kayıt Talebin Kabul Edildi!')
    .setDescription("[**Mülakat Bekleme**](https://www.peepov.co) **Odasına Geçip Yetkililerin Gelmesini Bekleyebilirsin Yetkililerimiz En Kısa Zamanda Sizinle İlgilenecektir**")
    .setFooter("peepoV | Kayıt Çağırma")
    message.delete();
    message.channel.send("<@&748478339185901681>");
  message.channel.send(rexus);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: "mülakat",
  description: "",
  usage: "mülakat"
};