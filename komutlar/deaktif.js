const Discord = require("discord.js");
exports.run = function(client, message) {

 if (!message.member.roles.has("753264809038053416") && !message.member.hasPermission("ADMINISTRATOR")) return;
    message.delete();
  message.channel.send({embed: {
    color: 0xff0606,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Vist Roleplay",
    thumbnail:{
      url:"https://cdn.discordapp.com/attachments/723425201781604443/782638124173230090/vistdeaktif.png"
    },
    url: "https://discord.gg/cavsapacmV",
    fields: [{
        name: "Sunucu Deaktif!",
        value: "Sunucu kısa sürelğine deaktif."
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
  name: "deaktif",
  description: "deaktif",
  usage: "deaktif"
};