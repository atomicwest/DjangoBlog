var gamepieceA, gamepieceB, score=0, comets=[];


function avatar(width, height, color, x, y, vx=0, vy=0){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.update = function() {
        var ctx = gameArea.context;
        ctx.fillStyle = color;
        // use width = -1 and height = radius for creating circles
        if (this.width == -1) {
            var circle = new Path2D();
            circle.arc(this.x, this.y, this.height, 0, 2 * Math.PI);
            ctx.fill(circle);    
        } else {
            ctx.fillRect(this.x, this.y, this.width, this.height);  
        }
    };
    
    this.newLoc = function(){
        this.x += this.vx;
        this.y += this.vy;
    }
    
    this.collide = function(impactor) {
        var selfL = this.x;
        var selfR = this.x + this.height;
        var selfU = this.y;
        var selfD = this.y + this.height;
        var otherL = impactor.x;
        var otherR = impactor.x + impactor.height;
        var otherU = impactor.y;
        var otherD = impactor.y + impactor.height;
        var hit = true;
        
        if ((selfL > otherR) || (selfR < otherL) || (selfU > otherD) || (selfD < otherU)) {
            hit = false;
        }
        return hit
    }
}

var gameArea = {
    canvas: document.createElement("canvas"),
    start: function(){
        this.canvas.width = 640;
        this.canvas.height = 480;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        
        // 50fps
        
        this.interval = setInterval(updateGameArea, 20);
        this.frameNum = 0;
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
    },
    stop: function() {
        clearInterval(this.interval);
    }
}


function atInterval(n){
    if (gameArea.frameNum/n % 1 == 0){
        return true;
    } else {
        return false;
    }
}


function randN(min,max){
    var num = Math.floor(Math.random()*(max-min+1)+min);
    while (num==0) {
        num = Math.floor(Math.random()*(max-min+1)+min);
    } 
    return num
}

function updateGameArea() {
    // comment out .clear() for a continuous line
    
    var w,h;
    
    document.getElementById("score").innerHTML = score;
    
    for(var i=0; i<comets.length; i++){
        if (gamepieceA.collide(comets[i])) {
           gameArea.stop(); 
           return;
        }
        
        if ((comets[i].x > gameArea.canvas.width) || (comets[i].y > gameArea.canvas.height)) {
            score+=1;
            comets.splice(i,1);
        }
    }
    
    gameArea.clear();
    gameArea.frameNum += 1;
    
    //create a comet every half second
    if ((gameArea.frameNum==1) || atInterval(25)){
        
        h = gameArea.canvas.height;
        var xstart = randN(200,400)
        var radius = randN(10,40);
        var randvx = randN(-5,5)
        var randvy = randN(-10,10)
        comets.push(new avatar(-1, radius, "aaaaaa", xstart, -20, randvx, randvy))
    }
    
    for (var i=0; i < comets.length; i++){
        //use below  for jitter
        // comets[i].x += randN(2,10)
        // comets[i].y += randN(2,10)
        comets[i].x += comets[i].vx;
        comets[i].y += comets[i].vy;
        comets[i].update();
    }
    
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


function startGame() {
    gamepieceA = new avatar(-1, 10, "#afff3f", 20, 25);
    gamepieceB = new avatar(-1, 5, "#3fff3f", 20, 100);
    
    // score = new
    gameArea.start();
}

