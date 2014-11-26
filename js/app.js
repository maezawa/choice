'use strict';

var path = { url: '/choice/shirtdesign', templ: '/choice/template'};
var designApp = angular.module('designApp', ['ngRoute', 'ngStorage']);

designApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$locationProvider.html5Mode({enabled: !0, requireBase: !1});
	$routeProvider
		.when(path.url + '/index.html',				{templateUrl: path.templ + '/embroidery.htm', controller: 'EmbroideryCtrl'})
		.when(path.url + '/measure',	{templateUrl: path.templ + '/measure.htm', controller: 'MeasureCtrl'})
		//.when(path.url + '/index.html',				{templateUrl: path.templ + '/texture.htm', controller: 'DesignCtrl'})
		.when(path.url + '/sleeve',	{templateUrl: path.templ + '/sleeve.htm', controller: 'DesignCtrl'})
		.when(path.url + '/collar',	{templateUrl: path.templ + '/collar.htm', controller: 'DesignCtrl'})
		.when(path.url + '/cleric',	{templateUrl: path.templ + '/cleric.htm', controller: 'DesignCtrl'})
		.when(path.url + '/cuff',		{templateUrl: path.templ + '/cuff.htm', controller: 'DesignCtrl'})
		.when(path.url + '/button', {templateUrl: path.templ + '/button.htm', controller: 'DesignCtrl'})
		.when(path.url + '/thread',	{templateUrl: path.templ + '/thread.htm', controller: 'DesignCtrl'})
		.when(path.url + '/pocket',	{templateUrl: path.templ + '/pocket.htm', controller: 'DesignCtrl'})
		.when(path.url + '/front',	{templateUrl: path.templ + '/front.htm', controller: 'DesignCtrl'})
		.when(path.url + '/embroidery',	{templateUrl: path.templ + '/embroidery.htm', controller: 'EmbroideryCtrl'})
		.otherwise({redirectTo: path.url + '/index.html'})
}])

.value('parts',{
		texture:		[{id: 1, name: '#1'}, {id: 2, name: '#2'}],
		sleeve:			[{id: 1, name: '長袖'}, {id: 2, name: '半袖'}],
		collar:			[
									{id: 1, name: 'ワイド', desc: 'This is wide'},
									{id: 2, name: 'レギュラー', desc: 'This is regular'},
									{id: 3, name: 'ホリゾンタイル', desc: 'This is horizontal'},
									{id: 4, name: 'ドゥオボットーニ', desc: 'This is duo bottoni'},
									{id: 5, name: 'ボタンダウン', desc: 'This is button down'}
								],
		cleric:			[
									{id: 1, name: 'なし'},
									{id: 2, name: '襟と袖'},
									{id: 3, name: '襟のみ'}
								],
		cuff:				[
									{id: 1, name: '丸形：シングル', desc: 'This is #1'},
									{id: 2, name: '丸形：ダブル', desc: 'This is #2'},
									{id: 3, name: '角形：シングル', desc: 'This is #3'},
									{id: 4, name: '角形：ダブル', desc: 'This is #4'},
									{id: 5, name: 'ダブルカフス', desc: 'This is #5'}
								],
		button:			[
									{id: 1, name: 'ホワイト', kind: 'プラスチックボタン'},
									{id: 2, name: 'ブラック', kind: 'プラスチックボタン'},
									{id: 3, name: 'ピンク', kind: 'プラスチックボタン'},
									{id: 4, name: 'ブルー', kind: 'プラスチックボタン'},
									{id: 5, name: 'ホワイト', kind: 'シェルボタン'},
									{id: 6, name: 'ブラック', kind: 'シェルボタン'}
								],
		thread:			[
									{id: 1, name: 'ホワイト'},
									{id: 2, name: 'ブラック'},
									{id: 3, name: 'グレー'},
									{id: 4, name: 'ブルー'},
									{id: 5, name: 'レッド'},
									{id: 6, name: 'ピンク'}
								],
		pocket:			[	{id: 1, name: 'なし'}, {id: 2, name: 'あり'}],
		front:			[	{id: 1, name: '裏前立て'}, {id: 2, name: '表前立て'}],
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

.factory('orderService', ['$sessionStorage', '$localStorage', function($sessionStorage, $localStorage){
	var fOrder = {};
	fOrder = {
		obj: {},
		cart: [],
		cloak: [],
		makeJson: function(data){
			return angular.extend(fOrder.obj, data);
		},

		addCart: function(){
			var cart = fOrder.cart;
			var o = angular.copy(fOrder.obj);
			o['id'] = cart.length;
			cart.push(o);
			$sessionStorage.cart = cart;
		},

		addCloak: function(){
			var cloak = fOrder.cloak;
			var o = angular.copy(fOrder.obj);
			o['id'] = cloak.length;
			cloak.push(o);
			$localStorage.cloak = cloak;
		}
	};

	return fOrder;
}])