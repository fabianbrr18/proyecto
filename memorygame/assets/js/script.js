var objClass;
const contId = "containerGame";

function setLevel(value) {
    // Crea una instancia del juego con el contenedor y nivel específicos
    gameInstance = new Game(contId, value);

    // Llama a showImagesForSeconds para mostrar las imágenes al inicio del juego durante 3 segundos
    gameInstance.showImagesForSeconds(3);
}
function resetGame() {
    // Reinicia todos los datos del juego
    gameInstance.reset(); // Llama al método reset de la instancia de Game
}