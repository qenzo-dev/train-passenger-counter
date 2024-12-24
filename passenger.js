let counter = document.getElementById("the-counter");
let saveIt = document.getElementById("saver");
let count = 0;

function increments(){
	count = count + 1;
	counter.textContent = count;
	
}

function saves(){
	let countStr = count + " - ";
	saveIt.textContent = saveIt.textContent + countStr;
	counter.textContent = 0
    count = 0


}





