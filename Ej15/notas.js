//DEFAULT
function rollDie(numsides = 6){
    console.log(Math.floor(Math.random()*numsides) + 1);
}
    //Valores default cuando no hay un paso de datos desde la llamada de la funcion
function greet(mensaje = "Hola ", nombre = "Fulanito"){
    console.log(`${mensaje} ${nombre}`);
}

//SPREAD IN FUNCTION CALLS
let numbers = [...Array(16).keys()].map((x) => x + 10);
// [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

const mexicanDogs = ["Chihuahua", "Calupoh"];
const fluffyDogs = ["Samoyedo", "Akita", "Husky"];
const allDogs = [...mexicanDogs, ...fluffyDogs];


//SPREAD IN OBJECTS
const ingeniero = {id: 968445, job:"Mecaronic", lastName:"Hernandes"}
const persona = {id: 968445,firstName:"Guillermo", lastName:"Hernandez"}
const trabajador = {...ingeniero, ...persona};

const newUserForm = {
    email: "noemagil@gmail.com",
    password: "123456",
    username: "default"
}

const newUser = {...newUserForm, id:5, isAdmin: false};
const newWorker = { ...newUser, ...trabajador};

// Arguments and REST PARAMS
function verArgumentos(a,b,c){
    if(arguments[0] < 100){
        console.log("Menor a 100");
    }
    console.log(arguments); // {arguments} palabra reservada
}

function sumaPara(total, ...nums){
    let result = nums.reduce((total,num) =>total+num, -inicial );
    if(result == 0) return `Felicidades, sumaste: ${inicial} usando ${arguments.length} numeros`;
    else return "El primer parametro debe ser igual a la suma de los demas"; 
}
 //Profe version
function sumaPara(inicial, ...nums) {
    let result = nums.reduce((total, num) => total + num, -inicial);
    if (result == 0) return `Felicidades, sumaste:${inicial} usando ${arguments.length} números`;
    else return "El primer parámetro debe ser igual a la suma de los demás";
  }

// DESTRUCTURING
    //Estructuracion por ...
const [primero, segundo,  ...resto] = numbers;

    //Estructuracion por objeto
const {
    email,
    firstName: nombre,
    id,
    isAdmin=false,
    job,
    lastName,
    password,
    username
} = newWorker;
    //Estructuracion por parametro
function printData({email, firstName: nombre = "NONAME", lastName: ape, email: correo, age: edad = -1}){
    //admin = Objeto.isAdmin;
    console.log(`El usuario ${firstName} ${ape} tiene de correo ${correo}`);
}

// 

const inventario = [
    {
      id: 1,
      name: "TORT1K",
      description: "1K de tortilla",
      price: 20,
      stock: 2,
      maxStock: 12,
      restock: "2d",
    },
    {
      id: 2,
      name: "KLGSFL",
      description: "Froot loops caja",
      price: 40,
      stock: 5,
      maxStock: 6,
      restock: "1w",
    },
    {
      id: 3,
      name: "BRCHIP",
      description: "Chips variado",
      price: 18,
      stock: 9,
      maxStock: 12,
      restock: "2w",
    },
    {
      id: 4,
      name: "SRJL1L",
      description: "1L Leche sello rojo",
      price: 25,
      stock: 2,
      maxStock: 12,
      restock: "2w",
    },
    {
      id: 5,
      name: "GLPH1K",
      description: "1k Huevo guadalupana",
      price: 45,
      stock: 6,
      maxStock: 30,
      restock: "2w",
    },
    {
      id: 6,
      name: "FJPR1K",
      description: "1K frijol peruano",
      price: 40,
      stock: 0,
      maxStock: 10,
      restock: "1w",
    },
    {
      id: 7,
      name: "CSTCHJ",
      description: "Lata de chiles jalapeños la costeña",
      price: 12,
      stock: 12,
      maxStock: 12,
      restock: "1w",
    },
  ];

let bajoStock = inventario.filter(({stock}) => stock < 5).map(({description}) => description);



