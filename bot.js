const Discord = require("discord.js");
const client = new Discord.Client();
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const pirse= member.guild.channels.get("إيدي الروم حق السيرفر الي ترحب فيه");
if(!pirse) return;
if(pirse) {
setTimeout(() => pirse.send(`رسالة الولكمة هنآ`), 4000)        
}
});

bot.login(process.env.BOT_TOKEN);// لا تغير فيها شيء