const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("544248786822758410")
setInterval(function() {
channel.send(`اللهم صلي وسلم وبارك على نبينا محمد`);
}, 30)
})

client.login(process.env.BOT_TOKEN);