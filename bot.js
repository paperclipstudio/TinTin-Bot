const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	try {
		BanServer = client.guilds.get('633364312437555224')
	} catch(e) {
		console.log("failed to find server =>> " + e)
	} finally {
		console.log("this also runs!");
	}
	setInterval(function() {
		rand = intInRange(0,49);
		try {
			newName = "<3 " + states[intInRange(0,49)]
			Olivia = BanServer.members.get(George)
			console.log(Olivia.nickname)
			Olivia.setNickname(newName)
				.then(console.log())
				.catch(console.err);
			console.log("name changed to " + newName)
		} catch(e) {
			console.log("Failed! ->> " + e);
		} finally {
			console.log("this always happens")
		}
		}, 1000 //Math.pow(10, 7) * 8.64
)


});

client.login(auth.token);
client.on('message', msg => {
	  if (msg.content === 'ping') {
		      msg.reply('pong');
		    }
});


function intInRange(min, max) {
	rand = Math.random()
	return Math.floor(
		rand * (max - min + 1) + min)
}

for (i=0;i < 10; i++) {
	console.log(intInRange(5,10))
}
Olivia = "283693840165109771"
George = "432971065615187970"

states = [
	"Alabama",
	"Alaska",
	"Arizona",
	"Arkansas",
	"California",
	"Colorado",
	"Connecticut",
	"Delaware",
	"Florida",
	"Georgia",
	"Hawaii",
	"Idaho",
	"Illinois",
	"Indiana",
	"Iowa",
	"Kansas",
	"Kentucky",
	"Louisiana",
	"Maine",
	"Maryland",
	"Massachusetts",
	"Michigan",
	"Minnesota",
	"Mississippi",
	"Missouri",
	"Montana",
	"Nebraska",
	"Nevada",
	"New Hampshire",
	"New Jersey",
	"New Mexico",
	"New York",
	"North Carolina",
	"North Dakota",
	"Ohio",
	"Oklahoma",
	"Oregon",
	"Pennsylvania",
	"Rhode Island",
	"South Carolina",
	"South Dakota",
	"Tennessee",
	"Texas",
	"Utah",
	"Vermont",
	"Virginia",
	"Washington",
	"West Virginia",
	"Wisconsin",
	"Wyoming"
]

