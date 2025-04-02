
class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.player = {
            x: 50,
            y: 200,
            size: 20,
            speed: 5
        };
        this.score = 0;
        this.obstacles = [];
        this.isRunning = true;

        document.addEventListener('keydown', this.handleInput.bind(this));
        this.gameLoop();
    }

    handleInput(e) {
        switch(e.key) {
            case 'ArrowUp':
                this.player.y -= this.player.speed;
                break;
            case 'ArrowDown':
                this.player.y += this.player.speed;
                break;
        }
    }

    createObstacle() {
        if (Math.random() < 0.02) {
            this.obstacles.push({
                x: this.canvas.width,
                y: Math.random() * (this.canvas.height - 50),
                width: 20,
                height: 50
            });
        }
    }

    updateObstacles() {
        this.obstacles = this.obstacles.filter(obs => {
            obs.x -= 3;
            return obs.x > -20;
        });
    }

    checkCollision() {
        return this.obstacles.some(obs => 
            this.player.x < obs.x + obs.width &&
            this.player.x + this.player.size > obs.x &&
            this.player.y < obs.y + obs.height &&
            this.player.y + this.player.size > obs.y
        );
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Oyuncu
        this.ctx.fillStyle = '#00ff88';
        this.ctx.fillRect(this.player.x, this.player.y, this.player.size, this.player.size);
        
        // Engeller
        this.ctx.fillStyle = 'red';
        this.obstacles.forEach(obs => {
            this.ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
        });

        // Skor
        this.ctx.fillStyle = 'white';
        this.ctx.font = '20px Arial';
        this.ctx.fillText(`Skor: ${this.score}`, 10, 30);
    }

    gameLoop() {
        if (!this.isRunning) return;

        this.createObstacle();
        this.updateObstacles();
        
        if (this.checkCollision()) {
            alert(`Oyun bitti! Skorunuz: ${this.score}`);
            this.isRunning = false;
            return;
        }

        this.score++;
        this.draw();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
}

function initGame() {
    new Game();
}
