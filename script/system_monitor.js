document.addEventListener('DOMContentLoaded', () => {
    // --- Clock Logic ---
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ja-JP', { hour12: false });
        // We can add a date string too if needed
        const dateString = now.toLocaleDateString('ja-JP');

        const clockEl = document.getElementById('sys-clock');
        if (clockEl) {
            clockEl.textContent = `${dateString} ${timeString}`;
        }
    }
    setInterval(updateClock, 1000);
    updateClock();

    // --- Random Stats Simulation ---
    function updateStats() {
        // CPU
        const cpuBar = document.getElementById('stat-cpu-bar');
        const cpuVal = document.getElementById('stat-cpu-val');
        if (cpuBar && cpuVal) {
            const usage = Math.floor(Math.random() * 40) + 30; // 30-70%
            cpuBar.style.width = `${usage}%`;
            cpuVal.textContent = `${usage}%`;
        }

        // MEM
        const memBar = document.getElementById('stat-mem-bar');
        const memVal = document.getElementById('stat-mem-val');
        if (memBar && memVal) {
            const usage = Math.floor(Math.random() * 20) + 40; // 40-60%
            memBar.style.width = `${usage}%`;
            memVal.textContent = `${usage}%`;
        }

        // NET
        const netBar = document.getElementById('stat-net-bar');
        const netVal = document.getElementById('stat-net-val');
        if (netBar && netVal) {
            const usage = Math.floor(Math.random() * 80) + 10; // 10-90% erratic
            netBar.style.width = `${usage}%`;
            netVal.textContent = `${usage} Mbps`;
        }
    }
    setInterval(updateStats, 2000);

    // --- Log Terminal Effect (EDPS Manifesto) ---
    const manifestoLines = [
        "「面白い」「つくりたい」は、ここから始まる。",
        "[INFO] ゲームやアプリ開発も、EDPSの大切な入口です。",
        "[INFO] しかし私たちは、研究室レベルの開発にも踏み込みます。",
        "[INFO] 言語、IDE、AI、サーバー、ハードウェアまで自分たちで構築。",
        "[INFO] 作って終わりではなく、育て、運用し、進化させる。",
        "[INFO] 課題はありません。あるのは、あなたの「つくりたい」だけ。"
    ];

    const logContainer = document.querySelector('.log-content');
    let lineIndex = 0;

    function addLog() {
        if (!logContainer) return;

        // Loop through lines
        if (lineIndex < manifestoLines.length) {
            const line = document.createElement('div');
            line.className = 'log-line';
            const msg = manifestoLines[lineIndex];

            // First line special styling
            if (lineIndex === 0) {
                line.innerHTML = `<span style="color:#0ff; text-shadow:0 0 5px #0ff; font-weight:bold;">${msg}</span>`;
            } else {
                line.textContent = msg;
            }

            logContainer.appendChild(line);
            logContainer.scrollTop = logContainer.scrollHeight;

            lineIndex++;
        } else {
            // Loop after a long pause to keep it alive
            setTimeout(() => {
                logContainer.innerHTML = '';
                lineIndex = 0;
            }, 10000); // Wait 10s then restart
        }
    }
    // Run faster to show the message quickly
    setInterval(addLog, 2000);

    // --- Sector Card Interaction ---
    const sectorCards = document.querySelectorAll('.sector-card');
    let activeTimer = null; // Store timeout ID to clear race conditions

    sectorCards.forEach(card => {
        card.addEventListener('click', () => {
            // Clear existing timer if any
            if (activeTimer) clearTimeout(activeTimer);

            // Check if already active
            const isActive = card.classList.contains('active');

            // Deactivate all
            sectorCards.forEach(c => c.classList.remove('active'));

            // If it wasn't active before, activate it now
            if (!isActive) {
                card.classList.add('active');

                // Auto-revert after 3 seconds
                activeTimer = setTimeout(() => {
                    card.classList.remove('active');
                    activeTimer = null;
                }, 3000);
            }
        });
    });

});
