export class Player{

    constructor({ x, y, text}) {
        this.position = {
            x: 100,y: 100
        }

        this.width = 200
        this.height = 20
        this.text = text

    }

    draw(color) {
        c.fillStyle = color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}