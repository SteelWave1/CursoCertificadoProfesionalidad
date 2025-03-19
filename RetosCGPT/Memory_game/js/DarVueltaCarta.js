function cambiarImagen(elemento) {
    let imagenActual = elemento.style.backgroundImage;
    
    if (imagenActual.includes("carta_por_detras.png")) {
        elemento.style.backgroundImage = "url('img/prueba.jpg')";
    } else {
        elemento.style.backgroundImage = "url('img/carta_por_detras.png')";
    }
}