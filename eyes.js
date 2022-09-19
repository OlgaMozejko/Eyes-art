const eye_canvas = document.getElementById('eyes_canvas');
var heightAndWidth = [];
var positionY = [];
var positionX = [];
var eyeball = [];
var innerEye = [];
var innerEyeHeight = [];
var iris = [];
var irisHeight = [];
var randomNum = [];
var timeout = [];
var blinkingtime = [];
var intervals = [];

var eye_colors = [
    '#d2e0af',
    '#abdbd7',
    '#807be0',
    '#a781b8',
    '#615a3f',
    '#735d0a',
];

function createEyeball() {

    for(let i = 1; i < 100; i++) {

eyeball[i] = document.createElement('div');

heightAndWidth[i] = Math.floor(Math.random() * (100 - 10) + 10);
innerEyeHeight[i] = heightAndWidth[i] / 1.5;
irisHeight[i] = innerEyeHeight[i] / 2;
heightAndWidth[i] = heightAndWidth[i] + 'px';
innerEyeHeight[i] = innerEyeHeight[i] + 'px';
irisHeight[i] = irisHeight[i] + 'px';
eyeball[i].style.height = heightAndWidth[i];
eyeball[i].style.width = heightAndWidth[i];
eyeball[i].style.display = 'block';
eyeball[i].style.backgroundColor = '#fffcff';
eyeball[i].style.position = 'absolute';
positionX[i] = Math.random() * (600 - 0) + 0;
positionY[i] = Math.random() * (600 - 0) + 0;
positionX[i] = positionX[i] + 'px';
positionY[i] = positionY[i] + 'px';
eyeball[i].style.transform = 'translate(' + positionX[i] + ',' + positionY[i] + ')';
eyeball[i].style.borderRadius = '50%';
eyeball[i].style.transition = '0.2s linear';
eyeball[i].style.boxShadow = "0px 0px 6px rgba(37, 37, 37, 0.6)";

eye_canvas.appendChild(eyeball[i]);

innerEye[i] = document.createElement('div');

innerEye[i].style.height = innerEyeHeight[i];
innerEye[i].style.width = innerEyeHeight[i];
innerEye[i].style.display = 'block';
randomNum[i] = Math.floor(Math.random() * (5 - 0) + 0);
innerEye[i].style.backgroundColor = eye_colors[randomNum[i]];
innerEye[i].style.borderRadius = '50%';
innerEye[i].style.position = 'absolute';
innerEye[i].style.margin = '15%';
innerEye[i].style.transition = '0.2s linear';
innerEye[i].style.boxShadow = "0px 0px 6px rgba(37, 37, 37, 0.4)";

eyeball[i].appendChild(innerEye[i]);

iris[i] = document.createElement('div');

iris[i].style.height = irisHeight[i];
iris[i].style.width = irisHeight[i];
iris[i].style.display = 'block';
iris[i].style.backgroundColor = '#232423';
iris[i].style.borderRadius = '50%';
iris[i].style.position = 'absolute';
iris[i].style.left = '25%';
iris[i].style.top = '25%';
iris[i].style.transition = '0.2s linear';
iris[i].style.boxShadow = "0px 0px 6px rgba(37, 37, 37, 0.8)";


innerEye[i].appendChild(iris[i]);

blinkingtime[i] = Math.random() * (20000 - 4000) + 4000;

function blinkingeyes() {
    timeout = 400;
    eyeball[i].style.transform = 'translate(' + positionX[i] + ',' + positionY[i] + ')' + 'scale(1, 0.1)';

    innerEye[i].style.transform = 'scale(1, 0.1)';

    iris[i].style.transform = 'scale(1, 0.1)';
    setTimeout(()=> {
        eyeball[i].style.transform = 'translate(' + positionX[i] + ',' + positionY[i] + ')' + 'scale(1, 1)';

        innerEye[i].style.transform = 'scale(1, 1)';

        iris[i].style.transform = 'scale(1, 1)';

    }, timeout);
};

intervals[i] = setInterval(blinkingeyes, blinkingtime[i]);
    
}

};

function makeArt() {
    eye_canvas.innerHTML = ' ';
    for(let i = 0; i < 100; i++) {
        window.clearInterval(intervals[i]);
    }; 
    createEyeball();
};
