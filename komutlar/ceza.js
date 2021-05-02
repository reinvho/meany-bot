const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

const client = new Discord.Client();
exports.run = async (client, msg, args) => { msg.delete(10000)
                                            if (msg.channel.type == "dm") return;
    let sunucu = client.guilds.get(ayarlar.sunucuid);                                        
    let kullanıcıbelirtembed = new Discord.RichEmbed()
  .addField(`⚠️  Hata`,`Bir kullanıcı etiketlemelisin! `)
  .setColor("RANDOM")
  .setFooter(msg.author.tag, msg.author.avatarURL)
  .setTimestamp()       
    
        let sebepbelirtembed = new Discord.RichEmbed()
  .addField(`⚠️  Hata`,`Bir sebep belirtmelisin! `)
  .setColor("RANDOM")
  .setFooter(msg.author.tag, msg.author.avatarURL)
  .setTimestamp()  
                                            
  let user = msg.guild.member(
    msg.mentions.users.first() || msg.guild.members.get(args[0])
  );
  if (!msg.member.roles.has("783396804037312553") && !msg.member.hasPermission("ADMINISTRATOR")) return msg.react("❌") [msg.delete(5000),msg.reply(`bu komutu kullanabilmek için **Mute Komut** yetkisine sahip olmalısın.`).then(msg => msg.delete(5000))]
  var mod = msg.author;
  var reason = args[1];
  let sebep = args.slice(2).join(" ");
  if (!user)
    return msg.channel.send({ embed: { description: ` <@${msg.author.id}> kullanıcı belirt.` } })
      .then(msg => msg.delete(5000));
  if (!msg.member.roles.has("783396804037312553") && !msg.member.hasPermission("ADMINISTRATOR")) return msg.react("❌") [msg.delete(5000),msg.reply(`bu komutu kullanabilmek için **Mute Komut** yetkisine sahip olmalısın.`).then(msg => msg.delete(5000))]
  if (!reason)
    return msg.channel.send(kullanıcıbelirtembed).then(m => m.delete(5000));;
  if (!sebep) return msg.channel.send(sebepbelirtembed).then(m => m.delete(5000));;
  let log = await db.fetch(`mlog_${msg.guild.id}`);
  if (!log)
    return msg.channel.send(
      "Ayarlı bir log kanalı yok. Ayarlamak için `.mute-log #kanal` !"
    );
  let mute = msg.guild.roles.find(r => r.name === "Cezalı");
  let mutetime = args[1];
  if (!mute) {
    mute = await msg.guild.createRole({
      name: "Cezalı",
      color: "0xFF0000",
      permissions: []
    });
    msg.guild.channels.forEach(async (channel, id) => {
      await channel.overwritePermissions(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
  }
let logKanali = "783423294757011486";
  await user.addRole(mute.id);
  //msg.channel.send(``);
  let mutezaman = args[1]
    .replace(`d`, " gün")
    .replace(`s`, " saniye")
    .replace(`h`, " saat")
    .replace(`m`, " dakika")
    .replace(`w`, " hafta");
  msg.react("✅");
  db.set(`muteli_${msg.guild.id + user.id}`, "muteli");
  db.set(`süre_${msg.mentions.users.first().id + msg.guild.id}`, mutetime);
 
  const moment = require('moment-timezone'); 
  moment.locale("tr");
  client.channels.get(logKanali).send({embed: {
    color: 0xFF0000,
  
thumbnail: {
      "url": "https://media.discordapp.net/attachments/781864922807140352/783384221225058324/VIST-LOGO.png"
    },
    fields: [{
        name: "• Cezalı Üye: ",
        value: `${msg.mentions.users.first()} (\`${msg.mentions.users.first().tag}\` - \`${msg.mentions.users.first().id}\`) `
      },
      {
        name: "• Yetkili Kişi:" ,
        value: `${msg.author} (\`${msg.author.tag}\` - \` ${msg.author.id}\`) `
      },
      {
        name: "• Cezalandırılma Tarihi:",
        value: ` \`${moment().tz("Europe/Istanbul").format('lll')}\` `
      },
      {
        name: "• Ceza Sebep:",
        value: ` \`${sebep}\` `
      },
      {
        name: "• Cezalandırılma Süresi:",
        value: ` \`${mutezaman}\` `
      }
    ],
   footer: {
      text: "© VistRP"
    }
  }
   
                                       });

  setTimeout(function() {
    db.delete(`muteli_${msg.guild.id + user.id}`);
    db.delete(`süre_${msg.mentions.users.first().id + msg.guild.id}`, mutetime);
    user.removeRole(mute.id);
    msg.channel.send({embed: { description: ` <@${user.id}> mute süresi dolduğu için otomatik olarak kaldırıldı.`}}).then(m => m.delete(13000));;
  }, ms(mutetime));
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ceza"],
  permLevel: 0
};

exports.help = {
  name: "ceza",
  description: "Kullanıcıyı chat kanallarında susturur.",
  usage: "ceza"
};
