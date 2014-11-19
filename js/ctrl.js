'use strict';

var init = {selected: 1};

angular.module('designApp')
	.controller('DisplayCtrl', ['$scope', function($scope){
		$scope.order = {};
		$scope.$on('PartsChange', function(e, data){
			angular.extend($scope.order, data);
		});
	}])

	.controller('TextureCtrl', ['$scope', 'texture', function($scope, texture){
		$scope.texture  = init;
		$scope.textures = texture;
		$scope.$watch('texture.selected', function(){
			$scope.$emit('PartsChange', {texture: $scope.texture.selected});
		});
	}])

	.controller('SleeveCtrl', ['$scope', 'sleeve', function($scope, sleeve) {
		$scope.sleeve = init;
		$scope.sleeves = sleeve;
		$scope.$watch('sleeve.selected', function(){
			$scope.$emit('PartsChange', {sleeve: $scope.sleeve.selected});
		});
	}])

	.controller('CollarCtrl', ['$scope', 'collar', function($scope, collar){
		$scope.collar  = init;
		$scope.collars = collar;
		$scope.$watch('collar.selected', function(){
			$scope.$emit('PartsChange', {collar: $scope.collar.selected});
		});
	}])

	.controller('ClericCtrl', ['$scope', 'cleric', function($scope, cleric){
		$scope.cleric  = init;
		$scope.clerics = cleric;
		$scope.$watch('cleric.selected', function(){
			$scope.$emit('PartsChange', {cleric: $scope.cleric.selected});
		});
	}])

	.controller('CuffCtrl', ['$scope', 'cuff', function($scope, cuff){
		$scope.cuff  = init;
		$scope.cuffs = cuff;
		$scope.$watch('cuff.selected', function(){
			$scope.$emit('PartsChange', {cuff: $scope.cuff.selected});
		});
	}])
	
	.controller('ButtonCtrl', ['$scope', 'button', function($scope, button){
		$scope.button  = init;
		$scope.buttons = button;
		$scope.$watch('button.selected', function(){
			$scope.$emit('PartsChange', {button: $scope.button.selected});
		});
	}])
	
	.controller('ThreadCtrl', ['$scope', 'thread', function($scope, thread){
		$scope.thread  = init;
		$scope.threads = thread;
		$scope.$watch('thread.selected', function(){
			$scope.$emit('PartsChange', {thread: $scope.thread.selected});
		});
	}])
	
	.controller('PocketCtrl', ['$scope', 'pocket', function($scope, pocket){
		$scope.pocket  = init;
		$scope.pockets = pocket;
		$scope.$watch('pocket.selected', function(){
			$scope.$emit('PartsChange', {pocket: $scope.pocket.selected});
		});
	}])
	
	.controller('FrontCtrl', ['$scope', 'front', function($scope, front){
		$scope.front  = init;
		$scope.fronts = front;
		$scope.$watch('front.selected', function(){
			$scope.$emit('PartsChange', {front: $scope.front.selected});
		});
	}])
	
	.controller('EmbroideryCtrl', ['$scope', 'embroidery', function($scope, embroidery){
		$scope.embroidery   = init;
		$scope.embroideries = embroidery;
		$scope.$watch('embroidery.selected', function(){
			$scope.$emit('PartsChange', {embroidery: $scope.embroidery.selected});
		});
	}]);
