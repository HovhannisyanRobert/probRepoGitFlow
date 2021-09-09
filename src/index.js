import * as PIXI from 'pixi.js';
let x = 0
console.log(x);
num()
const app = new PIXI.Application({
    backgroundColor: 0x1099bb,
    width: 700,
    height: 700,
});
app.stop();

document.body.appendChild(app.view);
function num(x, y) {
    console.log(x + y)
}
num("num ", 10 + 10)


function nums(x, y) {
    console.log(x + y)
}
nums("nums ", 10 + 10)
const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
});





app.loader
    .add('spritesheet', 'img/mc.json')
    .load(onAssetsLoaded);

// console.log(app.loader);

function Cordinates(explosion, cursorX, cursorY) {
    explosion.x = cursorX;
    explosion.y = cursorY;
}

function onAssetsLoaded() {
    // create an array to store the textures
    const explosionTextures = [];

    for (let i = 0; i < 26; i++) {
        const texture = PIXI.Texture.from(`Explosion_Sequence_A ${i + 1}.png`);
        explosionTextures.push(texture);

    }

    console.log(app.screen.width);
    console.log(app.screen.height);

    function popox(x, price) {
        console.log(x);
        const explosion = new PIXI.AnimatedSprite(explosionTextures);

        console.log(explosion);

        explosion.anchor.set(Math.random());
        explosion.rotation = Math.random() * Math.PI;
        explosion.scale.set(0.75 + Math.random() * 0.5);
        explosion.gotoAndPlay(Math.random() * 15);
        Cordinates(explosion, cursorX, cursorY)

        app.stage.addChild(explosion);
        console.log(explosion);
        const basicText = new PIXI.Text(price, style);
        basicText.x = 50;
        basicText.y = 100;
        app.stage.addChild(basicText);


    }


    let cursorX;
    let cursorY;


    document.addEventListener('click', function startSalyutCorinate(evt) {

        popox(10, 4)

        //Cordinates(cursorX, cursorY )

        //    console.log(cursorX, "X");
        //    console.log(cursorY, "Y");
    })


    startBtn.addEventListener('click', function startSalyut(evt) {


    })

    app.start()

    cheapBtn.addEventListener('click', function startCheapSalyut(evt) {
        x = evt.target.value
        let price = "10.000 salyut"

        popox(x, price)
        console.log(evt.target);
        cheapBtn.setAttribute("disabled", "")

    })

    expensiveBtn.addEventListener('click', function startExpensiveSalyut(evt) {
        x = evt.target.value
        let price = "20.000 salyut"

        popox(x, price)
        expensiveBtn.setAttribute("disabled", "")


    })

    app.view.addEventListener('click', (e) => {
        x = 1
        cursorX = e.pageX;
        cursorY = e.pageY;
        popox(x)

    });

}

const startBtn = document.createElement('button')
document.body.appendChild(startBtn);
startBtn.textContent = 'Start'
startBtn.value = '10'

const cheapBtn = document.createElement('button')
document.body.appendChild(cheapBtn);
cheapBtn.textContent = '10000 dram'
cheapBtn.value = '10'


const expensiveBtn = document.createElement('button')
document.body.appendChild(expensiveBtn);
expensiveBtn.textContent = '20000 dram'
expensiveBtn.value = '50'


function arr(array) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        count += array[i] ** 2
    }
    console.log("count", count)
}
arr([1, 2, 3, 4])