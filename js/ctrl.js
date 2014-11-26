'use strict';

var initSelect = {selected: 1};

angular.module('designApp')
	.controller('DisplayCtrl', ['$scope', 'orderService', function($scope, orderService){
		$scope.order = orderService.obj;

		$scope.$on('PartsChange', function(e, data){
			orderService.makeJson(data);
		});

		$scope.addCart = function(){
			orderService.addCart();
		};

		$scope.addCloak = function(){
			$localStorage.cloak = orderService.obj;
		};
	}])

	.controller('DesignCtrl', ['$scope', 'parts', function($scope, parts){
		$scope.parts = parts;
		$scope.data  = initSelect;

		$scope.init = function(partName){
			$scope.partName = partName;
			$scope.datas = $scope.parts[partName];
		};

		$scope.$watch('data.selected', function(){
			var dataObj = {};
			var partName = $scope.partName;
			typeof partName != 'undefined' && (dataObj[partName] = $scope.data.selected) && $scope.$emit('PartsChange',  dataObj);
		});
	}])

	.controller('EmbroideryCtrl', ['$scope', 'parts', function($scope, parts){
		$scope.embroidery = initSelect;
		$scope.embColor = {selected: 1};
		$scope.embPos = {selected: 1};
		$scope.embroideries = parts.embroidery;
		$scope.embColors = parts.embColor;
		$scope.embPoss = parts.embPos;

		$scope.$watch('embroidery.selected', function(){
			$scope.$emit('PartsChange', {embroidery: $scope.embroidery.selected});
		});

		$scope.$watch('embName', function(){
			$scope.$emit('PartsChange', {embName: $scope.embName});
		});

		$scope.$watch('embColor.selected', function(){
			$scope.$emit('PartsChange', {embColor: $scope.embColor.selected});
		});

		$scope.$watch('embPos.selected', function(){
			$scope.$emit('PartsChange', {embPos: $scope.embPos.selected});
		});
	}])

	.controller('MeasureCtrl', ['$scope', function($scope){
		$scope.kindMeasure = {selected: 0};
	}])