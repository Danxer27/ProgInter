/*
function obtenerPorId(){
    let textbox = document.getElementById("textID");
    //console.log(textbox.value);
    try {
        let elem = document.getElementById(textbox.value);
        if(elem.style.color == "blue"){
            elem.style.color = "black";
        }else{
            elem.style.color = "blue";
        }
    } catch {
        console.log(`El id ${textbox.value} no existe.`);
    }
}

function obtenerPorTag(){
    let textbox = document.getElementsByTagName("textTag");
    //console.log(textbox.value);
    try {
        let elem = document.getElementsByTagName(textbox.value);
        if(elem.style.color == "blue"){
            elem.style.color = "black";
        }else{
            elem.style.color = "blue";
        }
    } catch {
        console.log(`El id ${textbox.value} no existe.`);
    }
}

function changeImage(){
    let images = document.getElementsByTagName("img");
    for(let image of images){
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_MLFEmTS9dou5tGR2KrVKeWXiaJrWHE41Cg&s";
    }
}

let classActive = false;
function obtenerPorClass(){
    let textbox = document.getElementById("textClass");
    //console.log(textbos.value);
    let elems = document.getElementsByClassName(textbox.value);
    for(let elem of elems){
        if(classActive){
            elem.style.color="green";
        }else{
            elem.style.color = "cyan";
        }
        classActive = !classActive;
    }
}
*/

// GetElements(s)By()

//QUERY SELECTOR

function obtenerPorId(){
    let textbox = document.querySelector("#textID"); //# id, . clase
    //console.log(textbox.value);
    try {
        let elem = document.querySelector("#" + textbox.value);
        if(elem.style.color == "blue"){
            elem.style.color = "black";
        }else{
            elem.style.color = "blue";
        }
    } catch {
        console.log(`El id ${textbox.value} no existe.`);
    }
}

function obtenerPorTag(){
    let textbox = document.getElementsByTagName("textTag");
    //console.log(textbox.value);
    try {
        let elem = document.getElementsByTagName("#" + textbox.value);
        if(elem.style.color == "blue"){
            elem.style.color = "black";
        }else{
            elem.style.color = "blue";
        }
    } catch {
        console.log(`El id ${textbox.value} no existe.`);
    }
}

function changeImage(){
    let images = document.querySelectorAll("img");
    for(let image of images){
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_MLFEmTS9dou5tGR2KrVKeWXiaJrWHE41Cg&s";
    }
}

let classActive = false;
function obtenerPorClass(){ 
    let textbox = document.querySelector("#textClass"); //# id
    //console.log(textbos.value);
    let elems = document.querySelectorAll("." + textbox.value);
    for(let elem of elems){
        if(classActive){
            elem.style.color="green";
        }else{
            elem.style.color = "cyan";
        }
        classActive = !classActive;
    }
}

function changeJS(){
    document.querySelector("p").innerText="FUI MODIFICADO";

    console.log(document.querySelector("p.all").textContent)
    document.querySelector("p.all").innerHTML="<b>MAKE ME YELLOW<b>";

    // document.querySelector("p.all").textContent;
    console.log(document.querySelector("h4").getAttribute("id"));
    // console.log(document.querySelector("h4").id);
    document.querySelector("p.all").setAttribute("id", "idGreen");
    // document.querySelector("p.all").id = "idYellow";

    //Remover elmentos
    const firstli = document.querySelector("li");
    // firstli.parentElement.removeChild(firstli);
    firstli.remove();

}
    // getter de todos los atributos disponibles, ejecutar en consola
    //Cambianod estilos usando CSS
document.querySelector("h1").style;
document.querySelector("h1").style.fontSize = "5em";

let primerh6 = document.querySelector("h6");
primerh6.classList.add("mediumFont");
primerh6.classList.remove(primerh6.classList[0]);
primerh6.classList.remove("purpleStrip");

// //Navegando entre elementos
// parentElement
// childElementCount
// children[x]
// previousElementSibling
// nextElementSibling

//Agregando nuevos elementos
document.querySelector("p.all").append("Y TAN TAN");
document.querySelector("p.all").append("Habia una vez...");

//insert adjacent element
let bbinsert = document.createElement("i");
let abinsert = document.createElement("i");
let beinsert = document.createElement("i");
let aeinsert = document.createElement("i");

bbinsert.innerText = "beforebegin";
abinsert.innerText = "afterbegin";
beinsert.innerText = "beforeend";
aeinsert.innerText = "afterend";

document.querySelector("h2").insertAdjacentElement("beforebegin", bbinsert);
document.querySelector("h2").insertAdjacentElement("afterbegin", abinsert);
document.querySelector("h2").insertAdjacentElement("beforeend", beinsert);
document.querySelector("h2").insertAdjacentElement("afterend", aeinsert);


//Remover elmentos
const firstli = document.querySelector("li");
// firstli.parentElement.removeChild(firstli);
firstli.remove();