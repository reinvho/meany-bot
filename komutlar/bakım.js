const Discord = require("discord.js");
exports.run = function(client, message) {

 if (!message.member.roles.has("753264809038053416") && !message.member.hasPermission("ADMINISTRATOR")) return;
    message.delete();
  message.channel.send({embed: {
    color: 0xfdd900,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "FORP",
    thumbnail:{
      url:"https://cdn.discordapp.com/attachments/723425201781604443/782634581198241813/vistbakm.png"
    },
    url: "https://discord.gg/cavsapacmV",
    fields: [{
        name: "Bakımdayız!",
        value: "Kısa bir süreliğine bakımdayız."
      },
],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Vist Roleplay Yönetim"
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
  name: "bakım",
  description: "bakım",
  usage: "bakım"
};