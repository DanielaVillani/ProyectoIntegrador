


const articulo =document.querySelector("#contenido");
const button = document.querySelector("#mostrarMas");

button.addEventListener("click", leerMas);

function leerMas() {
    if (articulo.className == "cerrado") {
        articulo.className = "abierto";
        button.textContent = "Mostrar menos"
    } else {
        articulo.className = "cerrado";
        button.textContent = "Mostrar más"
    }
}


    document.getElementById("boton").addEventListener("click", function(){
    document.getElementById("Titulo").style.color = "grey"
});

    document.getElementById("boton").addEventListener("click", function(){
    document.getElementById("Informacion personal").style.display = "none"

});
    document.getElementById("boton_default").addEventListener("click", function Mostrar(){
    document.getElementById("Informacion personal").style.display = "block"
    document.getElementById("Titulo").style.color = "black"

});

    document.getElementById("Referencia").addEventListener("click", function(){
    document.getElementById("provincial").innerHTML = "Provincial Plaza Hotel Teléfono: + 54 0387 – 4322000"
    document.getElementById("Referencia").style.display = "none"

});

    document.getElementById("Referencia2").addEventListener("click", function(){
    document.getElementById("Bloomers").innerHTML = "Hotel BloomersTeléfono: + 54 0387 – 4227449"
    document.getElementById("Referencia2").style.display = "none"

});

    document.getElementById("Referencia3").addEventListener("click", function(){
    document.getElementById("Gimnasio").innerHTML = "Del Sol Gym Teléfono: + 54 0387-4219309"
    document.getElementById("Referencia3").style.display = "none"

});

    document.getElementById("Referencia4").addEventListener("click", function(){
    document.getElementById("Pasionaria").innerHTML = "La Pasionaria Resto bar & grill Teléfono: + 54 0387 – 4220026"
    document.getElementById("Referencia4").style.display = "none"

});

    document.getElementById("Referencia5").addEventListener("click", function(){
    document.getElementById("Kilowatt").innerHTML = "Kilowatt, ropa del deporte Teléfono: +54 0387 – 4222551"
    document.getElementById("Referencia5").style.display = "none"

});    

    document.getElementById("Referencia6").addEventListener("click", function(){
    document.getElementById("Casa").innerHTML = "Propietaria"
    document.getElementById("Referencia6").style.display = "none"

});  

    document.getElementById("Referencia7").addEventListener("click", function(){
    document.getElementById("Lares").innerHTML = "Inmobiliaria Lares Teléfono:  0387-4386167 | Celular: 0387-154829477"
    document.getElementById("Referencia7").style.display = "none"

});    
    document.getElementById("Referencia8").addEventListener("click", function(){
    document.getElementById("AuPair").innerHTML = "Cultural AuPair Oficina en Boston:Teléfono: + 1 617-619-2227"
    document.getElementById("Referencia8").style.display = "none"

});    

    document.getElementById("Referencia9").addEventListener("click", function(){
    document.getElementById("Lares2").innerHTML = "Inmobiliaria Lares Teléfono:  0387-4386167 | Celular: 0387-154829477"
    document.getElementById("Referencia9").style.display = "none"

});    

    document.getElementById("Referencia10").addEventListener("click", function(){
    document.getElementById("Sheraton").innerHTML = "Sheraton Salta Hotel Telefono: +54 4323000 Int: 3200    "
    document.getElementById("Referencia10").style.display = "none"

});    

    document.getElementById("Referencia11").addEventListener("click", function(){
    document.getElementById("Hertz").innerHTML = "Hertz Telefono: 011 70904000"
    document.getElementById("Referencia11").style.display = "none"

});