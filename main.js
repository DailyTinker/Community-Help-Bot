const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+";

client.on('ready', ()=>{
    console.log("Helper is online");
})    

client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;

    if(message.content.startsWith(prefix + "Ban")){
        let memberToBan = message.mentions.members.first();
        let banReason = message.content.split(" ").slice(1);


        if(!banReason[1]){
            message.reply("You have not specified a ban reason.");
            return;
        }
        if(!memberToBan){
            message.reply("You have not mentioned anyone to ban.");
            return;
        }
        if(message.guild.members.cache.find(memberToBan.id)){
            memberToBan.ban(banReason);
            message.reply("Banned The User");
            return;
        }else{
            message.reply("Error.");
            return;
        }
        
    }    

    if(message.content.startsWith(prefix + "Socials")){
         message.channel.send("Socials");
         message.reply(" Go follow Dailytinkers Socials here Https://linktr.ee/belovedaudioedits");

    }
    
    

    if(message.content.startsWith(prefix + "help")){
        message.channel.send("Check PM");
        message.author.send("Hello this is my help command!");
    }
    
    if(message.content.startsWith(prefix +"prune")){
        let args = message.content.split(" ").slice(1);
        let author = message.member;
         if(!message.member.roles.cache.has("761448574709792778"))
         return;
        let role = message.guild.roles.cache.find(roles => 'name', "Gamer Mods");
            if(!args[0]){
                message.delete();
                message.author.send("No arguments given.");
                return;
            }
            if(args[0] > 100){
                message.delete();
                message.author.send("maximum is 100 messages at once.");
                return;
            }
    
            if(isNaN(args[0]))
    
            message.delete();
            message.channel.bulkDelete(args[0]);
            message.author.send({embed:{
                color: 0x00fff2,
                description: "Done, I deleted " + args [ 0 ]  +  " Messages."
            }});
            return;
        }
    }

)


client.login('NzY2OTQ3ODkyOTc1NTAxMzEy.X4qx4g.kq2hz0ZhuvuumvbPRFQjecwUn8k');
