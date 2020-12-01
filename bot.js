const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzgxNzMxMTA2NjA1MTA1MTYz.X8B50w.N-oApxo-4abb03vRQDxaGdUgJyQ);
