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



const automsg = ['**Welcome to The Miracle**', '``Welcome to The Miracle``', '**Welcome to The Miracle+** ', '**Welcome to The Miracle-** ', '__Welcome to The Miracle__', 'Welcome to The Miracle^.^', 'Welcome to The Miracle'];
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



client.on('ready', () => {
        console.log('By !EtWrk.');
      console.log('By !EtWrk.');
    console.log('By !EtWrk.');
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`!A`,"")
client.user.setStatus("dnd")
});




   
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
