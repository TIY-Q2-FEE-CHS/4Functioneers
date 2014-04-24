
function Activity(budget) {
	this.budget = budget; 

	this.generateAct = function() {

		if( budget == 25) {
			var randomAct1 = Math.floor((Math.random()*4)+1);
				$(".3").append("<h4>" + dateObj.activity.twentyfive[randomAct1].text +"</h4>");
				$(".3").append("<img src=" + dateObj.activity.twentyfive[randomAct1].picUrl +  ">");



		} else if(budget == 50){
			var randomAct2 = Math.floor((Math.random()*4)+1);
			console.log(dateObj.activity.fifty[randomAct2]);
				$(".3").append("<h4>" + dateObj.activity.fifty[randomAct2].text + "</h4>");
				$(".3").append("<img src=" + dateObj.activity.fifty[randomAct2].picUrl +  ">");


		} else if(budget == 100) {
			var randomAct3 = Math.floor((Math.random()*4)+1);
				$(".3").append("<h4>" + dateObj.activity.hundred[randomAct3].text + "</h4>");
				$(".3").append("<img src=" + dateObj.activity.hundred[randomAct3].picUrl +  ">");
		}
	}
	
}

function Restaurant(budget) {
	this.budget = budget; 

	this.generateRest = function() {

		if( budget == 25) {
			var randomRest1 = Math.floor((Math.random()*4)+1);
			$(".2").append("<h4>" + dateObj.food.twentyfive[randomRest1].text + "</h4>" );
			$(".2").append("<img src=" + dateObj.food.twentyfive[randomRest1].picUrl +  ">");

		} else if(budget == 50){
			var randomRest2 = Math.floor((Math.random()*4)+1);
				$(".2").append("<h4>" + dateObj.food.fifty[randomRest2].text +"</h4>");
				$(".2").append("<img src=" + dateObj.food.fifty[randomRest2].picUrl +  ">");



		} else if(budget == 100) {
			var randomRest3 = Math.floor((Math.random()*4)+1);
				$(".2").append("<h4>" + dateObj.food.hundred[randomRest3].text +"</h4>");
				$(".2").append("<img src=" + dateObj.food.hundred[randomRest3].picUrl +  ">");

		}
	}
	
}

function Transportation(budget) {
	this.budget = budget; 

	this.generateTrans = function() {

		if( budget == 25) {
			var randomTrans1 = Math.floor((Math.random()*2));
			$(".1").append("<h4>" + dateObj.transportation.twentyfive[randomTrans1].text +"</h4>");
			$(".1").append("<img src=" + dateObj.transportation.twentyfive[randomTrans1].picUrl +  ">");

		} else if(budget == 50){
			var randomTrans2 = Math.floor((Math.random()*2));
			$(".1").append("<h4>" + dateObj.transportation.fifty[randomTrans2].text +"</h4>");
			$(".1").append("<img src=" + dateObj.transportation.fifty[randomTrans2].picUrl +  ">");

		} else if(budget == 100) {
			var randomTrans3 = Math.floor((Math.random()*2));
			$(".1").append("<h4>" + dateObj.transportation.hundred[randomTrans3].text + "</h4>");
			$(".1").append("<img src=" + dateObj.transportation.hundred[randomTrans3].picUrl +  ">");
		}
	}
	
}

// 	this.generate50Act = function() {

// 	var randomAct2 = Math.floor((Math.random()*5)+1);
// 	console.log(dateObj.activity.fifty[randomAct2]);
// }

// 	this.generate100Act = function() {

// 	var randomAct3 = Math.floor((Math.random()*5)+1);
// 	console.log(dateObj.activity.hundred[randomAct3]);
// }






// 	function Transportation(budget) {
// 	this.budget = budget;

// // var Limo = new Transportation(100);
// // var Taxi = new Transportation(50);
// // var Car = new Transportation(25);

// if (this.budget === 25) {
//  $( ".date" ).append( "<h1>Your budget allows you to drive your car!</h1>" )
//  	console.log("Car!!!!!");
// }
// if (this.budget === 50) {
//  $( ".date" ).append( "<h1>Your budget allows you to hail a taxi!</h1>" )
// }
// if (this.budget === 100) {
//  $( ".date" ).append( "<h1>Your budget allows you to ride in style with a limo!</h1>" )
// }
// };

// function Restaurant(type, budget) {
// 		this.type = type;
// 		this.budget = budget;

