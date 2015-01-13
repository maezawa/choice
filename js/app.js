'use strict';

var path = { url: '/shirtdesign', templ: '/template'};
var designApp = angular.module('designApp', ['ngRoute', 'ngStorage']);

designApp
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
		.when(path.url + '/cloth/',				{templateUrl: path.templ + '/cloth.htm',			controller: 'DesignCtrl'})
		.when(path.url + '/sleeve/',			{templateUrl: path.templ + '/sleeve.htm',			controller: 'DesignCtrl'})
		.when(path.url + '/collar/',			{templateUrl: path.templ + '/collar.htm',			controller: 'DesignCtrl'})
		.when(path.url + '/cleric/',			{templateUrl: path.templ + '/cleric.htm',			controller: 'DesignCtrl'})
		.when(path.url + '/cuff/',				{templateUrl: path.templ + '/cuff.htm',				controller: 'DesignCtrl'})
		.when(path.url + '/button/',			{templateUrl: path.templ + '/button.htm',			controller: 'DesignCtrl'})
		.when(path.url + '/thread/',			{templateUrl: path.templ + '/thread.htm',			controller: 'DesignCtrl'})
		.when(path.url + '/pocket/',			{templateUrl: path.templ + '/pocket.htm',			controller: 'DesignCtrl'})
		.when(path.url + '/front/',				{templateUrl: path.templ + '/front.htm',			controller: 'DesignCtrl'})
		.when(path.url + '/embroidery/',	{templateUrl: path.templ + '/embroidery.htm',	controller: 'EmbroideryCtrl'})
		.when(path.url + '/confirm/',			{templateUrl: path.templ + '/confirm.htm',		controller: 'ConfirmCtrl'})
		.when(path.url + '/measure/',			{templateUrl: path.templ + '/measure.htm',		controller: 'MeasureCtrl'})
		.otherwise({redirectTo: path.url + '/cloth/'})
}])

