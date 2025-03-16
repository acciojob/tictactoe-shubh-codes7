//your JS code here. If required.
let name1 = document.querySelector("#player-1")
let name2 = document.querySelector("#player-2")
let gameContainer = document.querySelector("#gameContainer")
let container = document.querySelector(".container")
let boxes = document.querySelectorAll(".box")
let message = document.querySelector(".message")
let turnX = true;
let count = 0;

const winningPatterns = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

function checkWinner(){
	count++;
	if(count === 9) message.innerText = "It's a draw" 
	for(let pattern of winningPatterns){
		let [i, j, k] = pattern; 
		let val1 = boxes[i].innerText
		let val2 = boxes[j].innerText
		let val3 = boxes[k].innerText

		if(val1 !== '' && val2 !== '' && val3 !== ''){
		if(val1 === val2 && val1 === val3){
			message.innerText = `${!turnX? name1.value: name2.value}, congratulations you won!`
	
			boxes[i].style.backgroundColor = "purple";
            boxes[j].style.backgroundColor = "purple";
            boxes[k].style.backgroundColor = "purple";
			
			boxes.forEach(box => box.style.pointerEvents = "none");
			return;
		}
	}
	}

	
}

boxes.forEach( box => box.addEventListener("click", ()=> 
	{
		if(box.innerText !== "") return; 
		if(turnX) {
			box.innerText = "X"  
			message.innerText = `${name2.value ? name2.value : "Player 2"} you're up`
			
		}else{
			box.innerText = "O"
			message.innerText = `${name1.value ? name1.value : "Player 1"} you're up`
			
		}
		checkWinner()
		
		turnX = !turnX
	})
)

function startGame(){
	gameContainer.style.visibility = "visible"
	container.style.display = "none"
	message.textContent = `${name1.value ? name1.value : "Player 1"} you're up`
}






