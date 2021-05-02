const Discord = require('discord.js');
exports.run = (client, message, args) => {
       if (!message.member.roles.has("753264809038053416") && !message.member.hasPermission("ADMINISTRATOR"))
         message.delete();
  const yetkili = message.author;
    if (!message.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField(':warning: **Uyarı** :warning:', '`rol-ver` **adlı komutu özel mesajlarda kullanamazsın.**')
        return message.author.sendEmbed(ozelmesajuyari);
    }
    let guild = message.guild
    let user = message.mentions.members.first()
 
    if (!user) return message.reply('**Kimi kayıt edeceğimi yazmadın!**').catch(console.error);
    user.addRole("753264864570376222");
    user.removeRole("753264866298429630")
 
    const embed = new Discord.RichEmbed()
        .setDescription(`${user} kullanıcısı ${yetkili} tarafından başarıyla kayıt edildi!`)
        .setFooter('Rol sistemi', client.user.avatarURL)
        .setColor("00b1e7")
        .setTimestamp()
    message.channel.send({ embed })
};
 
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['wlver'],
    permLevel: 0
};
 
exports.help = {
    name: 'wlver',
    description: 'İstediğiniz kişiden istediğiniz rolü alır.',
    usage: 'wlver [kullanıcı] [@rol]'
};