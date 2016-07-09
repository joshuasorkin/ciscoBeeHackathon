/*
call("+15105753138", {
   network:"SMS"});
say("Your beehive is in danger!");
*/

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