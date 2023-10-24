const imgDrop = document.getElementById('imgDrop');
const fileInput = document.getElementById('fileInput');
const dropZone = document.querySelector("div");
const input = document.querySelector("input");
const canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let localWidth = (canvas.width = innerWidth);
let localHeight = (canvas.height = innerHeight);
const Xcenter = localWidth / 2;
const Ycenter = localHeight / 2;
let radius,
    piece,//прогресс
    bars = 200;//количество колонок
let x,
    y,
    xEnd,
    yEnd;
let barWidth = 2,
    // высота колонки
    barHeight,
    // цвет колонки
    lineColor;

let file,
    text,
    progress,
    audio,
    frequencyArray;
let volumes;

dropZone.ondrop = e => {
    // отключаем поведение браузера по умолчанию
    e.preventDefault();
    // осуществляем проверку
    if (e.dataTransfer.items[0].kind == "file") {
        // получаем файл
        file = e.dataTransfer.items[0].getAsFile();
    } else return;
    // передаем файл
    playTrack(file);
};
dropZone.ondragover = e => {
    e.preventDefault();
};
dropZone.onclick = () => {
    // кликаем по инпуту
    input.click();
    // при изменении инпута
    input.onchange = () => {
        // получаем файл
        file = input.files[0];
        // передаем файл
        playTrack(file);
    };
};


function playTrack(file) {
    //  if (dropZone.style.display != "none") {
    dropZone.style.display = "none";
    text = document.querySelector("p");
    text.style.transform = "translate(-50%,-50%)";
    text.innerHTML = `progress: <span class="progress"></span> <br> volume: <span class="volume"></span>`;
    volumes = document.querySelector(".volume");
    progress = document.querySelector(".progress");
    // }
    audio = new Audio();
    AudioContext = new AudioContext();
    let analyzer = AudioContext.createAnalyser();
    audio.src = URL.createObjectURL(file);
    let source = AudioContext.createMediaElementSource(audio);
    source.connect(analyzer);
    analyzer.connect(AudioContext.destination);
    frequencyArray = new Uint8Array(analyzer.frequencyBinCount);
    audio.play();
    audio.loop = true;
    document.addEventListener("keydown", event => {
        if (event.code === 'Space') {
            // пуск/пауза
            audio.paused ? audio.play() : audio.pause();
            // enter
        } else if (event.code === 'Enter') {
            // стоп
            audio.load();
            // стрелка вправо
        } else if (event.code === 'ArrowRight') {
            // время воспроизведения + 10 секунд
            audio.currentTime += 10;
            // стрелка влево
        } else if (event.code === 'ArrowLeft') {
            // время воспроизведения - 10 секунд
            audio.currentTime -= 10;
            // стрелка вниз
        } else if (event.code === 'ArrowDown') {
            // громкость звука - 10%
            audio.volume -= 0.1;
            // стрелка вверх
        } else if (event.code === 'ArrowUp') {
            // громкость звука + 10%
            audio.volume += 0.1;
        }
    });
    startAnimation();

    function startAnimation() {
        canvas.style.display = 'block';
        piece = audio.currentTime / audio.duration;
        radius = 105;
        context.clearRect(0, 0, localWidth, localHeight);
        context.beginPath();
        context.arc(Xcenter, Ycenter, radius, 0, Math.PI * (2 * piece));
        context.lineWidth = 30;
        context.stroke()
        volumes.innerHTML = Math.trunc(audio.volume * 100) + "%";
        progress.innerHTML = Math.trunc(piece * 100) + "%";
        analyzer.getByteFrequencyData(frequencyArray);
        for (let i = 0; i < bars; i++) {
            radius = 120;
            let rads = Math.PI * 2 / bars;
            let barHeight = frequencyArray[i] * 0.6;
            x = Xcenter + Math.cos(rads * i) * radius;
            y = Ycenter + Math.sin(rads * i) * radius;
            xEnd = Xcenter + Math.cos(rads * i) * (radius + barHeight);
            yEnd = Ycenter + Math.sin(rads * i) * (radius + barHeight);
            drawBar(x, y, xEnd, yEnd, barWidth, frequencyArray[i]);
        }
        requestAnimationFrame(startAnimation);
    }

    function drawBar(x1, y1, x2, y2, width, frequency) {
        lineColor = "rgb(" + 255 + ", " + (165 + frequency) + "," + frequency + ")";
        context.strokeStyle = lineColor;
        context.lineWidth = width;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    }
}


