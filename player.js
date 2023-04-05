const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

let gravity = 0.5

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

    // Updater la position du personnage
    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    
        // Ajouter de la gravité
        if (this.position.y + this.height + this.velocity.y <= canvas.height){
            this.velocity.y += gravity

        }
        
        else this.velocity.y = 0
    }

}

const image = new Image();
image.src = './player.png';

