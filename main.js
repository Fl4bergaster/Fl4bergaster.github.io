import { Player } from './player.js'
import { Platform } from './platforms.js'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

console.log(canvas)

canvas.width = innerWidth
canvas.height = innerHeight

const player = new Player()

const platformlenght = 217
const platformheight = innerHeight -17


let platforms = [];
for (let i = -1; i <= 8; i++) {
    platforms.push(new Platform({ x: platformlenght * i, y: platformheight }));
    
  }


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

let platformposition = 0

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0, canvas.width, canvas.height)
    

    platforms.forEach(platform => {
        platform.draw(c)

        if (platform.position.x + platform.width < 0) {
            platform.position.x += platformlenght * platforms.length
        }
        if (platform.position.x > canvas.width) {
            platform.position.x -= platformlenght * platforms.length
        }

        if (player.position.y + player.height <= platform.position.y && 
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x < platform.position.x + platform.width){
            player.velocity.y = 0
            player.isGrounded = true
            
        }

    })
    

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

        if (keys.right.pressed) {
            platforms.forEach(platform => {
                platform.position.x -= 5
                platformposition -= 5 
            })
        }
        else if (keys.left.pressed) {
            platforms.forEach(platform => {
                platform.position.x += 5
                platformposition += 5
            })
        }


    }
 


}

animate()

addEventListener('keydown',({ keyCode }) => {
    
    switch (keyCode) {
        case 37:
            keys.left.pressed = true
            player.update(c, canvas.height, keys)
            break
        case 40:
            keys.down.pressed = true   
            break
        case 39:
            keys.right.pressed = true
            player.update(c, canvas.height, keys)
            break
        case 38:
            keys.up.pressed = true
            player.update(c, canvas.height, keys)  
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
