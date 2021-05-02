const Discord = require("discord.js");
exports.run = function(client, message) {

 if (!message.member.roles.has("791018438453362729") && !message.member.hasPermission("ADMINISTRATOR")) return;
    message.delete();
  message.channel.send({embed: {
    color: 0x00ff1e,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "FORP",
    thumbnail:{
      url:"https://cdn.discordapp.com/attachments/787438494715871272/792851261187555328/logoyellow.png"
    },
    url: "https://discord.gg/be8QwJKaqk",
    fields: [{
        name: "Sunucu Aktif!",
        value: "Sunucu aktif giriş yapabilirsiniz! \n \n **Sunucu IP:** XX \n **TeamSpeak IP:** XX"
      },
],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "FORP Yönetim"
    }
  }
});

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["2nahan"],
  permLevel: 0
};

exports.help = {
  name: "aktif",
  description: "aktif",
  usage: "aktif"
};