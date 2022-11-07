
const Discord = require('discord.js');
const bot = new Discord.Client();
const Prefix = "tib";
const settings = require("./settings.json");
const config = require("./defults")
const fs = require("fs");
const DBL = require("dblapi.js");
const dbl = new DBL( settings.DBL , bot);
const coins3 = require("./coins.json")
const dailyreset = require("./dailyresetamt.json")
const randomstring = require("randomstring");
var queuenum = 0
const YTDL = require("ytdl-core");
function Play(connection, message){
    var curservers = curserver[message.guild.id];
    //copy this under me and call it when vote skip runs
    var curserverdispatcher = connection.playStream(YTDL(curservers.queue[queuenum], {filter: "audioonly"}));
   // console.log(queuenum) 
    curserverdispatcher.on("end", function() {
            queuenum = queuenum + 1;
            if(queuenum > curservers.queue.size){
                queuenum = 0
                curserver[message.guild.id] = {
                    queue: []
                }                
                return connection.disconnect();
            } 
            Play(connection, message); 
     });
}
let cooldown1 = new Set();
let weekly = new Set();
let dailytime = new Set();
let votepep = new Set();
let dailysec = 86400;
let cdsecounds = 5;
var userava
var dailyresetamt
var swearshield
var decs
var servercount1;
var othercoins = 0
var curserver = global.servers = {};
var votingserver = global.servers = {};
var slowmo2
var personid
var debugen = 0




process.setMaxListeners(100);
bot.setMaxListeners(100);




bot.login(settings.token);

bot.on('ready', () => {
    bot.guilds.forEach(guild=>{
        servercount1=+ bot.guilds.size;
})
bot.user.setActivity(`tib help | Serving ${servercount1} servers!`);
bot.user.setStatus("online");
console.log(" _______ __   __ _______ ___ ______   _______ __    _ _______ _______ _______ ")
console.log("|       |  | |  |       |   |    _ | |       |  |  | |  _    |       |       |")
console.log("|_     _|  |_|  |    ___|   |   | || |   _   |   |_| | |_|   |   _   |_     _|")
console.log("  |   | |       |   |___|   |   |_||_|  | |  |       |       |  | |  | |   |  ")
console.log("  |   | |       |    ___|   |    __  |  |_|  |  _    |  _   ||  |_|  | |   |  ")
console.log("  |   | |   _   |   |___|   |   |  | |       | | |   | |_|   |       | |   |  ")
console.log("  |___| |__| |__|_______|___|___|  |_|_______|_|  |__|_______|_______| |___|  ")
console.log('launched');
bot.users.get("325658954560700416").send(" :white_check_mark:  I have started! :white_check_mark: ").catch(() => {
    return;
});


});

fs.writeFile(`./ownerspamact.json`, '{}', (err) => {
    if (err) console.log(err)
});

var fortunes = [
    "Yes",
    "No",
    "Maybe"
];

var coinpos = [
    "heads!",
    "tails!"


];

var gammbleresults = [
    "JACKPOT",
    "NORMAL",
    "nothing",
    "nothing",
    "nothing"
];
var clearnumber;


