
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

let gravity = 0.5

// 
class Player {
    constructor(){
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 30
        this.height = 30
        this.isGrounded = true
    }

    // Dessiner notre personnage
    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
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

class Platform {
    constructor({ x, y}) {
        this.position = {
            x,y
        }

        this.width = 200
        this.height = 20

    }

    draw(color) {
        c.fillStyle = color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

requestAnimationFrame

const player = new Player()
const platforms = [
    new Platform({ 
        x: 300, 
        y: 600}), 
        
        new Platform({ 
        x: 600, 
        y: 300})
]

const keys = {
    right:{
        pressed: false
    },
    left:{
        pressed: false
    },
    down:{
        pressed: false
    },
    up:{
        pressed: false
    }
}


function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0, canvas.width, canvas.height)
    player.update()
    platforms.forEach(platform => {
        platform.draw('yellow')
    })


// player and platform mouvement
    // Va à droite
    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 5
        if (keys.up.pressed && player.velocity.y >= -10 && player.position.y >= canvas.height - 75 && player.isGrounded == true) {
            player.velocity.y -= 2;
            this.isGrounded = false
        }
    }
    else if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -5
        if (keys.up.pressed && player.velocity.y >= -10 && player.position.y >= canvas.height - 75 && player.isGrounded == true) {
            player.velocity.y -= 2;
            this.isGrounded = false
        }
    }
    //chatgpt
    else if (keys.up.pressed && player.velocity.y >= -10 && player.position.y >= canvas.height - 75 && player.isGrounded == true) {
        player.velocity.y -= 2.5;
    }
    
    else {
        player.velocity.x = 0
        this.isGrounded = true

        
        gravity = 0.5;

        if (keys.right.pressed) {
            platforms.forEach(platform => {
                platform.position.x -= 5
            })
        }
        else if (keys.left.pressed) {
            platforms.forEach(platform => {
                platform.position.x += 5
            })
        }
    }

    // platform collison
    platforms.forEach(platform => {
    
        if (player.position.y + player.height <= platform.position.y && 
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x < platform.position.x + platform.width){
            player.velocity.y = 0
            platform.draw('pink')

            if (keys.down.pressed == true){location.href = "index.html";}
            
        }
        else {platform.draw('yellow')}
    })

    
}
animate()


addEventListener('keydown',({ keyCode }) => {
    
    switch (keyCode) {
        case 37:
            keys.left.pressed = true
            break
        case 40:
            keys.down.pressed = true
            break
        case 39:
            keys.right.pressed = true
            break
        case 38:
            keys.up.pressed = true
            break

    }
})

addEventListener('keyup',({ keyCode }) => {
    
    switch (keyCode) {
        case 37:
            keys.left.pressed = false
            break
        case 40:
            keys.down.pressed = false
            break
        case 39:
            keys.right.pressed = false
            break
        case 38:
            keys.up.pressed = false
            break

    }
})

