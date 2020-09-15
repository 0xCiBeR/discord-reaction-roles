/*
    Copyright https://github.com/ciber96
    All rights reserved
*/

const discord = require('discord.js');
const client = new discord.Client({
    partials: ['MESSAGE', 'REACTION']
});
const config = require('./config/config.json');

client.login(config.TOKEN);

client.on('ready', () => {
    console.log(client.user.tag + " has logged in.");
});

// On Message Reaction Add event
client.on('messageReactionAdd', async (reaction, user) => {
    
    let applyRole = async () => {
        let emojiName = reaction.emoji.name;
        let role = reaction.message.guild.roles.cache.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.cache.find(member => member.id === user.id);
        try {
            if(role && member) {
                console.log("Role and member found.");
                await member.roles.add(role);
                console.log("Done.");
            }
        }
        catch(err) {
            console.log(err);
        }
    }
    if(reaction.message.partial)
    {
        try {
            let msg = await reaction.message.fetch(); 
            console.log(msg.id);
            if(msg.id === config.MESSAGE_ID)
            {
                console.log("Cached")
                applyRole();
            }
        }
        catch(err) {
            console.log(err);
        }
    }
    else 
    {
        console.log("Not a partial.");
        if(reaction.message.id === config.MESSAGE_ID) {
            console.log(true);
            applyRole();
        }
    }
});

// On Message Reaction Remove event
client.on('messageReactionRemove', async (reaction, user) => {
    let removeRole = async () => {
        let emojiName = reaction.emoji.name;
        let role = reaction.message.guild.roles.cache.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.cache.find(member => member.id === user.id);
        try {
            if(role && member) {
                console.log("Role and member found.");
                await member.roles.remove(role);
                console.log("Done.");
            }
        }
        catch(err) {
            console.log(err);
        }
    }
    if(reaction.message.partial)
    {
        try {
            let msg = await reaction.message.fetch(); 
            console.log(msg.id);
            if(msg.id === config.MESSAGE_ID)
            {
                console.log("Cached")
                removeRole();
            }
        }
        catch(err) {
            console.log(err);
        }
    }
    else 
    {
        console.log("Not a partial.");
        if(reaction.message.id === config.MESSAGE_ID) {
            console.log(true);
            removeRole();
        }
    }
})
