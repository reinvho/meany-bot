const Discord = require('discord.js');

exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed();
embed.setColor("#00a8e0")
.setDescription("[peepoV](https://www.peepov.co)")
message.delete();
message.channel.send(embed)
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['site','peeposite'],
permLevel: 0
}

exports.help = {
name: 'site',

}