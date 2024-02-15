//MERUPAKAN BLUEPRINT CANVAS NYA ATAU BACKGROUNDNYA


class Ground {
    constructor(image, width, height ) {
        this.image = new Image();
        this.image.src = image
        this.width = width,
        this.height = height,
        this.position = {
            x: 0,
            y: 0
        }
    }




    create() {
        board.drawImage(this.image, this.position.x, this.position.y);
    }
}