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

let isPlayerMoving = false;

function animate(){
    requestAnimationFrame(animate)
    console.log(isPlayerMoving)

    if(player.isGrounded == false){

        isPlayerMoving = true
    }

    if (isPlayerMoving) {
        c.clearRect(0,0, canvas.width, canvas.height)
        player.update(c, canvas.height, keys);

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
            isPlayerMoving = false
            if ((player.position.y + 63.5) == canvas.height){
                player.isGrounded = true
                isPlayerMoving = false
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

    

}

animate()

addEventListener('keydown',({ keyCode }) => {
    
    switch (keyCode) {
        case 37:
            keys.left.pressed = true
            isPlayerMoving = true
            break
        case 40:
            keys.down.pressed = true  
            isPlayerMoving = true 
            break
        case 39:
            keys.right.pressed = true
            isPlayerMoving = true
            break
        case 38:
            keys.up.pressed = true
            isPlayerMoving = true
              
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
