const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const client = new Discord.Client();
/////////////////////////


//////////////////////////////////////////////////////////////////////
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
console.log(`[M] ${client.users.size}`)
    client.user.setStatus("dnd")
});






client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const automsg = ['**Welcome to The Miracle**', '``Welcome to The Miracle``', 'Welcome to The Miracle :ultrafastpartyparrot: ', 'Welcome to The Miracle :partyparrot: ', '__Welcome to The Miracle__', 'Welcome to The Miracle^.^', 'Welcome to The Miracle'];
client.on('guildMemberAdd', member => {

if (member.guild.id === "426097965703233536") {
       var interval = setInterval(_ => {
           setTimeout(function() {
               client.channels.get("466232209582456833").send(automsg[Math.floor(Math.random() * automsg.length)])
           }, 20000)
          clearInterval(interval);
        });
    }
});



















const adminprefix = "A";
const devs = ['472052319006228509'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

});

   
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
