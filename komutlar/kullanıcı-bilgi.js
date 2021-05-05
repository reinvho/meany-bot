const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();
//pepoV
exports.run = async (bot, msg, args) => {
//pepoV
        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
//pepoV
        let user = msg.mentions.users.first() || msg.author;
//pepoV
        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL;
        userinfo.id = user.id;
        userinfo.od1 = msg.guild.members.cache.get(user.id).user.presence.game || "Oynadığı Bir Oyun Yok."
        userinfo.status = user.presence.status.toString()
//pepoV
        .replace("dnd", `Çevrimdışı`)
        .replace("online", `Çevrimiçi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Rahatsız Etmeyin`)
        userinfo.bot = user.bot.toString()
        .replace("false", `<a:red:752466107587100682> Hayır`)
        .replace("true", `<a:pvok4:752466104156422187> Evet`)
//pepoV
        userinfo.sonmesaj = user.lastMessage || "Son Yazılan Mesaj Bulunamadı." || "Son Yazılan Mesaj Gösterilemedi."
//pepoV
        userinfo.dctarih = moment.utc(msg.guild.members.cache.get(user.id).user.createdAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
//pepoV
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
//pepoV
        userinfo.dctarihkatilma = moment.utc(msg.guild.members.cache.get(user.id).joinedAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
//pepoV
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
//pepoV
        const uembed = new Discord.MessageEmbed()
//pepoV
        .setTitle(user.tag)
        .addField(`<:peeposadblanket:781220731128119376> Şu Anda Oynadığı Oyun :`, userinfo.od1, false)
        .addField(`<:peepoCool:781220726501277746> Durum :`, userinfo.status, false)
        .setThumbnail(`${user.avatarURL()}`)
        .setColor('#54a01c')
        .addField(`<:peepov2:780802109268033537> Katılım Tarihi (Sunucu) :`, userinfo.dctarihkatilma, false)
        .addField(`<:peepoPolice:781441831912734740> Katılım Tarihi (Discord) :`, userinfo.dctarih, false)
        .addField(`<:peeposadblanket:781220731128119376> Kimlik :`, userinfo.id, true)
        .addField(`<:intihar:781220737192296468> Bot Mu? :`, userinfo.bot, true)
        .addField(`<:infknife:752466073915490304> Roller :`, `${msg.guild.members.cache.get(user.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') || "**Bu Kullanıcıda Hiç Rol Bulunmuyor!**"}`, false)
        .addField(`<:peepoamongus:781220724794589195> Son Gönderdiği Mesaj :`, userinfo.sonmesaj, false)
        .setFooter('peepoV', 'https://cdn.discordapp.com/attachments/789149003648204830/789182688749158472/782651819758190682.png');
        msg.channel.send(uembed)
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kullanıcı-bilgi','kullanıcı-bilgi','kullanıcıbilgi'],
  permLevel: 0
};//pepoV
exports.help = {
  name: 'kullanıcı-bilgi',
  description: 'Her Hangi Bir Kullanıcının Bilgilerine Bakarsınız.',
  usage: 'kullanıcı-bilgi'
};