.value('parts',{
	cloth:		[
							{id:  1, code: 'sh401', name: 'ブロード(ホワイト)', desc: '表面の滑らかな光沢が特徴的。'},
							{id:  2, code: 'sh402', name: 'ロイヤルオックス', desc: 'きめ細かくシルク的な光沢さが特徴的。ドレッシーな雰囲気がありビジネスシーンにも最適。'},
							{id:  3, code: 'sh403', name: 'ツイル(ホワイト)', desc: '柔らかく光沢あり、シワになりにくいのが特徴。肌触りも良い。'},
							{id:  4, code: 'sh404', name: 'シャドーストライプ(ブルー)', desc: '無地のような生地。光の当たる角度で光沢が出るためお洒落が演出が可能。'},
							{id:  5, code: 'sh405', name: 'ダイアモンドシャドーストライプ(ブルー)', desc: 'ダイヤモンドシャドーストライプ柄。パーティーなどのシーンにもオススメ。'},
							{id:  6, code: 'sh406', name: 'ブロード(ブルー)', desc: 'サックスブルーは、同意と協調性に溢れる色です。'},
							{id:  7, code: 'sh407', name: 'ツイル(ライトブルー)', desc: 'ツイル本来のふんわりした生地感と光沢に加えて、ブルーの包み込むようなイメージでひと味違った生地。'},
							{id:  8, code: 'sh408', name: 'シャドーストライプ(ライトブルー)', desc: 'シャドーストライプ柄、ブルーの知的な印象で存在感が溢れ生地。'},
							{id:  9, code: 'sh409', name: 'ダイヤモンドシャドーストライプ(ブルー)', desc: 'ビジネスシーンはもちろん、急なパーティーやディナーにも最適な生地。'},
							{id: 10, code: 'sh410', name: 'ストライプ(Narrow)', desc: 'シャープな印象を与えるストライプ柄。身長も高く見せる効果があるのでオススメ。'},
							{id: 11, code: 'sh411', name: 'ストライプ(Bold)', desc: 'やや太めのストライプ柄。外資や海外出張が多い方にオススメ。'},
							{id: 12, code: 'sh412', name: 'ツイル(ピンク)', desc: 'ピンクのイメージは優しさとエレガント。女性からの指示も高いピンク生地。'},
							{id: 13, code: 'sh413', name: 'バーチカルストライプ', desc: '女性人気が高いストライプ柄。紫の神秘的な雰囲気が女性上司の心を和ませる。'},
							{id: 15, code: 'sh415', name: 'ギンガムチェック', desc: 'ソフトなイメージ作りに一役買う。ギンガムチェック柄。'},
							{id: 16, code: 'sh416', name: 'ヘリンボーン(ピンク)', desc: '高級紳士服であつかわれるような生地です。耐久性にも優れています。'},
							{id: 17, code: 'sh417', name: 'ヘリンボーン(ブルー)', desc: '高級紳士服であつかわれるような生地です。耐久性にも優れています。'},
							{id: 18, code: 'sh418', name: 'ロンドンストライプ', desc: 'サックスブルーのストライプ柄。スーツと合わせて爽やかな印象を感じられます。'},
							{id: 19, code: 'sh419', name: 'ツイルライト', desc: '濃い青にツイルの柔らかな光沢。誠実でクレバーな印象を与えます。'},
							{id: 20, code: 'sh420', name: 'ロイヤルオックスフォード(ホワイト)', desc: '白生地で一番人気のロイヤルオックスフォード。オールマイティに対応します。'},
							{id: 21, code: 'sh421', name: 'ロイヤルオックスフォード(ブルー)', desc: '高級感を感じさせるオックスフォード生地。男性、女性から共に人気の生地。'}
						],
	sleeve:			[{id: 1, name: '長袖'}, {id: 2, name: '半袖'}],
	collar:			[
								{id: 1, name: 'ワイド', desc: '衿の開きが 100~120度前後の衿型です。首周りがスッキリして見えます。レギュラーと並んで人気があります。'},
								{id: 2, name: 'レギュラー', desc: 'もっともポピュラーな襟型です。ビジネス・フォーマルとシーンを選ばずに着用できます。'},
								{id: 3, name: 'ホリゾンタイル', desc: 'イタリアの男性にも人気に衿型。衿の開きが180度に近い衿型でクールビズにオススメに衿型です。'},
								{id: 4, name: 'ドゥオボットーニ', desc: 'イタリア語で2つボタンを意味する言葉。衿型が高く、ノーネクタイの際に最もオススメ。カジュアルな部類なのでジャケットは無地が良いです。'},
								{id: 5, name: 'ボタンダウン', desc: 'ネクタイを締めなくても襟が落ちる事がない。カジュアルな印象で若々しさを演出できます。'}
							],
	cleric:			[
								{id: 1, name: 'なし', desc: ''},
								{id: 2, name: '襟と袖', desc: '接客業は営業職に爽やかな印象を与えるので好まれる。特にカフスボタンとの組み合わせによって大人でさりげないお洒落が演出可能。'},
								{id: 3, name: '襟のみ', desc: '接客業は営業職に爽やかな印象を与えるので好まれる。特にカフスボタンとの組み合わせによって大人でさりげないお洒落が演出可能。'}
							],
	cuff:				[
								{id: 1, name: '丸形：シングル', desc: '柔らかい印象を与える丸形に加え、一つボタンはオーダーシャツの醍醐味です。'},
								{id: 2, name: '丸形：ダブル', desc: '縦に二つ連なるボタンで既製品には出せないお洒落感を演出します。'},
								{id: 3, name: '丸形:コンバーチブル', desc: 'ビジネスで主に使われるカフス。既製品で最もポピュラーなひとつとして用いられます。※2つのカフススタイルで楽しめます(ボタン、カフスリンクス共に利用可能)。'},
								{id: 4, name: '角形：シングル', desc: 'シャープな印象を与える角形に加え一つボタンはオーダーシャツの醍醐味です。'},
								{id: 5, name: '角形：ダブル', desc: '縦に二つ連なるボタンで既製品には出せないお洒落感を演出します。'},
								{id: 6, name: '角形:コンバーチブル', desc: 'ビジネスで主に使われるカフス。丸形よりシャープな印象を与えます。※2つのカフススタイルで楽しめます(ボタン、カフスリンクス共に利用可能)。'},
								{id: 7, name: 'ダブルカフス', desc: 'カフスボタンで留めるスタイルは装飾性が高く人気。フォーマルな場面や大事な商談の際に用いられます。'}
							],
	button:			[
								{id: 1, name: 'ホワイト', kind: 'プラスチックボタン'},
								{id: 2, name: 'ブラック', kind: 'プラスチックボタン'},
								{id: 3, name: 'ピンク', kind: 'プラスチックボタン'},
								{id: 4, name: 'ブルー', kind: 'プラスチックボタン'},
								{id: 5, name: 'ブラウン', kind: 'プラスチックボタン'},
								{id: 6, name: 'ホワイト', kind: 'シェルボタン'},
								{id: 7, name: 'ブラック', kind: 'シェルボタン'}
							],
	thread:			[
								{id: 1, name: 'ホワイト'},
								{id: 2, name: 'ブラック'},
								{id: 3, name: 'グレー'},
								{id: 4, name: 'ブルー'},
								{id: 5, name: 'レッド'},
								{id: 6, name: 'ピンク'}
							],
	pocket:			[	{id: 1, name: 'あり'}, {id: 2, name: 'なし'}],
	front:			[	{id: 1, name: '裏前立て', desc: 'ヨーロッパスタイルで清潔な印象を与えます。ビジネスやパーティーなどで使用できます。'}, {id: 2, name: '表前立て', desc: 'カジュアルなイメージがあるデザインです。ボタンダウンやクレリックと相性がいいです。'}],
	embroidery:	[	{id: 1, name: 'なし'}, {id: 2, name: 'あり'}],
	embColor:		[
								{id: 1, name: 'ホワイト'},
								{id: 2, name: 'ブラック'},
								{id: 3, name: 'グレー'},
								{id: 4, name: 'ブルー'},
								{id: 5, name: 'レッド'},
								{id: 6, name: 'ピンク'}
							],
	embPos:			[	{id: 1}, {id: 2}, {id: 3}, {id: 4}]
})

