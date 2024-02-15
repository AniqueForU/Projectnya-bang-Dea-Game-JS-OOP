//MERUPAKAN BOARD ATAU BLUEPRINTNYA SI PLAYER ITU SENDIRI
//BLUEPRINT PLAYER



class Player {
    constructor(ini) {
        this.width = ini.width
        this.height = ini.height
        this.color = ini.color
        this.speed = ini.speed
        this.position = {
            x: ini.position.x,
            y: ini.position.y
        }


        this.velocity = {
            x: 0,
            y: 0
        }


        this.heightJump = 100
        this.gravity = 0.5

    }

    //RUMUS GRAVITY PADA GAME
    //Kinematic equation physics
    //heightJump = vi^2 / (2 * gravity)
    //vi = math.sqrt(2* g * hj)
    // vi = Math.sqrt(2 * this.gravity * this.heightJump)

    jump() {
        return this.velocity.y = -Math.sqrt(2 * this.gravity * this.heightJump);
    }

    moveLeft() {
        this.velocity.x = -1 * this.speed;
    }


    moveRight() {
        this.velocity.x = 1 * this.speed
    }

    update() {
        const ground = canvas.height - 20 - this.height
        const Wall = canvas.width - this.width
        this.velocity.y += this.gravity
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y


        // if(this.position.x < 0) {
        //     this.position.x *= -2;
        // }

        if (player.position.y > ground) {
            console.log("jatuh")
            this.position.y = ground;
            this.jump();
        }

        if(this.position.x < 0 ) {
            this.velocity.x *= -2
        }
        
        
        if(this.position.x > Wall) {
            this.velocity.x *= -2
        } 
    }



    create() {
        
        board.fillStyle = this.color
        board.beginPath()
        board.arc(this.position.x, this.position.y, this.width, 0, 2 * Math.PI);
        board.fill();
    }
}