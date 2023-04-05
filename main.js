import { Player } from './utils.js'

const player = new Player();


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight


player.draw()

