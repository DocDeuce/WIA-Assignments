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

})
.controller("OverviewController",function($scope){

})
.controller("ArtistController",function($scope){

})

.controller("WebDevController",function($scope){

})

.controller("MarketerController",function($scope){

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
		/*sumDiv[k]=len;
		total += len;*/
		console.log(navLinks[k].innerHTML.length);
		if(navLinks[k].innerHTML.length == 19){
			sumDiv[k]=len;
			total += len;
		}else if(navLinks[k].innerHTML.length == 22){
			sumDiv[k]=(len+3);
			total += len;	
		}else if(navLinks[k].innerHTML.length == 15 /*|| navLinks[k].innerHTML.length == 16*/){
			sumDiv[k]=(len-2);
			total += len;
		}else if(navLinks[k].innerHTML.length == 16){
			sumDiv[k]=(len-1);
			total += len;
		}
		else{
			sumDiv[k]=len;
			total += len;
		}
		
		/*if(navLinks[k].innerHTML.lastIndexOf(" ") == 1){
			sumDiv[k]=len;
			total += len;
		}else{
			sumDiv[k]=len+1;
			total += len;
		}*/		 
	}
	console.log(sumDiv);
	console.log(total);		
	for(m=0, n=sumDiv.length;m<n;m++){
		navList[m].style.width = (sumDiv[m]/total)*100 + "%";
	}		
	
	
	$scope.overview = function(){
		window.location = "#/overview";
	}
})


