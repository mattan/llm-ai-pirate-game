const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const playerShip = new PlayerShip(10, 10);
const enemyShips = [
    new EnemyShip(5, 5),
    new EnemyShip(15, 15),
    new EnemyShip(20, 20)
];

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
}

document.addEventListener('keydown', handlePlayerInput);

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    playerShip.draw(ctx);
    enemyShips.forEach(ship => {
        ship.moveRandomly();
        ship.draw(ctx);
    });

    requestAnimationFrame(gameLoop);
}

gameLoop();
