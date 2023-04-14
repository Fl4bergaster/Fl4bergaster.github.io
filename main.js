import { Player } from './player.js'
import { Platform } from './platforms.js'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

console.log(canvas)

canvas.width = innerWidth
canvas.height = innerHeight

const player = new Player()

const platforms = [
    new Platform({ 
        x: innerHeight - 20, 
        y: 0,
        text: 'new form'}), 
        
        new Platform({ 
        x: innerHeight - 20, 
        y: 100,
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
        pressed: true
    },
    up:{
        pressed: false
    }
}


function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0, canvas.width, canvas.height)
    player.update(c, canvas.height, keys)
    platforms.forEach(platform => {
        platform.draw(c)
    })


    // player and platform mouvement
    // Va à droite
    if (keys.right.pressed && player.position.x < 800) {
        player.velocity.x = 5
        if (keys.up.pressed && player.velocity.y >= -50 && player.isGrounded == true) {
            player.velocity.y -= 10;
            player.isGrounded = false
            
        }
    }

    // Va à gauche
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

    }

    platforms.forEach(platform => {
    
        if (player.position.y + player.height <= platform.position.y && 
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x < platform.position.x + platform.width){
            player.velocity.y = 0
            player.isGrounded = true
            
        }
        
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
            player.velocity.x = 0
            break
        case 40:
            keys.down.pressed = false
            break
        case 39:
            keys.right.pressed = false
            player.velocity.x = 0
            break
        case 38:
            keys.up.pressed = false
            break

    }
})
