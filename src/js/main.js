

import { fetchChampions } from './api.js';
import logoImage from '../assets/images/logo.png';
import difficultyImage from '../assets/images/dificulty.png';
import attackImage from '../assets/images/attack.png';
import shieldImage from '../assets/images/shield.png';
import magicImage from '../assets/images/magic.png';
import iconsMuted from '../assets/images/muted.png';
import iconsAudio from '../assets/images/audio.png';
import iconsPause from '../assets/images/pause.png';
import iconsPlay from '../assets/images/play.png';
import lock from '../assets/images/lock.png';
import unlock from '../assets/images/unlock.png';

document.addEventListener('DOMContentLoaded', () => {
    const lolLogo = document.getElementById('lolLogo');

    lolLogo.addEventListener('mouseenter', () => {
        // Quitar clases previas
        lolLogo.classList.remove('giro-rapido', 'giro-medio', 'giro-lento');

        // Agregar la clase de giro rápido
        lolLogo.classList.add('giro-rapido');

        // Esperar a que termine el giro rápido y agregar el giro medio
        setTimeout(() => {
            lolLogo.classList.remove('giro-rapido');
            lolLogo.classList.add('giro-medio');

            // Esperar a que termine el giro medio y agregar el giro lento
            setTimeout(() => {
                lolLogo.classList.remove('giro-medio');
                lolLogo.classList.add('giro-lento');
            }, 1000); // Duración del giro medio
        }, 500); // Duración del giro rápido
    });



    // Selección del video
    const backgroundVideo = document.getElementById('background-video');
    const muteButton = document.getElementById('mute-button');
    const pauseButton = document.getElementById('pause-button');

    //reproducir el video al cargar la pagina
    window.onload = () => {
        backgroundVideo.muted = true; // Asegúrate de que el video esté silenciado para permitir autoplay
        backgroundVideo.play()
            .catch(error => {
                console.error('Error al reproducir el video:', error);
                // Intentar nuevamente sin silenciar si hay un error
                backgroundVideo.muted = false;
                backgroundVideo.play();
            });
    };

    // Evento para alternar entre silenciar y activar el sonido
    muteButton.addEventListener('click', () => {
        muteButton.textContent = '';
        // Crear un nuevo elemento img
        const imgElement = document.createElement('img');

        if (backgroundVideo.muted) {
            backgroundVideo.muted = false; // Activar sonido
            imgElement.src = iconsMuted; // Asignar la nueva imagen
            muteButton.appendChild(imgElement); // Agregar img al botón
            imgElement.classList.add('iconsBtn'); // agrego una clase
            muteButton.appendChild(document.createTextNode('Silenciar')); // Agregar texto
        } else {
            backgroundVideo.muted = true; // Silenciar sonido
            imgElement.src = iconsAudio; // Asignar la nueva imagen
            muteButton.appendChild(imgElement); // Agregar img al botón
            imgElement.classList.add('iconsBtn'); // agrego una clase
            muteButton.appendChild(document.createTextNode('Activar Sonido')); // Agregar texto
        }

        console.log('Nueva imagen agregada:', imgElement.src);
    });






    // Evento para pausar y reanudar el video
    pauseButton.addEventListener('click', () => {
        pauseButton.textContent = '';
        // Crear un nuevo elemento img
        const imgElement = document.createElement('img');
        if (backgroundVideo.paused) {
            backgroundVideo.play();
            imgElement.src = iconsPause; // Asignar la nueva imagen
            pauseButton.appendChild(imgElement); // Agregar img al botón
            imgElement.classList.add('iconsBtn'); // agrego una clase
            pauseButton.appendChild(document.createTextNode('Pausar')); // Cambiar texto del botón a 'Pausar'
        } else {
            backgroundVideo.pause();
            imgElement.src = iconsPlay; // Asignar la nueva imagen
            pauseButton.appendChild(imgElement); // Agregar img al botón
            imgElement.classList.add('iconsBtn'); // agrego una clase
            pauseButton.appendChild(document.createTextNode('Play')); // Cambiar texto del botón a 'Reanudar'
        }

        console.log('Nueva imagen agregada:', imgElement.src);
    });






    // Función principal para cargar campeones
    const championsContainer = document.getElementById('champions-container');

    async function loadChampions() {
        try {
            const champions = await fetchChampions();
            Object.values(champions).forEach(champion => {
                // Crear la estructura de la tarjeta
                const championCard = document.createElement('div');
                championCard.classList.add('card');
                championCard.setAttribute('tabindex', '0'); // Mejora de accesibilidad

                const cardInner = document.createElement('div');
                cardInner.classList.add('card-inner');

                const cardFront = document.createElement('div');
                cardFront.classList.add('card-front');
                cardFront.innerHTML = `
                <h3>${champion.name}</h3>
                <img class="avatar" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg" alt="${champion.name}">
                <img class="logo" src="${logoImage}">
            `;

                const cardBack = document.createElement('div');
                cardBack.classList.add('card-back');
                let difficultyIcons = '';
                let attackIcons = '';
                let shieldIcons = '';
                let magicIcons = ''
                const maxIcons = 5;


                for (let i = 0; i < Math.min(champion.info.difficulty, maxIcons); i++) {
                    difficultyIcons += `<img class="icons-detail" src="${difficultyImage}" alt="Difficulty Icon">`;
                }
                if (champion.info.difficulty > maxIcons) {
                    const remaining = champion.info.difficulty - maxIcons;
                    difficultyIcons += `<span class="difficulty-more">+${remaining}</span>`;
                }

                for (let i = 0; i < Math.min(champion.info.attack, maxIcons); i++) {
                    attackIcons += `<img class="icons-detail" src="${attackImage}" alt="Attack Icon">`;
                }
                if (champion.info.attack > maxIcons) {
                    const remainingAttack = champion.info.attack - maxIcons;
                    attackIcons += `<span class="attack-more">+${remainingAttack}</span>`;
                }

                for (let i = 0; i < Math.min(champion.info.defense, maxIcons); i++) {
                    shieldIcons += `<img class="icons-detail" src="${shieldImage}" alt="Shield Icon">`;
                }
                if (champion.info.shield > maxIcons) {
                    const remainingShield = champion.info.defense - maxIcons;
                    shieldIcons += `<span class="shield-more">+${remainingShield}</span>`;
                }

                for (let i = 0; i < Math.min(champion.info.magic, maxIcons); i++) {
                    magicIcons += `<img class="icons-detail" src="${magicImage}" alt="Magic Icon">`;
                }
                if (champion.info.magic > maxIcons) {
                    const remainingMagic = champion.info.magic - maxIcons;
                    magicIcons += `<span class="magic-more">+${remainingMagic}</span>`;
                }

                cardBack.innerHTML = `
                <p class="card-title">${champion.title}</p>
                <div class="img-back">
                    <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg" alt="${champion.name}">
                </div>
                <div class="card-details">
                    <h3>${champion.name}</h3><hr>
                    <div class="card-intro">
                        <p><strong>Rol:</strong><small>${champion.tags.join('</small> <small>')}</small></p>
                        <p><strong>Dificultad:</strong> <span>${difficultyIcons == 0 ? 'Sin habilidad' : difficultyIcons}</span></p>
                        <p><strong>Magia:</strong> <span>${magicIcons == 0 ? 'Sin habilidad' : magicIcons}</span></p>
                        <p><strong>Ataque:</strong> <span>${attackIcons == 0 ? 'Sin habilidad' : attackIcons}</span></p>
                        <p><strong>Defenza:</strong> <span>${shieldIcons == 0 ? 'Sin habilidad' : shieldIcons}</span></p>
                    </div>
                    <buttom class="lock-button"><img src="${unlock}"></buttom>
                </div>
            `;



                cardInner.appendChild(cardFront);
                cardInner.appendChild(cardBack);
                championCard.appendChild(cardInner);
                championsContainer.appendChild(championCard);

                // Eventos de interacción para girar y sonido
                // championCard.addEventListener('pointerenter', () => {
                //     championCard.classList.add('is-flipped');
                //     slashSound.currentTime = 0;
                //     slashSound.play();

                // });

                //Eventos de interacción para resplandor
                championCard.addEventListener('mousemove', () => {


                });
                // Selección de todas las tarjetas y botones de bloqueo
                const championCards = document.querySelectorAll('.card');

                championCards.forEach((championCard) => {
                    let isLocked = false; // Estado de bloqueo individual para cada carta
                    const lockButton = championCard.querySelector('.lock-button'); // Botón específico de cada carta

                    // Evento de click en el botón de bloqueo/desbloqueo
                    lockButton.addEventListener('click', (event) => {
                        event.stopPropagation(); // Evitar que el clic se propague al resto de la tarjeta
                        const imgElement = lockButton.querySelector('img') || document.createElement('img');
                        if (isLocked) {
                            isLocked = false;
                            imgElement.src = unlock; // Cambiar a imagen de desbloqueo
                            if (!lockButton.contains(imgElement)) {
                                lockButton.appendChild(imgElement); // Asegurarse de que la imagen esté en el botón
                            }
                            championCard.classList.remove('is-locked'); // Quitar clase de estado bloqueado
                            const lockSound = document.getElementById('lock-sound');
                            lockSound.play().catch((error) => console.error('Error al reproducir el sonido:', error));
                            console.log('Tarjeta desbloqueada');
                        } else {
                            isLocked = true;
                            imgElement.src = lock; // Cambiar a imagen de bloqueo
                            if (!lockButton.contains(imgElement)) {
                                lockButton.appendChild(imgElement); // Asegurarse de que la imagen esté en el botón
                            }
                            championCard.classList.add('is-locked'); // Agregar clase de estado bloqueado
                            const lockSound = document.getElementById('lock-sound');
                            lockSound.play().catch((error) => console.error('Error al reproducir el sonido:', error));
                            console.log('Tarjeta bloqueada');
                        }
                    });

                    // Evento para girar la tarjeta, solo si no está bloqueada
                    championCard.addEventListener('click', () => {
                        if (!isLocked) {
                            championCard.classList.add('is-flipped'); // Girar la tarjeta
                            const slashSound = document.getElementById('slash-sound');
                            slashSound.play().catch((error) => console.error('Error al reproducir el sonido:', error));
                        }
                    });

                    // Evento para restablecer la tarjeta al salir del puntero, solo si no está bloqueada
                    championCard.addEventListener('pointerleave', () => {
                        if (!isLocked) {
                            championCard.classList.remove('is-flipped');
                        }
                    });

                    // **Nuevo comportamiento: cambiar el color del borde en doble clic si está bloqueada**
                    championCard.addEventListener('dblclick', () => {
                        if (isLocked) {
                            const originalBorderColor = getComputedStyle(championCard).borderColor; // Guardar el color original
                            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Generar un color aleatorio
                            championCard.style.borderColor = randomColor; // Cambiar el borde a color aleatorio
                            console.log(`Nuevo color de borde: ${randomColor}`);

                            // Restaurar el color original después de 2 segundos
                            setTimeout(() => {
                                championCard.style.borderColor = "";
                                championCard.style.borderColor = originalBorderColor;
                                console.log('Color del borde restaurado');
                            }, 2000);
                        }
                    });
                });

            });
        } catch (error) {
            console.error('Error al cargar los campeones:', error);
            championsContainer.innerHTML = `<p>Error al cargar los campeones, Por favor intenta más tarde.</p>`;
        }
    }

    loadChampions();

});
