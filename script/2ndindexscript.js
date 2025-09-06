document.addEventListener('DOMContentLoaded', () => {

    // --- ① ヘッダー(H1)のアニメーションロジック ---
    const targetH1 = document.querySelector('h1');
    if (targetH1) {
        const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random() * 4}s linear both ">${letter}</span>`;
        const colorLetter = letter => `<span style="color: hsla(${Math.random() * 360}, 100%, 80%, 1);">${letter}</span>`;
        const flickerAndColorText = text =>
            text.split('').map(flickerLetter).map(colorLetter).join('');
        
        const neonGlory = target => {
            if (target && target.textContent) {
                target.innerHTML = flickerAndColorText(target.textContent);
            }
        };
        // クリック時にアニメーションを再実行
        targetH1.onclick = ({ target }) => neonGlory(target);
    }

    // --- ② サイドバーの表示切替ロジック ---
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const sidebar = document.querySelector('.sidebar');

    if (hamburgerBtn && sidebar) {
        hamburgerBtn.addEventListener('click', () => {
            sidebar.classList.toggle('is-visible');
            hamburgerBtn.classList.toggle('is-active');
        });
    }

    // --- ③ 背景切り替え用のロジック ---
    const bgSections = document.querySelectorAll('.bg-section');
    const contentSections = document.querySelectorAll('.content-section');

    const observerOptions = {
        root: null,
        rootMargin: '30px',
        threshold: 0.8 // セクションが40%見えたら切り替え
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 表示中のコンテンツセクションに対応する背景を表示
                const contentIndex = Array.from(contentSections).indexOf(entry.target);
                
                bgSections.forEach((bg, bgIndex) => {
                    if (bgIndex === contentIndex) {
                        bg.classList.add('visible');
                    } else {
                        bg.classList.remove('visible');
                    }
                });
            }
        });
    }, observerOptions);

    contentSections.forEach(section => {
        observer.observe(section);
    });
});

const target = window.document.getElementsByTagName('h1')[0]

const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
const flickerAndColorText = text => 
  text
    .split('')
    .map(flickerLetter)
    .map(colorLetter)
    .join('');
const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);


neonGlory(target);
target.onclick = ({ target }) =>  neonGlory(target);

