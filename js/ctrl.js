'use strict';

angular.module('designApp')
	.controller('DisplayCtrl', ['$scope', 'orderService', function($scope, orderService){
		$scope.order = orderService.obj;
		$scope.cam = 1;

		$scope.$on('PartsChange', function(e, data){ orderService.makeJson(data) });
		$scope.addCart  = function(){ orderService.addCart() };
		$scope.addCloak = function(){ $localStorage.cloak = orderService.obj };

		$scope.rotate = function(incl){
			var cam = $scope.cam;
			cam = Math.abs(((cam - 1) % 4) + 1);
			cam = incl ? ++cam : --cam;
			cam == 0 && (cam = 4);
			cam == 5 && (cam = 1);
			return cam;
		};
	}])


	.controller('DesignCtrl', ['$scope', '$location', 'orderService', 'parts', 'site', function($scope, $location, orderService, parts, site){
		$scope.parts = parts;
		$scope.steps = site.steps;
		$scope.isComplete = orderService.isComplete();

		$scope.init = function(partName){
			angular.element(document.querySelector('#Display')).css({display: ''});
			angular.element(document.querySelector('#Navigation')).css({'margin-top': ''});

			var currentPath = $location.path();
			var selectedIndex = 0;
			$scope.steps.forEach(function(el, index){ (el.u == currentPath) && (selectedIndex = index) });
			$scope.stepx = $scope.steps[selectedIndex];
			$scope.partName = partName;
			$scope.datas = $scope.parts[partName];
			$scope.data = $scope.order[$scope.partName] ? {selected: $scope.order[$scope.partName]} : {selected: 1};
		};

		$scope.goStep = function(){ $location.path($scope.stepx.u) };

		$scope.showDesc = function(){
			var desc = document.querySelector('.desc');
			$scope.name = this.t.name;
			$scope.desc = this.t.desc;
		};

		$scope.$watch('data.selected', function(){
			if (!$scope.partName) return;

			var dataObj = {};
			var partName = $scope.partName || 'cloth';
			typeof partName != 'undefined' && (dataObj[partName] = $scope.data.selected) && $scope.$emit('PartsChange',  dataObj);
		});
	}])


	.controller('EmbroideryCtrl', ['$scope', '$location', 'orderService', 'parts', 'site', function($scope, $location, orderService, parts, site){
		$scope.embroidery = {selected: 1};
		$scope.embColor = {selected: 1};
		$scope.embPos = {selected: 1};
		$scope.embroideries = parts.embroidery;
		$scope.embColors = parts.embColor;
		$scope.embPoss = parts.embPos;
		$scope.steps = site.steps;
		$scope.isComplete = orderService.isComplete();
		$scope.saveCurrentOrder = function(){ orderService.setCurrentOrder(); }

		$scope.init = function(){
			var currentPath = $location.path();
			var selectedIndex = 0;
			$scope.steps.forEach(function(el, index){ (el.u == currentPath) && (selectedIndex = index) });
			$scope.stepx = $scope.steps[selectedIndex];
		};

		$scope.goStep = function(){ $location.path($scope.stepx.u) };
		$scope.$watch('embroidery.selected', function(){ $scope.$emit('PartsChange', {embroidery: $scope.embroidery.selected}) });
		$scope.$watch('embName', function(){ $scope.$emit('PartsChange', {embName: $scope.embName}) });
		$scope.$watch('embColor.selected', function(){ $scope.$emit('PartsChange', {embColor: $scope.embColor.selected}) });
		$scope.$watch('embPos.selected', function(){ $scope.$emit('PartsChange', {embPos: $scope.embPos.selected}) });
	}])


	.controller('ConfirmCtrl', ['$scope', 'parts', 'orderService', function($scope, parts, orderService){
		$scope.parts = parts;
		angular.element(document.querySelector('#Display, #Zoom')).css({display: 'none'});
		angular.element(document.querySelector('#Navigation')).css({'margin-top': 0});
		$scope.confirm = orderService.getCurrentOrder();
	}])


	.controller('MeasureCtrl', ['$scope', 'site', function($scope, site){
		$scope.kindMeasure = {selected: 0};
		$scope.r = site.sizeRange;
		var groupDetail, groupSimple;

		$scope.init = function(){
			groupDetail = document.querySelectorAll('#DetailMeasure > form');
			groupSimple = document.querySelectorAll('#SimpleMeasure > form');

			for (var i = 1, l = groupDetail.length; i < l; i++) angular.element(groupDetail[i]).css({display: 'none'});
			for (var i = 1, l = groupSimple.length; i < l; i++) angular.element(groupSimple[i]).css({display: 'none'});

			$scope.sizeAdjust = site.sizeAdjust;
			$scope.brandNeck = $scope.brandChest = $scope.brandWaist = $scope.brandArm = $scope.brandWaist =
			$scope.brandArm = $scope.brandWrist = $scope.brandShoulderWidth = $scope.brandSleeveLength =
			$scope.brandDressLength = $scope.sizeAdjust[2];
		};

		$scope.goStep = function(index, $event){
			var parent = angular.element($event.target).parent();
			var windows = angular.element(parent).parent();
			var el = (windows[0].id == 'DetailMeasure') ? [groupDetail, groupDetail.length] : [groupSimple, groupSimple.length];

			for (var i = 0; i < el[1]; i++) angular.element(el[0][i]).css({display: 'none'});
			angular.element(el[0][index]).css({display: 'block'});
		};

	}]);