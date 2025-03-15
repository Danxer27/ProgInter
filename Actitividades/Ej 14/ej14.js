const numbers = [10, 11, 12, 13, 14, 15, 20, 25, 50, 100];

const movies = [
  {
    title: "Amadeus",
    score: "99",
    year: "1984",
  },
  {
    title: "Sharknado",
    score: "22",
    year: "2013",
  },
  {
    title: "Parasite",
    score: "78",
    year: "2019",
  },
  {
    title: "pulp fiction",
    score: "100",
    year: "1994",
  },
  {
    title: "El Club de la pelea",
    score: "90",
    year: "1999",
  },
  {
    title: "Shrek",
    score: "85",
    year: "2001",
  },
  {
    title: "El Gato con Botas",
    score: "79",
    year: "2011",
  },
  {
    title: "Toy story",
    score: "97",
    year: "2005",
  },
  {
    title: "jeepers creepers",
    score: "89",
    year: "2002",
  },
  {
    title: "El resplandor",
    score: "88",
    year: "1980",
  },
  {
    title: "The Substance",
    score: "78",
    year: "2024 ",
  },
  {
    title: "Coraline",
    score: "89",
    year: "2009",
  },
  {
    title: "Maze Runner",
    score: "86",
    year: "2014",
  },
  {
    title: "Volver al futuro",
    score: "85",
    year: "1985",
  },
  {
    title: "500 days of summer",
    score: "77",
    year: "2009",
  },
  {
    title: "Septimo",
    score: "28",
    year: "2024",
  },
  {
    title: "Abigail",
    score: "58",
    year: "2024",
  },
  {
    title: "Spiderman",
    score: "100",
    year: "2002",
  },
  {
    title: "Spiderman 2",
    score: "100",
    year: "2004",
  },
  {
    title: "Interestellar",
    score: "87",
    year: "2014",
  },
  {
    title: "A Bronx Tale",
    score: "78",
    year: "1993",
  },
  {
    title: "Cuando acecha la maldad",
    score: "100",
    year: "2023",
  },
  {
    title: "La la land",
    score: "100",
    year: "2016",
  },
  {
    title: "Spider-Man: A través del Spider-Verso",
    score: "95",
    year: "2023",
  },
  {
    title: "La isla siniestra",
    score: "90",
    year: "2005",
  },
  {
    title: "Contra lo imposible",
    score: "100",
    year: "2019",
  },
  {
    title: "Five Nights at Freddys",
    score: "90",
    year: "2023",
  },
  {
    title: "Scary Movie",
    score: "72",
    year: "2000",
  },
  {
    title: "Pulp fiction",
    score: "100",
    year: "1994",
  },
  {
    title: "IT",
    score: "70",
    year: "2021",
  },
  {
    title: "Atrápame si puedes",
    score: "95",
    year: "2008",
  },
  {
    title: "El señor de los anillos",
    score: "92",
    year: "2001",
  },
  {
    title: "10 cosas que odio de ti",
    score: "95",
    year: "1999",
  },
  {
    title: "A 2 metros de ti",
    score: "88",
    year: "2019",
  },
];


//for ofs
function forofNumbers(){
  for(let num of numbers){
    console.log(num * 2);
  }
}

function forofMovies(){
  for(movie of movies){
    console.log(movie.title);
  }
}

//for each
function imprimeDoble(elemento){
  console.log(elemento*2);
}

//numbers.forEach(imprimeDoble);
//en un solo bloque
function imprimeDoble2() {
  numbers.forEach(
    function(num){
      console.log(num * 2);
    });
}

function imprimeTitulos(){
  movies.forEach(function (movie){
    //console.log(`${movie.title} - ${movie.score}/100`);
  }); 
}

// MAP
const doubleNumbers = numbers.map(function(num){
  return num*2;
});

const upperTittles = movies.map(function(movie){
  return movie.title.toUpperCase();
});

//Arrow function expression
let square1 = function square(num){
  return num * num;
}

let square2 = function(num){
  return num * num;
}

let square3 = (num) => {
  return num * num;
}

let square4 = num => {
  return num * num;
}

let square5 = num => num * num;

//
const choppedMovie = movies.map(movie => movie.title.slice(1, -1));
const upperMovie = movies.map(movie => movie.title.toUpperCase());
const imprimeChopped = () => console.log(choppedMovie);


//Impreime
//const printMovies = movies.forEach( movie => console.log(`${movie.title} - ${movie.score}/100`));


function imprimeTitulos(){
  movies.forEach()
}

//timeot
const doTimeout = () => {
  console.log("HOLA!!");
  setTimeout(() => console.log("Sigues aqui?"), 3000);
  console.log("Adios o/");
}

let id;

const dointerval = () => {
  console.log("Interval started");
  id = setInterval(() => {
    console.log(Math.random())}, 2000);
}


//FILTER
numbers.filter((n) => n < 20);
numbers.filter((n) => 15 <= n);


badMovies = movies.filter((m) => m.score < 60);
goodMovies = movies.filter((m) => m.score > 90);
recentMovies = movies.filter((m) => m.year > 2020);
goodTitles = goodMovies.map((m) => m.title);
//filtrando y mapeando regresando titulo
wishListMovies = movies.filter((m) => m.score > 95).map((m) => m.title);


//EVERY
moreThan9 = numbers.every((x) => x > 9);
moreThan10 = numbers.every((x) => x > 10);
allpair = numbers.every((x) => x % 2 == 0);
movies30 = movies.every(m => m.score > 30);

//SOME
hayAlgunaNueva = movies.some((m) => m.year > 2024);
haymalareciente = movies.some((m) => m.year > 2020 && m.score < 60);
buscarPelicula = movies.some((m) => m.title === "Sharknado");

//REDUCE
sumatotal = numbers.reduce((a, b) => a + b);

mayordivisible = numbers.reduce((a,b) => {
  if(b % 7 == 0){
    if(b>a) return b;
    else return a;
  }else return a;
}, -1);

bestRated = movies.reduce((acc, movie) => {
  if(movie.score > acc.score){
    return movie;
  }else return acc;
});

mostRecent = movies.reduce((acc,movie) => {
  if(movie.year > acc.year){
    return movie;
  }
  return acc;
}).map((m) => m.title);



//THIS PROBLEM, FAT ARROW FUNCTOIN EXPRESSION

//keyword 'this' in arrow functions refers to the value of 'this' when the function is created
const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: function () {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
  badfullName: () => {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    console.log(this);
    setTimeout(() => {
      console.log("Tring in arrow function");
      console.log(this);
      console.log(this.fullName());
    }, 3000);
    setTimeout(function () {
      console.log("Tring in normal function");
      console.log(this); //WINDOW
      console.log(this.fullName());
    }, 6000);
  },
  shoutName2: () => {
    console.log(this); //WINDOW
    setTimeout(() => {
      console.log("Tring in arrow function");
      console.log(this); //WINDOW
      console.log(this.fullName());
    }, 3000);
    setTimeout(function () {
      console.log("Tring in normal function");
      console.log(this); //WINDOW
      console.log(this.fullName());
    }, 6000);
  },
};
