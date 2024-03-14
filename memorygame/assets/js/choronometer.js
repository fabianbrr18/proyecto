class Chronometer {
    constructor(maxTime) {
        this.seconds = 0;
        this.intervalId = null;
        this.displayElement = document.getElementById('chronoDisplay'); // Obtener el elemento HTML donde se mostrará el tiempo
        this.maxTime = maxTime; // Tiempo máximo en segundos
    }

    // Método para iniciar el cronómetro
    start() {
        this.intervalId = setInterval(() => {
            this.seconds++;
            this.displayElement.textContent = `${this.formatTime(this.seconds)}`; // Mostrar el tiempo en el elemento HTML
            if (this.seconds === this.maxTime) {
                this.stop();
            }
        }, 1000);
    }

    // Método para detener el cronómetro
    stop() {
        clearInterval(this.intervalId);
    }

    // Método para formatear el tiempo en formato mm:ss
    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${this.padZero(minutes)}:${this.padZero(remainingSeconds)}`;
    }

    // Método para agregar un cero inicial si el valor es menor que 10
    padZero(value) {
        return value < 10 ? `0${value}` : value;
    }

    // Otros métodos del cronómetro, como pausar, reiniciar, etc.
}
