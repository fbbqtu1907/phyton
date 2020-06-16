const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("I don't think you have enough privileges to use this command.");  
  
let user = message.mentions.users.first() || message.guild.members.get(args[0])
  
let reason = args.slice(1).join(' ');
  
if(!user) return message.channel.send('you need to specify a user or id.')
 
if(user.id === message.author.id) return message.channel.send('you cannot kick yourself.')    
let s;
if(reason) s = reason
else s = 'no reason specified.'  
  

  if(user.id === "646341241268600836") return message.channel.send("I can't punish myself") 
  if(message.guild.owner.id !== message.author.id) {
  if(message.guild.members.get(message.author.id).highestRole.position < message.guild.members.get(user.id).highestRole.position) return message.channel.send("Looks like the person you're trying to kick to has higher authority than you.")
}
message.delete()  
if(user.bot) {
  
 message.channel.send("Bot **"+user+"** has been kicked from server.")
message.guild.member(user).kick(s);
  return

}
  
  
  
 
  
  message.channel.send(user + ' Kicked by,**'+message.member.user.username+'** \n\n Reason: ```'+s+'```')
 
  
let banned = new Discord.RichEmbed()
.setTitle('You Kicked!')
.setDescription('You are kicked from the server..')
.addBlankField()
.addField('Server Name:', '» **'+message.guild.name+'**')
.addField('Server Owner:', '» **'+message.guild.owner+'**')
.addBlankField()
.addField('Moderator:', '» **'+message.member.user.username+'**')
.addField('Reason:', '» **'+s+'**')
.setColor('BLUE')  
.setThumbnail(client.users.get(user.id).avatarURL)
.setFooter('Jendisa', client.user.avatarURL)
await user.send(banned) 


  message.guild.member(user).kick(s)
  
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['at'], 
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'kick', 
  usage: 'kick'
};
