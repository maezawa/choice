<!DOCTYPE html>
<meta charset="utf-8" xmlns="http://www.w3.org/1999/html">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="keywords" content="">
<title></title>
<link rel="shortcut icon" type="image/x-icon" href="/img/facicon.ico">
<link rel="stylesheet" href="/css/common.min.css">
<link rel="stylesheet" href="/css/sub.min.css">

<?php include('./parts/header.htm'); ?>

<main>
	<h1>送料・支払い方法など</h1>

	<h2>送料について</h2>
	<div>
		<!-- id="MailingCost"-->
		<h3>全国送料無料</h3>
		<p>
			1回のご注文で2枚以上の同時購入いただいた場合に限ります。<br>
			1枚ご注文の場合は送料を別途500円<small>(税込)</small>頂きます。(一部エリアを除きます)<br>
			※ 沖縄・一部離島は、シャツ2枚同時購入以上で送料無料。2枚以下は送料として1,400円<small>(税込)</small>を頂戴いたします。
		</p>

		<table id="shipping">
		<thead>
		<tr>
			<th>送料</th>
			<th>お届けまでの日数</th>
		</tr>
		</thead>
		<tbody>
		<tr>
			<td>５００円<small>(税込)</small></td>
			<td>２５日〜３０日</td>
		</tr>
		</tbody>
		</table>
	</div>

	<h2>お支払い方法</h2>
	<div>
		<!-- id="Payment" -->
		<h3>クレジットカード支払い</h3>
		<img src="/img/img_card.png" id="img_card">
		<p>クレジットカード決済： Visa / MasterCard / JCB / DINERS / アメリカン・エクスプレス<br>
			<small>※ クレジットカード決済は、東証一部上場 クレジットカード決済代行業界最大手の「GMOペイメントゲートウェイ株式会社」に受託しております。</small>
		</p>

		<p>お客さまのクレジットカード情報は、GMOペイメントゲートウェイ株式会社の「 セキュリティ・コンプライアンス 」「 個人情報保護方針 」に基づき保存させていただきます。</p>

		<p>
			※ クレジットカードは日本の銀行または金融機関の発行である必要があります。<br>
			※ クレジットカード支払いの請求先住所は、日本国内である必要があります。<br>
			※ 商品購入のお支払いを複数のクレジットカードに分割することはできません。<br>
			※ お支払いに使用されるすべてのカードカードには、有効なセキュリテーカードが必要です。
		</p>

		<h3>コンビニ支払い</h3>
		<img src="/img/img_convenience1.png" id="convenience1">
		<img src="/img/img_convenience2.png" id="convenience2">
		<p>
			※ コンビニ決済の場合、決済完了後に商品製作を開始致します。<br>
			※ お支払が確認出来ない場合は注文を自動キャンセルとさせて頂く場合がございます。
		</p>

		<h3>ペイジー支払い</h3>
		<img src="/img/payeasy.png" id="img_payeasy">
		<p>
			※ ペイジー支払いの場合、決済完了後に商品製作を開始致します。<br>
			※ お支払が確認出来ない場合は注文を自動キャンセルとさせて頂く場合がございます。
		</p>

		<h3>代引き支払い</h3>
		代引き支払いは現在お取り扱いしておりません。
	</div>
</main>

<?php include('./parts/footer.htm'); ?>

<script defer src="//cdnjs.cloudflare.com/ajax/libs/zepto/1.1.4/zepto.min.js"></script>
<script defer src="/js/common.js"></script>