import { Player } from './player.js'

const player = new Player();


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

console.log(canvas)

canvas.width = innerWidth
canvas.height = innerHeight

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
