function MostrarTexto(texto)
{
    var titulomodal = document.getElementById("staticBackdropLabel");
    var parrafo = document.getElementById("parrafomodal");

    if(texto== "1")
    {
        titulomodal.innerText = "TITULO 1";
        parrafo.innerText = "Ejemplo 1";
    }
    else{
        titulomodal.innerText = "TITULO 2";
        parrafo.innerText = "Ejemplo 2";
    }
    
}