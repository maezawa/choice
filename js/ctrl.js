'use strict';

var initSelect = {selected: 1};

angular.module('designApp')
	.controller('DisplayCtrl', ['$scope', function($scope){
		$scope.order = {};
		$scope.$on('PartsChange', function(e, data){
			angular.extend($scope.order, data);
		});
	}])

	.controller('DesignCtrl', ['$scope', 'parts', function($scope, parts){
		$scope.parts = parts;
		$scope.data  = initSelect;

		$scope.init = function(partName){
			$scope.datas = $scope.parts[partName];
		};

		$scope.$watch('data.selected', function(){
			$scope.$emit('PartsChange', {texture: $scope.data.selected});
		});
	}]);