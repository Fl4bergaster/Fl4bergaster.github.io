export class Platform {
    constructor({ x, y}) {
        this.position = {
            x,y
        }
        this.image = image
        this.width = 217
        this.height = 17
        

    }

    draw(c) {
        c.drawImage(this.image, this.position.x, this.position.y)
    }

    
     
}

const image = new Image();
image.src = './platform.png';