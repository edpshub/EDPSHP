document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.card-carousel');
    const cards = document.querySelectorAll('.card');
    const container = document.querySelector('.carousel-container');

    if (!carousel || cards.length === 0) return;

    let currentIndex = 0;
    let isDragging = false;
    let startPosX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    // --- 初期状態をセットアップ ---
    updateCarousel();

    // --- イベントリスナー ---
    container.addEventListener('wheel', handleWheel, { passive: false });
    
    // PC向けドラッグ操作
    container.addEventListener('mousedown', dragStart);
    container.addEventListener('mousemove', drag);
    container.addEventListener('mouseup', dragEnd);
    container.addEventListener('mouseleave', dragEnd);

    // モバイル向けタッチ操作
    container.addEventListener('touchstart', dragStart);
    container.addEventListener('touchmove', drag);
    container.addEventListener('touchend', dragEnd);


    // --- 関数 ---
    function handleWheel(e) {
        e.preventDefault();
        if (e.deltaY > 0) {
            currentIndex = Math.min(currentIndex + 1, cards.length - 1);
        } else {
            currentIndex = Math.max(currentIndex - 1, 0);
        }
        updateCarousel();
    }
    
    function dragStart(e) {
        isDragging = true;
        startPosX = getPositionX(e);
        // ドラッグ中は滑らかなアニメーションをオフにする
        carousel.style.transition = 'none'; 
    }

    function drag(e) {
        if (isDragging) {
            const currentPosition = getPositionX(e);
            currentTranslate = prevTranslate + currentPosition - startPosX;
            setCarouselPosition();
        }
    }

    function dragEnd(e) {
        if (!isDragging) return;
        isDragging = false;
        
        const movedBy = currentTranslate - prevTranslate;

        // 一定以上スワイプされたらカードを切り替える
        if (movedBy < -100 && currentIndex < cards.length - 1) {
            currentIndex++;
        }
        if (movedBy > 100 && currentIndex > 0) {
            currentIndex--;
        }
        
        // アニメーションを元に戻す
        carousel.style.transition = 'transform 0.6s cubic-bezier(0.76, 0, 0.24, 1)';
        updateCarousel();
    }
    
    function getPositionX(e) {
        return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    }

    function setCarouselPosition() {
        carousel.style.transform = `translateX(${currentTranslate}px)`;
    }

    // カルーセルの位置と各カードの状態を更新するメインの関数
    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth;
        // カード間のマージンを動的に取得
        const margin = parseFloat(getComputedStyle(cards[0]).marginRight) + parseFloat(getComputedStyle(cards[0]).marginLeft);
        
        // ▼▼▼ 右にずらすためのオフセット値（ビューポート幅の10%）を追加 ▼▼▼
        const offset = window.innerWidth * 0.1;
        
        // カルーセル全体を移動させて、現在選択中のカードを中央から少し右に配置
        currentTranslate = (currentIndex * -(cardWidth + margin)) + offset;
        prevTranslate = currentTranslate;
        setCarouselPosition();

        // 各カードに状態（active, left, right）を割り振る
        cards.forEach((card, index) => {
            card.classList.remove('active', 'left', 'right');
            if (index === currentIndex) {
                card.classList.add('active');
            } else if (index < currentIndex) {
                card.classList.add('left');
            } else {
                card.classList.add('right');
            }
        });
    }
    
    // ウィンドウリサイズ時にカルーセルの位置を再計算
    window.addEventListener('resize', updateCarousel);
});

