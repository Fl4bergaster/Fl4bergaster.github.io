window.addEventListener('scroll', function(e) {
    e.preventDefault();
  }, { passive: false });

import { Player } from './player.js'

const player = new Player();


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0, canvas.width, canvas.height)
    player.update(c, canvas.height)


}

animate()