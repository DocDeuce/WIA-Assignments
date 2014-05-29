angular.module("MyApp",['ngRoute'])

.config(function($routeProvider){
	$routeProvider.when('/artist',{
		templateUrl : "artist.html",
		controller : "ArtistController"
	}).when('/webdev',{
		templateUrl : "webdev.html",
		controller : "WebDevController"
	}).when('/marketer',{
		templateUrl : "marketer.html",
		controller : "MarketerController"
	}).when('/educator',{
		templateUrl : "educator.html",
		controller : "EducatorController"
	}).when('/speaker',{
		templateUrl : "speaker.html",
		controller : "SpeakerController"
	}).when('/host',{
		templateUrl : "host.html",
		controller : "HostController"
	}).when('/overview',{
		templateUrl : "overview.html",
		controller : "OverviewController"
	}).otherwise({
		redirectTo : "/intro",
		templateUrl: "intro.html",
		controller : "IntroController"
	});
})

.controller("IntroController",function($scope){
	if(Modernizr.canvas){
		var canvas0 = document.getElementById("bizcard");
		var ctx0 = canvas0.getContext("2d");	
		
		var bizCard= document.getElementById("resdes");
			
		ctx0.translate(canvas0.width/2, canvas0.height/2);
		ctx0.drawImage(bizCard, -118, -201);
		
		setInterval(function(){
				var firstSpin = setInterval(function(){spinFirst()}, 100);
		
				setTimeout(function(){
				clearInterval(firstSpin);
				},1200)			
			},5000)
	
			function spinFirst(){
				ctx0.clearRect(-210,-210, canvas0.width, canvas0.height);
				ctx0.rotate(15 * (Math.PI /180));
				ctx0.drawImage(bizCard, -118, -201);
			}
	};
})
.controller("OverviewController",function($scope){

})
.controller("ArtistController",function($scope){
	
	if(Modernizr.canvas){
	var canvas1 = document.getElementById("arrow");
    var ctx = canvas1.getContext("2d");
	
    ctx.fillStyle = "#1A6E84";
    ctx.lineWidth=1;

	ctx.beginPath();
	ctx.moveTo(40,90);
	ctx.lineTo(80,60);
	ctx.lineTo(60,60);
	ctx.lineTo(40,75);
	ctx.lineTo(20,60);
	ctx.lineTo(0,60);
	ctx.closePath();
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(40,60);
	ctx.lineTo(80,30);
	ctx.lineTo(60,30);
	ctx.lineTo(40,45);
	ctx.lineTo(20,30);
	ctx.lineTo(0,30);
	ctx.closePath();
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(40,30);
	ctx.lineTo(80,0);
	ctx.lineTo(60,0);
	ctx.lineTo(40,15);
	ctx.lineTo(20,0);
	ctx.lineTo(0,0);
	ctx.closePath();
	ctx.fill();	
	};
	
	setInterval(function(){	
	$(function(){
	$("#arrow").fadeOut(3000);
	$("#arrow").fadeIn(3000);			
	});},6000);

})

.controller("WebDevController",function($scope){

})

.controller("MarketerController",function($scope){

})

.controller("EducatorController",function($scope){

})

.controller("SpeakerController",function($scope){

})

.controller("HostController",function($scope){

})

.controller("HomeController",function ($scope){
	var navList = document.getElementById("navi").childNodes,
	navLinks = [],
	sumDiv = [],
	total = 0;
	for(i=0, j=navList.length;i<j;i++){
		navLinks[i]=navList[i].lastChild;
	}
	for(k=0, l=navLinks.length;k<l;k++){
		var len = navLinks[k].innerHTML.length;
		/*console.log(navLinks[k].innerHTML.length);*/
		if(navLinks[k].innerHTML.length == 19){
			sumDiv[k]=(len-1);
			total += len;
		}else if(navLinks[k].innerHTML.length == 22){
			sumDiv[k]=(len+1.3);
			total += len;	
		}else if(navLinks[k].innerHTML.length == 6){
			sumDiv[k]=(len+3.1);
			total += len;
		}else if(navLinks[k].innerHTML.length == 17){
			sumDiv[k]=(len-1);
			total += len;
		}
		else{
			sumDiv[k]=(len-1.4);
			total += len;
		}
		 
	}
	/*console.log(sumDiv);
	console.log(total);*/		
	for(m=0, n=sumDiv.length;m<n;m++){
		navList[m].style.width = (sumDiv[m]/total)*100 + "%";
	}			
	
	$scope.overview = function(){
		window.location = "#/overview";
	}
	
})


