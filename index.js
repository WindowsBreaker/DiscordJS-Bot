const Discord = require("discord.js");
const client = new Discord.Client({ intents: 7753 });
const token = "bot token here lol";
const prefix = "idk a prefix like !";
/* Login */
client.login(token);
/* made by WindowsBreaker */
client.on("messageCreate", m => {
  if(m.content === "ping") {
    return m.channel.send(`pong! ${client.ws.ping}ms.`)
  }
});

/* Command template (+ prefix) 

client.on("messageCreate", m => {
  if(m.content === prefix + "ping") {
    return m.channel.send(`pong! ${client.ws.ping}ms.`)
  }
});

*/
