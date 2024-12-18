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
        if (this.direction === 'left' || this.direction === 'right') {
            console.log(`Shooting ${this.direction}`);
        } else {
            console.log('Shooting at 90-degree angle');
        }
    }

    draw(ctx) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x * 20, this.y * 20, 20, 20);
    }
}
