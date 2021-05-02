const Discord = require("discord.js");
exports.run = function(client, message) {

 if (!message.member.hasPermission("ADMINISTRATOR")) return;
    message.delete();
const embed = new Discord.RichEmbed()
  .setTitle("Vist Roleplay")
  .setAuthor("Vist Yönetim", "https://cdn.discordapp.com/attachments/781864922807140352/783384221225058324/VIST-LOGO.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
   
  .setColor(0x00b1e7)
  .setDescription("")
  .setFooter("", "http://i.imgur.com/w1vhFSR.png")
  .setImage("https://media.discordapp.net/attachments/781962768743137280/781962805254422558/VIST_1.png?width=336&height=475")
  .setThumbnail("https://cdn.discordapp.com/attachments/781864922807140352/783384221225058324/VIST-LOGO.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://forms.gle/MkTiVhwhX7MWjFKq6")
  .addField("Yetkili Başvuru Formu",
    "Merhaba değerli **Vist** oyuncuları! Eğer sende Vist yönetiminde yer almak istiyorsan, yukarıdaki **Vist Roleplay** yazısına tıklayıp başvuru formunu doldurman yeterli ")
  /*
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("İyi Roller!", "-Vist Yönetim Ekibi", true);
 
  message.channel.send({embed});

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["2nahan"],
  permLevel: 0
};

exports.help = {
  name: "deneme",
  description: "deneme",
  usage: "deneme"
};