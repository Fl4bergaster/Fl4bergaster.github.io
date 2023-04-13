export class Platform {
    constructor({ x, y, text}) {
        this.position = {
            x,y
        }

        this.width = 200
        this.height = 20
        this.text = text

    }

    draw(color) {
        c.fillStyle = color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
        // Draw text inside the platform
        c.fillStyle = "#000000"; // set text color to black
        c.font = "12px Arial"; // set font size and type
        c.textAlign = "center"; // center the text horizontally
        c.fillText(
        this.text,
        this.position.x + this.width / 2,
        this.position.y + this.height / 2 + 4 // adjust the vertical position
        )
    }

    
     
}