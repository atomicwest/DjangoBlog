var gamepieceA;
var gamepieceB;
var score;

function avatar(width, height, color, x, y){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.update = function() {
        var ctx = gameArea.context;
        ctx.fillStyle = color;
        // ctx.fillRect(this.x, this.y, this.width, this.height);    
        var circle = new Path2D();
        circle.arc(this.x, this.y, 25, 0, 2 * Math.PI);
    
        ctx.fill(circle);
    };
    
    this.newLoc = function(){
        this.x += this.vx;
        this.y += this.vy;
    }
    
}

var gameArea = {
    canvas: document.createElement("canvas"),
    start: function(){
        this.canvas.width = 640;
        this.canvas.height = 480;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function(e) {
            // gameArea.keys = gameArea.keys || [];
            gameArea.keys = gameArea.keys || {};
            gameArea.keys[e.keyCode] = true;
        });
        window.addEventListener('keyup', function(e) {
            // gameArea.keys = gameArea.keys || [];     //this creates an array object that behaves like an object but allocates space for 37 other slots
            gameArea.keys = gameArea.keys || {};
            gameArea.keys[e.keyCode] = false;
        })
    },
    
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


function startGame() {
    gamepieceA = new avatar(225, 225, "#afff3f", 20, 25);
    gamepieceB = new avatar(225, 225, "#3fff3f", 20, 100);
    
    gameArea.start();
}

function updateGameArea() {
    // comment out .clear() for a continuous line
    gameArea.clear();
    // npc movement
    // gamepieceA.x += 1;
    // gamepieceA.y += 1;
    // gamepieceA.update();
    gamepieceB.x += 3;
    gamepieceB.y += 2;
    
    if (gameArea.keys && gameArea.keys[37]) {
        gamepieceA.vx = -1
    } else if (gameArea.keys && gameArea.keys[38]) {
        (gamepieceA.vy = -1)
    } else if (gameArea.keys && gameArea.keys[39]) {
        (gamepieceA.vx = 1) 
    } else if (gameArea.keys && gameArea.keys[40]) {
        (gamepieceA.vy = 1) 
    } else {
        gamepieceA.vx=0
        gamepieceA.vy=0
    }
    
    gamepieceA.newLoc();
    // gamepieceB.newLoc();
    
    gamepieceA.update();
    gamepieceB.update();
}



