export class Player {
    constructor(){
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.image = image
        this.width = 64
        this.height = 64
        this.isGrounded = true
        this.jumpMaxHeight = 50
    }
    // Dessiner notre personnage
    draw() {
        drawImage(this.image, this.position.x, this.position.y)
    }

}
const image = new Image();
image.src = './player.png';