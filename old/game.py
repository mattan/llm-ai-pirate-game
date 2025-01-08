from browser import document, html, timer
from playerShip import PlayerShip
from enemyShip import EnemyShip
from main import handlePlayerInput, gameLoop

canvas = document["gameCanvas"]
ctx = canvas.getContext("2d")

player_ship = PlayerShip(10, 10)
enemy_ships = [
    EnemyShip(5, 5),
    EnemyShip(15, 15),
    EnemyShip(20, 20)
]

turn = 0

def handle_keydown(event):
    handlePlayerInput(event)

document.bind("keydown", handle_keydown)

def start_game():
    gameLoop()

timer.set_interval(start_game, 1000 // 60)
