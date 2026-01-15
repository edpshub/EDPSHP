document.addEventListener('DOMContentLoaded', () => {
    const logLayer = document.getElementById('bg-log-layer');
    if (!logLayer) return;

    const manifestoText = [
        "「面白い」「つくりたい」は、ここから始まる。",
        "ゲームやアプリ開発も、EDPSの大切な入口です。",
        "しかし私たちは、研究室レベルの開発にも踏み込みます。",
        "言語、IDE、AI、サーバー、ハードウェアまで自分たちで構築。",
        "作って終わりではなく、育て、運用し、進化させる。",
        "課題はありません。あるのは、あなたの「つくりたい」だけ。",
        "EDPS SYSTEM INITIALIZED...",
        "LOADING CORE MODULES...",
        "ACCESSING KNOWLEDGE BASE...",
        "SYNCING CREATIVE NODES...",
        "EXEC: MAKE_IT_HAPPEN();",
        "STATUS: READY_TO_CREATE",
        "----------------------------------------"
    ];

    // Create the stream container
    const stream = document.createElement('div');
    stream.className = 'bg-log-stream';

    // Repeat text to ensure it covers enough height for scrolling
    // We want a long loop.
    let fullText = "";
    for (let i = 0; i < 20; i++) {
        fullText += manifestoText.join('\n') + '\n\n';
    }
    // Duplicate the whole block to allow seamless looping if we wanted, 
    // but CSS animation typically handles 'translateY' of a tall block.
    // Ideally we duplicate the content so the top and bottom match for seamless loop.
    fullText += fullText;

    stream.textContent = fullText;
    logLayer.appendChild(stream);
});
