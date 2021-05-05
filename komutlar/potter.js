const Discord = require('discord.js');

exports.run = (client, message, args) => {
 let onlycode = args[0]
 let codeonly = args.join(`+`)
 
if(!onlycode) return message.channel.send(`Yazı Belirtmen Gerek`)
 const embed = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setDescription('**peepoV**')
  .setImage(`https://flamingtext.com/net-fu/proxy_form.cgi?script=harry-potter-logo&text=${codeonly}&_loc=generate&imageoutput=true`) 
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['potter','harry','harry-potter'],
 permLevel: 0
};

exports.help = {
 name: 'hp',
 description: '4224dsfdfg24 yfgazar.',
 usage: '323fdgdfg2'
};