document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('works-placeholder');

    // allWorksDataは works_data.js で定義されている
    if (typeof allWorksData === 'undefined') {
        placeholder.innerHTML = '<p style="color:red; text-align:center;">データが見つかりません。</p>';
        return;
    }

    // 'アプリ' タグを持つ成果物のみをフィルタリング
    const appWorks = allWorksData.filter(work => work.tags.includes('アプリ'));
    
    //アプリケーションのHTMLを生成
    let worksHTML = `
        <div class="works-container">
            <h2>Applications</h2>
            <div class="works-controls">
                <div class="search-bar"><input type="text" id="search-input" placeholder="キーワードで検索..."></div>
                <div class="tag-filters">
                    <button class="tag-btn" data-tag="Windows">Windows</button>
                    <button class="tag-btn" data-tag="Linux">Linux</button>
                    <button class="tag-btn" data-tag="Mac">Mac</button>
                    <button class="tag-btn" data-tag="iOS">iOS</button>
                    <button class="tag-btn" data-tag="Android">Android</button>
                    <button class="tag-btn" data-tag="サーバー">サーバー</button>
                    <button class="tag-btn" data-tag="web系">web系</button>
                    <button class="tag-btn" data-tag="Dev">Developer</button>
                    <button class="tag-btn" data-tag="Dev">DiscordBOT</button>
                </div>
                <div class="view-toggle">
                    <button id="grid-view-btn" class="active">Grid</button>
                    <button id="list-view-btn">List</button>
                </div>
            </div>
            <div class="works-grid" id="works-list">`;
    
    appWorks.forEach(work => {
        // ▼▼▼ ここから変更 ▼▼▼
        // work.urlが存在し、有効な場合にのみアンカータグを生成
        const workContent = `
            <div class="work-item" data-tags="${work.tags.join(' ')}">
                <img src="${work.thumbnail || `https://placehold.co/600x400/0c0c0f/ffffff?text=${encodeURIComponent(work.title)}`}" alt="${work.title}のサムネイル" loading="lazy">
                <div class="work-info">
                    <h4>${work.title}</h4>
                    <p>${work.description}</p>
                    <div class="work-tags">
                        ${work.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                </div>
            </div>`;

        if (work.url) {
            // work.urlが指定されている場合は全体を<a>タグで囲む
            // CSSで下線などを消すためにclassを付与しています
            worksHTML += `<a href="${work.url}" class="work-item-link">${workContent}</a>`;
        } else {
            // work.urlがない場合は、divのまま（遷移しない）
            worksHTML += workContent;
        }
        // ▲▲▲ ここまで変更 ▲▲▲
    });

    worksHTML += `</div></div>`;
    placeholder.innerHTML = worksHTML;

    // 生成したHTMLに対して、絞り込み機能を有効化
    initializeWorkControls();
});



function initializeWorkControls() {
    const searchInput = document.getElementById('search-input');
    const tagButtons = document.querySelectorAll('.tag-btn');
    const gridViewBtn = document.getElementById('grid-view-btn');
    const listViewBtn = document.getElementById('list-view-btn');
    const worksList = document.getElementById('works-list');
    
    // workItemsのクエリセレクタを更新
    if (!searchInput || !worksList || !gridViewBtn || !listViewBtn) return;
    
    const workItems = worksList.querySelectorAll('.work-item-link, .work-item:not(a > .work-item)');
    let selectedTags = [];

    searchInput.addEventListener('input', filterWorks);
    tagButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            const tag = button.dataset.tag;
            if (selectedTags.includes(tag)) {
                selectedTags = selectedTags.filter(t => t !== tag);
            } else {
                selectedTags.push(tag);
            }
            filterWorks();
        });
    });

    gridViewBtn.addEventListener('click', () => {
        worksList.classList.remove('list-view');
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
    });
    listViewBtn.addEventListener('click', () => {
        worksList.classList.add('list-view');
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
    });

    function filterWorks() {
        const searchText = searchInput.value.toLowerCase();
        workItems.forEach(item => {
            // itemがaタグかdivタグかによって取得する要素を判定
            const contentContainer = item.matches('a') ? item.querySelector('.work-item') : item;
            
            const title = contentContainer.querySelector('h4').textContent.toLowerCase();
            const description = contentContainer.querySelector('p').textContent.toLowerCase();
            const itemTags = contentContainer.dataset.tags.toLowerCase().split(' ');
            const textMatch = title.includes(searchText) || description.includes(searchText);
            const tagsMatch = selectedTags.every(tag => itemTags.includes(tag.toLowerCase()));

            item.style.display = (textMatch && tagsMatch) ? '' : 'none';
        });
    }
}