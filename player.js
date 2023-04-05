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
    draw(c) {
        c.drawImage(this.image, this.position.x, this.position.y)
    }

    // Updater la position du personnage
    update(c, canvasHeight, keys) {
        this.draw(c)
        this.move(keys)
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    
        // Ajouter de la gravité
        if (this.position.y + this.height + this.velocity.y <= canvasHeight){
            this.velocity.y += gravity

        }
        
        else this.velocity.y = 0
    }

    move(keys){
        console.log(keys['right']['pressed'])
        console.log(keys.right.pressed)

        



    }

}

const image = new Image();
image.src = './player.png';

