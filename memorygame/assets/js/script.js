var objClass, objChoronometer;
const contId = "containerGame";
const choronometerId = "chronoDisplay"; // ID del elemento donde se mostrará el cronómetro

function setLevel(value) {
    // Crea una instancia del juego con el contenedor y nivel específicos
    gameInstance = new Game(contId, value);
    
    // Crear una instancia del cronómetro con un tiempo máximo de 60 segundos
    const maxSeconds = 5;
    objChoronometer = new Chronometer(maxSeconds);

    // Iniciar el cronómetro y mostrar el tiempo en el elemento con el ID 'chronoDisplay'
    objChoronometer.start(choronometerId);

    // Llama a showImagesForSeconds para mostrar las imágenes al inicio del juego durante 3 segundos
    gameInstance.showImagesForSeconds(3);
}

function resetGame() {
    // Reinicia todos los datos del juego
    gameInstance.reset(); // Llama al método reset de la instancia de Game
    objChoronometer.stop(); // Detener el cronómetro al reiniciar el juego
}
