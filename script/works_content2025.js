const worksData2025 = `
<div class="works-container">
    <h2>成果物一覧 (2025年度)</h2>
    <div class="works-controls">
        <div class="search-bar"><input type="text" id="search-input" placeholder="キーワードで検索..."></div>
        <div class="tag-filters">
            <button class="tag-btn" data-tag="アプリ">アプリ</button>
            <button class="tag-btn" data-tag="AI">AI</button>
            <button class="tag-btn" data-tag="ゲーム">ゲーム</button>
            <button class="tag-btn" data-tag="システム">システム</button>
            <button class="tag-btn" data-tag="サーバー">サーバー</button>
            <button class="tag-btn" data-tag="電子工作">電子工作</button>
            <button class="tag-btn" data-tag="自作PC">自作PC</button>
        </div>
        <div class="view-toggle">
            <button id="grid-view-btn" class="active">Grid</button>
            <button id="list-view-btn">List</button>
        </div>
    </div>
<div class="works-grid" id="works-list">	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	新入生向けおすすめPC特設記事及びサイト	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	サーバーに直接撮影した動画データを保存するアンドロイドアプリ	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	部室の開け閉がDiscordに通知されるシステム	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	オーバークロック選手権	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	XR技術を用いて体の動きをカメラが認識しキャラクターを動かすバトルアクション３Dゲーム	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	LM358オーディオアンプ＋スピーカーの作成	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	TDA2030モノラルオーディオアンプの作成	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	新入部員向け自作PC体験型講座	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	LM358オーディオアンプ＋スピーカーのステレオ化(アンプ倍増)	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	プレイするごとにマップが変更されるホラーゲームの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	部員登録及び管理ウェブサイト開発・システムの構築	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	初心者向けプログラミング講座　Ｃ言語で時計アプリを作ろう	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	REDSTAR－OSをインストールしてみよう	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	Pythonでメモ帳アプリを作ってみよう	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	EDPSーHP修正(ver0.02.2)	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	プロンプトや材料を入力すると料理のレシピを考えてくれる生成Aiアプリの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	新入生向けに２台のPC組み立てた。	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	新入生向けUnityで作る暇つぶしゲーム。ニンジンを栽培するゲームを作った。	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	NECの古のPCケースに最近のPCを入れてみよう。	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	初心者向けマンツーマン講座Unityに触れてみよう	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	Latex互換アプリ	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	Androidで遊べる物理演算を用いたゲーム	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	Zero バックエンドアップデート	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	NJM2115Dアンプの作成	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	自作PC	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	EDPS電技合同開発スマホ注文システム「でんでんオーダー」	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	電子辞書にLinuxをインストール	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	CADで作るトイレットペーパーホルダー	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	新入生作の３Dホラーゲーム	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	Perplexicaをローカルで作動させる	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	2Dアニメーションコントローラーを独自開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	ZorinOSにてMinecraftーJavaサーバーの構築	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	機関紙第四号の発行(WInxpのインストールとネット接続)	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	新入生による3DFPSゲームの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	新入生向けC＃企画「タイマーアプリを作ろう」	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	自作MinecraftMOD第一弾「自動掘削機」	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	新入生向け企画自作動画編集ソフト	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	JavaMinecraftサーバーの構築	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	202号室5.1Ch立体音響環境を構築	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	AMDFM2＋パソコン自作	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	マウス修理	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	自作OSーEnuxの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	YoutubeをMp3ファイルに変換してDLするアプリケーション	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	Aiーggufの構築	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	アナログ回路でのテスターの自作	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	DeepseekモデルとQwenを用いた対話型Aiの自作及び構築	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	グラビトン対応ラウンチパッドWinAppの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	Discordのフォーラムの投稿の自動アーカイブを自動で再オープンしてくれるBOTの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	本を書いてくれるAi	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	YouTube Converter for Mac	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	XeonE5-2620V4デュアルCPUサーバーの構築	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	汎用ウェブソケット通信テストツール	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	オセロオンラインマルチプレイゲーム	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	EDPSサーバーV2自作クラウドストレージ	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	高速生成に重点を置いた画像生成Aiの開発。「Neo」	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	ソフトウェアを入れるだけでPCをNAS化できるアプリケーションの開発「FastNas」	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	OwnserverShocker一定時間アクセスが無いサーバーが自動で停止するのを防ぐシステムの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	EDPSサーバーデスクトップアプリケーション	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	EchoCtlV1　超音波センサーを使って何もない空間をPCのショートカットキーに	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	電子楽器グラヴィトン	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	ゲームの汎用UI制作	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	音のなる意見箱（紙を入れるとセンサーが反応しWifi経由でサーバーにHTTPリクエストが送られMP3が再生）	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	Discordからウェブサイトを更新するシステムの開発	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	サービスのURLを公開・更新するための掲示板サイト	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	サーバーを一括管理できるソフト「ServerStarter」	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	ユーザー情報プラットフォーム(Android向け)QR、NFC生成管理機能アプリ　スマートフォンをキーカードに	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	3Dプリンター修理	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	汎用機能統合AiーNeoChat	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	二つのディレクトリの内両方に存在するファイルのみをコピーするbatアプリ	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	サーバー一括管理ソフト	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	音声会話型Ai　NEOTalk	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	
  	<div class="work-item" data-tags="	準備中	">	<img src="	#	" alt="	準備中	">	<div class="work-info">	<h4>	EDPS公式サイト0.03.01　大幅なリニューアル	</h4>	<p>	準備中	</p>	<div class="work-tags"><span>	準備中	</span></div>	</div>	 </div>	 
  
    </div>
    </div>
`;