// 		this.restaurantSelect = function () {
// 			if (this.type == "3"){
// 				if (this.budget == 25){
// 					var chance = Math.floor(Math.random() * 10 )
// 					if (chance <= 5){
// 					$(".date").append("<h1>Your budget allows you to eat at Shelter tonight!</h1>");	
// 					console.log("Shelter");
// 						}else{
// 							$(".date").append("<h1>Your budget allows you to eat at Seasame tonight!</h1>");
// 							console.log ("Seasame");
// }
// }
// 					if (this.budget == 50){
// 					var chance = Math.floor(Math.random() * 10 )
// 					if (chance <= 5){
// 					$(".date").append("<h1>Your budget allows you to eat at Coleman Public House tonight!</h1>");	
// 					console.log("CPH")
// 						}else{
// 							$(".date").append("<h1>Your budget allows you to eat at EVO tonight!</h1>")
// 							console.log ("EVO")
// }
// }
// 					if (this.budget == 100){
// 					var chance = Math.floor(Math.random() * 10 )
// 					if (chance <= 5){
// 					$(".date").append("<h1>Your budget allows you to eat at Halls Chophouse tonight!</h1>")
// 					console.log ("Halls")
// 						}else{
// 							$(".date").append("<h1>Your budget allows you to eat at Oak Steak House tonight!</h1>")
// 							console.log("Oak")
// }
// }
// }
// 			if (this.type == "4"){
// 				if (this.budget == 25){
// 					var chance = Math.floor(Math.random() * 10 )
// 					if (chance <= 5){
// 					$(".date").append("<h1>Your budget allows you to eat at Tasty Thai tonight!</h1>");	
// 					console.log("Tasty");
// 						}else{
// 							$(".date").append("<h1>Your budget allows you to eat at Co tonight!</h1>");
// 							console.log ("Co");
// }
// }
// 				if (this.budget == 50){
// 					var chance = Math.floor(Math.random() * 10 )
// 					if (chance <= 5){
// 					$(".date").append("<h1>Your budget allows you to eat at Tsunami tonight!</h1>");	
// 					console.log("Tsunami");
// 						}else{
// 							$(".date").append("<h1>Your budget allows you to eat at Wasabi tonight!</h1>");
// 							console.log ("Wasabi");
// }
// }
// 				if (this.budget == 100){
// 					var chance = Math.floor(Math.random() * 10 )
// 					if (chance <= 5){
// 					$(".date").append("<h1>Your budget allows you to eat at Basil tonight!</h1>");	
// 					console.log("Basil");
// 						}else{
// 							$(".date").append("<h1>Your budget allows you to eat at PF Chang's tonight!</h1>");
// 							console.log ("PFC");
// }
// }
// }
// 			if (this.type == "5"){
// 				if (this.budget == 25){
// 					var chance = Math.floor(Math.random() * 10 )
// 					if (chance <= 5){
// 					$(".date").append("<h1>Your budget allows you to eat at Red's tonight!</h1>");	
// 					console.log("Reds");
// 						}else{
// 							$(".date").append("<h1>Your budget allows you to eat at Noisy Oyster tonight!</h1>");
// 							console.log ("Oyster");
// }
// }
// 				if (this.budget == 50){
// 					var chance = Math.floor(Math.random() * 10 )
// 					if (chance <= 5){
// 					$(".date").append("<h1>Your budget allows you to eat at Fleet's Landing tonight!</h1>");	
// 					console.log("Fleets");
// 						}else{
// 							$(".date").append("<h1>Your budget allows you to eat at Hyman's tonight!</h1>");
// 							console.log ("Hyman");
// }
// }
// 				if (this.budget == 100){
// 					var chance = Math.floor(Math.random() * 10 )
// 					if (chance <= 5){
// 					$(".date").append("<h1>Your budget allows you to eat at Hank's tonight!</h1>");	
// 					console.log("Hank");
// 						}else{
// 							$(".date").append("<h1>Your budget allows you to eat at Red Drum tonight!</h1>");
// 							console.log("Drum");
// }
// }
// }}};
// // var Shelter = new Restaurant ("American", 25);
// // var Seasame = new Restaurant ("American", 25);
// // var ColemanPublicHouse = new Restaurant ("American", 50);
// // var Evo = new Restaurant ("American", 50);
// // var Halls = new Restaurant ("American", 100);
// // var Oak = new Restaurant ("American", 100);
// // var Tasty = new Restaurant ("Asian", 25);
// // var Co = new Restaurant ("Asian", 25);
// // var Tsunami = new Restaurant ("Asian", 50);
// // var Wasabi = new Restaurant ("Asian", 50);
// // var Basil = new Restaurant ("Asian", 100);
// // var PFChang = new Restaurant ("Asian", 100);
// // var Reds = new Restaurant ("Seafood", 25);
// // var NoisyOyster = new Restaurant ("Seafood", 25);
// // var Fleets = new Restaurant ("Seafood", 50);
// // var Hymans = new Restaurant ("Seafood", 50);
// // var Hanks = new Restaurant ("Seafood", 100);
// // var RedDrum = new Restaurant ("Seafood", 100);




// function Activity(inOrOut, budget) {
// 	this.inOrOut = inOrOut;
// 	this.budget = budget;
// 	this.generateActivity = function() {
		
// 		if (this.budget == 25) {

// 			if(this.inOrOut == "1") {
// 			$( ".date" ).append( "<h1>Your budget allows you to attend a Movie!</h1>" )
// 			console.log("You are eligible for a Movie Activity")

// 		} else{
// 			$( ".date" ).append( "<h1>You will going to MiniGolf!</h1>" )
// 			console.log("You are eligible for a MiniGolf Activity")
// 		}

// 		}  
// 		if(this.budget ==  50) {

// 			if(this.inOrOut == "1") {
// 				$( ".date" ).append( "<h1>Your budget allows you to attend a Painting Session!</h1>" )
// 				console.log("You are eligible for a Painting Activity")

// 		} else {
// 				$( ".date" ).append( "<h1>Your budget allows you to attend a Kayak Session!</h1>" )
// 				console.log("You are eligible for a Kayak Activity")

// 		}

// 		}  if(this.budget ==  100) {

// 			if(this.inOrOut == "1") {
// 				$( ".date" ).append( "<h1>Your budget allows you to attend a Concert! </h1>" )
// 				console.log("You are eligible for a Concert Activity")

// 		} else {
// 				$( ".date" ).append( "<h1>Your budget allows you to attend a Private Boat Charter!</h1>" )
// 				console.log("You are eligible for a Boat Charter Activity")

// 		}
		


// 	}
// }
// }




