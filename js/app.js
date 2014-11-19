'use strict';

var path = { url: '/choice/shirtdesign', templ: '/choice/template'};
var designApp = angular.module('designApp', ['ngRoute']);

designApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$locationProvider.html5Mode({enabled: !0, requireBase: !1});
	$routeProvider
		.when(path.url + '/',				{templateUrl: path.templ + '/texture.htm', controller: 'TextureCtrl'})
		.when(path.url + '/sleeve',	{templateUrl: path.templ + '/sleeve.htm', controller: 'SleeveCtrl'})
		.when(path.url + '/collar',	{templateUrl: path.templ + '/collar.htm', controller: 'CollarCtrl'})
		.when(path.url + '/cleric',	{templateUrl: path.templ + '/cleric.htm', controller: 'ClericCtrl'})
		.when(path.url + '/cuff',		{templateUrl: path.templ + '/cuff.htm', controller: 'CuffCtrl'})
		.when(path.url + '/button', {templateUrl: path.templ + '/button.htm', controller: 'ButtonCtrl'})
		.when(path.url + '/thread',	{templateUrl: path.templ + '/thread.htm', controller: 'ThreadCtrl'})
		.when(path.url + '/pocket',	{templateUrl: path.templ + '/pocket.htm', controller: 'PocketCtrl'})
		.when(path.url + '/front',	{templateUrl: path.templ + '/front.htm', controller: 'FrontCtrl'})
		.when(path.url + '/embroidery',	{templateUrl: path.templ + '/embroidery.htm', controller: 'EmbroideryCtrl'})
		.otherwise({redirectTo: path.url + '/'})
}])

.factory('texture', function(){
	return [{id: 1, name: '#1'}, {id: 2, name: '#2'}];
})

.factory('sleeve', function(){
	return [{id: 1, name: '長袖'}, {id: 2, name: '半袖'}];
})

.factory('collar', function(){
	return [
		{id: 1, name: 'ワイド', desc: 'This is wide'},
		{id: 2, name: 'レギュラー', desc: 'This is regular'},
		{id: 3, name: 'ホリゾンタイル', desc: 'This is horizontal'},
		{id: 4, name: 'ドゥオボットーニ', desc: 'This is duo bottoni'},
		{id: 5, name: 'ボタンダウン', desc: 'This is button down'}
	];
})

.factory('cleric', function(){
	return [
		{id: 1, name: 'なし'},
		{id: 2, name: '襟と袖'},
		{id: 3, name: '襟のみ'}
	];
})

.factory('cuff', function(){
	return [
		{id: 1, name: '丸形：シングル', desc: 'This is #1'},
		{id: 2, name: '丸形：ダブル', desc: 'This is #2'},
		{id: 3, name: '角形：シングル', desc: 'This is #3'},
		{id: 4, name: '角形：ダブル', desc: 'This is #4'},
		{id: 5, name: 'ダブルカフス', desc: 'This is #5'}
	];
})

.factory('button', function(){
	return [
		{id: 1, name: 'ホワイト', kind: 'プラスチックボタン'},
		{id: 2, name: 'ブラック', kind: 'プラスチックボタン'},
		{id: 3, name: 'ピンク', kind: 'プラスチックボタン'},
		{id: 4, name: 'ブルー', kind: 'プラスチックボタン'},
		{id: 5, name: 'ホワイト', kind: 'シェルボタン'},
		{id: 6, name: 'ブラック', kind: 'シェルボタン'}
	];
})

.factory('thread', function(){
	return [
		{id: 1, name: 'ホワイト'},
		{id: 2, name: 'ブラック'},
		{id: 3, name: 'グレー'},
		{id: 4, name: 'ブルー'},
		{id: 5, name: 'レッド'},
		{id: 6, name: 'ピンク'}
	];
})

.factory('pocket', function(){
	return [
		{id: 1, name: 'なし'},
		{id: 2, name: 'あり'}
	];
})

.factory('front', function(){
	return [
		{id: 1, name: '裏前立て'},
		{id: 2, name: '表前立て'}
	];
})

.factory('embroidery', function(){
	return [
		{id: 1, name: 'なし'},
		{id: 2, name: 'あり'}
	];
})

.factory('embColor', function(){
	return [
		{id: 1, name: 'ホワイト'},
		{id: 2, name: 'ブラック'},
		{id: 3, name: 'グレー'},
		{id: 4, name: 'ブルー'},
		{id: 5, name: 'レッド'},
		{id: 6, name: 'ピンク'}
	];
})

.factory('emnPos', function(){
	return [
		{id: 1},
		{id: 2},
		{id: 3},
		{id: 4}
	];
})