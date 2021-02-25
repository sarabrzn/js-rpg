//Use this script to generate your character
logBox.style.display="none";
player1.style.display="none";
player2.style.display="none";
btnsP1.style.display="none";
btnsP2.style.display="none";


var id,nom,race,item,character1,character2;

function Person(id,nom,race,item){
    this.id = id;
    this.name = nom;
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
    
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(){}; 

    this.damage = function(){};

    this.totalDamage = this.damage();

    this.displayChar = function(){
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };
}




//Player 1

document.getElementById("saveButton1").addEventListener("click",()=>{
    id="player1";
    nom=name1.value;
    race=race1.value;
    item=item1.value;
    character1=new Person(id,nom,race,item);
    console.log(character1);
    logBox.style.display="inline";
    player1.style.display="inline";
    btnsP1.style.display="inline";
    create1.style.display="none"; 
    
    
});

//Player 2


var createCharacter2 = document.getElementById("saveButton2");
createCharacter2.addEventListener("click",()=>{
    id="player2";
    nom=name2.value;
    race=race2.value;
    item=item2.value;
    character2=new Person(id,nom,race,item);
    console.log(character2);
    logBox.style.display="inline";
    player2.style.display="inline";
    btnsP2.style.display="inline";
    create2.style.display="none"; 
    
});















