const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

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
        c.drawImage(this.image, this.position.x, this.position.y)
    }

}
const image = new Image();
image.src = './player.png';