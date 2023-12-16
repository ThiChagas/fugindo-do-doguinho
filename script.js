const motoboy = document.querySelector('.motoboy');
const cachorrobravo = document.querySelector('.cachorrobravo')
audioStart = new Audio('./audios/moto.mp3');
audioGameOver = new Audio('./audios/mutley.mp3');

const jump = () => {
    motoboy.classList.add('jump')
    setTimeout(() => {

        motoboy.classList.remove('jump');

    }, 500)
    audioStart.play();
}

const loop = setInterval(() => {

    console.log('lop')

    const cachorrobravoPosition = cachorrobravo.offsetLeft;
    const motoboyPosition = +window.getComputedStyle(motoboy).bottom.replace('px', '');

    if (cachorrobravoPosition <= 80 && cachorrobravoPosition > 0 && motoboyPosition < 80) {

        
        cachorrobravo.style.animation = 'none';
        cachorrobravo.style.left = `${cachorrobravoPosition}px`;

        motoboy.style.animation = 'none';
        motoboy.style.left = `${motoboyPosition}px`;

        motoboy.src = './images/1702684478753.png';
        motoboy.style.bottom = '250px';
        motoboy.style.width = '500px';
        motoboy.style.left = '400px';
        audioGameOver.play();

        clearInterval(loop);
    

    }
}, 10);


document.addEventListener('keydown', jump);