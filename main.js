const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

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
    }

    draw() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x * 20, this.y * 20, 20, 20);
    }
}

class EnemyShip {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    moveRandomly() {
        const directions = ['up', 'down', 'left', 'right'];
        const direction = directions[Math.floor(Math.random() * directions.length)];
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
        }
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x * 20, this.y * 20, 20, 20);
    }
}

const playerShip = new PlayerShip(10, 10);
const enemyShips = [
    new EnemyShip(5, 5),
    new EnemyShip(15, 15),
    new EnemyShip(20, 20)
];

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    playerShip.draw();
    enemyShips.forEach(ship => {
        ship.moveRandomly();
        ship.draw();
    });

    requestAnimationFrame(gameLoop);
}

gameLoop();
