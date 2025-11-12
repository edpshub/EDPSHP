// article/articles.js

// データを 'articleListData' という名前の変数に格納します。
const articleListData = [
    {
        "title": "電脳世界第一号「オーバークロックとCPUの歴史」",
        "fileName": "1.pdf",
        "date": "2024-10-24"
    },
    {
        "title": "機関紙第二号「PCのファイル整理、楽にしませんか？ 」",
        "fileName": "2.pdf",
        "date": "2024-12-19"
    },
    {
        "title": "機関紙第三号「熱論理ゲートの概念モデル」",
        "fileName": "3.pdf",
        "date": "2025-03-10"
    },
    {
        "title": "機関紙第四号「サービス終了したWindowsXPをインストールしてみた！」",
        "fileName": "4.pdf",
        "date": "2025-05-28"
    },
    {
        "title": "機関紙第五号「VirtualBox でコピペができないときの対処法【完全ガイド】」",
        "fileName": "5.pdf",
        "date": "2025-10-12"
    },
    {
        "title": "機関紙第六号「2025年開発アプリ紹介第一弾」",
        "fileName": "6.pdf",
        "date": "2025-11-5"
    }
];

// PDFを追加する場合は、上の [...] の中に ,（カンマ）区切りで追加してください。
// 例:
// {
//     "title": "新しい記事",
//     "fileName": "new_article.pdf",
//     "date": "2025-12-01"
// },  <-- 最後に追加した要素の末尾にカンマは不要です