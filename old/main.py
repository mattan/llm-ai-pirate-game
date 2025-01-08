class PlayerShip:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.direction = 'right'

    def move(self, direction):
        self.direction = direction
        if direction == 'up':
            self.y -= 1
        elif direction == 'down':
            self.y += 1
        elif direction == 'left':
            self.x -= 1
        elif direction == 'right':
            self.x += 1
        elif direction == 'up-left':
            self.x -= 1
            self.y -= 1
        elif direction == 'up-right':
            self.x += 1
            self.y -= 1
        elif direction == 'down-left':
            self.x -= 1
            self.y += 1
        elif direction == 'down-right':
            self.x += 1
            self.y += 1

    def shoot(self):
        # Shooting logic
        hit_enemy = None
        for index, ship in enumerate(enemy_ships):
            if self.direction == 'left' and self.x - 1 == ship.x and self.y == ship.y:
                hit_enemy = index
            elif self.direction == 'right' and self.x + 1 == ship.x and self.y == ship.y:
                hit_enemy = index
            elif self.direction == 'up' and self.y - 1 == ship.y and self.x == ship.x:
                hit_enemy = index
            elif self.direction == 'down' and self.y + 1 == ship.y and self.x == ship.x:
                hit_enemy = index

        if hit_enemy is not None:
            enemy_ships.pop(hit_enemy)

    def draw(self, ctx):
        ctx.fillStyle = 'blue'
        ctx.fillRect(self.x * 20, self.y * 20, 20, 20)


class EnemyShip:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def moveRandomly(self):
        import random
        directions = ['up', 'down', 'left', 'right']
        direction = random.choice(directions)
        if direction == 'up':
            self.y -= 1
        elif direction == 'down':
            self.y += 1
        elif direction == 'left':
            self.x -= 1
        elif direction == 'right':
            self.x += 1

    def draw(self, ctx):
        ctx.fillStyle = 'red'
        ctx.fillRect(self.x * 20, self.y * 20, 20, 20)


def handlePlayerInput(event):
    if event.key == 'ArrowUp':
        player_ship.move('up')
    elif event.key == 'ArrowDown':
        player_ship.move('down')
    elif event.key == 'ArrowLeft':
        player_ship.move('left')
    elif event.key == 'ArrowRight':
        player_ship.move('right')
    elif event.key == 'w':
        player_ship.move('up-left')
    elif event.key == 'e':
        player_ship.move('up-right')
    elif event.key == 's':
        player_ship.move('down-left')
    elif event.key == 'd':
        player_ship.move('down-right')
    elif event.key == ' ':
        player_ship.shoot()
    turn += 1
    gameLoop()


def gameLoop():
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    player_ship.draw(ctx)
    if turn % 2 == 0:
        for ship in enemy_ships:
            ship.moveRandomly()
            ship.draw(ctx)
    else:
        for ship in enemy_ships:
            ship.draw(ctx)
