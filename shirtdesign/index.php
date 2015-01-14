<!DOCTYPE html>
<title></title>
<base href="/">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<link rel="stylesheet" href="../css/common.min.css">
<link rel="stylesheet" href="../css/design.min.css">
<script async src="/js/loadImages.min.js"></script>

<!--<link rel="stylesheet" href="/css/shirtDesign.css">-->
<body ng-app="designApp" ng-controller="DisplayCtrl">

<?php include('../parts/header.htm'); ?>

<main class="container" style="background-image: url(/img/design/cloth_bg/x1/{{order.cloth || 1}}.jpg)">
	<section id="Display" ng-class="{blur: zoom}">
		<div id="Canvas">
			<img alt="sleeve_left" ng-src="/img/design/shirt/{{order.sleeve || 1}}/{{order.cloth || 1}}/x1/left_{{cam}}.png" ng-class="(cam != 3) ? 'z9' : 'z2'">
			<img alt="sleeve_right" ng-src="/img/design/shirt/{{order.sleeve || 1}}/{{order.cloth || 1}}/x1/right_{{cam}}.png" ng-class="(cam != 3) ? (cam == 4) ? 'z10' : 'z1' : 'z3'">
			<img alt="body" ng-src="/img/design/shirt/body/{{order.cloth || 1}}/x1/{{cam}}.png" ng-class="(cam != 4) ? 'z2' : 'z9'">
			<img alt="collar" ng-src="/img/design/shirt/collar/{{order.cloth || 1}}/x1/{{order.collar || 1}}_{{cam}}.png" class="z3">
			<img alt="cuffs" ng-src="/img/design/shirt/cuffs/{{order.cloth || 1}}/x1/{{order.cuffs || 1}}_{{cam}}.png" class="z8" ng-show="order.sleeve != 2">
			<img alt="button_body" ng-src="/img/design/shirt/button/body/{{order.button || 1}}/x1/{{cam}}.png" class="z4" ng-if="cam < 4">
			<img alt="button_collar" ng-src="/img/design/shirt/button/collar/{{order.button || 1}}/x1/{{order.collar || 1}}_{{cam}}.png" class="z5" ng-if="cam < 4">
			<img alt="button_cuffs_left" ng-src="/img/design/shirt/button/cuffs/{{order.cuffs || 1}}/x1/left_{{order.cuffs || 1}}_4.png" class="z6" ng-if="cam == 4 && order.sleeve != 2">
			<img alt="button_cuffs_right" ng-src="/img/design/shirt/button/cuffs/{{order.cuffs || 1}}/x1/right_{{order.cuffs || 1}}_4.png" class="z6" ng-if="cam == 4 && order.sleeve != 2">
			<img alt="pocket" ng-src="/img/design/shirt/pocket/x1/{{cam}}.png" class="z7" ng-show="order.pocket == 1" ng-if="cam < 4">

			<img src="/img/design/rotation_left.png" width="32" height="32" alt="左へ回転" ng-click="cam = rotate(1)" class="rotate left">
			<img src="/img/design/rotation_right.png" width="32" height="32" alt="右へ回転" ng-click="cam = rotate()" class="rotate right">
			<button type="button" class="btn zoom-in" ng-click="zoom = !zoom">&#xe804;</button>
		</div>
		<!--<button type="button" ng-click="addCloak()">マイ・クロークに保存する</button>-->
	</section>

	<section id="Navigation" ng-class="{blur: zoom}" ng-view></section>
</main>

<div class="bgZoom" ng-if="zoom" ng-init="zoom=false"></div>
<section id="Zoom" ng-if="zoom" ng-click="$parent.zoom = !$parent.zoom">
	<img alt="sleeve_left" ng-src="/img/design/shirt/{{order.sleeve || 1}}/{{order.cloth || 1}}/x2/left_{{cam}}.png" ng-class="(cam != 3) ? 'z9' : 'z2'">
	<img alt="sleeve_right" ng-src="/img/design/shirt/{{order.sleeve || 1}}/{{order.cloth || 1}}/x2/right_{{cam}}.png" ng-class="(cam != 3) ? (cam == 4) ? 'z10' : 'z1' : 'z3'">
	<img alt="body" ng-src="/img/design/shirt/body/{{order.cloth || 1}}/x2/{{cam}}.png" ng-class="(cam != 4) ? 'z2' : 'z9'">
	<img alt="collar" ng-src="/img/design/shirt/collar/{{order.cloth || 1}}/x2/{{order.collar || 1}}_{{cam}}.png" class="z3">
	<img alt="cuffs" ng-src="/img/design/shirt/cuffs/{{order.cloth || 1}}/x2/{{order.cuffs || 1}}_{{cam}}.png" class="z8" ng-show="order.sleeve != 1">
	<img alt="button_body" ng-src="/img/design/shirt/button/body/{{order.button || 1}}/x2/{{cam}}.png" class="z4" ng-if="cam < 4">
	<img alt="button_collar" ng-src="/img/design/shirt/button/collar/{{order.button || 1}}/x2/{{order.collar || 1}}_{{cam}}.png" class="z5" ng-if="cam < 4">
	<img alt="button_cuffs_left" ng-src="/img/design/shirt/button/cuffs/{{order.cuffs || 1}}/x2/left_{{order.cuffs || 1}}_4.png" class="z6" ng-if="cam == 4 && order.sleeve != 1">
	<img alt="button_cuffs_right" ng-src="/img/design/shirt/button/cuffs/{{order.cuffs || 1}}/x2/right_{{order.cuffs || 1}}_4.png" class="z6" ng-if="cam == 4 && order.sleeve != 1">
	<img alt="pocket" ng-src="/img/design/shirt/pocket/x2/{{cam}}.png" class="z7" ng-show="order.pocket == 1" ng-if="cam < 4">
	<button type="button" class="btn zoom-out" ng-click="$parent.zoom = !$parent.zoom">&#xe805;</button>
</section>

<canvas width="180" height="180" id="UnitedCanvas"></canvas>

<?php include('../parts/footer.htm'); ?>

<script defer src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.0/angular.min.js"></script>
<script defer src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.0/angular-route.min.js"></script>
<script defer src="/js/ngStorage.min.js"></script>
<script defer src="/js/app.js"></script>
<script defer src="/js/ctrl.js"></script>
<script defer src="//cdnjs.cloudflare.com/ajax/libs/zepto/1.1.4/zepto.min.js"></script>
<script defer src="/js/common.js"></script>
</body>