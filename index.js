const discord = require('discord.js');
const client = new discord.Client();
var prefix = "&";
var emoji = "´<:bleu:511205478953517067>´"
var emoji = "´<a:Flche:524323139275194398>´"
var emoji = "´<a:BlobRave:538031647782600710>´"
var emoji = "´<a:AppJedi:528276151521771522>´"
var emoji = "´<a:discomapez:528286173878026251>´"
var emoji = "´<a:Coin:546720303695527947>´"

client.login('NTQxNjU1OTgwMDk0NzgzNTEw.DzyBWg.dkQMs5miuB6A9jIsJHWKWIUEPvQ');

client.on("guildMemberAdd", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`**[+]** ***${member.user} a rejoint le serveur***`).catch(console.error);
});

client.login('NTQxNjU1OTgwMDk0NzgzNTEw.DzyBWg.dkQMs5miuB6A9jIsJHWKWIUEPvQ');

client.on('message',message =>{
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLocaleLowerCase() === prefix + 'kick'){
     if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(":x: **Vous n'avez pas les permissions requises pour effectuer cette commande**")
     let member = message.mentions.members.first()
     if (!member) return message.channel.send(":x:**Veuillez mentionner un utilisateur**")
     if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("je ne peux pas kick cet utilisateur :x:")
     if (!member.kickable) return message.channel.send(":x:**Je ne peux pas kick cet utilisateur**")
     member.kick()
     message.channel.send(":white_check_mark:**" +member.user.username + '** a été kick ')
  }
});
client.on('message',message =>{
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLocaleLowerCase() === prefix + 'ban'){
     if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(":x:**Vous n'avez pas les permissions requises pour effectuer cette commande** ")
     let member = message.mentions.members.first()
     if (!member) return message.channel.send(":x: **Veuillez mentionner un utilisateur** ")
     if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
     if (!member.bannable) return message.channel.send(":x:**Je ne peux pas bannir cet utilisateur!**:")
     message.guild.ban(member, {days: 7})
     message.channel.send(":white_check_mark: **"+member.user.username + '** a été banni ')
  }
});
const { Client, RichEmbed } = require('discord.js');

client.on('ready', () => {
  console.log('I am ready!');
});
var emoji = "´<a:Fleche_rainbow:533384294207586315>´"
client.on('message', message => {
  if (message.content === '&help') {
    const embed = new RichEmbed()
      .setTitle('Menu aide')
      .setColor(0xFF0000)
      .setThumbnail('https://tse2.mm.bing.net/th?id=OIP.qwLN3uZytANcdQ5oQMeVZAHaHa&pid=15.1&P=0&w=300&h=300')
      .setDescription('**<:bleu:511205478953517067> commandes disponibles:**')
      .addField(":hammer_pick: **&helpmod** " , "<a:Flche:524323139275194398>Affiche les commandes de modération ")
      .addField(":dart: **&helpfun** " , "<a:Flche:524323139275194398>Affiche les commandes fun et utiles")
      .addField(":video_game: **&helpgame** " , "<a:Flche:524323139275194398>Affiche les commandes de jeux")
      .addField(":tv: **&invite** " , "<a:Flche:524323139275194398>Permet d'inviter le bot sur votre serveur ")
      .setFooter('bot creé par Unvaival VYOXIZ#0427')

      message.channel.send(embed);
  }
});

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '&helpmod') {
      const embed = new RichEmbed()
    .setTitle('Aide Modération')
    .setDescription('Réservé au staff')
    .setColor(0xFF0000)
    .setThumbnail('https://tse3.mm.bing.net/th?id=OIP.bVZj0JuYcCiv_YGYvusAQAHaHa&pid=15.1&P=0&w=300&h=300')
    .addField(":rocket: **&kick** :" , "expulse l'utilisateur mentionné")
    .addField(":hammer: **&ban** :" , "ban l'utilisateur mentionné ")
    .addField("<a:AppJedi:528276151521771522> **&clear** :" , "supprime le nombre de messages souhaité (limite : 100)")
    .setFooter("UNVL8 | Dev par Vyoxiz")

    message.channel.send(embed);
  }
});

