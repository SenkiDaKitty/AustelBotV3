const Discord = require("discord.js");
var client = new Discord.Client();
const ClientId = '479672416574898177';
var prefix = "A!";

const serverStats = {
  guildID: '439522665800138752',
  totalUsersID: '481578470502170624',
  memberCountID: '481580084105576468',
  botCountID: '481580212392427531'
};

client.on("ready", function () {
 //   client.user.setGame("", "https://www.twitch.tv/austelengine")
    console.log("AustelBot V3 - Connecté");
});

client.on('message', message => {
    
    var ping = client.ping;
    var member = message.member;
    var users = client.users.size;
    
    if (message.content === prefix + "ping"){
        if(ping <= 99) {
             var embed = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)
             .addField(`${Math.round(client.ping)} ms`, "Le robot a actuellement une bonne connexion.")
             .setColor("0x7cc576")
             .setFooter("AustelEngine, un produit de Nietsloh Inc. © Tous droits réservés. 2016-2018")
             message.channel.sendEmbed(embed);
        } else if(ping <= 200) {
             var embed = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)
             .addField(`${Math.round(client.ping)} ms`, "Le robot a une connexion moyenne.")
             .setColor("0xffe200")
             .setFooter("AustelEngine, un produit de Nietsloh Inc. © Tous droits réservés. 2016-2018")
             message.channel.sendEmbed(embed);
        } else if(ping <= 999) {
             var embed = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)
             .addField(`${Math.round(client.ping)} ms`, "Le robot a une mauvaise connexion.")
             .setColor("0xdb3328")
             .setFooter("AustelEngine, un produit de Nietsloh Inc. © Tous droits réservés. 2016-2018")
             message.channel.sendEmbed(embed);
        }
    }
    if (message.content === prefix + "users"){
         if(users <= 100) {
             var embed = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)
             .addField(users + " membres", "Le Discord a actuellement moins de 100 membres.")
             .setColor("0xdb3328")
             .setFooter("AustelEngine, un produit de Nietsloh Inc. © Tous droits réservés. 2016-2018")
             message.channel.sendEmbed(embed);
        } else if(users <= 200) {
             var embed = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)
             .addField(users + " membres", "Le Discord a actuellement 200 membres et moins.")
             .setColor("0x7cc576")
             .setFooter("AustelEngine, un produit de Nietsloh Inc. © Tous droits réservés. 2016-2018")
             message.channel.sendEmbed(embed);
        } else if(users >= 201) {
             var embed = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)
             .addField(users + " membres", "Le Discord a actuellement plus de 200 membres !")
             .setColor("0xffe200")
             .setFooter("AustelEngine, un produit de Nietsloh Inc. © Tous droits réservés. 2016-2018")
             message.channel.sendEmbed(embed);
        }
    }
  
      if (message.content === prefix + "invite"){
            var embed = new Discord.RichEmbed()
           .setAuthor(message.author.username, message.author.avatarURL)
           .addField("Voici un lien d'invitation", "https://discord.gg/mF9tEaW")
           .setColor("0x000ff")
           .setFooter("AustelEngine, un produit de Nietsloh Inc. © Tous droits réservés. 2016-2018")
           message.channel.sendEmbed(embed);
     }
});

client.login(process.env.TOKEN);
