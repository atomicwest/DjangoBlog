function moveup() {
    document.getElementById("test").innerHTML = "pressed Up";
}

function movedown() {
    document.getElementById("test").innerHTML = "pressed Down";
}

function moveleft() {
    document.getElementById("test").innerHTML = "pressed Left";
}

function moveright() {
    document.getElementById("test").innerHTML = "pressed right";
}

function movedef() {
    document.getElementById("test").innerHTML = "default"
}
// left = 37
// up = 38
// right = 39
// down = 40

function keyPress(event) {
    var dir = event.which || event.keyCode;
    switch(dir) {
        case 37:
            moveleft();
            break;
        case 38:
            moveup();
            break;
        case 39:
            moveright();
            break;
        case 40:
            movedown();
            break;
        default:
            
    }
}