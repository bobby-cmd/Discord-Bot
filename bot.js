var Discord = require('discord.io');

var logger = require('winston');

var auth = require('./auth.json');

// Configure logger settings

logger.remove(logger.transports.Console);

logger.add(new logger.transports.Console, {

colorize: true
});

logger.level = 'debug';

// Initialize Discord Bot

var bot = new Discord.Client({

token: auth.token,

autorun: true

});

bot.on('ready', function (evt) {

logger.info('Connected');

logger.info('Logged in as: ');

logger.info(bot.username + ' - (' + bot.id + ')');
});



bot.on('message', function (user, userID, channelID, message, evt) {


// Our bot needs to know if it will execute a command

// It will listen for messages that will start with `!`

if (message.substring(0, 1) == '!') {

    var args = message.substring(1).split(' ');

    var cmd = args[0];


    args = args.splice(1);

    switch(cmd) {

        // !song

        case 'song':

            bot.sendMessage({

                to: channelID,

                message: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

            });

        break;

        //!pussy

        case "pussy":

                bot.sendMessage({
                    
                    to: channelID,

                    message: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/thumbs/800x531/142774.jpg'

                });

        break;

        //!ping

        case "ping":
            
                bot.sendMessage({

                    to: channelID,

                    message: 'You fooking poosy cog adbawsl!'

                })

        break;

        //!help

        case "help":

                bot.sendMessage({

                    to: channelID,

                    message: 'The commands that are available  are !ping, !pussy, !song, !riggy, !math.'

                })

        break;   
        
        //!math

        case "math":

                var math = 0

                mathNum = 9 + 10

                bot.sendMessage({

                    to: channelID,

                    message: "You think 9 + 10 is 21? No it is actually " + mathNum + "."

                })
        break;

        //!riggy

        case "riggy":
                
                bot.editNickname({

                    to:userID,

                    message:"ahahahhahah"
                })

                bot.sendMessage({

                    to: channelID,

                    message: "fookin dumas"

                })
        break;       

        // Just add any case commands if you want to..

     }

 }
 
});