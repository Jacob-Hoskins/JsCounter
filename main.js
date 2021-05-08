let number = document.querySelector("#number");

let count = 0;

function decreaseCount(){
	
	console.log("Clicked");
	count -= 1;
	console.log(count);
	number.innerHTML = count;
	return count;
}

function resetCount(){
	console.log("Clicked");
	count = 0;
	console.log(count);
	number.innerHTML = count;
	return count;
}

function increaseCount(){
	console.log("Clicked");
	count += 1;
	console.log(count);
	number.innerHTML = count;
	return count;
}

