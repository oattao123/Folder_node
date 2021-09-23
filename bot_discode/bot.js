const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('message' , msg => {
    if(msg.content === "Hello"){
         msg.reply('Hello, My bro');
         msg.channel.send("Hello Y'all :D");
         msg.channel.send("My Bot's message", {files: ["https://s.isanook.com/jo/0/ud/486/2432089/joyredvelvetsn.jpg"]});
    }
});
client.on('ready' , () => {
    console.log('Logged in as ${client.user.tag}!')
});

client.login(auth.token);