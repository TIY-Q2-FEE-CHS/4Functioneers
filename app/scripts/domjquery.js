$(document).ready(
	$(".btn").click(function(e) {
	e.preventDefault();
	console.log("im working");

	var valTrans = Number($(".transportation").val());
	var yourTransport = new Transportation(valTrans);
	var Transit = yourTransport.generateTrans();
	
	var valFoodBudget = Number($(".foodbudget").val());
	var yourFood = new Restaurant (valFoodBudget);
	var yourRestaurant = yourFood.generateRest();
	
	var valActBudg= Number($(".actBudget").val());
	var yourActivity = new Activity (valActBudg);
	var yourDate= yourActivity.generateAct(); 
	$(".date").append(yourDate);

	// var yourDate = yourActivity.generate50Act(); 
	// var yourDate = yourActivity.generate100Act(); 
	

})
);

	// var yourDate = yourActivity.generateActivity(valAct, ValActBudg);

	// $("something").append(yourDate)

// 	var difficulty = $(".classroomSelect").val();
// 	var varClassroom = new Classroom() 
// 	varClassroom.difficulty(difficulty, varSleep);
// 	console.log(varSleep.life);
// var varLife=(varCoffee.life + varSleep.life);

