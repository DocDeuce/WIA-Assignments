/*function NavController($scope){
	$scope.navArray = ["Artist", "Web Developer", "Marketer", "Educator", "Speaker", "Event Host"];	
	navSize($scope.navArray);	
}
var navSize=function(navArray){
	var sumDiv = [],
		total = 0;
	for (i=0, j=navArray.length;i<j;i++){
		var len = navArray[i].length + 3;
		console.log(navArray[i].indexOf(" "));
		if(navArray[i].indexOf(" ") == -1){
			sumDiv[i]=len;
			total += len;
		}else{
			sumDiv[i]=len+1;
			total += len;
		}		
	};		
	console.log(sumDiv);
	console.log(total);	
}*/

function NavController($scope){
	var navList = document.getElementById("navi").childNodes,
	navLinks = [],
	sumDiv = [],
	total = 0,
	textSize = function(m){
				 /*navLinks[index].innerHTML.css('font-size', document.getElementById("fitMe").style.fontSize);*/
				 navLinks[m].style.fontSize = document.getElementById("fitMe").style.fontSize;
				 console.log(navLinks[m].style.fontSize);
				 
				 
				 };
	console.log(document.getElementById("fitMe").style.fontSize);
	console.log(navList);
	for(i=0, j=navList.length;i<j;i++){
		navLinks[i]=navList[i].lastChild;
	}
	console.log(navLinks);
	for(k=0, l=navLinks.length;k<l;k++){
		var len = navLinks[k].innerHTML.length + 3;
		if(navLinks[k].innerHTML.lastIndexOf(" ") == 1){
			sumDiv[k]=len;
			total += len;
		}else{
			sumDiv[k]=len+1;
			total += len;
		}
		 
	}
	console.log(sumDiv);
	console.log(total);	
	
	for(m=0, n=sumDiv.length;m<n;m++){
		navList[m].style.width = (sumDiv[m]/total)*97 + "%";
		if(m != 1){
			/*console.log(navLinks[m].innerHTML.css('font-size', document.getElementById("fitMe").style.fontSize));
			 = document.getElementById("fitMe").style.fontSize;*/
			 textSize(m);
		}	
	}
	
	
}