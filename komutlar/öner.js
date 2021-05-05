const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (message.channel.type == "dm") return;
  if (message.channel.type !== "text") return;

  //if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`).then(m => m.delete({ timeout: 10000}));

  message.delete();

  let question = args.join(" ");

  let user = {};
  user.avatar= message.author.avatarURL();
  user.id = message.author.username;

  if (!question) return message.channel.send(new Discord.MessageEmbed().setTitle(`:x:yazı yazman gerek :x:`)).then(m => m.delete(({ timeout: 5000})));

  message.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(`${user.avatar}`)
        .setTimestamp()
        .setFooter("Bu Öneriyi Sunucuda İstiyorsanız Oy Verin", `${user.avatar}`)
        .addField(`${user.id} Öneride Bulunuyor Önerim;`, "**```" + `${question}` + "```**")
    )
    .then(function(message) {
      message.react("👍");
      message.react("👎");
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Öneri"],
  permLevel: 0
};

exports.help = {
  name: "öner",
  description: "İstek Belirtmenizi sağlar.",
  usage: "öner <isteğiniz>"
};