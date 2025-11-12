// script/articlehub.js

// 'DOMContentLoaded'イベントは、HTMLの解析が終わった時点で発火します。
// 'defer'属性を持つスクリプト（articles.js と articlehub.js）は、
// このイベントの前に実行されることが保証されています。
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('article-list-container');
    if (!container) {
        console.error('Error: article-list-container not found.');
        return;
    }

    // 'articleListData' 変数が 'article/articles.js' によって定義されているか確認します
    // 'typeof' を使って、変数が存在しない場合のエラーを防ぎます
    if (typeof articleListData === 'undefined' || !Array.isArray(articleListData)) {
        console.error('Error: articleListData is not defined or not an array.');
        console.error('確認: article/articles.js が articlehub.js より「前」に読み込まれていますか？');
        container.innerHTML = '<p>記事リストの読み込みに失敗しました。管理者にご連絡ください。</p>';
        return;
    }

    // 読み込みが成功した場合の処理（ここからは fetch を使っていた時とほぼ同じ）
    try {
        // コンテナをクリア
        container.innerHTML = ''; 

        if (articleListData.length === 0) {
            container.innerHTML = '<p>公開されている記事はまだありません。</p>';
            return;
        }

        // リストを生成
        const ul = document.createElement('ul');
        ul.className = 'article-list';

        // 記事データをコピーして逆順（新しいものが上）にしてループ
        // .slice(0) でコピーを作成し、元の配列に影響を与えないようにします
        const articles = articleListData.slice(0).reverse();

        articles.forEach(article => {
            const li = document.createElement('li');
            li.className = 'article-item';

            // PDFへのリンクを作成
            const a = document.createElement('a');
            // 'fileName' は "edps_magazine_2025_autumn.pdf" のような形式を想定
            a.href = `article/${article.fileName}`; // PDFファイルへのパス
            a.target = '_blank'; // ブラウザの新しいタブで開く
            a.rel = 'noopener noreferrer'; // セキュリティ対策

            // 記事タイトル
            const title = document.createElement('span');
            title.className = 'article-title';
            title.textContent = article.title;

            // 発行日
            const date = document.createElement('span');
            date.className = 'article-date';
            date.textContent = article.date;

            a.appendChild(title);
            a.appendChild(date);
            li.appendChild(a);
            ul.appendChild(li);
        });

        container.appendChild(ul);

    } catch (error) {
        console.error('Error processing article list:', error);
        container.innerHTML = '<p>記事リストの表示中にエラーが発生しました。</p>';
    }
});