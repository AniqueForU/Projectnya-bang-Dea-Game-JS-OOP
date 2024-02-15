const canvas = document.querySelector("canvas");
const board = canvas.getContext("2d");



canvas.width = ASPECT_RATIO.WIDTH * DISPLAY_PIXEL.WIDTH
canvas.height = ASPECT_RATIO.HEIGHT * DISPLAY_PIXEL.HEIGHT

const BuatPlayer = {
    width: 20,
    height: 50,
    speed: 3,
    color: "cyan",
    position: {
        x: 0,
        y: 0, 
    }
}


const ground = new Ground('../assets/bg.jpg', canvas.width, canvas.height);
const player = new Player(BuatPlayer);

function animation() {
    
    ground.create();
    player.create();
    player.update();

    window.requestAnimationFrame(animation);
}


console.log(64 * 16)
console.log(64 * 9)

animation();

window.addEventListener("keydown", function (callback) {
    switch (callback.key) {
        case "ArrowUp":
           player.jump();
            break;
            case "ArrowRight":
            player.moveRight();
            
            
            break;
            case "ArrowLeft":
            player.moveLeft();


            break;
            
        default:
            break;
    }
})