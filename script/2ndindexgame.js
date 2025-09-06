document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('snake-game');
    const ctx = canvas.getContext('2d');
    const scoreElement = document.getElementById('score');
    
    const gameOverScreen = document.getElementById('game-over-screen');
    const finalScoreElement = document.getElementById('final-score');
    const restartButton = document.getElementById('restart-game');

    const gridSize = 20;
    let snake, food, score, direction, gameLoop;

    function init() {
        // Canvasのサイズをコンテナに合わせる
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.width; // 正方形にする

        snake = [{ x: 10, y: 10 }];
        food = {};
        score = 0;
        direction = 'right';
        placeFood();
        scoreElement.textContent = score;
        gameOverScreen.classList.add('hidden');
        
        if (gameLoop) clearInterval(gameLoop);
        gameLoop = setInterval(main, 100);
    }

    function main() {
        update();
        draw();
    }

    function update() {
        const head = { ...snake[0] };
        if (direction === 'right') head.x++;
        if (direction === 'left') head.x--;
        if (direction === 'up') head.y--;
        if (direction === 'down') head.y++;

        // 壁との衝突判定
        const tileCount = canvas.width / gridSize;
        if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
            return gameOver();
        }

        // 自分自身との衝突判定
        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                return gameOver();
            }
        }

        snake.unshift(head);

        // 餌を食べたかの判定
        if (head.x === food.x && head.y === food.y) {
            score++;
            scoreElement.textContent = score;
            placeFood();
        } else {
            snake.pop();
        }
    }

    function draw() {
        // 背景を描画
        ctx.fillStyle = '#0d111c';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // スネークを描画
        snake.forEach((segment, index) => {
            ctx.fillStyle = index === 0 ? '#00ffff' : '#00aaff'; // 先頭の色を変える
            ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
            ctx.strokeStyle = '#0d111c';
            ctx.strokeRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
        });

        // 餌を描画
        ctx.fillStyle = '#ff00ff';
        ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
    }

    function placeFood() {
        const tileCount = canvas.width / gridSize;
        food = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount)
        };

        // 餌がスネークの上に乗らないようにする
        for (const segment of snake) {
            if (segment.x === food.x && segment.y === food.y) {
                placeFood();
                break;
            }
        }
    }

    function changeDirection(e) {
        const key = e.key;
        if ((key === 'ArrowUp' || key === 'w') && direction !== 'down') direction = 'up';
        if ((key === 'ArrowDown' || key === 's') && direction !== 'up') direction = 'down';
        if ((key === 'ArrowLeft' || key === 'a') && direction !== 'right') direction = 'left';
        if ((key === 'ArrowRight' || key === 'd') && direction !== 'left') direction = 'right';
    }
    
    function gameOver() {
        clearInterval(gameLoop);
        finalScoreElement.textContent = score;
        gameOverScreen.classList.remove('hidden');
    }

    // イベントリスナー
    document.addEventListener('keydown', changeDirection);
    restartButton.addEventListener('click', init);

    // 操作ボタン
    document.getElementById('up').addEventListener('click', () => { if(direction !== 'down') direction = 'up' });
    document.getElementById('down').addEventListener('click', () => { if(direction !== 'up') direction = 'down' });
    document.getElementById('left').addEventListener('click', () => { if(direction !== 'right') direction = 'left' });
    document.getElementById('right').addEventListener('click', () => { if(direction !== 'left') direction = 'right' });
    
    // ウィンドウリサイズ時にゲームをリセット
    window.addEventListener('resize', init);

    init();
});
