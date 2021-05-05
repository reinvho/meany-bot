const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const last = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription("\`\`\`peepoV Botu Last tarafından yapılmış kişiye özel botuttur bu tarz size özel yapılmış gelişmiş botlar için destek sunucuma gel, ve sende sunucuna özel bota sahip ol.`\`\`\n **Yapımcım : Last#0364 | <@270562630798671874>**\n \n**Lastᴹ Destek Sunucusu; **\n **[Lastᴹ Destek Sunucusu](https://discord.gg/q5V6us8SUJ)**")
    .setImage("https://media.discordapp.net/attachments/505839419924807683/793885630840045588/last.png?width=325&height=325")
    .setFooter("Last#0364")
  message.channel.send(last);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y"],
  permLevel: 0
};

exports.help = {
  name: "yapımcım",
  description: "Last",
  usage: ""
};