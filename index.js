const prompt = require("prompt-sync")();

const heroClass = {
    guerreiro : "Você escolheu Guerreiro! Força +10 ",
    mago: "Você escolheu Mago! Inteligência +10 ",
    monge: "Você escolheu Monge! Destreza +16",
    ninja: "Você escolheu Ninja! Furtividade +15"
};
let escolha = prompt("Escolha sua classe (Guerreiro, Mago, Monge ou Ninja): ").toLowerCase();

class Hero{
    constructor(type){
        this.type = type ;
        
        if (this.type === "guerreiro"){
            this.name = "Arthur"
            this.age = 35;
            this.atack = "Usando Espada"
        }else if (this.type === "mago"){
            this.name = "Gandalf"
            this.age = 2000;
            this.atack = "Usando Magia"
        }else if (this.type === "monge"){
            this.name = "Aang"
            this.age = 112;
            this.atack = "Usando Artes marciais"
        } else {
            this.name = "Ryu Hayabusa"
            this.age = 22;
            this.atack = "Usando Shuriken"
        }
    }
    atacks() {
        console.log(`o ${this.type} ${this.name} de ${this.age} anos atacou ${this.atack}`)
     }   
}

if (!heroClass[escolha]) {
    console.log("Classe inválida!!");
} else {
    console.log(heroClass[escolha]);
    const myHero = new Hero(escolha);
    myHero.atacks();
}