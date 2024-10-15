// Функция для установки прогресса
function setProgress(value) {
    const circle = document.querySelector('.progress_ring_circle');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
    const offset = circumference - (value / 100) * circumference;
    circle.style.strokeDashoffset = offset;
}

document.querySelector('.value_input').addEventListener('input', function (e) {
    const value = +e.target.value;
    if (value >= 0 && value <= 100) {
        setProgress(value); 
    }
});

setProgress(50);


// Функция для управления видимостью файла
const checkbox = document.getElementById('switch_hide');
const progressBlock = document.getElementById('progress_block');
// const progressBlock = document.querySelector('.progress_ring_circle');
checkbox.addEventListener('change', function() {

    if (progressBlock.classList.contains('hidden')) {
        progressBlock.classList.remove('hidden');
    } else {
        progressBlock.classList.add('hidden');
    }

});

// Отслеживание ориентации экрана
window.matchMedia("(orientation: portrait)").addEventListener("change", e => {
    const portrait = e.matches;

    const html = document.getElementById("html");
    const body = document.getElementById("body");
    const first_half = document.querySelector(".first_half");
    const second_half = document.querySelector(".second_half");
    const panel = document.querySelector(".panel");
    const progress_ring = document.querySelector(".progress_ring");
    const phrases_animate = document.querySelector(".phrases_animate");
    const phrases_hide = document.querySelector(".phrases_hide");

    if (portrait) {
        // alert("portrait");
        html.style.flexDirection = "column";
        body.style.flexDirection = "column";
        panel.style.marginTop = "15%";
        second_half.style.alignItems = "";
        second_half.style.justifyContent = "center";
        second_half.style.paddingLeft = "0";
        progress_ring.style.paddingTop = "20%";
        phrases_animate.style.marginTop = "10px";
        phrases_hide.style.marginTop = "";

    } else {
        // alert("album");
        
        first_half.style.width = "100%";
        html.style.flexDirection = "row";
        body.style.flexDirection = "row";
        body.style.width = "-webkit-fill-available";
        second_half.style.alignItems = "center";
        panel.style.marginTop = "0";
        second_half.style.justifyContent = "start";
        second_half.style.paddingLeft = "3%";
        progress_ring.style.paddingTop = "0";
        phrases_animate.style.marginTop = "26px";
        phrases_hide.style.marginTop = "18px";

        // second_half.style.marginTop = "0";
        // second_half.style.setProperty("margin", "0", "important");
        // html.style.height = "-webkit-fill-available";
        // body.style.height = "-webkit-fill-available";
        //
    }
});

document.getElementById('switch_animate').addEventListener('change', function() {
    const progressCircle = document.querySelector('.progress_ring_circle');
    
    if (this.checked) {
        progressCircle.classList.add('animated');
    } else {
        progressCircle.classList.remove('animated');
    }
});