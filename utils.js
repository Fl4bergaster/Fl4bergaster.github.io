
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




class Platform {
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



requestAnimationFrame

const player = new Player()
const platforms = [
    new Platform({ 
        x: 300, 
        y: 600,
        text: 'new form'}), 
        
        new Platform({ 
        x: 600, 
        y: 300,
        text: 'rien'})
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
    //console.log(player.position.x, player.position.y, canvas.height)
    //console.log(player.isGrounded)
    
// player and platform mouvement
    // Va à droite
    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 5
        if (keys.up.pressed && player.velocity.y >= -50 && player.isGrounded == true) {
            player.velocity.y -= 10;
            player.isGrounded = false
            
        }
    }

    // Va à gauch
    else if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -5
        if (keys.up.pressed && player.velocity.y >= -50 && player.isGrounded == true) {
            player.velocity.y -= 10;
            player.isGrounded = false
           
        }
    }

    //saute 
    else if (keys.up.pressed && player.velocity.y >= -50 && player.isGrounded == true) {
        player.velocity.y -= 10;
        player.isGrounded = false
        
        
    }
    
    else {
        player.velocity.x = 0
        
        if ((player.position.y + 63.5) == canvas.height){
            player.isGrounded = true
        }

        
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
            player.isGrounded = true


            if (keys.down.pressed == true){location.href = "https://forms.office.com/r/wbZVjvDr9P";}
            
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

