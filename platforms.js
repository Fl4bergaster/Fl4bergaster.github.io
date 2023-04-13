export class Platform {
    constructor() {
        this.position = {
            x : 100, y : 100
        }

        this.width = 200
        this.height = 20
        this.text = 'allo'

    }

    draw(c) {
        c.drawImage(this.image, this.position.x, this.position.y)
    }

    
     
}

const image = new Image();
image.src = './platform.png';