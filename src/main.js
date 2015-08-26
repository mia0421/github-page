
$('body').scrollspy({ target: '#menu' });

$(".menu ul li a[href^='#']").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){
       window.location.hash = hash;
     });
});


var app = angular.module('app',[])
.controller('HomeCtrl',['$scope',function($scope) {
	$('.carousel').carousel();
	$scope.ExpData = [
		{
			Name: '多奇數位',
			Title:'前端工程師', 
			Contents:'前端網頁開發運用javascript  ,ReactJs  ,ES6,Bootstrap', 
			Time:'2015/6/1 - 在職'
		},
		{
			Name: '鼎盛資科',
			Title:'程式設計師(前端組)', 
			Contents:'開發自有EIP產品\n目前擔任前端工程師職位,負責前端網頁開發', 
			Time:'2012/2/1 - 2015/5/25'
		},
		{
			Name: '資策會全方位應用程式養成就業班',
			Title:'86期結業', 
			Contents:'', 
			Time:'2011／06～2012／01'
		},
		{
			Name: '凌越資訊股份有限公司',
			Title:'行政助理', 
			Contents: '人事及採購人員\n 總務類\n公司用品採購及管理&公司生財器材維護\n公司對外課程相關管理\n採購類\n公司商品採購及備貨及廠商帳款核對\n商品庫存調撥及管理\n人資類\n協助招募作業\n新進人員公司簡介、新進人員基本資料登入&管理\n請假登入、假單管理、出勤核對、每月出勤結算', 
			Time:'2008／11～2011／04'
		},
		{
			Name: '德明財經科技大學',
			Title:'(肄業)', 
			Contents:'保險金融管理系(銀行保險相關)四技', 
			Time:'2007／09～2012／06'
		},
		{
			Name: '台北市士林高商(北市商)',
			Title:'(畢業)', 
			Contents:'國際貿易系(一般商業學類)高職', 
			Time:'2003／09 - 2007／06'
		}
	]
	$scope.AutobiographyData = "您好！我的名字叫陳品融，出生於小康家庭，我個性上算是活潑開朗的，喜歡嘗試新鮮的事物，也由於家中是服務業的關係，讓我可以很快的適應不同的環境也能和不認識的人打成一片。\n\n"+
		   "\n求學及工作歷程：\n高中開始就希望盡早進入社會，故高中時期就選擇了職校夜間部就讀白天則開始了職場生活， 在半工半讀的的過程中，由於幾次偶然機的會在公司歷經了軟體客服專員與人事採購人員， 軟體客服專員的工作內容讓我學習了傾聽並迅速回覆顧客問題解決客戶疑問的應對方式， 後轉任公司人事採購人員，更了解了一般公司的行政模式及流程，且工作中多需與廠商及人員做協商和應對。 由於較早就開始工作的關係生活雖然緊湊但也讓我增加了許多社會歷練及待人處事之道由於在工作中接觸資訊相關的產業，對資訊產業產生了濃厚的興趣。\n\n"+
		   "\n資策會進修：\n日後透過朋友的介紹參加了資策會的「全方位程式設計師」課程，在課程中學習到各種網頁及應用程式開發的相關技術，在資策會的小組專題中我擔任組長的角色，負責了專題的規劃及統籌的工作，在團隊合作中更學習了與合作夥伴溝通、協調、合作的寶貴經驗，讓我除了有理論的訓練外，也能有實務上的操練。\n\n"+
		   "\n資訊工作經歷：\n畢業之後進入資訊產業擔任網頁程式設計師的職位，一年之後開發團隊轉換型態開始擔任前端組前端工程師組長之職務至現在約二年的時間，使用Angular.js等前端技術開發公司產品，開始對前端領域產生極大的興趣。";
	$scope.SkillData = [
		{
			Title:"JavaScript 框架",
			Tag:["AngularJs", "ReactJs(ReFlux, Flux)"]
		},
		{
			Title:"JavaScript 語言",
			Tag:["JavaScript","ES6", "JSX (React)"]
		},
		{
			Title:"模組＆套件＆框架工具",
			Tag:["gulp","npm","bower","browserify"]
		},
		{
			Title:"CSS相關",
			Tag:["Css3", "Sass (Scss)" , "Susy2", "Compass" , "Boostrap2", "Boostrap3"]
		},
		{
			Title:"版本控管",
			Tag:["Ｇit (GitHub)", "TFS"]
		},
		{
			Title:"開發工具",
			Tag:["Sublime 3", "VS2013"]
		},
		{
			Title:"平台經驗",
			Tag:["Windows XP win7 ,win8, ", "OSX (Mac)"]
		}
	]
}])
