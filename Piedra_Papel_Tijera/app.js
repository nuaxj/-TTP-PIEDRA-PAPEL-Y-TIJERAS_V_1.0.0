console.log("hola");
const ROCA= 0;
const TIJERAS= 1;
const PAPEL= 2;

const EMPA=0;
const WIN=1;
const LOSE=2;

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

	const machineOption = Math.floor(Math.random()*3);
	const result = calResultado(userOption, machineOption);

	//userIng.src = "ing/"+userOption+".svg";	
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