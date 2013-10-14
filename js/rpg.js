var pseudo = window.prompt("How do you want to name you character ?");
if (pseudo == undefined) {
    pseudo = "FunckinNooby"
}
;

var map = new Map("seconde");

var player = new Character("actor.png", 0, 8, 0, pseudo);
map.addCharacter(player);
var MODE = {
    PLAYING: 1,
    CHATING: 2
}
var keyboardSettings = {
    ctrl: 0,
    shift: 0,
    maj: 0
}

var mode = MODE.PLAYING;
var messageReceivedQueue = new messageQueue("Welcome to the game ", 25);

var messagesToSend = new messageQueue("Never send this one", 10);
var currentMessage = "";

window.onload = function () {
    var canvas = document.getElementById('canvas');
    var chat = document.getElementById('chat');
    var ctx = canvas.getContext('2d');
    var ctxChat = chat.getContext('2d');


    canvas.width = 13 * 64;
    canvas.height = 33 * 16;

    chat.width = 300;
    chat.height = 33 * 16;

    setInterval(function () {
        map.drawMap(ctx);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'request.php');
        xhr.setRequestHeader("pseudo", player.pseudo);
        xhr.setRequestHeader("message", messagesToSend.stringToSend());
        xhr.send();
        ctxChat.clearRect(0, 0, chat.width, chat.height);
        messageReceivedQueue.printAll(ctxChat, currentMessage);
    }, 10);

    setInterval(function () {
        if (player.direction != DIRECTION.NUL) {
            player.newCoord(map);
        }
    }, 30);


    window.onkeydown = function (event) {
        var e = event || window.event;
        var key = e.which || e.keyCode;

        if (mode === MODE.PLAYING) {

            switch (key) {
                case 38 :
                case 122 :
                case 90 :
                    player.keyDown(DIRECTION.U);
                    break;
                case 40 :
                case 115 :
                case 83 :
                    player.keyDown(DIRECTION.D);
                    break;
                case 37 :
                case 113 :
                case 81 :
                    player.keyDown(DIRECTION.L);
                    break;
                case 39 :
                case 100 :
                case 68 :
                    player.keyDown(DIRECTION.R);
                    break;
                default :
                    return true;
            }
        }
        else if (mode === MODE.CHATING) {
            switch (key) {
                case 38 :
                    if (keyboardSettings.ctrl === 1) {
                        player.keyDown(DIRECTION.U);
                    }
                    break;
                case 40 :
                    if (keyboardSettings.ctrl === 1) {
                        player.keyDown(DIRECTION.D);
                    }
                    break;
                case 37 :
                    if (keyboardSettings.ctrl === 1) {
                        player.keyDown(DIRECTION.L);
                    }
                    break;
                case 39 :
                    if (keyboardSettings.ctrl === 1) {
                        player.keyDown(DIRECTION.R);
                    }
                    break;
                case 17:
                    keyboardSettings.ctrl = 1;
                    break;
                case 16:
                    keyboardSettings.shift = 1;
                    break;
                case 20:
                    if (keyboardSettings.maj === 0) {
                        keyboardSettings.maj = 1;
                    }
                    else {
                        keyboardSettings.maj = 0;
                    }
                    break;
            }
        }
    }

    window.onkeyup = function (event) {
        var e = event || window.event;
        var key = e.which || e.keyCode;

        switch (key) {
            case 38 :
            case 122 :
            case 90 :
                player.keyUp(DIRECTION.U);
                break;
            case 40 :
            case 115 :
            case 83 :
                player.keyUp(DIRECTION.D);
                break;
            case 37 :
            case 113 :
            case 81 :
                player.keyUp(DIRECTION.L);
                break;
            case 39 :
            case 100 :
            case 68 :
                player.keyUp(DIRECTION.R);
                break;
            case 17:
                keyboardSettings.ctrl = 0;
                break;
            case 16:
                keyboardSettings.shift = 0;
                break;
            default :
                return true;
        }
    }
    window.onkeypress = function (event) {
        var e = event || window.event;
        var key = e.which || e.keyCode;

        if (mode === MODE.CHATING) {

            if ((key > 40 ) || (key !== 13 && key < 37)) {
                currentMessage += String.fromCharCode(key);
            }
            if (key === 13) {
                if (currentMessage === "") {
                    mode = MODE.PLAYING;
                }
                else {
                    messageReceivedQueue.post(currentMessage, player.pseudo);
                    currentMessage = "";
                }
            }
        }
        else if (key === 13) {
            mode = MODE.CHATING;
        }
    }
}
