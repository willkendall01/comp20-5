KEY_SIZE = 5

var num_key = new Array();

function init_lottery(){
	
	for (i = 0; i < KEY_SIZE; i++) {
		num_key[i] = Math.floor(Math.random() * 48) + 1;
	}
	num_key[KEY_SIZE] = Math.floor(Math.random() * 18) + 1 ;
	display_array(num_key);
	selection_sort(num_key);
	display_sorted_array(num_key);
}

function display_array(array) {
	for (i = 0; i < 6; i++){
		document.getElementById('ai' + (i + 1)).innerHTML = array[i];
	}
}

function display_sorted_array(array) {
	for (i = 0; i < 6; i++){
		document.getElementById('sai' + (i + 1)).innerHTML = array[i];
	}
}

/*I could have used the array method ".sort" here, but I wanted to brush 
up my selection sort.*/
function selection_sort(array) {
	var min_ind;
	for (i = 0; i < KEY_SIZE; i++) {
		min_ind = i;
		for (j = i + 1; j < KEY_SIZE; j++) {
			if (array[j] < array[min_ind]) {
				min_ind = j;
			}
		}
		if (i !== min_ind) {
			array = swap(array, i, min_ind);
		}
	}
}

function swap(array, ind1, ind2) {
	var temp;
	temp = array[ind1];
	array[ind1] = array[ind2];
	array[ind2] = temp;
	return array;
}

function takeInput() {
	var nums_input, lucky_input, user_guess;
	nums_input = document.getElementById('norm_nums').value;
	lucky_input = document.getElementById('lucky_num').value;
	nums_input = nums_input +' ' + lucky_input;
	user_guess = nums_input.split(" ");
	for (i = 0; i <= KEY_SIZE; i++) {
		user_guess[i] = parseInt(user_guess[i], 10);
	}
    payout_calc(user_guess);
    

}

function payout_calc(user_guess) {
	var count = 0, temp_user, temp_key, len, lucky = false;
	temp_user = user_guess;
	temp_key = num_key;

	if (temp_user[KEY_SIZE] === num_key[KEY_SIZE]) {
		lucky = true;
	}
	temp_user.pop();
	temp_key.pop();

	for (i = 0; i < temp_user.length; i++) {
		for (j = 0; j < temp_key.length; j++) {
			if (temp_user.includes(temp_key[j])) {
				count++;
				temp_key.splice(j, 1);
				console.log(temp_user);
				console.log(temp_key);
			}
		}
	}
	//document.write(count);
	
	winnings(count, lucky);

}	

function winnings(count, lucky) {
	switch (count) {

		case 5:
			if (lucky === true) {
				prize = "$7,000 a WEEK for LIFE";
				document.getElementById('results').innerHTML = "Congrats, you matched " + count
				+ " numbers and the lucky ball! That means you've won: " + prize + ".";	
			}
			else {
				prize = "$25,000 a YEAR for LIFE";
				document.getElementById('results').innerHTML = "Congrats, you matched " + count
				+ " numbers but not the lucky ball! That means you've won: " + prize + ".";

			}
			break;
		case 4:
			if (lucky === true) {
				prize = "$5,000";
				document.getElementById('results').innerHTML = "Congrats, you matched " + count
				+ " numbers and the lucky ball! That means you've won: " + prize + ".";

			}
			else {
				prize = "$200";
				document.getElementById('results').innerHTML = "Congrats, you matched " + count
				+ " numbers but not the lucky ball! That means you've won: " + prize + ".";
				
			}
			break;
		case 3:
			if (lucky === true) {
				prize = "$150";
				document.getElementById('results').innerHTML = "Congrats, you matched " + count
				+ " numbers and the lucky ball! That means you've won: " + prize + ".";
			}
			else {
				prize = "$20";
				document.getElementById('results').innerHTML = "Congrats, you matched " + count
				+ "numbers but not the lucky ball! That means you've won: " + prize + ".";
				
			}
			break;
		case 2:
			if (lucky === true) {
				prize = "$25";
				document.getElementById('results').innerHTML = "Congrats, you matched " + count
				+ " numbers and the lucky ball! That means you've won: " + prize + ".";
			}
			else {
				prize = "$3";
				document.getElementById('results').innerHTML = "Congrats, you matched " + count
				+ " numbers but not the lucky ball! That means you've won: " + prize + ".";
				
			}
			break;
		case 1:
			if (lucky === true) {
				prize = "$6";
				document.getElementById('results').innerHTML = "Congrats, you matched " + count
				+ " number and the lucky ball! That means you've won: " + prize + ".";
				break;
			}

		case 0:
			if (lucky === true) {
				prize = "$4";
				document.getElementById('results').innerHTML = "Congrats, you matched " + count
				+ " numbers and the lucky ball! That means you've won: " + prize + ".";
				break;
			}
			

		default: 
			document.getElementById('results').innerHTML = "No winnings this time! Try again soon!";
	}	
}

init_lottery();
