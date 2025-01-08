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

let turn = 0;

function handlePlayerInput(event) {
    switch (event.key) {
        case 'ArrowUp':
            playerShip.move('up');
            break;
        case 'ArrowDown':
            playerShip.move('down');
            break;
        case 'ArrowLeft':
            playerShip.move('left');
            break;
        case 'ArrowRight':
            playerShip.move('right');
            break;
        case 'w':
            playerShip.move('up-left');
            break;
        case 'e':
            playerShip.move('up-right');
            break;
        case 's':
            playerShip.move('down-left');
            break;
        case 'd':
            playerShip.move('down-right');
            break;
        case ' ':
            playerShip.shoot();
            break;
    }
    turn++;
    gameLoop();
}

document.addEventListener('keydown', handlePlayerInput);

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    playerShip.draw();
    if (turn % 2 === 0) {
        enemyShips.forEach(ship => {
            ship.moveRandomly();
            ship.draw();
        });
    } else {
        enemyShips.forEach(ship => {
            ship.draw();
        });
    }
}

gameLoop();
