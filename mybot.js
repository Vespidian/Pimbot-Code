const Discord = require("discord.js");
const client = new Discord.Client();
var gameid = (">help For commands");
var prefix = ">";

function commandIs(str, msg){
	return msg.content.startsWith(prefix + str);
}
client.on('ready', () => {
	client.user.setStatus("dnd")
	client.user.setGame(gameid)
	console.log("The Bot Is Now Running!");
});

function doMagic8BallVoodoo() {
    var rand = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep'];

    return rand[Math.floor(Math.random()*rand.length)];
}

client.on('message', message => {
	
	
	// delete a message
/*message.delete(10000)

 .then(msg => console.log(`Deleted message from ${msg.author}`))
 .catch(console.error);*/
 
 // update the content of a message
/*message.edit('This is my new content!')
 .then(msg => console.log(`Updated the content of a message from ${msg.author}`))
 .catch(console.error);*/
	
	
	var args = message.content.split(/[ ]+/);
	if (commandIs("die", message)) {
		message.channel.sendMessage("No " + message.author.username + " I cannot die I'm a bot :confused:.");

		// alert the console
		console.log("Messaged " + message.author.username);
	}
	if (commandIs("garble", message)){
		message.channel.sendMessage("You did it wrong" + "`hah get pranked`")
	}
	
	if (commandIs("cat", message)){
		message.channel.sendMessage("Meow! :cat:")
	}
	
	if (commandIs("colour", message)){
		message.channel.sendMessage("```http" + "\n" + "SO COLOURFULL```")
	}
	
	if (commandIs("info", message)){
		let creatorobj = message.server.members.get("name", "Pimy")
	message.channel.sendMessage("Creator = " + `${creatorobj}`)
	}
	
	if (commandIs("dm", message)){
		message.author.sendMessage('hello!')
		message.channel.sendMessage(message.author.username + "You have been DMed")
	}
	
	if(commandIs("say", message)){
		if(args.length === 1){
			//client.deleteMessage(message);
			message.channel.sendMessage("What do you want me to say? Usage: `>say [message]`")
		} else { message.channel.sendMessage(args.join(" ").substring(5)) }
	}
	
	if(commandIs("tsay", message)){
		if(args.length === 1){
			message.channel.sendMessage("What do you want me to say? Usage: `>tsay [message]`")
		} else { message.channel.sendMessage(("I was told to say ") + args.join(" ").substring(6)) }
	}
	
	if(commandIs("quote", message)){
		if(args.length === 1){
			message.channel.sendMessage("What do you want me to say? Usage: `>tsay [message]`")
		} else { message.channel.sendMessage + args.join(" - 2017").substring(6) }
	}
	
	if (commandIs("kys", message)){
		message.channel.sendMessage("oops I died")
		message.channel.sendMessage("```http" + "\n" + "-dies-```")
		message.channel.sendMessage("What have you done " + message.author.username + " пе_пе")
	}

	if (commandIs("inv", message) && message.author.username === "Pimy tm"){
		message.channel.sendMessage("```diff" + "\n" + "! ===== [" + message.author.username + "'s inventory (Page 1/1)] ===== !" + "\n" + "+ 1,000,000,000,000 Gold." + "\n" + "!=========================================!```")
	}else{
		if (commandIs("inv", message) && message.author.username === "Vraelom"){
		message.channel.sendMessage("```diff" + "\n" + "! ===== [" + message.author.username + "'s inventory (Page 1/1)] ===== !" + "\n" + "+ 100 x Poo" + "\n" + "!=========================================!```")
		}
	}
	
	if (commandIs("help" || "pimbot help!", message)){
		message.channel.sendMessage("```diff" + "\n" + "- Commands:" + "\n" + "+ kys(An example of multiposting)" + "\n" + "+ say" + "\n" + "+ tsay" + "\n" + "+ die" + "\n" + "+ help" + "\n" + "+ garble" + "\n" + "+ cat" + "\n" + "+ colour" + "\n" + "+ inv" + "\n" + "+ setplay" + "\n" + "+ sell" + "\n" + "+ buy" + "\n" + "+ ping" + "\n" + "+ shop```")
		message.author.sendMessage("```diff" + "\n" + "- Commands:" + "\n" + "+ kys(An example of multiposting)" + "\n" + "+ say" + "\n" + "+ tsay" + "\n" + "+ die" + "\n" + "+ help" + "\n" + "+ garble" + "\n" + "+ cat" + "\n" + "+ colour" + "\n" + "+ inv" + "\n" + "+ setplay" + "\n" + "+ sell" + "\n" + "+ buy" + "\n" + "+ ping" + "\n" + "+ shop```")
		
	}
	
	if (commandIs("hellp", message)){
        message.channel.sendMessage("Help is on the way " + message.author.username + ", check your DMs.")
        message.author.sendMessage("Test DM.")
    }
	
	if(commandIs("sell", message)){
		if(args.length === 1){
			message.channel.sendMessage("What do you want to sell? Usage: `>sell [colour]`")
		} else { 
		if(args.join !== "blue" || "red" || "orange" || "green" || "black" || "yellow" || "purple" || "pink" || "white"){
		message.channel.sendMessage((message.author.username + " sold") + args.join(" ") + (":moneybag:").substring(5)) }}
	}
	
	if(commandIs("buy", message)){
		if(args.length === 1){
			message.channel.sendMessage("What do you want to buy? Usage: `>buy [colour]`")
		} else { 
		if(args.join !== "blue" || "red" || "orange" || "green" || "black" || "yellow" || "purple" || "pink" || "white"){
		message.channel.sendMessage((message.author.username + " bought") + args.join(" ") + (":money_with_wings:").substring(4)) }}
	}
	
	if (message.content === "ping") {
		let blackrole = message.guild.roles.find("name", "Just Black")
        if (message.member.roles.has(blackrole.id)) {
            message.channel.sendMessage("pong");
        }else{
			message.channel.sendMessage("you do not have the 'Just Black' role")
		}
    }
	
	if (commandIs("shop", message)){
		message.channel.sendMessage("```diff" + "\n" + "-Shop Page 1 of 1" + "\n" + " - Colors" + "\n" + "+ Red 60g" + "\n" + "+ Orange 50g " + "\n" + "+ Yellow 60g" + "\n" + "+ Green 50g" + "\n" + "+ Blue 60g" + "\n" + "+ Purple 50g" + "\n" + "+ Pink 50g" + "\n" + "+ White 80g" + "\n" + "+ Black 80g```" + "\n" + "`Type >buy [item name] to buy`")
	}
});

client.login("token-here");