client.on('message', message => {
  if (message.content === '&credits') {
    message.reply('**bot créé par Unvaival VYOXIZ #0427**');
  }
});
client.on('ready', () => {
  client.user.setActivity("&help | UNVL8")

})

client.on('message', message => {
  if (message.content === "&helpfun") {
      const embed = new RichEmbed()
    .setTitle('Aide Fun/Utilitaires')
    .setThumbnail('https://tse2.mm.bing.net/th?id=OIP.rVdNPTFu9Yxe5Gy7xcZrAwAAAA&pid=15.1&P=0&w=286&h=186')
    .setColor(0xFF0000)
    .setDescription('Préfixe : `&`')
    .addField("<a:BlobRave:538031647782600710>**Commandes fun** :" , "`avatar` | `say` | `8ball` | `de [nombre , /]`")
    .setFooter('UNVL8')

    message.channel.send(embed);
  }
});
client.on('message', message => {
if (message.content.startsWith('&say')) {
  var msg = message.content.replace("&say", "");
  message.delete();
  message.channel.sendMessage(msg);
  }
  if (message.content.startsWith('&8ball')) {
    if ( message.content.endsWith('?')) {
      var answers = [
      'peut être', 'non.', 'Je sais pas', 'Balec',
      'il y a des chances...', 'Probablement', 'Je pense pas', 'sûrement',
      'jvais pas répondre x)', 'jamais !', 'NOOPE!', 'oui',];
      var answer = answers[Math.floor(Math.random() * answers.length)];
    } else {
      message.channel.sendMessage(':x: La question est pas valide : pensez bien a mettre le "?"')
    }
  message.channel.sendMessage(answer);
}
});
var emoji = "´<a:nice:538033650030346240>´"
client.on('message', message => {
  if (message.content === '&test') {
    message.reply("<a:Coin:546720303695527947>");
  }
});
client.on("message", message => {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + "clear") {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(":x: Vous n'avez pas la permission d'utiliser cette commande")
      let count = args[1]
      if (!count) return message.channel.send(":x: Veuillez indiquer un nombre de messages à supprimer")
      if (isNaN(count)) return message.channel.send(":x: Veuillez indiquer un nombre valide")
      if (count < 1 || count > 100) return message.channel.send(":x: Veuillez indiquer un nombre entre 1 et 100")
      message.channel.send("**Loading...**")
      message.delete();
      message.channel.send("***:white_check_mark: Les messages on été clear !***")
      message.delete();
            message.channel.bulkDelete(parseInt(count) + 1)
  }
})
client.on('message', message => {

    if (message.content.startsWith('&de')) {
      if ( message.content.endsWith('/')) {
        var answers = [
        ':game_die:numéro tiré : **1**', ':game_die:numéro tiré : **2**', ':game_die:numéro tiré : **3**', ':game_die:numéro tiré : **4**',
        ':game_die:numéro tiré : **5**', ':game_die:numéro tiré : **6**',];
        var answer = answers[Math.floor(Math.random() * answers.length)];
      } else {
        message.channel.sendMessage(':x:Faites la commande avec un numéro entre 1 et 6 finissant par un "/"')
      }
    message.channel.sendMessage(answer);
  }
  });

  client.on('ready', () => {
    console.log('I am ready!');
  });

  client.on('message', message => {
    if (message.content === '&avatar') {
      message.reply(message.author.avatarURL);
    }
  });

  client.on('message', message => {
    if (message.content === '&invite') {
      const embed = new RichEmbed()
      .setTittle('URL')
      .setColor(0xFF0000)
      .setThumbnail('https://tse1.mm.bing.net/th?id=OIP.1zcUk-kF5i4092yfr9xDjQAAAA&pid=15.1&P=0&w=300&h=300')
      .addField("Support :" ,"https://discord.gg/rh9ryjG")
      .addField("Inviter le bot :" ,"https://discordapp.com/api/oauth2/authorize?client_id=541655980094783510&permissions=0&scope=bot")
      .setFooter("Discord.js | UNVL8")
  
      message.channel.send(embed);
    }
  });
  