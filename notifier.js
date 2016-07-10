var modeLower=mode.toLowerCase();
switch (mode)
{
	case 'sms':
		smsNotify();
		break;
	case 'voice':
		voiceNotify();
		break;
}

function testCall(network){
	call("+15105753138", {
		network:network,
		callerID:'18005555338'
	});
}

function smsNotify(){
	testCall("SMS");
	say("Your beehive is in danger! Visit hyperspacecraft.net/beeApp/map.html for details.");
}

function voiceNotify(){
	testCall("PSTN");
	result = ask("Your beehive is under attack!  Will you help or run away?", {
	   choices:"help, run away"
	});

	if (result.value=="help"){
		say("You saved the bees!");
	}
	else if (result.value=="run away"){
		say("The bees have been kidnapped!");
	}
	else {
		say("I did not understand your command.");
	}
}