// misc commands
bot.on('message', (message) => {
    if(message.guild === null) return; 
    if(message.author.bot) return;

    let supports = JSON.parse(fs.readFileSync("./supportsave.json", "utf8"));
    let cooldowns = JSON.parse(fs.readFileSync("./cooldowns.json", "utf8"));
    let dailyresetamt2 = JSON.parse(fs.readFileSync("./dailyresetamt.json", "utf8"));
    let swearshield2 = JSON.parse(fs.readFileSync("./swearshield.json", "utf8"));
    let decs2 = JSON.parse(fs.readFileSync("./decs.json", "utf8"));
    let codes2 = require("./ownercodes.json", "utf8");
    let level2 = require("./levels.json", "utf8");
    let xp2 = require("./xp.json", "utf8");
    let xpmax2 = require("./xpmax.json", "utf8");
    let xprewards2 = require("./xprewards.json", "utf8");
    let badgebought = require("./badgebought.json", "utf8");
    let badgeprofile = require("./badgeprofile.json", "utf8");
     let can_manage_chans = message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES");
     let can_kick = message.channel.permissionsFor(bot.user).hasPermission("KICK_MEMBERS");
     let can_ban = message.channel.permissionsFor(bot.user).hasPermission("BAN_MEMBERS");
     let can_admin = message.channel.permissionsFor(bot.user).hasPermission("ADMINISTRATOR");

     if(message.author == null){
        return;
    }

    if(!badgebought[message.author.id]){
        badgebought[message.author.id] = {
            badgebought: " "
        }
    }

    if(!badgeprofile[message.author.id]){
        badgeprofile[message.author.id] = {
            badgeprofile: " "
        }
    }
    
    if(!codes2[message.guild.id]){
        codes2[message.guild.id] = {
            codes2: "NOCODE"
        }
    }

    if(!level2[message.author.id]){
        level2[message.author.id] = {
            level2: 0
        }
    }

    if(!xp2[message.author.id]){
        xp2[message.author.id] = {
            xp2: 0
        }
    }

    if(!xpmax2[message.author.id]){
        xpmax2[message.author.id] = {
            xpmax2: 100
        }
    }

    if(!xprewards2[message.author.id]){
        xprewards2[message.author.id] = {
            xprewards2: 50
        }
    }


    
    if(!votingserver[message.guild.id]){
        votingserver[message.guild.id] = {
            voting: 0
        }
    }
    var votingservers = votingserver[message.guild.id];

    if(!swearshield2[message.guild.id]){
        swearshield2[message.guild.id] = {
            swearshield2: config.swear
        };
    }



    if(!supports[message.guild.id]){
        supports[message.guild.id] = {
            supports: config.support
        };
    }

    if(!cooldowns[message.guild.id]){
        cooldowns[message.guild.id] = {
            cooldowns: config.cooldown2
        };
    }
    if(!cooldowns[message.guild.id]){
        cooldowns[message.guild.id] = {
            cooldowns: config.cooldown2
        };
    }

    if(!coins3[message.author.id]){
        coins3[message.author.id] = {
            coins3: config.coins
        };
    }

    if(!dailyresetamt2[message.author.id]){
        dailyresetamt2[message.author.id] = {
            dailyresetamt2: config.dailyreset
        }
    }

    if(!decs2[message.author.id]){
        decs2[message.author.id] = {
            decs2: config.decs
        }
    }

    


    const args = message.content.slice(Prefix.length).trim().split(/ +/g);

    let coinsamt = coins3[message.author.id].coins3;

     supportnot1 = supports[message.guild.id].supports
    cdsecounds = cooldowns[message.guild.id].cooldown
    dailyresetamt = dailyresetamt2[message.author.id].dailyresetamt2
    swearshield = swearshield2[message.guild.id].swearshield2
    let decs = decs2[message.author.id].decs2
    let code = codes2[message.guild.id].codes2
    let level = level2[message.author.id].level2
    let xp = xp2[message.author.id].xp2
    let xpmax = xpmax2[message.author.id].xpmax2
    let xpreward = xprewards2[message.author.id].xprewards2
    let badgebought2 = badgebought[message.author.id].badgebought
    let badgeprofile2 = badgeprofile[message.author.id].badgeprofile


            
    //xp

        xp = xp + 10; 
        xp2[message.author.id] = {
            xp2: xp
        };
        fs.writeFile("./xp.json", JSON.stringify(xp2), (err) => {
            if (err) console.log(err)
        })
        //xp level up
        if(xp == xpmax){
            level = level + 1;
            level2[message.author.id] = {
                level2: level
            };
            fs.writeFile("./levels.json", JSON.stringify(level2), (err) => {
                if (err) console.log(err)
            })
            xpmax = xpmax + 500;
    
            xpmax2[message.author.id] = {
                xpmax2: xpmax
            };
            fs.writeFile("./xpmax.json", JSON.stringify(xpmax2), (err) => {
                if (err) console.log(err)
            })
            coinsamt = coinsamt + xpreward;
            coins3[message.author.id] = {
                coins3: coinsamt
            };
            fs.writeFile("./coins.json", JSON.stringify(coins3), (err) => {
                if (err) console.log(err)
            })
            if(message.guild.id == '264445053596991498' || message.guild.id == '387812458661937152' || message.guild.id == '446425626988249089' || message.guild.id == "110373943822540800" || message.guild.id == "446425626988249089") return;
            message.reply(`Congrats! you just leveled up to level **${level}** and got ${xpreward} coins!`)
            xpreward = xpreward + 100;
            xprewards2[message.author.id] = {
                xprewards2: xpreward
            };
            fs.writeFile("./xprewards.json", JSON.stringify(xprewards2), (err) => {
                if (err) console.log(err)
            })        
        }
    


    //command cooldown
    if(!message.content.startsWith("tib")) return;

    if(cooldown1.has(message.author.id)){
        return message.reply("You have to wait " + cdsecounds + " seconds between commands!");
    }

    if(!message.member.hasPermission("ADMINISTRATOR")){
        cooldown1.add(message.author.id);
    }
    
        setTimeout(() => {
            cooldown1.delete(message.author.id)
        }, cdsecounds * 1000)

        //music stuff

        //if(message.content == "tib voteskip"){
            //if(!message.guild.voiceConnection) return message.reply("Im not in a voice channel!!")
            //if(votepep.has(message.author.id)) return message.reply("You already voted!!")
            //use set
            //3 min timeout
            

       // }

       //if(message.content == "tib skip"){
         //  if(!message.guild.voiceConnection) return message.reply("I am not in a voice channel!")
           //if(!curserver[message.guild.id]){
            //curserver[message.guild.id] = {
              //  queue: []
            //}
        //}
          // var curservers = curserver[message.guild.id];
           //if(curservers.queue == "") return message.reply("There is nothing in the queue!")
           //message.member.voiceChannel.join()
           //.then(connection => {
            //queuenum = queuenum + 1
         //message.reply(`Skipped the song!`)
         //console.log(queuenum)
         //Play(connection, message);
     //})
       //}


        //Debug Mode (only for me)
        if(message.content.includes("tib debug")){
            if(!message.author.id=="325658954560700416") return console.log(`${message.author.username} has tried to use debug but was denied!`)
            if(!args[2]) return message.reply("Please state a function!")
            if(args[2]=="on"){
                if(debugen==1) return message.reply("Debug Mode has already been turned on!")
                    debugen == 1;
                message.reply("Debug mode is now turned on!");
            }
            if(args[2]=="off"){
                if(debugen==0)return message.reply("Debug mode is already off!")
                debugen == 0;
                message.reply("Debug Mode is now off!")
            }

        }




        if(message.content == "tib join"){
            if(message.member.voiceChannel){
                    message.member.voiceChannel.join()
                    message.reply("Joining.....")                
            }else{
                message.reply("You must be in a voice channel to summon me!")
            }
        }

        if(message.content == "tib leave"){
            if(message.guild.voiceConnection){
                message.guild.voiceConnection.disconnect();
                message.reply("Disconnecting...")
            }else{
                message.reply("I must be in a voice channel!")
            }
        }

        if(message.content.startsWith("tib play")){
            if(!message.member.voiceChannel) return message.reply("You have to be in a voice channel!")
            var curservers = curserver[message.guild.id];
            if(!curserver[message.guild.id]){
                curserver[message.guild.id] = {
                    queue: []
                }
            }
            if(curservers == undefined) return message.reply("You have to add a song first!")
            message.member.voiceChannel.join()
                  .then(connection => {
                message.reply(`Now playing the queue!`)
                Play(connection, message);
            })

        }

        if(message.content.startsWith("tib add")){
            if(!args[1]) return message.reply("What is the url of the song **from YouTube**?")
            if(!message.guild.voiceConnection) return message.reply("You have to summon me first with **tib join**!")
            if(!curserver[message.guild.id]){
                curserver[message.guild.id] = {
                    queue: []
                }
            }
                var curservers = curserver[message.guild.id];
                curservers.queue.push(args[1]);
                message.reply(`Added it to queue!`)
        }

        if(message.content == "tib queue"){
            if(!message.guild.voiceConnection) return message.reply("Im not in a voice channel!")
            if(!curserver[message.guild.id]){
                curserver[message.guild.id] = {
                    queue: []
                }
            }
            var curservers = curserver[message.guild.id];
            if(curservers.queue == "") return message.reply("There is nothing in the queue!")
            message.channel.send(curservers.queue)
        }

        if(message.content == "tib queueclear"){
            if(!message.guild.voiceConnection) return message.reply("Im not in a voice channel!")
            curserver[message.guild.id] = {
                queue: []
            }
            message.reply("Queue has now been cleared!")

        }

        //song info



        //shop crap
        if(message.content == "tib shop"){
            shopinfo = new Discord.RichEmbed()
            .setColor("#00FF00")
            .setTitle("Shop Info:")
            .setDescription("Welcome to TheIronBot's shop! \n\n Do `tib badgeshop` to see the badge shop \n\n  Do `tib item shop` to see item shop!")
            message.channel.send(shopinfo)

        }

        if(message.content == "tib itemshop"){
            shopem = new Discord.RichEmbed()
            .setColor("#00FF00")
            .setTitle(" Item Shop:")
            .setDescription("Welcome to TheIronBot's item shop, take a look around! \n\n To buy something do `tib shop (code)` \n\n Daily Skip, 950 coins : resets your daily coin timer | Code : dailyskip")
            .setFooter("To buy something do tib shop (code)");
            message.channel.send(shopem)
        }

        if(message.content == "tib badgeshop"){
            shopemup = new Discord.RichEmbed()
            .setColor("#00FF00")
            .setTitle("Badge Shop:")
            .setDescription("Welcome to TheIronBot's badge shop, take a look around! \n\n To buy something do `tib shop (code)`, all badges will have to be `enabled by doing tib (badge)` \n\n **Money Mouth** badge | :money_mouth: | 100 coins | Code : moneymouth \n\n **Heart Eyes badge** | :heart_eyes: | 100 coins | code : hearteyes \n\n **Video Game badge** | :video_game: | 100 coins | code : videogame")
            .setFooter("To buy something do tib shop (code)");
            message.channel.send(shopemup)

        }

        
    if(message.content == "tib shop dailyskip"){
        if(coinsamt < 950) return message.reply(" :no_entry: You do not have 950 coins! :no_entry: ")
        coinsamt = coinsamt - 950;
        dailyresetamt = dailyresetamt + 1;

        coins3[message.author.id] = {
            coins3: coinsamt
        };
        fs.writeFile("./coins.json", JSON.stringify(coins3), (err) => {
            if (err) console.log(err)
        })

        dailyresetamt2[message.author.id] = {
            dailyresetamt2: dailyresetamt
        };
        fs.writeFile("./dailyresetamt.json", JSON.stringify(dailyresetamt2), (err) => {
            if (err) console.log(err)
        })
        message.reply(` :white_check_mark:  You now have ${dailyresetamt} Daily Coin Skip/s! +1 Daily Coin Skip -950 coins :white_check_mark: `)
    }

    //Badge stuff

    if(message.content == "tib shop moneymouth"){
        if(coinsamt < 100) return message.reply(" :no_entry: You do not have 100 coins! :no_entry: ")
        if(badgebought2.includes(":money_mouth:")) return message.reply(":no_entry: You already have this badge silly! :no_entry:")
        coinsamt = coinsamt - 100;
        coins3[message.author.id] = {
            coins3: coinsamt
        };
        fs.writeFile("./coins.json", JSON.stringify(coins3), (err) => {
            if (err) console.log(err)
        })
        badgebought2 = badgebought2 + ":money_mouth: "
        badgebought[message.author.id] = {
            badgebought: badgebought2
        };
        fs.writeFile("./badgebought.json", JSON.stringify(badgebought), (err) => {
            if (err) console.log(err)
        })
        message.reply(" :white_check_mark: You now have the Money Mouth badge, activate it by doing `tib moneymouth`! -100 coins :white_check_mark: ")

    }

    if(message.content == "tib moneymouth"){
        if(!badgebought2.includes(":money_mouth:")) return message.reply(":no_entry: Please buy the money mouth badge first! :no_entry:")
        if(badgeprofile2.includes(":money_mouth:")) return message.reply(":no_entry: You already have this badge activated, please wipe them all by doing `tib badgewipe` to add it again! :no_entry:")
        badgeprofile2 = badgeprofile2 + ":money_mouth:"
        badgeprofile[message.author.id] = {
            badgeprofile: badgeprofile2
        };
        fs.writeFile("./badgeprofile.json", JSON.stringify(badgeprofile), (err) => {
            if (err) console.log(err)
        })
        message.reply(' :white_check_mark: Your money mouth badge is now activated!  :white_check_mark: ');
        
    }

    if(message.content == "tib shop hearteyes"){
        if(coinsamt < 100) return message.reply(" :no_entry: You do not have 100 coins! :no_entry: ")
        if(badgebought2.includes(":heart_eyes:")) return message.reply(" :no_entry: You already have this badge silly! :no_entry: ")
        coinsamt = coinsamt - 100;
        coins3[message.author.id] = {
            coins3: coinsamt
        };
        fs.writeFile("./coins.json", JSON.stringify(coins3), (err) => {
            if (err) console.log(err)
        })
        badgebought2 = badgebought2 + ":heart_eyes: "
        badgebought[message.author.id] = {
            badgebought: badgebought2
        };
        fs.writeFile("./badgebought.json", JSON.stringify(badgebought), (err) => {
            if (err) console.log(err)
        })
        message.reply(" :white_check_mark: You now have the Heart Eyes badge, activate it by doing `tib hearteyes`! -100 coins  :white_check_mark: ")

    }

    if(message.content == "tib hearteyes"){
        if(!badgebought2.includes(":heart_eyes:")) return message.reply(" :no_entry: Please buy the heart eyes badge first! :no_entry:")
        if(badgeprofile2.includes(":heart_eyes:")) return message.reply(" :no_entry: You already have this badge activated, please wipe them all by doing `tib badgewipe` to add it again! :no_entry:")
        badgeprofile2 = badgeprofile2 + ":heart_eyes: "
        badgeprofile[message.author.id] = {
            badgeprofile: badgeprofile2
        };
        fs.writeFile("./badgeprofile.json", JSON.stringify(badgeprofile), (err) => {
            if (err) console.log(err)
        })
        message.reply('  :white_check_mark:  Your heart eyes badge is now activated! :white_check_mark:');
    }

    if(message.content == "tib shop videogame"){
        if(coinsamt < 100) return message.reply(" :no_entry: You do not have 100 coins! :no_entry: ")
        if(badgebought2.includes(":video_game:")) return message.reply(" :no_entry: You already have this badge silly! :no_entry: ")
        coinsamt = coinsamt - 100;
        coins3[message.author.id] = {
            coins3: coinsamt
        };
        fs.writeFile("./coins.json", JSON.stringify(coins3), (err) => {
            if (err) console.log(err)
        })
        badgebought2 = badgebought2 + ":video_game: "
        badgebought[message.author.id] = {
            badgebought: badgebought2
        };
        fs.writeFile("./badgebought.json", JSON.stringify(badgebought), (err) => {
            if (err) console.log(err)
        })
        message.reply(" :white_check_mark:  You now have the Video Game badge, activate it by doing `tib videogame`! -100 coins :white_check_mark:  ")

    }

    if(message.content == "tib videogame"){
        if(!badgebought2.includes(":video_game:")) return message.reply(" :no_entry: Please buy the video game badge first! :no_entry: ")
        if(badgeprofile2.includes(":video_game:")) return message.reply(" :no_entry: You already have this badge activated, please wipe them all by doing `tib badgewipe` to add it again! :no_entry: ")
        badgeprofile2 = badgeprofile2 + ":video_game: "
        badgeprofile[message.author.id] = {
            badgeprofile: badgeprofile2
        };
        fs.writeFile("./badgeprofile.json", JSON.stringify(badgeprofile), (err) => {
            if (err) console.log(err)
        })
        message.reply(' :white_check_mark:  Your video game badge is now activated! :white_check_mark:  ');
    }


    if(message.content == "tib badgewipe"){
        badgeprofile2 = " "
        badgeprofile[message.author.id] = {
            badgeprofile: badgeprofile2
        };
        fs.writeFile("./badgeprofile.json", JSON.stringify(badgeprofile), (err) => {
            if (err) console.log(err)
        })
        message.reply(" :white_check_mark:  You have now cleared all badges from your profile, to reactivate them do `tib (badge)!` :white_check_mark:  ");

    }

        //MONEY STUFF

        if(message.content.startsWith("tib profile")){      
                    userava = message.author.avatarURL;
                    if(userava == null){
                        let proemd = new Discord.RichEmbed()
                        .setColor("#42b3f4")
                        .setThumbnail(message.author.defaultAvatarURL)
                      .setTitle(`${message.author.username}'s profile!`)
                      .setDescription(`\n\n ${badgeprofile2} \n\n Descrption:\n ${decs} \n\n :money_with_wings: **Coins: ${coinsamt}** \n\n **Level: ${level}** \n **XP: ${xp}**/**${xpmax}** \n\n  Daily Coin Skip: ${dailyresetamt}`)
                      .setFooter("This is all VIRTUAL CURRENCY, it is NOT REAL money. ")
                      message.channel.send(proemd);
                      return
                    }

                       
                let proemd = new Discord.RichEmbed()
                .setColor("#42b3f4")
              .setThumbnail(message.author.avatarURL)
              .setTitle(`${message.author.username}'s profile!`)
              .setDescription(`\n\n ${badgeprofile2} \n\n Descrption:\n ${decs} \n\n :money_with_wings: **Coins: ${coinsamt}** \n\n **Level: ${level}** \n **XP: ${xp}**/**${xpmax}** \n\n  Daily Coin Skip: ${dailyresetamt}`)
              .setFooter("This is all VIRTUAL CURRENCY, it is NOT REAL money. ")
        
              message.channel.send(proemd);
            }
        
           //lucky number
           {
               13
           };
    

        if(message.content == "tib cheat"){
            if(debugen==0) return
            if(!message.author.id == "325658954560700416") return
            coinsamt = coinsamt + 50000

            coins3[message.author.id] = {
                coins3: coinsamt
            };
            fs.writeFile("./coins.json", JSON.stringify(coins3), (err) => {
                if (err) console.log(err)
            });
        }


        if(message.content == "tib daily"){
            if(dailytime.has(message.author.id)){
                return message.reply("You already have received your daily coins!");
            }
            coinsamt = coinsamt + 150;
            message.reply(" :money_with_wings:  You have now got your daily money! :money_with_wings:  +100 coins! :money_with_wings: ")
            coins3[message.author.id] = {
                coins3: coinsamt
            };
            fs.writeFile("./coins.json", JSON.stringify(coins3), (err) => {
                if (err) console.log(err)
            });
            dailytime.add(message.member.id)

            setTimeout(() => {
                dailytime.delete(message.member.id)
            }, dailysec * 1000);
        }

        if(message.content.startsWith("tib descchange")){
            if(100 > coinsamt) return message.reply("You do not have 100 coins!")
            if(message.content == "tib descchange") return message.reply("Please put a description after `tib descchange`")
            coinsamt = coinsamt - 100;
            decs = args[1];
            coins3[message.author.id] = {
                coins3: coinsamt
            };
            fs.writeFile("./coins.json", JSON.stringify(coins3), (err) => {
                if (err) console.log(err)
            });
            decs2[message.author.id] = {
                decs2: decs
            };
            fs.writeFile("./decs.json", JSON.stringify(decs2), (err) => {
                if (err) console.log(err)
            })

            message.reply("You have now changed your description! -100 coins")
      }



        //shop items
     
       

        if(message.content == "tib dailyskip"){
            if(dailyresetamt == 0) return message.reply("You do not have enough Daily Coin Skips!")
            if(dailytime.has(message.author.id)){
                dailyresetamt = dailyresetamt - 1
                dailyresetamt2[message.author.id] = {
                    dailyresetamt2: dailyresetamt
                };
                fs.writeFile("./dailyresetamt.json", JSON.stringify(dailyresetamt2), (err) => {
                    if (err) console.log(err)
                });
                dailytime.delete(message.author.id)
                message.reply("Your daily coin timer has now been reset! -1 Daily Coin Skip")

            }else{
                message.reply("You have not got your daily coins yet!")
            }

        }
        
    //helpful
    if(message.content == 'tib help'){
        let helpmenu = new Discord.RichEmbed()
        .setColor("#42b3f4")
        .setTitle(" Help:")
        .setDescription("**tib help music**, music help \n\n **tib ownercodereset** to reset the owner code \n\n **tib 8ball [question]**, for The Magic 8 Ball \n\n **tib ping** for pong \n\n **tib rolladie** to roll a 6 sided die \n\n **tib flipacoin** to flip a coin \n\n **tib support** for support \n\n **tib addsupport** to add a support person \n\n **tib removesupport** to remove a support person \n\n **tib clear [number]** to clear a number of messages \n\n **tib ban [@person] (optional reason)** to ban a person \n\n **tib kick [@person] (optional reason)** to kick a person \n\n **tib dm [@person] [message]** DMS the person you set with the message you set")

        let helpmenu2 = new Discord.RichEmbed()
        .setColor("#42b3f4")
        .setTitle(" Help Page 2:")
        .setDescription("**tib commandcooldown [number]** to set the command cooldown (default is 5 sec) \n\n **tib profile** to see your profile \n\n **tib daily** to get your daily coins \n\n **tib shop** to see the shop \n\n **tib swearshieldon (owner code)** To turn on the Swear Shield \n\n **tib swearshieldoff (owner code)** To turn off the Swear Shield \n\n **tib descchange** to change description (100 coins) \n\n **tib gamble** Uses 300 coins and you can get the jackpot,normal,or nothing \n\n **tib give [@someone] amount** to give said person said amount of coins from your virtual wallet \n\n **tib weekly** to get your weekly coins \n\n **tib videogame** activates videogame badge \n\n **tib hearteyes** activates hearteyes badge  \n\n **tib moneymouth** activates moneymouth badge \n\n **tib badgewipe** clears all badges from your profile")
              
        message.channel.send(helpmenu)
        message.channel.send(helpmenu2)
        
    }

    if(message.content == "tib help music"){
        let helpmusic = new Discord.RichEmbed()
        .setColor("#42b3f4")
        .setTitle("Music help:")
        .setDescription(" **tib join** : bot joins voice channel \n\n **tib add [youtube url]** : adds youtube video to queue \n\n **tib queue** : views queue \n\n **tib  leave** : Leaves voice channel \n\n **tib play** : plays queue \n\n **tib queueclear** : clears the queue")
        message.channel.send(helpmusic);

    }

    //fun

    if(message.content == "tib ping"){

        message.reply(":ping_pong: pong " + "| Ping: " + Math.round(bot.ping) + "ms")
    }

    if(message.content == "tib severip"){
        message.reply("Minecraft Server IP: play.darksix.org")
    }

    if(message.content == "tib rolladie"){
        var die = Math.floor(Math.random() * 6) + 1;
        message.reply(" :game_die: you rolled a...." + die);
    }

    if(message.content == "tib flipacoin") {
        message.reply("You got...." + coinpos[Math.floor(Math.random() * coinpos.length)]);
       }

    if(message.content == "tib servers"){
        if(!message.author.id == "325658954560700416") return

	    let string1 = '';
            bot.guilds.forEach(guild=>{
            string1+= '**Server name: **'+ guild.name +'\n';
        })

        bot.guilds.forEach(guild=>{
            servercount1=+ bot.guilds.size;
    })

        let serverem = new Discord.RichEmbed()
        .setColor("#42b3f4")
        .setTitle("Servers:")
        .setDescription(string1 + '\n' + "Server Count: "+ servercount1)

        message.channel.send(serverem);
        }



        
            switch(args[0].toLocaleLowerCase()){
                case  "8ball":
                if(message.content.startsWith("tib")){
                    if(args[1]) {
                        message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
                    }else {
                        message.reply("please ask a question, use tib help if you need help");
                    }
                    break;
                }

        };

        if(message.content == "tib weekly"){
            if(weekly.has(message.author.id)) return message.reply("You have already recived your daily coins for this week!");
            coinsamt = coinsamt + 1000;
            coins3[message.author.id] = {
                coins3: coinsamt
            };
            fs.writeFile("./coins.json", JSON.stringify(coins3), (err) => {
                if (err) console.log(err)
            });
            weekly.add(message.author.id);
            setTimeout(() => {
                weekly.delete(message.author.id)
            }, 604800 * 1000)
            message.reply("You have now recived your weekly coins!");
        }



        if(message.content.startsWith("tib give")){
            if(!message.mentions.users.first()) return message.reply("Who do you want to send it to?")
            if(!args[2]) return message.reply("How much?")
            var coinrecname = message.mentions.users.first().username
            var coingive = Number(args[2])
            if(coinsamt < coingive) return message.reply(`You do not have ${coingive} coins!`)
            var coinrecperson = message.guild.member(message.mentions.users.first())
            if(coinrecperson.id = null) return message.reply("Cant find person!");
            if(coinrecperson.id == message.author.id) return message.channel.send("You can't give yourself money!")
           if(coingive == NaN) return message.reply("That is not a number!")
            coinsamt = coinsamt - coingive;
            coins3[message.author.id] = {
                coins3: coinsamt
            };
            fs.writeFile("./coins.json", JSON.stringify(coins3), (err) => {
                if (err) console.log(err)
            });
            othercoins = coins3[coinrecperson.id].coins3;
           othercoins = othercoins + coingive;

            coins3[coinrecperson.id] = {
                coins3: othercoins
            };
            fs.writeFile("./coins.json", JSON.stringify(coins3), (err) => {
                if (err) console.log(err)
            });
            message.reply(`You just gave ${coingive} coins to ${coinrecname}! -${coingive} coins +${coingive} coins to ${coinrecname}`)

        }

        if(message.content == "tib gamble"){
            if(coinsamt < 300) return message.reply("You do not have 300 coins!");
            coinsamt = coinsamt - 300;
            coins3[message.author.id] = {
                coins3: coinsamt
            };
            fs.writeFile("./coins.json", JSON.stringify(coins3), (err) => {
                if (err) console.log(err)
            });
            var result = gammbleresults[Math.floor(Math.random() * gammbleresults.length)]
            if(result == "JACKPOT"){
                message.reply("YOU HIT THE JACKPOT!!!!!!! +5000 coins")
                coinsamt = coinsamt + 5000;
                coins3[message.author.id] = {
                    coins3: coinsamt
                };
                fs.writeFile("./coins.json", JSON.stringify(coins3), (err) => {
                    if (err) console.log(err)
                });
            }
            if(result == "NORMAL"){
                message.reply("You won 1000 coins! +1000 coins")
                coinsamt = coinsamt + 1000;
                coins3[message.author.id] = {
                    coins3: coinsamt
                };
                fs.writeFile("./coins.json", JSON.stringify(coins3), (err) => {
                    if (err) console.log(err)
                });
            }
            if(result == "nothing"){    
                message.reply("Sorry, You got nothing -300 coins")
            }
        }

        if(message.content.startsWith("tib dm")){



            if(message.content == "tib dm") return message.reply("Next time tell me who you want me to send it too!")
            let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
            if(!User) return message.reply("Cant find user");
            let text = args.join(" ").slice(24);
            let au = message.author
            if(debugen==1){
                User.send ( au + " DMed you! | Message: " + text.slice(2)).catch(() => {
                    message.reply("| ERROR | Can't send DMs to them! | ERROR |")
                    return;
                });
                message.reply("You have DMed " + User + " using TheIronBot!").then(msg => msg.delete(6000));

            }else{
                if(User.hasPermission("ADMINISTRATOR")) return message.reply("| ERROR | Can't DM this person | they are an admin | ERROR |")
                User.send ( au + " DMed you! | Message: " + text.slice(2))
                message.reply("You have DMed " + User + " using TheIronBot!").then(msg => msg.delete(6000));

            }

           return;



        }


            //admin commands


           
            switch(args[0].toLocaleLowerCase()){
                case  "commandcooldown":
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You are not a admin!")
                if(message.content.startsWith("tib")){
                    if(args[1]) {
                        numcooldown = args[1]
                        if(message.author.id == "325658954560700416"){
                            cooldowns[message.guild.id] = {
                                cooldowns: numcooldown
                            }
                            fs.writeFile("./cooldowns.json", JSON.stringify(cooldowns), (err) => {
                                if(err) console.log(err);
                            });
                            message.reply("Command cooldown has now been set to " + numcooldown + "!")
                        }


                        if(numcooldown < 5){
                            if(message.member.hasPermission("ADMINISTRATOR")) return;
                            dbl.getVotes().then(votes => {
                                if (votes.find(vote => vote.id = message.author.id)){
                                    cooldowns[message.guild.id] = {
                                        cooldowns: numcooldown
                                    }
                                    fs.writeFile("./cooldowns.json", JSON.stringify(cooldowns), (err) => {
                                        if(err) console.log(err);
                                    });
                                    message.reply("Command cooldown has now been set to " + numcooldown + "!")

                                }else {
                                    return message.reply("Please vote at https://discordbots.org/bot/350372547029630976/vote to make the cooldown less than 5 seconds!")
                                }
                           });
                        }else{
                            cooldowns[message.guild.id] = {
                                cooldowns: numcooldown
                            }
                            fs.writeFile("./cooldowns.json", JSON.stringify(cooldowns), (err) => {
                                if(err) console.log(err);
                            });
                            message.reply("Command cooldown has now been set to " + numcooldown + "!")

                        }
                    }else {
                        message.reply("Please put a number after the command (tib commandcooldown 2)");
                    }
                    break;
                }

        };

        


    //    if(message.content=="tib slowmowon"){
         //   personid = message.author.id
          //  var textchannelid = message.channel.id;
         //   slowmo2 = 1
         //   message.reply("Slow Mode is now on!")
      //  }

       // if(message.content=="tib slowmooff"){
           // var textchannelid = message.channel.id;
          //  slowmo2 = 0
        //    message.reply("Slow Mode is now off!")
    //    }

        //if(slowmo2 = 1){
          //  console.log("1 Check")
          //  if(message.channel.id == textchannelid){
              //  console.log("2 Check")
                //if(personid = message.author.id) return
               // message.delete();
           // }
      //  }
        




            if(message.content.startsWith("tib clear")){
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You are not allowed to use this command!");
                if(can_manage_chans == false) return message.reply(" | ERROR | I do not have the Manage Messages permission! | ERROR |")
                if(!args[1]) return message.reply("Please set number of messages (tib clear 2)")
                clearnumber = args[1];
                if(clearnumber > 100) return message.reply("Cant clear that much! Can only clear (0-100) messages!")

               message.channel.bulkDelete(clearnumber).then(() => {
                  message.channel.send('Deleted '+ clearnumber + ' messages').then(msg => msg.delete(5000));



                


                });

            }

            if(message.content.startsWith("tib kick")){
                if(debugen==1){
                let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
                if(!kUser) return message.reply("Cant find user");
                let kReason = args.join(" ").slice(22);
                if(can_kick == false) return message.reply(" | ERROR | I do not have the Kick Members permission! | ERROR |")
                message.guild.member(kUser).kick(kReason);
                message.reply("Kicked: " + kUser + " Reason: " + kReason).then(msg => msg.delete(5000));
                }
                let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
                if(!kUser) return message.reply("Cant find user");
                let kReason = args.join(" ").slice(22);
                if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply ("You cannot do this!");
                if(can_kick == false) return message.reply(" | ERROR | I do not have the Kick Members permission! | ERROR |")
                if(kUser.hasPermission("KICK_MEMBERS")) return message.reply("that person cannot be kicked!")

                message.guild.member(kUser).kick(kReason);
                message.reply("Kicked: " + kUser + " Reason: " + kReason).then(msg => msg.delete(5000));


                return;



            }



            if(message.content.startsWith("tib ban")){
                if(debugen==1){
                    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
                if(!bUser) return message.reply("Cant find user");
                let bReason = args.join(" ").slice(22);
                if(can_ban == false) return message.reply(" | ERROR | I do not have the Ban Members permission! | ERROR |")
                message.guild.member(bUser).ban(bReason);
                message.reply("Banned: " + bUser + " Reason: " + bReason).then(msg => msg.delete(5000));
                }
                let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
                if(!bUser) return message.reply("Cant find user");
                let bReason = args.join(" ").slice(22);
                if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply ("You cannot do this!");
                if(can_ban == false) return message.reply(" | ERROR | I do not have the Ban Members permission! | ERROR |")
                if(bUser.hasPermission("BAN_MEMBERS")) return message.reply("that person cannot be banned!")

                message.guild.member(bUser).ban(bReason);
                message.reply("Banned: " + bUser + " Reason: " + bReason).then(msg => msg.delete(5000));


                return;



            }


        if(message.content.startsWith("tib ownercodereset")){
            if(!message.guild.ownerID == message.author.id) return message.reply("YOU ARE NOT THE OWNER!")
            code = randomstring.generate(5);
            codes2[message.guild.id] = {
                codes2: code
           }
           fs.writeFile("./ownercodes.json", JSON.stringify(codes2), (err) => {
               if(err) console.log(err);
           });
           bot.users.get(message.guild.owner.id).send(`This **${code}** is your unique 5 digit code to use owner level commands. **KEEP IT SAFE**`).catch(() => {
            return;
        })
           message.reply("You code is now reset, please check your DM's for the code")

        }

        if(message.content.startsWith("tib swearshieldoff")){
            if(message.guild.id == "264445053596991498") return message.reply("Swear Shield is disabled for this server!")
            if(!args[1]) return message.reply("You did not give a code after the command!, if you need to reset your code do `tib ownercodereset`")
            message.delete();
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("You are not a Admin!");
            if(code == args[1]){
                if(swearshield == false){
                    message.reply(":shield:  Swear Shield is already off :shield:")
                    message.delete();
                    swearshield = false
                    swearshield2[message.guild.id] = {
                        swearshield2: false
                    };
                    fs.writeFile("./swearshield.json", JSON.stringify(swearshield2), (err) => {
                        if (err) console.log(err)
                    });
                    return;
                }
                swearshield = false
                message.reply(":shield: Swear Shield is now off! :shield:")
                message.delete();
                swearshield2[message.guild.id] = {
                    swearshield2: false
                };
                fs.writeFile("./swearshield.json", JSON.stringify(swearshield2), (err) => {
                    if (err) console.log(err)
                });
                return
                
            }else{
                message.reply("Im sorry but that is an incorrect code. If you need to reset your code do `tib ownercodereset`")
            }
           
    }
        if(message.content.startsWith("tib swearshieldon")){
            if(message.guild.id == "264445053596991498") return message.reply("Swear Shield is disabled for this server!")
            if(can_manage_chans == false) return message.reply("I do not have the Manage Messages permission!")
            if(!args[1]) return message.reply("You did not give a code after the command!, if you need to reset your code do `tib ownercoderest`")
            message.delete();
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("You are not a Admin!");
            if(code == args[1]){
                if(swearshield == true){
                    message.reply(":shield: Swear Shield is already on! :shield:")
                    swearshield = true
                    swearshield2[message.guild.id] = {
                        swearshield2: true
                    };
                    fs.writeFile("./swearshield.json", JSON.stringify(swearshield2), (err) => {
                        if (err) console.log(err)
                    });
                    return;
                }
                swearshield = true
                message.reply(":shield: Swear Shield is now on! :shield:")
                swearshield2[message.guild.id] = {
                    swearshield2: true
                };
                fs.writeFile("./swearshield.json", JSON.stringify(swearshield2), (err) => {
                    if (err) console.log(err)
                });
                return;
            }else{
                message.reply("Im sorry but that is an incorrect code. If you need to reset your code do `tib ownercodereset`")
            }
            }

        });


        //ExtaStuff
        bot.on('message', (message) => {
            if(message.guild === null) return; 
            if(message.author.bot) return;
            if(message.guild.id == "264445053596991498") return;
            var editall
            if(swearshield == true){
                    if(message.content.includes("fuck") || message.content.includes("Fuck") || message.content.includes("FUCK") || message.content.includes("shit") || message.content.includes("Shit") || message.content.includes("SHIT") || message.content.includes("bitch") || message.content.includes("Bitch") || message.content.includes("BITCH") || message.content.includes("ass") || message.content.includes("ASS") || message.content.includes("Ass") || message.content.includes("faggot") || message.content.includes("Faggot") ||message.content.includes("FAGGOT") || message.content.includes("Bastard") ||message.content.includes("bastard") ||message.content.includes("BASTARD") ||message.content.includes("cunt") ||message.content.includes("CUNT") ||message.content.includes("Cunt") ||message.content.includes("dick") ||message.content.includes("DICK") ||message.content.includes("Dick")){
                         editall = message.content.replace(/fuck/gi, "frick") 
                         editall = editall.replace(/Fuck/gi, "Frick")
                         editall = editall.replace(/FUCK/gi, "FRICK")
                        editall = editall.replace(/shit/gi, "dung")
                        editall = editall.replace(/Shit/gi, "Dung")
                        editall = editall.replace(/SHIT/gi, "DUNG")
                        editall = editall.replace(/ass/gi, "butt")
                        editall = editall.replace(/ASS/gi, "BUTT")
                        editall = editall.replace(/Ass/gi, "Butt")
                        editall = editall.replace(/Bitch/gi, "Female Dog")
                        editall = editall.replace(/BITCH/gi, "FEMALE DOG")
                        editall = editall.replace(/bitch/gi, "female dog")
                        editall = editall.replace(/faggot/gi, "homosexual")
                        editall = editall.replace(/Faggot/gi, "Homosexual")
                        editall = editall.replace(/FAGGOT/gi, "HOMOSEXUAL")
                        editall = editall.replace(/bastard/gi, "unpleasant person")
                        editall = editall.replace(/Bastard/gi, "Unpleasant Person")
                        editall = editall.replace(/BASTARD/gi, "UNPLEASANT PERSON")
                        editall = editall.replace(/CUNT/gi, "UNPLEASANT PERSON")
                        editall = editall.replace(/Cunt/gi, "Unpleasant Person")
                        editall = editall.replace(/cunt/gi, "unpleasant person")
                        editall = editall.replace(/dick/gi, "male genitalia")
                        editall = editall.replace(/Dick/gi, "Male Genitalia")
                        editall = editall.replace(/DICK/gi, "MALE GENITALIA")                       
                        message.delete();
                        message.channel.send(`**${message.author.username} : ${editall}** || :shield: FILTERED BY SWEAR SHIELD :shield:`);
                        
                    }
            }     
            
            //stuff that is kept private
            if(message.content=="tib crush"){
                if(!debugen==1) return 
                embedcrush = new Discord.RichEmbed()
                .setColor("#42b3f4")
                .setDescription(`\n\n Nathan's Crush is named in a folder on the desktop of his PC. Good Luck! \n\n`)
                message.reply(embedcrush);
            }

            });
        //BOT JOIN AND LEAVE CRAP
        bot.on("guildCreate", guild => {
            bot.guilds.forEach(guild=>{
                servercount1=+ bot.guilds.size;
        })
        bot.user.setActivity(`tib help | Serving ${servercount1} servers!`);
            return  bot.users.get("325658954560700416").send("Someone added my bot, server named: " + guild.name + " and the owner is: " + guild.owner.displayName).catch(() => {
                return;
            })                  
        });
        bot.on("guildDelete", guild => {
            servercount1 = servercount1 - 1
        bot.user.setActivity(`tib help | Serving ${servercount1} servers!`); 
            return bot.users.get("325658954560700416").send("TheIronBot has left: " + guild.name).catch(() => {
               return; 
           })
        });
     bot.on('error', e => {
            return bot.users.get("325658954560700416").send("ERROR").catch(() =>{
                return;
            });
     });
