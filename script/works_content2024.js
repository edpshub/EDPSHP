const worksData2024 = `
<div class="works-container">
    <h2>成果物一覧 (2024年度)</h2>
    <div class="works-controls">
        <div class="search-bar"><input type="text" id="search-input" placeholder="キーワードで検索..."></div>
        <div class="tag-filters">
            <button class="tag-btn" data-tag="アプリ">アプリ</button>
            <button class="tag-btn" data-tag="AI">AI</button>
            <button class="tag-btn" data-tag="ゲーム">ゲーム</button>
            <button class="tag-btn" data-tag="システム">システム</button>
            <button class="tag-btn" data-tag="サーバー">サーバー</button>
            <button class="tag-btn" data-tag="IOT">IOT</button>
            <button class="tag-btn" data-tag="自作PC">自作PC</button>
        </div>
        <div class="view-toggle">
            <button id="grid-view-btn" class="active">Grid</button>
            <button id="list-view-btn">List</button>
        </div>
    </div>
<div class="works-grid" id="works-list">	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	故障したPCの修理と、10台程のPCの組み立てとセットアップ	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	ヘッドホン修理とのリケーブル	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	壊れたヘアアイロンの修理	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	ロケットのエンジン出力計算プログラムを開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	外部広告用モニターと広告動画の作成	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	サーバーラックの作成	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	データ保存サーバーの設置	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	システム用サーバーの設置	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	部内ネットワークの構築	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	部室の窓の文字をLED化	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	ラズパイを使った帰宅時間をしらせる時報の作成	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	マイクラサーバーの構築	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	PythonとC++を用いた音声による文字入力とPC操作システムの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	入退出用センサーシステムの構築	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	団体Gmailの内容をリアルタイムでLineグループに転送するシステムの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	詳細な設定が可能な映像のキャプチャソフトの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	複数のPythonシステムのAPI状況と稼働状況を自動で管理メンテナンスソフトの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	1回生、初心者向け、プログラミング環境構築講座	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	1回生向けのPython講座	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	顔認証システムの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	生成Aiを用いて3Dオブジェクトデータを生成するソフトウェアの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	3Dオブジェクト生成Aiを使って3Dホラーゲームを開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	大学祭展示	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	PythonとC++を用いてアイトラッキングによるPCカーソル操作システムの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	PythonとC++を用いて音声による文字入力システムの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	EDPS公式サイトVer0.00.0を作成	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	EDPS公式サイトのバックグラウンド処理を行うRaspiサーバーを構築	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	新しい広告動画を作成	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	センサーを用いて体を動かして剣で戦う3Dアクションゲームの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	なわふぇす	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	バックエンド無しでウェブで遊べるテトリスを開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	子供向けスマホゲーム(もぐらたたき)の開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	子供向けスマホゲーム(ボール拾いゲーム)の開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	理論物理学講座	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	EDPS公式サイト（Ver0.01.0）作成したアプリケーションをDLできるEDPSHUBの追加	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	EDPS公式サイト（Ver0.01.5）EDPSHUBにウェブゲームプレイサイトの追加	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	部室前のセンサ―の前でピースをすると知らせてくれるインターホンのシステムを作成	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	EDPS公式サイト（Ver0.02.0)機関紙や掲示板の記事が公式サイトから閲覧可能に	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	作成した機関紙や掲示板の記事を自動でHTMLに変換し公式サイトにアップロードしてくれるシステムの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	Raspiとセンサーモジュールを用いて超音波センサーを作成	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	機関紙第一号の発行(CPUの歴史、オーバークロックの歴史、オーディオアプリケーションの紹介)	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	授業5分前になると教えてくれるチャイムアプリの作成	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	階層図のJsonファイルから自動でファイルやフォルダーを作成してくれるPythonプログラムの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	掲示板用記事【ひとくちプログラミング第一回】階層図通りにファイルとフォルダを自動で生成してくれるプログラムの作り方	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	室内監視カメラの設置と録画システムの構築	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	オリジナルウェブブラウザの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	イラストの差分生成Aiの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	初心者向け自作PC講座	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	ノートパソコン修理	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	高音質オーディオ環境の構築	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	自作PC1台	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	機関紙第二号の発行(おすすめソフトウェア紹介)	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	電子黒板の開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	顔認証によって管理する入退出打刻アプリケーションの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	直感的に使える天気予報ディスプレイアプリケーションの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	壊れたドライヤーの修理	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	機関紙第三号の発行(熱論理ゲートの概念モデルと可能性)	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	Opteron サーバーの修理(メモリ認識等)	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	パチンコゲームの作成	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	Opteron にWindowsServer2016をインストール	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	CUIOSの遠隔操作有効化	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	RCA to そのままオーディオ関連動作確認用コード制作	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	3.5mm to RCA メス端子 変換コード制作	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	作業台をそのまま響体にしたオーディオテスト環境の開発及び制作	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	LINEとDiscord のメッセージを同期するシステム、Linecordの開発。	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	自作スピーカー	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	デスクトプPCの修理	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	自作スピーカー(センタースピーカー)	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	立体音響環境の作成と構築	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	DSliteの修理	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	予定管理ウェブアプリ	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>									
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	オープンフレーム自作PC	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	</div>								
</div>
`;