.value('site',{
		steps: [
			{u: '/shirtdesign/cloth/', label: '1.生地'},
			{u: '/shirtdesign/sleeve/', label: '2.袖'},
			{u: '/shirtdesign/collar/', label: '3.襟の形'},
			{u: '/shirtdesign/cleric/', label: '4.クレリック'},
			{u: '/shirtdesign/cuff/', label: '5.袖の形'},
			{u: '/shirtdesign/button/', label: '6.ボタン'},
			{u: '/shirtdesign/thread/', label: '7.ボタン糸'},
			{u: '/shirtdesign/pocket/', label: '8.ポケット'},
			{u: '/shirtdesign/front/', label: '9.みごろ'},
			{u: '/shirtdesign/embroidery/', label: '10.刺繍'}
		],
		sizeRange: {
			height: {min: 150, max: 200},
			weight: {min:  45, max: 150},
			neck:   {min:  35, max: 47},
			dressLength: {min: 65, max: 90},
			shoulderWidth: {min: 35, max: 57},
			sleeveLength: {min: 53, max: 70},
			chest: {min: 70, max: 135},
			waist: {min: 60, max: 125},
			wrist: {min: 14, max: 25},
			upperArm: {min: 22, max: 45}
		},
		sizeAdjust: [
			{val: '-1.5', label: '小さく'},
			{val: '-1.0', label: '少し小さく'},
			{val: '0', label: 'そのまま'},
			{val: '+1.0', label: '少し大きく'},
			{val: '+1.5', label: '大きく'}
		]
	})

.factory('orderService', ['$sessionStorage', '$localStorage', function($sessionStorage, $localStorage){
	var fOrder = {
		obj: {},
		cart: [],
		cloak: [],
		makeJson: function(data){ angular.extend(this.obj, data) },

		setCurrentOrder: function(){
			$sessionStorage.confirm = this.obj;
		},

		getCurrentOrder: function(){
			return $sessionStorage.confirm;
		},

		addCart: function(){
			var imgPath = "/img/design/shirt";
			var canvas = document.getElementById('UnitedCanvas');
			var ctx = canvas.getContext('2d');
			var loadedImages = 0;
			var img = {};
			var cart = this.cart;
			var o = angular.copy(this.obj);
			var file = [
				"/" + o.sleeve + "/" + o.cloth + "/x1/right_1.png",
				"/body/" + o.cloth + "/x1/1.png",
				"/" + o.sleeve + "/" + o.cloth + "/x1/left_1.png",
				(o.sleeve != 2) ? "/cuffs/" + o.cloth + "/x1/1_1.png" : null,
				"/button/body/" + o.button + "/x1/1.png",
				"/button/collar/" + o.button + "/x1/" + o.collar + "_1.png",
				(o.pocket != 2) ? "/pocket/x1/1.png" : null,
				"/collar/" + o.cloth + "/x1/" + o.collar + "_1.png"
			];

			o['id'] = cart.length;
			cart.push(o);

			function loadImage(callback){
				for (var i = 0; i < 8; i++){
					img[i] = new Image();
					(++loadedImages >= 8) && (img[i].onload = callback);
					file[i] && (img[i].src = imgPath + file[i]);
				}
			}

			loadImage(function(){
				ctx.clearRect(0, 0, 180, 180);
				for (var i = 0; i < 8; i++) ctx.drawImage(img[i], 0, 0, 480, 480, 0, 0, 180, 180);
				var imgData = canvas.toDataURL();
			});


			//$sessionStorage.cart = cart;
		},

		addCloak: function(){
			var cloak = this.cloak;
			var o = angular.copy(this.obj);
			o['id'] = cloak.length;
			cloak.push(o);
			$localStorage.cloak = cloak;
		},

		isComplete: function(){
			var o = this.obj;

			return o.hasOwnProperty('cloth') && o.hasOwnProperty('sleeve') &&
						 o.hasOwnProperty('collar') && o.hasOwnProperty('cleric') &&
						 o.hasOwnProperty('cuff') && o.hasOwnProperty('button') &&
						 o.hasOwnProperty('thread') && o.hasOwnProperty('pocket') &&
						 o.hasOwnProperty('front');
		}
	};

	return fOrder;
}]);