document.addEventListener('DOMContentLoaded', () => {
    // --- DOM要素の取得 ---
    const searchInput = document.getElementById('search-input');
    const tagButtons = document.querySelectorAll('.tag-btn');
    const gridViewBtn = document.getElementById('grid-view-btn');
    const listViewBtn = document.getElementById('list-view-btn');
    const worksList = document.getElementById('works-list');

    let allWorkItems = []; // 全ての成果物要素を保持する配列
    let selectedTags = [];

    // --- CSVデータから成果物一覧を生成 ---
    async function loadWorksFromCSV() {
        try {
            const response = await fetch('成果物一覧.csv'); // CSVファイルのパス
            if (!response.ok) {
                throw new Error('CSVファイルの読み込みに失敗しました。');
            }
            const csvText = await response.text();
            const worksData = parseCSV(csvText);

            worksList.innerHTML = ''; // コンテナをクリア
            worksData.forEach(work => {
                const workItem = createWorkItemElement(work);
                worksList.appendChild(workItem);
            });
            
            allWorkItems = worksList.querySelectorAll('.work-item'); // 生成された要素を全て取得

        } catch (error) {
            console.error('エラー:', error);
            worksList.innerHTML = '<p style="color: red;">成果物一覧の読み込みに失敗しました。</p>';
        }
    }

    // CSVテキストをパースしてオブジェクトの配列に変換
    function parseCSV(text) {
        const rows = text.split('\n').slice(1); // ヘッダー行を除外
        const data = [];
        rows.forEach(row => {
            const columns = row.split(',');
            // 企画名と詳細が空でなければデータを追加
            if (columns[2] && columns[4]) { 
                const tags = columns[6] ? columns[6].trim().split(' ').filter(tag => tag) : [];
                data.push({
                    title: columns[2].trim(),
                    description: columns[4].trim(),
                    tags: tags
                });
            }
        });
        return data;
    }

    // データからHTML要素を生成
    function createWorkItemElement(work) {
        const item = document.createElement('div');
        item.className = 'work-item';
        item.dataset.tags = work.tags.join(' ');

        // サムネイル画像（プレースホルダー）
        const img = document.createElement('img');
        img.src = `https://placehold.co/600x400/0c0c0f/ffffff?text=${encodeURIComponent(work.title)}`;
        img.alt = `${work.title}のサムネイル`;

        // 情報部分
        const info = document.createElement('div');
        info.className = 'work-info';

        const title = document.createElement('h4');
        title.textContent = work.title;

        const description = document.createElement('p');
        description.textContent = work.description;

        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'work-tags';
        work.tags.forEach(tagText => {
            const tag = document.createElement('span');
            tag.textContent = tagText;
            tagsContainer.appendChild(tag);
        });

        info.appendChild(title);
        info.appendChild(description);
        info.appendChild(tagsContainer);
        item.appendChild(img);
        item.appendChild(info);

        return item;
    }


    // --- 既存のイベントリスナーとフィルタリング関数 ---
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

        allWorkItems.forEach(item => {
            const title = item.querySelector('h4').textContent.toLowerCase();
            const description = item.querySelector('p').textContent.toLowerCase();
            const itemTags = item.dataset.tags.toLowerCase().split(' ');

            const textMatch = title.includes(searchText) || description.includes(searchText);
            const tagsMatch = selectedTags.every(tag => itemTags.includes(tag.toLowerCase()));

            if (textMatch && tagsMatch) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // --- ページの読み込み時にCSVから成果物をロード ---
    loadWorksFromCSV();
});