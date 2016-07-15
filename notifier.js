var modeLower=mode.toLowerCase();
var situationLower=situation.toLowerCase();
var alertMessage;
switch(situationLower){
	case 'moved':
		alertMessage="Someone has moved the hive!";
		break;
	case 'quiet':
		alertMessage="The hive is too quiet!";
		break;
	default:
		alertMessage="The hive is in danger!";
		break;
	
}


switch (modeLower){
	case 'sms':
		smsNotify();
		break;
	case 'voice':
		voiceNotify();
		break;
}

function testCall(network){
	call_noCallerID("[phone number]",network);
}

function call_callerID(phNum,network){
	call(phNum, {
		network:network,
		callerID:'18005555338'
	});
	
}

function call_noCallerID(phNum,network){
	call(phNum, {
		network:network
	});
	
}

function smsNotify(){
	testCall("SMS");
	say(alertMessage+" Visit hyperspacecraft.net/beeApp/map.html for details.");
}

function voiceNotify(){
	testCall("PSTN");
	result = ask(alertMessage+" Will you help or run away?", {
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
