class PlayerShip {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.direction = 'right';
    }

    move(direction) {
        this.direction = direction;
        switch (direction) {
            case 'up':
                this.y -= 1;
                break;
            case 'down':
                this.y += 1;
                break;
            case 'left':
                this.x -= 1;
                break;
            case 'right':
                this.x += 1;
                break;
            case 'up-left':
                this.x -= 1;
                this.y -= 1;
                break;
            case 'up-right':
                this.x += 1;
                this.y -= 1;
                break;
            case 'down-left':
                this.x -= 1;
                this.y += 1;
                break;
            case 'down-right':
                this.x += 1;
                this.y += 1;
                break;
        }
    }

    shoot() {
        // Shooting logic
        let hitEnemy = null;
        enemyShips.forEach((ship, index) => {
            if (this.direction === 'left' && this.x - 1 === ship.x && this.y === ship.y) {
                hitEnemy = index;
            } else if (this.direction === 'right' && this.x + 1 === ship.x && this.y === ship.y) {
                hitEnemy = index;
            } else if (this.direction === 'up' && this.y - 1 === ship.y && this.x === ship.x) {
                hitEnemy = index;
            } else if (this.direction === 'down' && this.y + 1 === ship.y && this.x === ship.x) {
                hitEnemy = index;
            }
        });

        if (hitEnemy !== null) {
            enemyShips.splice(hitEnemy, 1);
        }
    }

    draw(ctx) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x * 20, this.y * 20, 20, 20);
    }
}
