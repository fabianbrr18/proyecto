class Game {
    constructor(contGameGame, level) {
        this.contGame = document.getElementById(contGameGame);
        this.contCardGame = document.querySelectorAll('.contCard');
        this.serverPath = window.location.origin;
        this.uriJson = this.serverPath + "/proyecto/memorygame/assets/data/User.json";
        this.pathImg = this.serverPath + "/proyecto/memorygame/assets/img/memory/";
        this.pathImgDefault = this.serverPath + "/proyecto/memorygame/assets/img/memory/img_default.png";
        this.longBootstrap = 12 / level;
        this.newArrayGames = [];
        this.arrayGamesCard = [];
        this.getDataJson();
        this.num = level;
        this.max = 19;
        this.min = 0;
        this.maxcard = (this.num * this.num) / 2;
        this.initProgressBar();
        this.progress = document.getElementById('progressBar');
        this.currentAttempts = 0; // Inicializa el contador de intentos
        this.matchedPairs = 0; // Inicializa el contador de parejas encontradas
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/proyecto/memorygame/assets/css/styles.css'; 
        document.head.appendChild(link);
        this.reset();
    }

    
    reset() {
        // Reinicia todos los datos del juego
        this.currentAttempts = 0;
        this.matchedPairs = 0;
        this.progress.style.width = '0%';
        this.countAttempts(); // Actualiza el contador de intentos en el HTML
    }

    getDataJson() {
        fetch(this.uriJson)
            .then(response => response.json())
            .then(data => {
                this.setElements(data);
            });
    }

    getRamdonArray(min, max, count) {
        let contentGame = [];
        let contentNum = [];
        if (min > max || count > max - min) {
            return false
        }
        while (contentGame.length < count) {
            var num = Math.floor((Math.random() * (max - min)) + min);
            if (!contentNum.includes(num)) {
                contentGame.push(this.newArrayGames[num]);
                contentNum.push(num);
            }
        }

        this.arrayGamesCard = contentGame.concat(contentGame);
        return this.setShufleArray(this.arrayGamesCard);

    }

    setShufleArray(dataArray) {
        return dataArray.sort(() => Math.random() - 0.5);
    }

    setElements(arrayJson) {
        let cards = "";
        let cardsAux = "";
        let cont = 0;
        let row = this.num - 1;

        this.contGame.innerHTML = "";
        this.newArrayGames = arrayJson;
        const getNewArray = this.getRamdonArray(this.min, this.max, this.maxcard);
        for (let i = 0; i < getNewArray.length; i++) {
            cardsAux += '<div class="contCard col-' + this.longBootstrap + ' pt-2 mx-auto"><div class="card" ><img data-src="' + this.pathImg + getNewArray[i].img + '" src="' + this.pathImgDefault + '" class="card-img-top" alt="..."> <div class="card-body"><h5 class="card-title">' + getNewArray[i].nombre + '</h5><p class="card-text">' + getNewArray[i].valor + '</p></div></div></div>';
            cont++;
            if (row == cont - 1) {
                cards += '<div class="row">' + cardsAux + '</div>';
                cont = 0;
                cardsAux = "";
            }
        }
        this.contGame.innerHTML = cards;
        
        this.attachEvents();
        this.showImagesForSeconds(3); // Pasando 10 segundos como parámetro al método

    }

    /*changeElementImg() {
        var pathDefault = this.pathImgDefault
        for (let i = 0; i < this.contCardGame.length; i++) {
          const objImg = this.contCardGame[i].querySelector('img');
          this.contCardGame[i].addEventListener('click', function () {
            if (objImg.src == pathDefault) {
              objImg.src = objImg.dataset.src;
            }
          });
        }
      }*/

    
      attachEvents() {
        let flippedCards = [];
        let lockedCards = [];
        let progressBar = document.getElementById('progressBar');
        let self = this;
    
        this.contGame.addEventListener('click', event => {
            const card = event.target.closest('.card');
            if (card && !lockedCards.includes(card)) {
                const img = card.querySelector('img');
                if (img.src === this.pathImgDefault && flippedCards.length < 2) {
                    img.src = img.dataset.src;
                    card.classList.add('flip');
                    flippedCards.push(card);
                    if (flippedCards.length === 2) {
                        const img1 = flippedCards[0].querySelector('img');
                        const img2 = flippedCards[1].querySelector('img');
    
                        if (img1.src === img2.src) {
                            lockedCards.push(...flippedCards);
                            flippedCards = [];
                            this.matchCards(); // Llama a matchCards cuando se encuentran dos cartas coincidentes
    
                        } else {
                            setTimeout(() => {
                                img1.src = this.pathImgDefault;
                                img2.src = this.pathImgDefault;
                                flippedCards.forEach(card => card.classList.remove('flip'));
                                flippedCards = [];
                            }, 1000);
                        }
                        this.countAttempts(); // Llama a countAttempts después de cada intento
                    }
                }
            }
        });
    }
    
    initProgressBar() {
        const progressBar = document.getElementById('progressBar');
        // Inicializa la barra de progreso
        if (progressBar) {
            // Inicializa la barra de progreso
            progressBar.style.width = '0%';
        } else {
            console.error('No se encontró el elemento de la barra de progreso.');
        }
    }
    updateProgressBar() {
        // Calcula el progreso actual
        this.progressBarWidth = (this.matchedPairs / this.maxcard) * 100;

        // Actualiza el estilo de la barra de progreso
        this.progress.style.width = this.progressBarWidth + '%';
    }
    countAttempts() {
        // Incrementa el número de intentos y actualiza el elemento en el HTML
        this.currentAttempts++;
        document.getElementById('attemptsCount').textContent = this.currentAttempts;
        console.log('Intentos:', this.currentAttempts);
    }
    matchCards() {
        // Se llama cuando se encuentran dos cartas coincidentes
        this.matchedPairs++;
        this.updateProgressBar();
        console.log('Parejas encontradas:', this.matchedPairs);

        // Verifica si se han encontrado todas las parejas
        if (this.matchedPairs === this.maxcard) {
            console.log('¡Has ganado!');
            // Aquí puedes realizar alguna acción cuando el jugador ha completado el juego, como mostrar un mensaje de victoria.
        }
    }
    changeLevel(newLevel) {
        // Cambiar de nivel: Reiniciar el progreso de la barra y otros valores
        this.maxcard = (newLevel * newLevel) / 2;
        this.maxAttempts = 0;
        this.currentAttempts = 0;
        this.matchedPairs = 0;
        this.progressBarWidth = 0;

        // Reinicia la barra de progreso
        this.initProgressBar();
    }
    
    showImagesForSeconds(seconds) {
        const allImages = this.contGame.querySelectorAll('.card img');
        console.log("Número de imágenes:", allImages.length);
        console.log("Imagen predeterminada:", this.pathImgDefault);
    
        allImages.forEach(img => {
            img.src = img.dataset.src; // Establecer el atributo src con el valor de data-src
        });
        
        setTimeout(() => {
            allImages.forEach(img => {
                img.src = this.pathImgDefault; // Restaurar el atributo src a la imagen predeterminada después del tiempo especificado
            });
            console.log("Iniciando juego después de mostrar imágenes");
            this.startGame(); // Llamar al método startGame después de mostrar las imágenes
        }, seconds * 1000);
    }

    startGame() {
        console.log('Iniciando juego');
        // Coloca aquí el código para iniciar el juego
        // Por ejemplo, podrías llamar a attachEvents() para habilitar la interacción del usuario con las cartas
        this.attachEvents();
    }
    
}


    



