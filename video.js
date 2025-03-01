// Funciones como parametros

function crearDado(nun){
    return function(){
        return Math.floor(Math.random() * num) + 1;
    }
} 

// Objetos literales
const ror2Game = {
    title: "Risk of rain 2",
    developer: "Hopoo Games",
    score: 100
}

function Game(title, developer, score){
    this.title = title;
    this.developer = developer;
    this.score = score;
}

//Usar constructor
const game1 = new Game("Flat Heroes", "Parallel Crircles", 80);
const game2 = new Game("Move or die", "Those awesome guys", 60);

//Otro constructor
function Player(name, age){
    this.name = "Player: " + name;
    this.age = age-1;
}

//nuevos jugadores
const randy = new Player("Randy Fernandez", 33);
const ken = new Player("Ken Rivera", 21);

// Agregando juego a jugador
randy.favoriteGame = game2;
ken.favoriteGame = game1;

//Acceder a un dato
randy.favoriteGame;
randy["favoriteGame"];

//Modificar un dato
randy.age++;
ken["age"]++;

// Prototypes
const Ingeniero = {
    carrera: "civil",
    carreraEstudidada(){
        console.log(`Estudio la carrera de ${this.carrera}`);
    },
    cambiarCarrera(carrera){
        this.carrera = carrera;
    }
}

//crear objeto desde prototipo
const ingeniero1 = Object.create(Ingeniero);
const electricista1 = Object.create(Ingeniero);
electricista1.cambiarCarrera("Electrico");

//construir prototipos
function hacerIngeniero(carrera){
    let nuevoIngeniero = Object.create(Ingeniero);
    nuevoIngeniero.cambiarCarrera(carrera);
    return nuevoIngeniero;
}

const compu1 = new hacerIngeniero("Computacion");

//Clases
class IngenieroClass {
    carrera = "civil";
    constructor(carrera){
        if(carrera != null){
            this.carrera = carrera;
        }
    }

    carreraEstudidada(){
        console.log(`Estudio la carrera de ${this.carrera}`);
    }

    cambiarCarrera(newCarrer){
        this.carrera = newCarrer;
    }
}

const meca1 = new IngenieroClass("Mecatronica");

class Comment {
    user = "";
    comm = "";
    likes = 0;

    constructor(user, comentario){
        this.user = user;
        this.comm = comentario;
        //this.likes = 0; / Usando prototipos siempre se tiene que inicializar
    }

    like(){
        this.likes++;
    }
}

//Diferenciando this
let vidasTotales = 10;
const p1 = {
    name: "Manu",
    vidasTotales: 3,
    die(){
        this.vidasTotales--;
        if(this.vidasTotales > 0){
            return `Player ${this.name} died, reamining lifes: ${this.vidasTotales}`;
        }else{
            vidasTotales--;
            this.vidasTotales= 3;
            return `Player no lifes remaining, continues: ${vidasTotales}`
        }
    }
}

//Try Catch
function dadoSimple(num){
    try{
        if(Number.isInteger(num)){
            return Math.floor(Math.random() * num) + 1
        }else {
            throw new Error("No es entero");
        }
    } catch (e) {
        console.log(e);
        console.log("Necesitas ingresar un numero entero.");
        console.log("Pero por mientras lanzare un dado de 6.");
        return dadoSimple(6);
    }
}