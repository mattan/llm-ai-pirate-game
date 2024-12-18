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
