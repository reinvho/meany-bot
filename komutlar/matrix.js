const Discord = require('discord.js');

exports.run = (client, message, args) => {
 let onlycode = args[0]
 let codeonly = args.join(`+`)
 
if(!onlycode) return message.channel.send(`Yazı Belirtmen Gerek`)
 const embed = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setDescription('**peepoV**')
  .setImage(`https://flamingtext.com/net-fu/proxy_form.cgi?script=matrix-logo&text=${codeonly}&_loc=generate&imageoutput=true`) 
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['matrix'],
 permLevel: 0
};

exports.help = {
 name: 'matrix',
 description: '2s42s3asf4dfdss2sfs yazar.',
 usage: '42423dsfsaddsssf34'
};