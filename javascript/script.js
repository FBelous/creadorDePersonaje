let elegir;
const nombresStats = ["Fuerza", "Destreza", "Constitución", "Inteligencia", "Sabiduría", "Carisma"];
let contenedorPersonajeDiv = document.querySelector("#contenedorPersonaje");
let botonCreador = document.querySelector("#crear");
botonCreador.addEventListener("click", respuestaClick);


class Character {

    constructor(nombre, raza, clase, str, dex, con, int, wis, cha) {
        this.nombre = nombre;
        this.raza = raza;
        this.clase = clase;
        this.strength = str;
        this.dexterity = dex;
        this.constitution = con;
        this.intelligence = int;
        this.wisdom = wis;
        this.charisma = cha;
    }  

}

const diceRoll = () => {Math.floor(Math.random() * 6) + 1;} 

function statRoll() {
    
    let statValue = [];
    for (let i = 0; i < 6; i++) {

    let statArray = [];
        statArray[0] = diceRoll(1, 6);
        statArray[1] = diceRoll(1, 6);
        statArray[2] = diceRoll(1, 6);
        statArray[3] = diceRoll(1, 6);

    let minimo = Math.min(... statArray);
    statValue[i] = (statArray[0] + statArray[1] + statArray[2] + statArray[3] - minimo);
        
    }
    
    return statValue;

}

function creacionDePersonaje() {

    /* let nombre = prompt("Ingrese el nombre de su personaje:");
    let raza = prompt("Ingrese la raza de su personaje:");
    let clase = prompt("Ingrese la clase de su personaje:"); */

    let nombre = document.getElementById("ingresarNombre").value.trim().toLowerCase();
    let raza = document.getElementById("ingresarRaza").value.trim().toLowerCase();
    let clase = document.getElementById("ingresarClase").value.trim().toLowerCase();
     

    let stats = statRoll();
    
    let fuerza = stats[0];
    let destreza = stats[1];
    let constitucion = stats[2];
    let inteligencia = stats[3];
    let sabiduria = stats[4];
    let carisma = stats[5];

    let crearPersonaje = new Character(nombre, raza, clase, fuerza, destreza, constitucion, inteligencia, sabiduria, carisma);
    return crearPersonaje;
}

function respuestaClick() {

    let personaje = creacionDePersonaje();
    
    contenedorPersonajeDiv.innerHTML = `
    <h3>Nombre: ${personaje.nombre[0].toUpperCase() + personaje.nombre.substring(1)}</h3>
    <h4>Raza: ${personaje.raza[0].toUpperCase() + personaje.raza.substring(1)}</h4>
    <h4>Clase: ${personaje.clase[0].toUpperCase() + personaje.clase.substring(1)}</h4>
    <p>${nombresStats[0] + ': ' + personaje.strength}</p>
    <p>${nombresStats[1] + ': ' + personaje.dexterity}</p>
    <p>${nombresStats[2] + ': ' + personaje.constitution}</p>
    <p>${nombresStats[3] + ': ' + personaje.intelligence}</p>
    <p>${nombresStats[4] + ': ' + personaje.wisdom}</p>
    <p>${nombresStats[5] + ': ' + personaje.charisma}</p>
    `
    
}


/* 
for (let i = 0; i < 3; i++) {
    
    let personaje = creacionDePersonaje();
    personaje.id = i + 1;

    alert("Nombre: " + personaje.nombre +
        "\nRaza: " + personaje.raza +
        "\nClase: " + personaje.clase +
        "\nFuerza: " + personaje.strength + 
        "\nDestreza: " + personaje.dexterity +
        "\nConstitución: " + personaje.constitution +
        "\nInteligencia: " + personaje.intelligence +
        "\nSabiduría: " + personaje.wisdom +
        "\nCarisma: " + personaje.charisma);
}
 */