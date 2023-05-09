console.log("hola");
const ROCA=0;
const TIJERAS=1;
const PAPEL=2;

const EMPA=0;
const WIN=1;
const LOSE=2;
let isPlaying= false;

const RocaBtn= document.getElementById("Roca");
const TijerasBtn= document.getElementById("Tijera");
const PepeLBtn= document.getElementById("Papel");
const resultText= document.getElementById("First-text");
const userIng=document.getElementById("user-ing");
const machineIng= document.getElementById("machine-ing");

RocaBtn.addEventListener("click", ()=>{

		play(ROCA);
});

TijerasBtn.addEventListener("click", ()=>{
	
	 play(TIJERAS);
});

PepeLBtn.addEventListener("click", ()=>{
	
	play(PAPEL);
});

function play(userOption){

	if(isPlaying) return;
	isPlaying= true;
	userIng.src = "img/Tijeras.jpg";
	resultText.innerHTML="eligiendo";
	const interval = setInterval(function(){
		const machineOption=calcMachineOption();
		machineIng.src = "img/Papel3.jpg";
	}, 200);

	setTimeout(function(){
		const machineOption = calcMachineOption();
		const result = calResultado(userOption, machineOption);

		machineIng.src = "img/Papel3.jpg";

	switch(result){
		case EMPA:
			resultText.innerHTML= " Empate";
			break;
		case WIN:
			resultText.innerHTML= " has ganado";
			break;
		case LOSE:
			resultText.innerHTML= " has perdido";
			break;	

			};
			isPlaying = false;
	}, 2000);
	
};

function calcMachineOption(){

		const number = Math.floor(Math.random()*3);
		switch(number){
			case 0:
				return ROCA;
			case 1:
				return TIJERAS;
			case 2:
				return PAPEL;	
		};
};

function calResultado(userOption, machineOption){

	if (userOption === machineOption) {

		return EMPA;
	}else if(userOption === ROCA){

		if(machineOption === PAPEL) return LOSE;
		if(machineOption === TIJERAS) return WIN;
	}else if (userOption === TIJERAS) {

		if(machineOption === ROCA) return LOSE;
		if(machineOption === PAPEL) return WIN; 
	}else if(userOption === PAPEL){

		if(machineOption === TIJERAS) return LOSE;
		if(machineOption === ROCA) return WIN;
	}

}
console.log("Este Codigo pertenece el Principe mestizo");


//https://www.youtube.com/watch?v=_LpFG9VlTAY&ab_channel=KikoPalomares