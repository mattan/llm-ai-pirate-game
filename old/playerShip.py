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
