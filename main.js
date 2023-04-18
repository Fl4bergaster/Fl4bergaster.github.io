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
    
    if (isPlayerMoving) {
        c.clearRect(0,0, canvas.width, canvas.height)
        player.update(c, canvas.height, keys);
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
            isPlayerMoving = false
            break
        case 40:
            keys.down.pressed = false
            isPlayerMoving = false
            break
        case 39:
            keys.right.pressed = false
            player.velocity.x = 0
            isPlayerMoving = false
            break
        case 38:
            keys.up.pressed = false
            isPlayerMoving = false
            break

    }
})
