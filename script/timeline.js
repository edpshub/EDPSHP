document.addEventListener('DOMContentLoaded', () => {
    const feedWrapper = document.getElementById('feed-wrapper');
    if (!feedWrapper) return;

    // Mock Data simulating Discord/SNS posts
    const posts = [
        {
            id: 1,
            author: "System_Admin",
            avatar: "assets/images/logo.png", // Fallback or placeholder
            content: "EDPS公式サイトのタイムライン機能を実装テスト中。\nDiscordサーバーとの連携により、活動報告がリアルタイムで流れ込む予定です。",
            image: null,
            date: "2025-01-15 20:45",
            tags: ["DEV", "UPDATE"]
        },
        {
            id: 2,
            author: "Game_Dev_Lead",
            avatar: "",
            content: "次回作のunityプロジェクト、物理演算の調整が完了。重力の挙動がかなり気持ちよくなった。\n#GameDev #Unity",
            image: "https://placehold.co/600x300/000000/00f3ff?text=Physics+Sim+Preview", // Placeholder
            date: "2025-01-14 18:30",
            tags: ["GAME", "UNITY"]
        },
        {
            id: 3,
            author: "Infra_Bot",
            avatar: "",
            content: "[ALERT] Server Node-03 maintenance scheduled for tonight (23:00 JST). Services may be intermittent.",
            image: null,
            date: "2025-01-14 12:00",
            tags: ["INFRA", "MAINTENANCE"]
        },
        {
            id: 4,
            author: "Designer_01",
            avatar: "",
            content: "新しいUIアセットのラフ案。ネオンの輝きを強めに調整してみました。",
            image: "https://placehold.co/600x400/101020/bc13fe?text=Neon+UI+Concept",
            date: "2025-01-13 09:15",
            tags: ["DESIGN", "UI/UX"]
        }
    ];

    // Render Posts with delay
    posts.forEach((post, index) => {
        setTimeout(() => {
            const card = createPostCard(post);
            feedWrapper.appendChild(card);

            // Trigger reflow for fade-in (if we had CSS opacity transition)
            // For now just append is enough as CSS handles hover effects.
        }, index * 200); // Staggered load
    });

    function createPostCard(post) {
        const article = document.createElement('article');
        article.className = 'post-card';

        // Avatar fallback
        const avatarSrc = post.avatar || 'https://placehold.co/100x100/00f3ff/000000?text=USER';

        // Image HTML if exists
        const imageHtml = post.image ? `<img src="${post.image}" alt="Post Image" class="post-image">` : '';

        // Tags HTML
        const tagsHtml = post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('');

        article.innerHTML = `
            <div class="post-header">
                <div class="author-info">
                    <img src="${avatarSrc}" alt="${post.author}" class="author-avatar">
                    <span class="author-name">${post.author}</span>
                </div>
                <span class="post-time">${post.date}</span>
            </div>
            <div class="post-body">
                ${post.content}
            </div>
            ${imageHtml}
            <div class="post-tags">
                ${tagsHtml}
            </div>
        `;

        return article;
    }
});
