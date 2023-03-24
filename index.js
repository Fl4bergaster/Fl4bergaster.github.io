const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const gravity = 0.5

class PLayer {
    constructor(){
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 1
        }
        this.width = 30
        this.height = 30
    }

    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
        this.position.y += this.velocity.y
        
        if (this.position.y + this.height + this.velocity.y <= canvas.height){
            this.velocity.y += gravity

        }
        else this.velocity.y = 0
    }
}

const player = new PLayer()
player.update()

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0, canvas.width, canvas.height)
    player.update()
}
animate()

addEventListener('keydown',({ keyCode }) => {
    console.log(keyCode)
    switch (keyCode) {
        case 37:
            console.log('left')
            break
        case 40:
            console.log('down')
            break
        case 39:
            console.log('right')
            break
        case 38:
            console.log('up')
            player.velocity.y -= 20
            break

    }
})

