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
  .setThumbnail("https://cdn.discordapp.com/attachments/781864922807140352/783384221225058324/VIST-LOGO.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.gg/cavsapacmV")
  .addField("Ticket Açma Kuralları",
    "Merhaba değerli **Vist** oyuncuları. \n \n Oyun içi veya donanımsal olarak karşılaştığımız durumları yönetim ekibinden yardım alarak çözebilmeniz için alttaki **ticket** emojisine tıklayıp yardım talep edebilirsiniz. \n \n **Aşağıda belirttiğimiz türde bir şekilde ticket açarsanız bakılmayacaktır.** \n \n 1 - Video kaydı bulunmadan eşya karşılaması istenilirse **karşılanmayacaktır.** \n \n 2 - Sistemsel hatalar dışında ölürseniz revive **atılmayacaktır.** \n \n 3 - Ticketlarda **X** yöneticisi ile görüşebilirmiyim gibi mesajlar dikkate **alınmayacaktır.** \n \n 4 - Bir oyuncu hakkında şikayetçi olacaksanız şu şekilde ticket açmanız gerekmektedir; \n **X** kişisi hakkında roldeki **X** hareket yüzünden **Fail RP** yaptığını düşünüyorum bu yüzden kendisinden şikayetçiyim. \n \n 5 - Ticket açmadan Destek Bekleme kanalına girerseniz Destek talebinize **bakılmayacaktır.** \n \n **Vist Roleplay** İyi Roller Diler.")
  /*
  /*
   * Blank field, useful to create some space.
   */
 
  message.channel.send({embed});

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["2nahan"],
  permLevel: 0
};

exports.help = {
  name: "deneme2",
  description: "deneme2",
  usage: "deneme2"
};